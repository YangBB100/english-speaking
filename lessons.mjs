// Single working source for practice text, explanations, dates and generated audio.
const previousCourse = {
  "id": "english-chinese-first-2026-10-16",
  "title": "Two sentences",
  "week": "2026.10.15 — 10.18",
  "voice": "Ava (Enhanced)",
  "voiceLanguage": "en-US",
  "voiceRate": 175,
  "maxReview": 2,
  "plan": [
    {
      "week": "第1轮",
      "title": "交代情况、说明问题、提出下一步",
      "weekend": "当周精读论文的背景与主旨（本周hiHomoExM）"
    },
    {
      "week": "第2轮",
      "title": "描述经历、汇报进展、说明结果",
      "weekend": "当周已经读懂的摘要或图的讲解"
    },
    {
      "week": "第3轮",
      "title": "比较、解释原因、表达不确定性",
      "weekend": "研究问题—方法—发现的论文介绍"
    },
    {
      "week": "第4轮",
      "title": "表达看法、提出建议、讨论计划",
      "weekend": "自己的研究介绍，或继续背熟有用的摘要"
    }
  ],
  "lessons": [
    {
      "id": "thursday",
      "date": "2026-10-15",
      "label": "周四",
      "dateLabel": "10.15",
      "title": "请教怎么做，说明核心思路",
      "subtitle": "今天两句：一句日常，一句科研。看中文先自己说，再点开英文参考。",
      "reviewIds": [],
      "items": [
        {
          "id": "thu-everyday",
          "category": "日常交流",
          "en": "Could you show me how to use this machine?",
          "zh": "你能教我怎么用这台机器吗？",
          "scene": "请别人演示一个你还不熟悉的操作。",
          "focus": [
            "Could you show me how to"
          ],
          "chunk": "Could you show me how to …?",
          "chunkZh": "你能教我怎么……吗？",
          "explanation": "how to 后面接动词原形。把“请你教我怎么做”整块记住。",
          "replacements": [
            "use this machine → book a room"
          ],
          "audio": "thu-everyday.m4a"
        },
        {
          "id": "thu-research",
          "category": "科研交流",
          "en": "The main idea is to expand the sample before imaging it.",
          "zh": "核心思路是在成像前将样本膨胀。",
          "scene": "简要介绍ExM的核心思路。",
          "focus": [
            "The main idea is to"
          ],
          "chunk": "The main idea is to …",
          "chunkZh": "核心思路是……。",
          "explanation": "用 to 加动词说明主要做法；这里的 it 指前面的 sample。",
          "replacements": [],
          "audio": "thu-research.m4a"
        }
      ]
    },
    {
      "id": "friday",
      "date": "2026-10-16",
      "label": "周五",
      "dateLabel": "10.16",
      "title": "说出偏好，解释能做到什么",
      "subtitle": "看中文，先试着用英文说；再点开参考。今天仍只练两句，忙时一句。",
      "reviewIds": [
        "thu-everyday",
        "thu-research"
      ],
      "items": [
        {
          "id": "fri-everyday",
          "category": "日常交流",
          "en": "I'd rather go somewhere quiet so we can have a proper chat.",
          "zh": "我更想去个安静的地方，这样我们能好好聊聊。",
          "scene": "选择见面地点时，说明自己的偏好和原因。",
          "focus": [
            "I'd rather go somewhere quiet"
          ],
          "chunk": "I'd rather … so we can …",
          "chunkZh": "我更想……，这样我们可以……。",
          "explanation": "would rather 后面直接接动词原形。proper chat 在这里是“好好聊一聊”。",
          "replacements": [
            "go somewhere quiet → sit outside"
          ],
          "audio": "fri-everyday.m4a"
        },
        {
          "id": "fri-research",
          "category": "科研交流",
          "en": "This allows us to see details that are normally too close together.",
          "zh": "这样我们就能看清那些通常因距离太近而难以分辨的细节。",
          "scene": "解释物理膨胀带来的成像帮助；this 承接前面的膨胀和标记分离。",
          "focus": [
            "This allows us to"
          ],
          "chunk": "This allows us to …",
          "chunkZh": "这样我们就能……。",
          "explanation": "allow someone to do something：使某人能够做某事。",
          "replacements": [],
          "audio": "fri-research.m4a"
        }
      ]
    },
    {
      "id": "weekend",
      "date": "2026-10-17",
      "endDate": "2026-10-18",
      "label": "周末",
      "dateLabel": "10.17–18",
      "title": "hiHomo：放大多少，也要看结构是否保留",
      "subtitle": "本周精读论文的背景与主旨。周六前半，周日后半；看中文回背，英文按需展开。",
      "reviewIds": [],
      "items": [],
      "paragraph": {
        "id": "hihomo-full",
        "title": "hiHomoExM · 背景与主要思路",
        "en": "This paper asks a simple question: can we make a sample much larger without changing its shape? Expansion microscopy helps us see small structures by physically expanding a sample. However, a large expansion factor alone does not tell us whether the expansion is uniform. The researchers developed a method called high-fold homogeneous expansion microscopy. They reported about eight- to nine-fold expansion in a single round and tested structural preservation in centrioles and nuclear pore complexes. The method also supports labeling after expansion. The main point is to check both how much a sample expands and how well its structure is preserved.",
        "zh": "这篇论文提出一个简单的问题：我们能否把样本放大很多，同时不改变它的形状？膨胀显微术通过物理膨胀样本，帮助我们看清微小结构。但是，仅凭膨胀倍数很大，并不能判断膨胀是否均匀。研究者开发了一种称为高倍均匀膨胀显微术的方法。他们报告，这种方法能在单轮中实现约8–9倍膨胀，并在中心粒和核孔复合物中检验了结构保留情况。该方法也支持膨胀后标记。核心要点是：既要检查样本膨胀了多少，也要检查它的结构保留得怎样。",
        "audio": "hihomo-full.m4a",
        "note": "依据Yang等（2026）摘要与引言整理的口语改写，不是摘要原文；描述作者研究，不是你的实验结果。",
        "keywords": [
          "研究问题",
          "膨胀不等于均匀",
          "单轮8–9倍",
          "结构保留验证",
          "膨胀后标记"
        ],
        "source": {
          "title": "Yang等 · ACS Nano (2026) · High-fold Homogeneous Expansion Microscopy Reveals Ultrastructural Centrioles",
          "doi": "10.1021/acsnano.6c05501",
          "url": "https://doi.org/10.1021/acsnano.6c05501",
          "fullText": "https://pubs.acs.org/doi/10.1021/acsnano.6c05501",
          "license": "CC BY 4.0",
          "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
          "checked": "2026-10-16"
        },
        "scienceNotes": "本段只取原文摘要与引言的背景和主要思路。8–9倍是作者报告的单轮膨胀；结构保留须结合原文验证，不等于所有样本都完全无形变。原文约2 nm的表述涉及与dSTORM结合的条件，不能当作普通单轮膨胀的分辨率。原文为CC BY 4.0，本段为明确标注的口语改写。",
        "chunks": [
          {
            "id": "hihomo-1",
            "category": "周六 · 前半段",
            "en": "This paper asks a simple question: can we make a sample much larger without changing its shape? Expansion microscopy helps us see small structures by physically expanding a sample. However, a large expansion factor alone does not tell us whether the expansion is uniform.",
            "zh": "这篇论文提出一个简单的问题：我们能否把样本放大很多，同时不改变它的形状？膨胀显微术通过物理膨胀样本，帮助我们看清微小结构。但是，仅凭膨胀倍数很大，并不能判断膨胀是否均匀。",
            "audio": "hihomo-1.m4a"
          },
          {
            "id": "hihomo-2",
            "category": "周日 · 后半段",
            "en": "The researchers developed a method called high-fold homogeneous expansion microscopy. They reported about eight- to nine-fold expansion in a single round and tested structural preservation in centrioles and nuclear pore complexes. The method also supports labeling after expansion. The main point is to check both how much a sample expands and how well its structure is preserved.",
            "zh": "研究者开发了一种称为高倍均匀膨胀显微术的方法。他们报告，这种方法能在单轮中实现约8–9倍膨胀，并在中心粒和核孔复合物中检验了结构保留情况。该方法也支持膨胀后标记。核心要点是：既要检查样本膨胀了多少，也要检查它的结构保留得怎样。",
            "audio": "hihomo-2.m4a"
          }
        ]
      }
    },
    {
      "id": "next-monday",
      "date": "2026-10-19",
      "label": "下周一",
      "dateLabel": "10.19",
      "optional": true,
      "title": "交代安排，说明正在解决的问题",
      "subtitle": "这是表中周一的两句，放到下周使用；不补过去的日期。",
      "reviewIds": [
        "fri-everyday",
        "fri-research"
      ],
      "items": [
        {
          "id": "mon-everyday",
          "category": "日常交流",
          "en": "Let me check my schedule and get back to you.",
          "zh": "我先看一下安排，再回复你。",
          "scene": "还不能马上答应邀约或确定时间时。",
          "focus": [
            "Let me check",
            "and get back to you"
          ],
          "chunk": "Let me check … and get back to you.",
          "chunkZh": "我先确认……，再回复你。",
          "explanation": "get back to someone 在这里是“之后回复某人”，不表示回到某个地方。",
          "replacements": [
            "my schedule → the details"
          ],
          "audio": "mon-everyday.m4a"
        },
        {
          "id": "mon-research",
          "category": "科研交流",
          "en": "I'm trying to understand why these samples look so different.",
          "zh": "我正在弄清楚为什么这些样本看起来差别这么大。",
          "scene": "情境例句：说明自己正在调查的一个差异；实际使用时换成真实情况。",
          "focus": [
            "I'm trying to understand why"
          ],
          "chunk": "I'm trying to understand why …",
          "chunkZh": "我正在弄清楚为什么……。",
          "explanation": "why 后面用正常陈述语序；这句话说明还在调查，不声称已经找到原因。",
          "replacements": [
            "these samples look so different → the signal is weak"
          ],
          "audio": "mon-research.m4a"
        }
      ]
    },
    {
      "id": "next-tuesday",
      "date": "2026-10-20",
      "label": "下周二",
      "dateLabel": "10.20",
      "optional": true,
      "title": "描述经历，交代尝试后的结果",
      "subtitle": "回背上次最多两句即可；旧句不熟时可替换一个新句名额。",
      "reviewIds": [
        "mon-everyday",
        "mon-research"
      ],
      "items": [
        {
          "id": "tue-everyday",
          "category": "日常交流",
          "en": "It took longer than I expected, so I got back late.",
          "zh": "花的时间比我预计的长，所以我回来晚了。",
          "scene": "情境例句：解释一件事情为什么比预期晚结束。",
          "focus": [
            "took longer than I expected"
          ],
          "chunk": "It took longer than I expected, so …",
          "chunkZh": "花的时间比我预计的长，所以……。",
          "explanation": "took 是 take 的过去式；这句里的 got back 是“回来”，与周一的 get back to you 含义不同。",
          "replacements": [
            "I got back late → I missed the bus"
          ],
          "audio": "tue-everyday.m4a"
        },
        {
          "id": "tue-research",
          "category": "科研交流",
          "en": "I changed one step, but the result was still the same.",
          "zh": "我改了一个步骤，但结果还是一样。",
          "scene": "情境例句：只在实际确实改过步骤、得到该结果时使用。",
          "focus": [
            "but the result was still the same"
          ],
          "chunk": "I changed …, but the result was still the same.",
          "chunkZh": "我改了……，但结果还是一样。",
          "explanation": "用过去式交代做过的事；but 后面说明结果没有随之改变。",
          "replacements": [
            "one step → the timing"
          ],
          "audio": "tue-research.m4a"
        }
      ]
    },
    {
      "id": "next-wednesday",
      "date": "2026-10-21",
      "label": "下周三",
      "dateLabel": "10.21",
      "optional": true,
      "title": "表达不确定，提出需要检查的事",
      "subtitle": "把一个能真正用上的完整表达背熟就有价值，不追赶数量。",
      "reviewIds": [
        "tue-everyday",
        "tue-research"
      ],
      "items": [
        {
          "id": "wed-everyday",
          "category": "日常交流",
          "en": "I'm not sure yet, but I'll let you know tomorrow.",
          "zh": "我还不确定，不过明天会告诉你。",
          "scene": "情境例句：确实打算明天回复时，给对方一个明确预期。",
          "focus": [
            "I'm not sure yet, but I'll let you know"
          ],
          "chunk": "I'm not sure yet, but I'll let you know …",
          "chunkZh": "我还不确定，不过我会在……告诉你。",
          "explanation": "yet 表示“目前还”；let you know 是自然的“告诉你／通知你”。",
          "replacements": [
            "tomorrow → later today"
          ],
          "audio": "wed-everyday.m4a"
        },
        {
          "id": "wed-research",
          "category": "科研交流",
          "en": "We need to check whether the difference is due to sample preparation.",
          "zh": "我们需要检查一下，这个差异是否由样本制备造成。",
          "scene": "情境例句：提出待检验的可能原因，不把它说成已确定的解释。",
          "focus": [
            "We need to check whether"
          ],
          "chunk": "We need to check whether …",
          "chunkZh": "我们需要检查是否……。",
          "explanation": "whether 引出“是否”；be due to 表示“由……造成”，这里仍是待检查的可能原因。",
          "replacements": [
            "sample preparation → the imaging settings"
          ],
          "audio": "wed-research.m4a"
        }
      ]
    }
  ]
};

