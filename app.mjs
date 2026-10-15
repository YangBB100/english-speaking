import { course, audioItems } from './lessons.mjs?v=memorise-20261015';

const $ = selector => document.querySelector(selector);
const audio = $('#audio');
const allItems = new Map(audioItems().map(item => [item.id, item]));
const rates = [1, 0.85, 1.15];
let rateIndex = 0;
let selected;
let activeId = null;
let queue = [];
let repeating = false;
let playRequest = 0;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
function englishBlock(text, focus = []) {
  let content = escapeHtml(text);
  for (const phrase of focus) content = content.replace(escapeHtml(phrase), `<strong>${escapeHtml(phrase)}</strong>`);
  return `<div class="english-wrap"><p class="english" lang="en">${content}</p><span class="hidden-prompt" role="button" tabindex="0" aria-label="显示英文">试着背出来 · 点此显示</span></div>`;
}
function playButton(item, label = '听发音') {
  return `<button class="play-button" type="button" data-play="${item.id}" aria-label="${escapeHtml(label)}：${escapeHtml(item.category || item.title || '当前练习')}" aria-pressed="false"><span class="play-symbol" aria-hidden="true">▶</span><span>${label}</span></button>`;
}
function download(item) {
  return `<a class="download" href="${audioUrl(item)}" download="${item.audio}" aria-label="下载${escapeHtml(item.category || item.title || '这段')}音频">下载音频 ↗</a>`;
}
function audioUrl(item) { return `./audio/${item.audio}?v=${encodeURIComponent(course.id)}`; }
function sentence(item, index, isChunk = false) {
  return `<article class="sentence ${isChunk ? 'chunk-sentence' : ''}" data-sentence="${item.id}">
    <div class="sentence-header"><span class="sentence-category"><span class="sentence-number">${String(index + 1).padStart(2, '0')}</span>${escapeHtml(item.category)}</span>${playButton(item, isChunk ? '听这段' : '听一句')}</div>
    ${englishBlock(item.en, item.focus)}<p class="chinese">${escapeHtml(item.zh)}</p>
    ${item.scene ? `<p class="scene">什么时候用 · ${escapeHtml(item.scene)}</p>` : ''}
    <div class="sentence-tools">${item.chunk ? `<details class="reuse"><summary>值得记住的表达</summary><div class="reuse-content"><p class="chunk" lang="en">${escapeHtml(item.chunk)}</p><p class="chunk-zh">${escapeHtml(item.chunkZh)}</p><p class="reuse-prompt">${escapeHtml(item.explanation)}</p>${item.replacements.length ? `<p class="chunk-zh">可选替换，不是额外任务：</p>${item.replacements.map(text => `<p class="replacement" lang="en">${escapeHtml(text)}</p>`).join('')}` : ''}</div></details>` : '<span></span>'}${download(item)}</div>
  </article>`;
}
function renderReview(lesson) {
  const items = (lesson.reviewIds || []).slice(0, course.maxReview).map(id => allItems.get(id)).filter(Boolean);
  $('#review-content').innerHTML = items.length ? `<details class="review"><summary>回顾上次 · 最多两句 <span>没学过可跳过 ＋</span></summary><p class="review-note">先尝试回背；卡住就看一眼再说。复习费劲时，可替换一个新句名额。</p>${items.map((item, index) => sentence(item, index, true)).join('')}</details>` : '';
}
function renderNav() {
  for (const [selector, optional] of [['#week-nav', false], ['#next-nav', true]]) {
    $(selector).innerHTML = course.lessons.filter(lesson => !!lesson.optional === optional).map(lesson => `<button class="day-button" type="button" data-lesson="${lesson.id}"${selected?.id === lesson.id ? ' aria-current="page"' : ''}>${lesson.label}<span>${lesson.dateLabel}</span></button>`).join('');
  }
}
function stopPlayback() {
  playRequest += 1;
  queue = [];
  audio.pause();
  audio.loop = false;
  activeId = null;
  if ('mediaSession' in navigator) navigator.mediaSession.metadata = null;
  document.body.classList.remove('is-playing');
  updatePlayButtons();
}
function showLesson(id, updateHash = true) {
  const lesson = course.lessons.find(item => item.id === id) || course.lessons[0];
  if (selected?.id === lesson.id) return;
  stopPlayback();
  selected = lesson;
  renderNav();
  $('#lesson-date').textContent = `${lesson.dateLabel} · ${lesson.label}`;
  $('#lesson-eyebrow').textContent = lesson.paragraph ? 'ONE PASSAGE, TWO DAYS' : "TODAY'S TWO SENTENCES";
  $('#lesson-title').textContent = lesson.title;
  $('#lesson-subtitle').textContent = lesson.subtitle;
  $('#play-all').innerHTML = `<span aria-hidden="true">▶</span> ${lesson.paragraph ? '整段发音参考' : '两句发音参考'}`;
  $('#now-playing').textContent = '需要时，点一句听发音';
  $('#audio-status').textContent = '';
  audio.removeAttribute('src');
  audio.load();
  renderReview(lesson);
  if (lesson.paragraph) {
    const p = lesson.paragraph;
    const words = p.en.trim().split(/\s+/).length;
    $('#lesson-content').innerHTML = `<section class="full-passage" data-sentence="${p.id}"><div class="sentence-header"><h2 class="passage-title" lang="en">${escapeHtml(p.title)}<span class="word-count">${words}词 · 两天同一段</span></h2>${playButton(p, '听整段')}</div>${englishBlock(p.en)}<p class="chinese">${escapeHtml(p.zh)}</p><p class="passage-note">${escapeHtml(p.note)}</p><div class="sentence-tools"><details class="reuse"><summary>背诵线索与出处</summary><p class="keywords" lang="en">${p.keywords.map(escapeHtml).join(' · ')}</p><p class="reuse-prompt">脱稿把意思讲完整，关键术语和事实准确即可，不要求每次一字不差。</p><p class="passage-note">${escapeHtml(p.scienceNotes)}</p><p class="source-link"><a href="${p.source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.source.title)}</a> · <a href="${p.source.fullText}" target="_blank" rel="noopener noreferrer">原文</a></p></details>${download(p)}</div></section><h2 class="section-title">同一段分两半背：周六前半，周日后半，再接起来。</h2>${p.chunks.map((item, i) => sentence(item, i, true)).join('')}`;
  } else {
    $('#lesson-content').innerHTML = lesson.items.map((item, i) => sentence(item, i)).join('');
  }
  $('#lesson-content').classList.remove('lesson-enter');
  void $('#lesson-content').offsetWidth;
  $('#lesson-content').classList.add('lesson-enter');
  if (lesson.optional) $('.next-days').open = true;
  if (updateHash && location.hash !== `#${lesson.id}`) history.replaceState(null, '', `#${lesson.id}`);
  try { localStorage.setItem('two-sentences:last-viewed', lesson.id); } catch { /* Private browsing can restrict storage. */ }
}
function updatePlayButtons() {
  for (const button of document.querySelectorAll('[data-play]')) {
    const playing = button.dataset.play === activeId && !audio.paused;
    button.setAttribute('aria-pressed', String(playing));
    button.querySelector('.play-symbol').textContent = playing ? 'Ⅱ' : '▶';
  }
}
function updateNowPlaying() {
  const item = allItems.get(activeId);
  if (!item) return;
  const hidden = document.body.classList.contains('english-hidden');
  const title = hidden ? `正在练习 · ${item.category || '周末短文'}` : item.en;
  $('#now-playing').textContent = title;
  if ('mediaSession' in navigator && 'MediaMetadata' in window) {
    navigator.mediaSession.metadata = new MediaMetadata({ title, artist: 'Two sentences · Ava Enhanced', album: course.week });
  }
}
async function playItem(id, continueQueue = false) {
  const item = allItems.get(id);
  if (!item) return;
  const request = ++playRequest;
  if (!continueQueue) queue = [];
  $('#audio-status').textContent = '';
  if (id === activeId && !continueQueue && !audio.paused) { audio.pause(); return; }
  if (id !== activeId || audio.ended) {
    audio.src = audioUrl(item);
    activeId = id;
  }
  audio.loop = repeating;
  audio.playbackRate = rates[rateIndex];
  audio.preservesPitch = true;
  updateNowPlaying();
  try {
    await audio.play();
    if (request !== playRequest) return;
    updatePlayButtons();
  } catch (error) {
    if (request !== playRequest || error.name === 'AbortError') return;
    $('#audio-status').textContent = '未能开始播放。请再点一次，或使用下方原生播放键／下载音频。';
  }
}
document.addEventListener('click', event => {
  const day = event.target.closest('[data-lesson]');
  if (day) showLesson(day.dataset.lesson);
  const play = event.target.closest('[data-play]');
  if (play) void playItem(play.dataset.play);
  if (event.target.closest('.hidden-prompt')) setEnglishHidden(false);
});
document.addEventListener('keydown', event => {
  if (event.target.matches('.hidden-prompt') && ['Enter', ' '].includes(event.key)) { event.preventDefault(); setEnglishHidden(false); }
});
function setEnglishHidden(hidden) {
  document.body.classList.toggle('english-hidden', hidden);
  const button = $('#hide-english');
  button.setAttribute('aria-pressed', String(hidden));
  button.innerHTML = `<span aria-hidden="true">◉</span> ${hidden ? '显示英文' : '遮住英文'}`;
  updateNowPlaying();
}
$('#hide-english').addEventListener('click', () => setEnglishHidden(!document.body.classList.contains('english-hidden')));
$('#hide-chinese').addEventListener('click', () => {
  const hidden = document.body.classList.toggle('chinese-hidden');
  $('#hide-chinese').setAttribute('aria-pressed', String(hidden));
  $('#hide-chinese').textContent = hidden ? '显示中文' : '隐藏中文';
});
$('#play-all').addEventListener('click', () => {
  const items = selected.paragraph ? [selected.paragraph] : selected.items;
  queue = items.map(item => item.id);
  if (repeating) { repeating = false; $('#repeat').setAttribute('aria-pressed', 'false'); }
  const first = queue.shift();
  void playItem(first, true);
});
$('#speed').addEventListener('click', () => {
  rateIndex = (rateIndex + 1) % rates.length;
  const rate = rates[rateIndex];
  audio.playbackRate = rate;
  $('#speed').textContent = `${rate}×`;
  $('#speed').setAttribute('aria-label', `播放速度 ${rate} 倍`);
});
$('#repeat').addEventListener('click', () => {
  repeating = !repeating;
  audio.loop = repeating;
  queue = [];
  $('#repeat').setAttribute('aria-pressed', String(repeating));
});
audio.addEventListener('play', () => { document.body.classList.add('is-playing'); updatePlayButtons(); });
audio.addEventListener('pause', () => { document.body.classList.remove('is-playing'); updatePlayButtons(); });
audio.addEventListener('ended', () => {
  document.body.classList.remove('is-playing');
  updatePlayButtons();
  const next = queue.shift();
  if (next) void playItem(next, true);
});
audio.addEventListener('error', () => {
  if (!audio.getAttribute('src')) return;
  queue = [];
  $('#audio-status').textContent = '音频暂时无法加载。请检查网络、重新点按，或下载音频后播放。';
  document.body.classList.remove('is-playing');
  updatePlayButtons();
});
window.addEventListener('hashchange', () => {
  const id = location.hash.slice(1);
  if (course.lessons.some(lesson => lesson.id === id)) showLesson(id, false);
});
let saved;
try { saved = localStorage.getItem('two-sentences:last-viewed'); } catch { /* Use first lesson. */ }
$('#course-plan').innerHTML = course.plan.map(item => `<p><strong>${escapeHtml(item.week)} · ${escapeHtml(item.title)}</strong><br>周末：${escapeHtml(item.weekend)}</p>`).join('');
showLesson(location.hash.slice(1) || saved || 'thursday');
