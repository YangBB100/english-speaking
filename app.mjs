import { course, audioItems, hongKongDate, lessonForDate } from './lessons.mjs?v=daily-20261024';

const $ = selector => document.querySelector(selector);
const audio = $('#audio');
const items = new Map(audioItems().map(item => [item.id, item]));
const rates = [1, 0.85, 1.15];
let rateIndex = 0;
let selected;
let activeId = null;
let requestId = 0;
let repeating = false;
let followToday = true;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
function title(item) { return item.category || '以前的短文'; }
function audioUrl(item) { return `./audio/${item.audio}?v=${encodeURIComponent(course.id)}`; }
function sentence(item, index, passage = false) {
  let english = escapeHtml(item.en);
  for (const phrase of item.focus || []) english = english.replace(escapeHtml(phrase), `<strong>${escapeHtml(phrase)}</strong>`);
  return `<article class="sentence${passage ? ' passage' : ''}" data-sentence="${item.id}">
    <p class="category"><span class="number">${String(index + 1).padStart(2, '0')}</span>${escapeHtml(title(item))}</p>
    <p class="chinese">${escapeHtml(item.zh)}</p>
    <div class="sentence-actions"><button class="english-toggle" data-reveal="${item.id}" type="button" aria-expanded="false" aria-controls="english-${item.id}">显示英文 ＋</button><button class="play-button" data-play="${item.id}" type="button" aria-pressed="false" aria-label="听${escapeHtml(title(item))}"><span class="play-symbol" aria-hidden="true">▶</span><span class="play-label">${passage ? '听这段' : '听一句'}</span></button></div>
    <div class="english-panel" id="english-${item.id}" hidden><p class="english" lang="en">${english}</p>${item.explanation ? `<p class="explanation">${escapeHtml(item.explanation)}</p>` : ''}</div>
  </article>`;
}
function updatePlayButtons() {
  for (const button of document.querySelectorAll('[data-play]')) {
    const playing = button.dataset.play === activeId && !audio.paused;
    button.setAttribute('aria-pressed', String(playing));
    button.querySelector('.play-symbol').textContent = playing ? 'Ⅱ' : '▶';
    button.querySelector('.play-label').textContent = playing ? '暂停' : button.dataset.play.startsWith('hihomo') ? '听这段' : '听一句';
  }
}
function stopPlayback() {
  requestId += 1;
  audio.pause();
  activeId = null;
  audio.removeAttribute('src');
  audio.load();
  $('#player').hidden = true;
  $('#audio-status').textContent = '';
  if ('mediaSession' in navigator) navigator.mediaSession.metadata = null;
  updatePlayButtons();
}
function render(lesson, isArchive = false) {
  if (selected?.id !== lesson.id) {
    stopPlayback();
    selected = lesson;
    if (lesson.paragraph) {
      const p = lesson.paragraph;
      $('#lesson-content').innerHTML = `<h2 class="archive-title">${escapeHtml(lesson.title)}</h2>${sentence(p, 0, true)}${p.chunks.map((part, i) => sentence(part, i + 1, true)).join('')}<p class="source-note">${escapeHtml(p.note)} <a href="${escapeHtml(p.source.url)}" target="_blank" rel="noopener noreferrer">论文出处</a> · <a href="${escapeHtml(p.source.licenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.source.license)}</a></p>`;
    } else $('#lesson-content').innerHTML = lesson.items.map((item, i) => sentence(item, i)).join('');
  }
  const index = course.lessons.findIndex(item => item.id === lesson.id);
  $('#previous').disabled = isArchive || index <= 0;
  $('#next').disabled = isArchive || index >= course.lessons.length - 1;
  $('#lesson-date').value = isArchive ? `archive-${lesson.id}` : lesson.id;
  $('#today').textContent = followToday && !isArchive ? '今天' : '回到今天';
  const outOfRange = followToday && hongKongDate() > course.endDate;
  $('#schedule-note').hidden = !outOfRange && !isArchive;
  $('#schedule-note').textContent = isArchive ? '以前的内容 · 可随时回看' : outOfRange ? '这一轮已排到11月6日，可以先回看之前的句子。' : '';
}
function navigate(route) {
  const archive = route.startsWith('archive-') && course.archive.find(lesson => `archive-${lesson.id}` === route);
  const dated = course.lessons.find(lesson => lesson.id === route);
  followToday = !archive && !dated;
  const canonical = followToday ? 'today' : route;
  if (location.hash !== `#${canonical}`) history.replaceState(null, '', `#${canonical}`);
  render(archive || dated || lessonForDate(hongKongDate()), !!archive);
}
async function playItem(id) {
  const item = items.get(id);
  if (!item) return;
  const request = ++requestId;
  if (id === activeId && !audio.paused) { audio.pause(); return; }
  if (id !== activeId || audio.ended) audio.src = audioUrl(item);
  activeId = id;
  audio.playbackRate = rates[rateIndex];
  audio.preservesPitch = true;
  audio.loop = repeating;
  const label = `发音参考 · ${title(item)}`;
  $('#now-playing').textContent = label;
  audio.title = label;
  audio.setAttribute('aria-label', label);
  $('#player').hidden = false;
  $('#audio-status').textContent = '';
  if ('mediaSession' in navigator && 'MediaMetadata' in window) navigator.mediaSession.metadata = new MediaMetadata({ title: label, artist: 'Ava Enhanced', album: '每天两句' });
  try { await audio.play(); if (request === requestId) updatePlayButtons(); }
  catch (error) { if (request === requestId && error.name !== 'AbortError') $('#audio-status').textContent = '请再点一次，或使用下方播放键。'; }
}
$('#lesson-date').innerHTML = `<optgroup label="每天两句">${course.lessons.map(lesson => `<option value="${lesson.id}">${lesson.dateLabel} · ${lesson.label}</option>`).join('')}</optgroup><optgroup label="以前的内容">${course.archive.map(lesson => `<option value="archive-${lesson.id}">${lesson.dateLabel} · ${lesson.paragraph ? 'hiHomo短文' : '旧句子'}</option>`).join('')}</optgroup>`;
$('#archive-links').innerHTML = course.archive.map(lesson => `<a href="#archive-${lesson.id}">${lesson.dateLabel} · ${escapeHtml(lesson.title)}</a>`).join('');
$('#today').addEventListener('click', () => navigate('today'));
$('.skip').addEventListener('click', event => { event.preventDefault(); $('#lesson-content').focus(); });
$('#lesson-date').addEventListener('change', event => navigate(event.target.value));
for (const [id, offset] of [['previous', -1], ['next', 1]]) $(`#${id}`).addEventListener('click', () => {
  const index = course.lessons.findIndex(lesson => lesson.id === selected.id);
  const next = course.lessons[index + offset];
  if (next) navigate(next.id);
});
document.addEventListener('click', event => {
  const reveal = event.target.closest('[data-reveal]');
  if (reveal) {
    const panel = document.getElementById(reveal.getAttribute('aria-controls'));
    panel.hidden = !panel.hidden;
    reveal.setAttribute('aria-expanded', String(!panel.hidden));
    reveal.textContent = panel.hidden ? '显示英文 ＋' : '收起英文 −';
  }
  const play = event.target.closest('[data-play]');
  if (play) void playItem(play.dataset.play);
});
$('#speed').addEventListener('click', () => {
  rateIndex = (rateIndex + 1) % rates.length;
  audio.playbackRate = rates[rateIndex];
  $('#speed').textContent = `${rates[rateIndex]}×`;
  $('#speed').setAttribute('aria-label', `播放速度 ${rates[rateIndex]} 倍`);
});
$('#repeat').addEventListener('click', () => {
  repeating = !repeating;
  audio.loop = repeating;
  $('#repeat').setAttribute('aria-pressed', String(repeating));
});
for (const event of ['play', 'pause', 'ended']) audio.addEventListener(event, updatePlayButtons);
audio.addEventListener('error', () => { if (audio.getAttribute('src')) $('#audio-status').textContent = '音频暂时无法加载，请检查网络后再试。'; updatePlayButtons(); });
window.addEventListener('hashchange', () => navigate(location.hash.slice(1)));
function refreshToday() { if (followToday) navigate('today'); }
window.addEventListener('focus', refreshToday);
document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshToday(); });
setInterval(() => { if (!document.hidden) refreshToday(); }, 60000);
navigate(location.hash.slice(1));