// New material starts on 24 October; previous lessons remain available in the archive.
function day(date, research, everyday) {
  const label = new Intl.DateTimeFormat('zh-CN', { weekday: 'short', timeZone: 'Asia/Hong_Kong' }).format(new Date(`${date}T12:00:00+08:00`));
  return {
    id: date, date, label, dateLabel: date.slice(5).replace('-', '.'), reviewIds: [],
    items: [research, everyday].map(([en, zh, phrase, explanation], index) => ({
      id: `${date}-${index === 0 ? 'research' : 'everyday'}`,
      category: index === 0 ? '科研交流' : '日常交流',
      en, zh, focus: [phrase], explanation,
      audio: `${date}-${index === 0 ? 'research' : 'everyday'}.m4a`
    }))
  };
}

export const course = {
  id: 'english-daily-2026-10-24', title: '每天两句',
  week: '2026.10.24 — 11.06', startDate: '2026-10-24', endDate: '2026-11-06',
  voice: previousCourse.voice, voiceLanguage: previousCourse.voiceLanguage,
  voiceRate: previousCourse.voiceRate, maxReview: 0,
  lessons: [
    day('2026-10-24',
      ['Could we go over this result together?', '我们能一起看一下这个结果吗？', 'go over', 'go over：一起仔细看看、讨论一下，适合向导师请教。'],
      ['Do you have time for a quick coffee?', '你有空一起喝杯咖啡吗？', 'have time for', 'have time for …：有时间做某事；a quick coffee 是轻松、简短的邀约。']),
    day('2026-10-25',
      ["I'm still working on the analysis, so I don't have a clear answer yet.", '我还在做分析，所以目前还没有明确的答案。', 'working on', 'work on：正在做、处理；not … yet 表示目前还没有。'],
      ["I'm running a little late, but I'll be there in ten minutes.", '我会稍微晚一点，不过十分钟后就到。', 'running a little late', 'run late：比原定时间晚；in ten minutes 是十分钟之后。']),
    day('2026-10-26',
      ['The signal is weaker than I expected.', '信号比我预想的弱。', 'than I expected', 'than I expected：比我原先预想的……；weaker 是 weak 的比较级。'],
      ['It was quieter than I expected, so I stayed a little longer.', '那里比我预想的安静，所以我多待了一会儿。', 'than I expected', '复现同一个比较句架：quieter than I expected；用过去式描述已经发生的事。']),
    day('2026-10-27',
      ["I'm not sure whether this difference is caused by the staining.", '我不确定这个差异是不是染色造成的。', "I'm not sure whether", 'whether 引出“是否”；这句话表达待核实的原因。'],
      ["I'm not sure whether this place is open on Sundays.", '我不确定这个地方周日开不开门。', "I'm not sure whether", '同一个句架可以用来问营业时间；on Sundays 表示每逢周日。']),
    day('2026-10-28',
      ['Could you explain what this part of the figure means?', '你能解释一下图里的这一部分是什么意思吗？', 'Could you explain', 'what this part … means 用陈述语序，不用 what does this part mean。'],
      ['Could you tell me where I should get off?', '你能告诉我应该在哪一站下车吗？', 'Could you tell me', 'where I should get off 同样用陈述语序；get off 表示下车。']),
    day('2026-10-29',
      ["I'll check the original data before drawing a conclusion.", '我会先检查原始数据，再下结论。', 'before drawing a conclusion', 'before 后接动词时可用 -ing；draw a conclusion 是“得出结论”。'],
      ["I'll check my calendar and get back to you this afternoon.", '我看一下日程，今天下午再回复你。', 'get back to you', 'get back to you：之后再回复你；复现之前学过的表达。']),
    day('2026-10-30',
      ['The next step is to repeat the experiment under the same conditions.', '下一步是在相同条件下重复这个实验。', 'The next step is to', 'The next step is to + 动词原形，用一句话交代下一步。'],
      ['Would you like to grab something to eat after work?', '下班后要不要一起吃点东西？', 'grab something to eat', 'grab something to eat 是口语里轻松的“吃点东西”。']),
    day('2026-10-31',
      ['Could we go over the plan before I start the experiment?', '我开始实验前，我们能一起过一遍计划吗？', 'go over', '复现 go over：这次把讨论对象从 result 换成 plan。'],
      ['Do you have time to help me with something?', '你有空帮我个忙吗？', 'have time to', 'have time to + 动词；与 have time for + 名词搭配区分。']),
    day('2026-11-01',
      ["I've finished preparing the samples, but I haven't imaged them yet.", '我已经准备好样本了，但还没有给它们成像。', "I haven't imaged them yet", 'have finished / have not … yet：已经完成一部分，另一部分还没做。'],
      ["I've been meaning to try this restaurant for a while.", '我想试试这家餐厅已经有一阵子了。', "I've been meaning to", 'I have been meaning to …：一直有这个打算，但还没做。']),
    day('2026-11-02',
      ['This method seems promising, but we need more evidence.', '这个方法看起来有前景，不过我们还需要更多证据。', 'seems promising', 'seems 保留判断余地；promising 表示有前景、有希望。'],
      ["That sounds good, but I'd prefer somewhere closer.", '听起来不错，不过我更想选个近一点的地方。', "I'd prefer", 'I would prefer …：我会更倾向于……，适合温和地表达偏好。']),
    day('2026-11-03',
      ['We need to check whether the imaging settings were the same.', '我们需要检查一下，当时的成像设置是不是相同。', 'check whether', '复现 check whether；were 指之前采集图像时的设置。'],
      ['Let me check whether I left my umbrella in the office.', '我确认一下是不是把伞落在办公室了。', 'check whether', '同一个“确认是否”句架；left 是 leave 的过去式。']),
    day('2026-11-04',
      ['Would it help to compare these samples side by side?', '把这些样本放在一起比较，会有帮助吗？', 'Would it help to', 'Would it help to …? 用来提出一个可能有用的做法；side by side 是并排比较。'],
      ['Would it be okay if we met half an hour later?', '我们晚半小时见面可以吗？', 'Would it be okay if', '礼貌提出调整；这里 met 的过去式用于委婉假设。']),
    day('2026-11-05',
      ['As far as I understand, the two methods use different labeling strategies.', '据我理解，这两种方法使用了不同的标记策略。', 'As far as I understand', 'As far as I understand：据我目前的理解；给自己的判断保留边界。'],
      ['As far as I know, the last bus leaves at midnight.', '据我所知，末班车在午夜发车。', 'As far as I know', 'As far as I know：据我所知。实际使用时换成已确认的班次时间。']),
    day('2026-11-06',
      ["I'd like to focus on one question at a time.", '我想一次集中解决一个问题。', 'one question at a time', 'one … at a time：一次一个……；focus on 表示专注于。'],
      ["I haven't decided yet, but I'm leaning towards staying in.", '我还没决定，不过更倾向于待在家里。', "I'm leaning towards", 'lean towards + 名词或 -ing：更倾向于；stay in 表示待在家里。'])
  ],
  archive: previousCourse.lessons
};

export function hongKongDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Hong_Kong', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now);
  return ['year', 'month', 'day'].map(type => parts.find(part => part.type === type).value).join('-');
}

export function lessonForDate(date) {
  return course.lessons.find(lesson => lesson.date === date) || (date < course.startDate ? course.lessons[0] : course.lessons.at(-1));
}

export function audioItems() {
  return [...course.lessons, ...course.archive].flatMap(lesson => lesson.paragraph
    ? [lesson.paragraph, ...lesson.paragraph.chunks]
    : lesson.items);
}
