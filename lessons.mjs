// Single working source for practice text, explanations, dates and generated audio.
export const course = {
  "id": "english-memorise-2026-10-15",
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
      "weekend": "ExM原理的口头介绍"
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
      "subtitle": "今天两句：一句日常，一句科研。读懂、读顺，再遮住英文背。",
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
          "scene": "简要介绍ExM的思路；这句话也会出现在周末段落里。",
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
      "subtitle": "先回背上次最多两句，再学今天两句；忙时只背一句。",
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
          "explanation": "allow someone to do something：使某人能够做某事。本句也会出现在周末段落里。",
          "replacements": [],
          "audio": "fri-research.m4a"
        }
      ]
    },
    {
      "id": "weekend",
      "date": "2026-10-17",
      "label": "周末",
      "dateLabel": "10.17–18",
      "title": "两天，共同背这一段",
      "subtitle": "周六前半段；周日后半段，再接成整段。周末不额外增加每日两句。",
      "reviewIds": [],
      "items": [],
      "paragraph": {
        "id": "weekend-full",
        "title": "Expansion microscopy",
        "en": "In this paper, the researchers introduce a method called expansion microscopy. The main idea is to expand the sample before imaging it. They build a polymer network inside fixed samples and anchor specially designed fluorescent labels to it. After digestion, the gel takes up water, expands, and moves the labels farther apart. This allows us to see details that are normally too close together. The researchers demonstrated the method in cultured cells and mouse brain tissue. They reported an effective lateral resolution of about seventy nanometres under their imaging conditions. The key point is that they improved effective resolution by expanding the sample, rather than upgrading the microscope itself.",
        "zh": "这篇论文介绍了一种叫作膨胀显微术的方法。核心思路是在成像前将样本膨胀。研究者在固定样本内部建立聚合物网络，并将特制的荧光标记锚定到网络上。消化后，凝胶吸水膨胀，将这些标记拉得更远。这样就能看清那些通常因距离太近而难以分辨的细节。研究者在培养细胞和小鼠脑组织中展示了该方法。在他们的成像条件下，报道的有效横向分辨率约为70纳米。关键在于：他们通过膨胀样本来提高有效分辨率，而不是升级显微镜本身。",
        "audio": "weekend-full.m4a",
        "note": "依据Chen、Tillberg与Boyden（2015）的口语改写，非摘要原文；描述作者研究，非你的实验结果。",
        "keywords": [
          "introduce ExM",
          "polymer network",
          "anchor labels",
          "digestion and water",
          "effective resolution"
        ],
        "source": {
          "title": "Chen, Tillberg & Boyden · Science (2015)",
          "doi": "10.1126/science.1260088",
          "url": "https://doi.org/10.1126/science.1260088",
          "fullText": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4312537/",
          "checked": "2026-10-15"
        },
        "scienceNotes": "这里概述2015年原版ExM：特制标记锚定、成胶、消化后在水中膨胀。约70 nm是该论文成像与膨胀条件下的有效横向分辨率，不是所有ExM样本的保证，也不是显微镜自身的光学分辨率发生改变。",
        "chunks": [
          {
            "id": "weekend-1",
            "category": "周六 · 前半段",
            "en": "In this paper, the researchers introduce a method called expansion microscopy. The main idea is to expand the sample before imaging it. They build a polymer network inside fixed samples and anchor specially designed fluorescent labels to it. After digestion, the gel takes up water, expands, and moves the labels farther apart.",
            "zh": "这篇论文介绍了一种叫作膨胀显微术的方法。核心思路是在成像前将样本膨胀。研究者在固定样本内部建立聚合物网络，并将特制的荧光标记锚定到网络上。消化后，凝胶吸水膨胀，将这些标记拉得更远。",
            "audio": "weekend-1.m4a"
          },
          {
            "id": "weekend-2",
            "category": "周日 · 后半段",
            "en": "This allows us to see details that are normally too close together. The researchers demonstrated the method in cultured cells and mouse brain tissue. They reported an effective lateral resolution of about seventy nanometres under their imaging conditions. The key point is that they improved effective resolution by expanding the sample, rather than upgrading the microscope itself.",
            "zh": "这样就能看清那些通常因距离太近而难以分辨的细节。研究者在培养细胞和小鼠脑组织中展示了该方法。在他们的成像条件下，报道的有效横向分辨率约为70纳米。关键在于：他们通过膨胀样本来提高有效分辨率，而不是升级显微镜本身。",
            "audio": "weekend-2.m4a"
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

export function audioItems() {
  return course.lessons.flatMap(lesson => lesson.paragraph
    ? [lesson.paragraph, ...lesson.paragraph.chunks]
    : lesson.items);
}
