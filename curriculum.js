"use strict";
const CURRICULUM={
  "version": 3,
  "source": "使用者提供的英文學習表（12 頁）",
  "groups": [
    {
      "id": "people",
      "name": "人物",
      "emoji": "🤝",
      "kind": "word",
      "page": 1,
      "count": 7
    },
    {
      "id": "family",
      "name": "家人",
      "emoji": "🏠",
      "kind": "word",
      "page": 1,
      "count": 6
    },
    {
      "id": "food",
      "name": "食物與飲料",
      "emoji": "🍎",
      "kind": "word",
      "page": 1,
      "count": 16
    },
    {
      "id": "school",
      "name": "學校用品",
      "emoji": "🎒",
      "kind": "word",
      "page": 2,
      "count": 15
    },
    {
      "id": "animals",
      "name": "動物",
      "emoji": "🐱",
      "kind": "word",
      "page": 2,
      "count": 11
    },
    {
      "id": "places",
      "name": "場所與位置",
      "emoji": "🏫",
      "kind": "word",
      "page": 2,
      "count": 7
    },
    {
      "id": "numbers",
      "name": "數字與數量",
      "emoji": "🔢",
      "kind": "word",
      "page": 3,
      "count": 14
    },
    {
      "id": "colors",
      "name": "顏色",
      "emoji": "🎨",
      "kind": "word",
      "page": 3,
      "count": 8
    },
    {
      "id": "house",
      "name": "居家用品",
      "emoji": "🔑",
      "kind": "word",
      "page": 3,
      "count": 3
    },
    {
      "id": "body",
      "name": "身體部位",
      "emoji": "🖐️",
      "kind": "word",
      "page": 3,
      "count": 10
    },
    {
      "id": "adjectives",
      "name": "描述事物",
      "emoji": "📏",
      "kind": "word",
      "page": 4,
      "count": 7
    },
    {
      "id": "weather",
      "name": "天氣與自然",
      "emoji": "☀️",
      "kind": "word",
      "page": 4,
      "count": 11
    },
    {
      "id": "time",
      "name": "時間與星期",
      "emoji": "📅",
      "kind": "word",
      "page": 4,
      "count": 18
    },
    {
      "id": "transport",
      "name": "交通工具",
      "emoji": "🚌",
      "kind": "word",
      "page": 5,
      "count": 3
    },
    {
      "id": "feelings",
      "name": "感受與心情",
      "emoji": "💗",
      "kind": "word",
      "page": 5,
      "count": 8
    },
    {
      "id": "clothing",
      "name": "舞台服裝",
      "emoji": "🧥",
      "kind": "word",
      "page": 5,
      "count": 4
    },
    {
      "id": "countries",
      "name": "地名與國家",
      "emoji": "🌏",
      "kind": "word",
      "page": 5,
      "count": 5
    },
    {
      "id": "hobbies",
      "name": "運動與興趣",
      "emoji": "🥾",
      "kind": "word",
      "page": 5,
      "count": 2
    },
    {
      "id": "subjects",
      "name": "學科",
      "emoji": "🎵",
      "kind": "word",
      "page": 5,
      "count": 5
    },
    {
      "id": "pronouns",
      "name": "人稱與所有格",
      "emoji": "👋",
      "kind": "word",
      "page": 6,
      "count": 9
    },
    {
      "id": "questions",
      "name": "疑問詞",
      "emoji": "❓",
      "kind": "word",
      "page": 6,
      "count": 5
    },
    {
      "id": "auxiliary",
      "name": "Be 與助動詞",
      "emoji": "🧩",
      "kind": "word",
      "page": 6,
      "count": 7
    },
    {
      "id": "determiners",
      "name": "冠詞與指示詞",
      "emoji": "👉",
      "kind": "word",
      "page": 6,
      "count": 7
    },
    {
      "id": "verbs",
      "name": "動作練習",
      "emoji": "💃",
      "kind": "word",
      "page": 7,
      "count": 22
    },
    {
      "id": "prepositions",
      "name": "介系詞",
      "emoji": "📦",
      "kind": "word",
      "page": 7,
      "count": 4
    },
    {
      "id": "other-nouns",
      "name": "其他名詞",
      "emoji": "🪁",
      "kind": "word",
      "page": 7,
      "count": 4
    },
    {
      "id": "adverbs",
      "name": "肯定與否定",
      "emoji": "✅",
      "kind": "word",
      "page": 7,
      "count": 3
    },
    {
      "id": "conjunctions",
      "name": "連接詞",
      "emoji": "🔗",
      "kind": "word",
      "page": 7,
      "count": 4
    },
    {
      "id": "daily-練習室指令",
      "name": "練習室指令",
      "emoji": "💬",
      "kind": "daily",
      "count": 13
    },
    {
      "id": "daily-見面與鼓勵",
      "name": "見面與鼓勵",
      "emoji": "💬",
      "kind": "daily",
      "count": 8
    },
    {
      "id": "daily-一起上課",
      "name": "一起上課",
      "emoji": "💬",
      "kind": "daily",
      "count": 12
    },
    {
      "id": "daily-禮貌與求助",
      "name": "禮貌與求助",
      "emoji": "💬",
      "kind": "daily",
      "count": 8
    },
    {
      "id": "pattern-認識人與物",
      "name": "認識人與物",
      "emoji": "🎙️",
      "kind": "pattern",
      "count": 10
    },
    {
      "id": "pattern-心情喜好與才藝",
      "name": "心情喜好與才藝",
      "emoji": "🎙️",
      "kind": "pattern",
      "count": 11
    },
    {
      "id": "pattern-位置與年齡",
      "name": "位置與年齡",
      "emoji": "🎙️",
      "kind": "pattern",
      "count": 7
    },
    {
      "id": "pattern-時間天氣與數量",
      "name": "時間天氣與數量",
      "emoji": "🎙️",
      "kind": "pattern",
      "count": 9
    }
  ],
  "items": [
    {
      "id": "w-people-0",
      "en": "boy",
      "zh": "男孩",
      "emoji": "👦",
      "source": "單字／人物",
      "page": 1,
      "group": "people",
      "kind": "word",
      "variants": [
        {
          "en": "boy",
          "zh": "男孩"
        }
      ]
    },
    {
      "id": "w-people-1",
      "en": "friend",
      "zh": "朋友",
      "emoji": "🤝",
      "source": "單字／人物",
      "page": 1,
      "group": "people",
      "kind": "word",
      "variants": [
        {
          "en": "friend",
          "zh": "朋友"
        }
      ]
    },
    {
      "id": "w-people-2",
      "en": "girl",
      "zh": "女孩",
      "emoji": "👧",
      "source": "單字／人物",
      "page": 1,
      "group": "people",
      "kind": "word",
      "variants": [
        {
          "en": "girl",
          "zh": "女孩"
        }
      ]
    },
    {
      "id": "w-people-3",
      "en": "teacher",
      "zh": "教師",
      "emoji": "🧑‍🏫",
      "source": "單字／人物",
      "page": 1,
      "group": "people",
      "kind": "word",
      "variants": [
        {
          "en": "teacher",
          "zh": "教師"
        }
      ]
    },
    {
      "id": "w-people-4",
      "en": "doctor",
      "zh": "醫生",
      "emoji": "🧑‍⚕️",
      "source": "單字／人物",
      "page": 1,
      "group": "people",
      "kind": "word",
      "variants": [
        {
          "en": "doctor",
          "zh": "醫生"
        }
      ]
    },
    {
      "id": "w-people-5",
      "en": "kid",
      "zh": "小孩",
      "emoji": "🧒",
      "source": "單字／人物",
      "page": 1,
      "group": "people",
      "kind": "word",
      "variants": [
        {
          "en": "kid",
          "zh": "小孩"
        }
      ]
    },
    {
      "id": "w-people-6",
      "en": "student",
      "zh": "學生",
      "emoji": "🎓",
      "source": "單字／人物",
      "page": 1,
      "group": "people",
      "kind": "word",
      "variants": [
        {
          "en": "student",
          "zh": "學生"
        }
      ]
    },
    {
      "id": "w-family-0",
      "en": "brother",
      "zh": "兄弟",
      "emoji": "👦🏻",
      "source": "單字／家人",
      "page": 1,
      "group": "family",
      "kind": "word",
      "variants": [
        {
          "en": "brother",
          "zh": "兄弟"
        }
      ]
    },
    {
      "id": "w-family-1",
      "en": "father / dad",
      "zh": "爸爸",
      "emoji": "👨",
      "source": "單字／家人",
      "page": 1,
      "group": "family",
      "kind": "word",
      "variants": [
        {
          "en": "father / dad",
          "zh": "爸爸"
        }
      ]
    },
    {
      "id": "w-family-2",
      "en": "mother / mom",
      "zh": "媽媽",
      "emoji": "👩",
      "source": "單字／家人",
      "page": 1,
      "group": "family",
      "kind": "word",
      "variants": [
        {
          "en": "mother / mom",
          "zh": "媽媽"
        }
      ]
    },
    {
      "id": "w-family-3",
      "en": "sister",
      "zh": "姐妹",
      "emoji": "👧🏻",
      "source": "單字／家人",
      "page": 1,
      "group": "family",
      "kind": "word",
      "variants": [
        {
          "en": "sister",
          "zh": "姐妹"
        }
      ]
    },
    {
      "id": "w-family-4",
      "en": "grandma",
      "zh": "奶奶、外婆",
      "emoji": "👵",
      "source": "單字／家人",
      "page": 1,
      "group": "family",
      "kind": "word",
      "variants": [
        {
          "en": "grandma",
          "zh": "奶奶、外婆"
        }
      ]
    },
    {
      "id": "w-family-5",
      "en": "grandpa",
      "zh": "爺爺、外公",
      "emoji": "👴",
      "source": "單字／家人",
      "page": 1,
      "group": "family",
      "kind": "word",
      "variants": [
        {
          "en": "grandpa",
          "zh": "爺爺、外公"
        }
      ]
    },
    {
      "id": "w-food-0",
      "en": "apple",
      "zh": "蘋果",
      "emoji": "🍎",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "apple",
          "zh": "蘋果"
        }
      ]
    },
    {
      "id": "w-food-1",
      "en": "banana",
      "zh": "香蕉",
      "emoji": "🍌",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "banana",
          "zh": "香蕉"
        }
      ]
    },
    {
      "id": "w-food-2",
      "en": "cake",
      "zh": "蛋糕",
      "emoji": "🍰",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "cake",
          "zh": "蛋糕"
        }
      ]
    },
    {
      "id": "w-food-3",
      "en": "egg",
      "zh": "蛋",
      "emoji": "🥚",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "egg",
          "zh": "蛋"
        }
      ]
    },
    {
      "id": "w-food-4",
      "en": "milk",
      "zh": "牛奶",
      "emoji": "🥛",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "milk",
          "zh": "牛奶"
        }
      ]
    },
    {
      "id": "w-food-5",
      "en": "rice",
      "zh": "米；飯",
      "emoji": "🍚",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "rice",
          "zh": "米；飯"
        }
      ]
    },
    {
      "id": "w-food-6",
      "en": "tea",
      "zh": "茶",
      "emoji": "🍵",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "tea",
          "zh": "茶"
        }
      ]
    },
    {
      "id": "w-food-7",
      "en": "water",
      "zh": "水",
      "emoji": "💧",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "water",
          "zh": "水"
        }
      ]
    },
    {
      "id": "w-food-8",
      "en": "juice",
      "zh": "果汁",
      "emoji": "🧃",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "juice",
          "zh": "果汁"
        }
      ]
    },
    {
      "id": "w-food-9",
      "en": "hamburger",
      "zh": "漢堡",
      "emoji": "🍔",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "hamburger",
          "zh": "漢堡"
        }
      ]
    },
    {
      "id": "w-food-10",
      "en": "ice cream",
      "zh": "冰淇淋",
      "emoji": "🍨",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "ice cream",
          "zh": "冰淇淋"
        }
      ]
    },
    {
      "id": "w-food-11",
      "en": "orange",
      "zh": "柳丁",
      "emoji": "🍊",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "orange",
          "zh": "柳丁"
        }
      ]
    },
    {
      "id": "w-food-12",
      "en": "pizza",
      "zh": "披薩",
      "emoji": "🍕",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "pizza",
          "zh": "披薩"
        }
      ]
    },
    {
      "id": "w-food-13",
      "en": "breakfast",
      "zh": "早餐",
      "emoji": "🌅",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "breakfast",
          "zh": "早餐"
        }
      ]
    },
    {
      "id": "w-food-14",
      "en": "lunch",
      "zh": "午餐",
      "emoji": "☀️",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "lunch",
          "zh": "午餐"
        }
      ]
    },
    {
      "id": "w-food-15",
      "en": "dinner",
      "zh": "晚餐",
      "emoji": "🌙",
      "source": "單字／食物與飲料",
      "page": 1,
      "group": "food",
      "kind": "word",
      "variants": [
        {
          "en": "dinner",
          "zh": "晚餐"
        }
      ]
    },
    {
      "id": "w-school-0",
      "en": "bag",
      "zh": "袋子",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 1,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "bag",
          "zh": "袋子"
        }
      ]
    },
    {
      "id": "w-school-1",
      "en": "ball",
      "zh": "球",
      "emoji": "⚽",
      "source": "單字／學校用品",
      "page": 1,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "ball",
          "zh": "球"
        }
      ]
    },
    {
      "id": "w-school-2",
      "en": "book",
      "zh": "書本",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "book",
          "zh": "書本"
        }
      ]
    },
    {
      "id": "w-school-3",
      "en": "box",
      "zh": "盒子",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "box",
          "zh": "盒子"
        }
      ]
    },
    {
      "id": "w-school-4",
      "en": "class",
      "zh": "（一節）課",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "class",
          "zh": "（一節）課"
        }
      ]
    },
    {
      "id": "w-school-5",
      "en": "desk",
      "zh": "書桌",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "desk",
          "zh": "書桌"
        }
      ]
    },
    {
      "id": "w-school-6",
      "en": "door",
      "zh": "門",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "door",
          "zh": "門"
        }
      ]
    },
    {
      "id": "w-school-7",
      "en": "marker",
      "zh": "彩色筆；麥克筆",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "marker",
          "zh": "彩色筆；麥克筆"
        }
      ]
    },
    {
      "id": "w-school-8",
      "en": "pen",
      "zh": "原子筆",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "pen",
          "zh": "原子筆"
        }
      ]
    },
    {
      "id": "w-school-9",
      "en": "pencil",
      "zh": "鉛筆",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "pencil",
          "zh": "鉛筆"
        }
      ]
    },
    {
      "id": "w-school-10",
      "en": "table",
      "zh": "桌子",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "table",
          "zh": "桌子"
        }
      ]
    },
    {
      "id": "w-school-11",
      "en": "chair",
      "zh": "椅子",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "chair",
          "zh": "椅子"
        }
      ]
    },
    {
      "id": "w-school-12",
      "en": "eraser",
      "zh": "橡皮擦",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "eraser",
          "zh": "橡皮擦"
        }
      ]
    },
    {
      "id": "w-school-13",
      "en": "ruler",
      "zh": "尺",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "ruler",
          "zh": "尺"
        }
      ]
    },
    {
      "id": "w-school-14",
      "en": "window",
      "zh": "窗",
      "emoji": "🎒",
      "source": "單字／學校用品",
      "page": 2,
      "group": "school",
      "kind": "word",
      "variants": [
        {
          "en": "window",
          "zh": "窗"
        }
      ]
    },
    {
      "id": "w-animals-0",
      "en": "bear",
      "zh": "熊",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "bear",
          "zh": "熊"
        }
      ]
    },
    {
      "id": "w-animals-1",
      "en": "bird",
      "zh": "鳥",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "bird",
          "zh": "鳥"
        }
      ]
    },
    {
      "id": "w-animals-2",
      "en": "cat",
      "zh": "貓",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "cat",
          "zh": "貓"
        }
      ]
    },
    {
      "id": "w-animals-3",
      "en": "cow",
      "zh": "母牛",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "cow",
          "zh": "母牛"
        }
      ]
    },
    {
      "id": "w-animals-4",
      "en": "dog",
      "zh": "狗",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "dog",
          "zh": "狗"
        }
      ]
    },
    {
      "id": "w-animals-5",
      "en": "fish",
      "zh": "魚",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "fish",
          "zh": "魚"
        }
      ]
    },
    {
      "id": "w-animals-6",
      "en": "pig",
      "zh": "豬",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "pig",
          "zh": "豬"
        }
      ]
    },
    {
      "id": "w-animals-7",
      "en": "monkey",
      "zh": "猴子",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "monkey",
          "zh": "猴子"
        }
      ]
    },
    {
      "id": "w-animals-8",
      "en": "lion",
      "zh": "獅子",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "lion",
          "zh": "獅子"
        }
      ]
    },
    {
      "id": "w-animals-9",
      "en": "rabbit",
      "zh": "兔子",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "rabbit",
          "zh": "兔子"
        }
      ]
    },
    {
      "id": "w-animals-10",
      "en": "tiger",
      "zh": "老虎",
      "emoji": "🐱",
      "source": "單字／動物",
      "page": 2,
      "group": "animals",
      "kind": "word",
      "variants": [
        {
          "en": "tiger",
          "zh": "老虎"
        }
      ]
    },
    {
      "id": "w-places-0",
      "en": "home",
      "zh": "家",
      "emoji": "🏫",
      "source": "單字／場所與位置",
      "page": 2,
      "group": "places",
      "kind": "word",
      "variants": [
        {
          "en": "home",
          "zh": "家"
        }
      ]
    },
    {
      "id": "w-places-1",
      "en": "school",
      "zh": "學校",
      "emoji": "🏫",
      "source": "單字／場所與位置",
      "page": 2,
      "group": "places",
      "kind": "word",
      "variants": [
        {
          "en": "school",
          "zh": "學校"
        }
      ]
    },
    {
      "id": "w-places-2",
      "en": "zoo",
      "zh": "動物園",
      "emoji": "🏫",
      "source": "單字／場所與位置",
      "page": 2,
      "group": "places",
      "kind": "word",
      "variants": [
        {
          "en": "zoo",
          "zh": "動物園"
        }
      ]
    },
    {
      "id": "w-places-3",
      "en": "park",
      "zh": "公園",
      "emoji": "🏫",
      "source": "單字／場所與位置",
      "page": 2,
      "group": "places",
      "kind": "word",
      "variants": [
        {
          "en": "park",
          "zh": "公園"
        }
      ]
    },
    {
      "id": "w-places-4",
      "en": "bookstore",
      "zh": "書店",
      "emoji": "🏫",
      "source": "單字／場所與位置",
      "page": 2,
      "group": "places",
      "kind": "word",
      "variants": [
        {
          "en": "bookstore",
          "zh": "書店"
        }
      ]
    },
    {
      "id": "w-places-5",
      "en": "here",
      "zh": "這裡",
      "emoji": "🏫",
      "source": "單字／場所與位置",
      "page": 2,
      "group": "places",
      "kind": "word",
      "variants": [
        {
          "en": "here",
          "zh": "這裡"
        }
      ]
    },
    {
      "id": "w-places-6",
      "en": "there",
      "zh": "那裡",
      "emoji": "🏫",
      "source": "單字／場所與位置",
      "page": 2,
      "group": "places",
      "kind": "word",
      "variants": [
        {
          "en": "there",
          "zh": "那裡"
        }
      ]
    },
    {
      "id": "w-numbers-0",
      "en": "one",
      "zh": "一",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 2,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "one",
          "zh": "一"
        }
      ]
    },
    {
      "id": "w-numbers-1",
      "en": "two",
      "zh": "二",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 2,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "two",
          "zh": "二"
        }
      ]
    },
    {
      "id": "w-numbers-2",
      "en": "three",
      "zh": "三",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 2,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "three",
          "zh": "三"
        }
      ]
    },
    {
      "id": "w-numbers-3",
      "en": "four",
      "zh": "四",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "four",
          "zh": "四"
        }
      ]
    },
    {
      "id": "w-numbers-4",
      "en": "five",
      "zh": "五",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "five",
          "zh": "五"
        }
      ]
    },
    {
      "id": "w-numbers-5",
      "en": "six",
      "zh": "六",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "six",
          "zh": "六"
        }
      ]
    },
    {
      "id": "w-numbers-6",
      "en": "seven",
      "zh": "七",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "seven",
          "zh": "七"
        }
      ]
    },
    {
      "id": "w-numbers-7",
      "en": "eight",
      "zh": "八",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "eight",
          "zh": "八"
        }
      ]
    },
    {
      "id": "w-numbers-8",
      "en": "nine",
      "zh": "九",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "nine",
          "zh": "九"
        }
      ]
    },
    {
      "id": "w-numbers-9",
      "en": "ten",
      "zh": "十",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "ten",
          "zh": "十"
        }
      ]
    },
    {
      "id": "w-numbers-10",
      "en": "eleven",
      "zh": "十一",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "eleven",
          "zh": "十一"
        }
      ]
    },
    {
      "id": "w-numbers-11",
      "en": "twelve",
      "zh": "十二",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "twelve",
          "zh": "十二"
        }
      ]
    },
    {
      "id": "w-numbers-12",
      "en": "many",
      "zh": "很多的（可數）",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "many",
          "zh": "很多的（可數）"
        }
      ]
    },
    {
      "id": "w-numbers-13",
      "en": "much",
      "zh": "很多的（不可數）",
      "emoji": "🔢",
      "source": "單字／數字與數量",
      "page": 3,
      "group": "numbers",
      "kind": "word",
      "variants": [
        {
          "en": "much",
          "zh": "很多的（不可數）"
        }
      ]
    },
    {
      "id": "w-colors-0",
      "en": "blue",
      "zh": "藍色的",
      "emoji": "🎨",
      "source": "單字／顏色",
      "page": 3,
      "group": "colors",
      "kind": "word",
      "variants": [
        {
          "en": "blue",
          "zh": "藍色的"
        }
      ]
    },
    {
      "id": "w-colors-1",
      "en": "color",
      "zh": "顏色",
      "emoji": "🎨",
      "source": "單字／顏色",
      "page": 3,
      "group": "colors",
      "kind": "word",
      "variants": [
        {
          "en": "color",
          "zh": "顏色"
        }
      ]
    },
    {
      "id": "w-colors-2",
      "en": "green",
      "zh": "綠色的",
      "emoji": "🎨",
      "source": "單字／顏色",
      "page": 3,
      "group": "colors",
      "kind": "word",
      "variants": [
        {
          "en": "green",
          "zh": "綠色的"
        }
      ]
    },
    {
      "id": "w-colors-3",
      "en": "red",
      "zh": "紅色的",
      "emoji": "🎨",
      "source": "單字／顏色",
      "page": 3,
      "group": "colors",
      "kind": "word",
      "variants": [
        {
          "en": "red",
          "zh": "紅色的"
        }
      ]
    },
    {
      "id": "w-colors-4",
      "en": "yellow",
      "zh": "黃色的",
      "emoji": "🎨",
      "source": "單字／顏色",
      "page": 3,
      "group": "colors",
      "kind": "word",
      "variants": [
        {
          "en": "yellow",
          "zh": "黃色的"
        }
      ]
    },
    {
      "id": "w-colors-5",
      "en": "black",
      "zh": "黑色的",
      "emoji": "🎨",
      "source": "單字／顏色",
      "page": 3,
      "group": "colors",
      "kind": "word",
      "variants": [
        {
          "en": "black",
          "zh": "黑色的"
        }
      ]
    },
    {
      "id": "w-colors-6",
      "en": "brown",
      "zh": "棕色的",
      "emoji": "🎨",
      "source": "單字／顏色",
      "page": 3,
      "group": "colors",
      "kind": "word",
      "variants": [
        {
          "en": "brown",
          "zh": "棕色的"
        }
      ]
    },
    {
      "id": "w-colors-7",
      "en": "white",
      "zh": "白色的",
      "emoji": "🎨",
      "source": "單字／顏色",
      "page": 3,
      "group": "colors",
      "kind": "word",
      "variants": [
        {
          "en": "white",
          "zh": "白色的"
        }
      ]
    },
    {
      "id": "w-house-0",
      "en": "cup",
      "zh": "杯子",
      "emoji": "🔑",
      "source": "單字／居家用品",
      "page": 3,
      "group": "house",
      "kind": "word",
      "variants": [
        {
          "en": "cup",
          "zh": "杯子"
        }
      ]
    },
    {
      "id": "w-house-1",
      "en": "fan",
      "zh": "風扇",
      "emoji": "🔑",
      "source": "單字／居家用品",
      "page": 3,
      "group": "house",
      "kind": "word",
      "variants": [
        {
          "en": "fan",
          "zh": "風扇"
        }
      ]
    },
    {
      "id": "w-house-2",
      "en": "key",
      "zh": "鑰匙",
      "emoji": "🔑",
      "source": "單字／居家用品",
      "page": 3,
      "group": "house",
      "kind": "word",
      "variants": [
        {
          "en": "key",
          "zh": "鑰匙"
        }
      ]
    },
    {
      "id": "w-body-0",
      "en": "head",
      "zh": "頭",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "head",
          "zh": "頭"
        }
      ]
    },
    {
      "id": "w-body-1",
      "en": "eye",
      "zh": "眼睛",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "eye",
          "zh": "眼睛"
        }
      ]
    },
    {
      "id": "w-body-2",
      "en": "nose",
      "zh": "鼻子",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "nose",
          "zh": "鼻子"
        }
      ]
    },
    {
      "id": "w-body-3",
      "en": "ear",
      "zh": "耳朵",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "ear",
          "zh": "耳朵"
        }
      ]
    },
    {
      "id": "w-body-4",
      "en": "hand",
      "zh": "手",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "hand",
          "zh": "手"
        }
      ]
    },
    {
      "id": "w-body-5",
      "en": "arm",
      "zh": "手臂",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "arm",
          "zh": "手臂"
        }
      ]
    },
    {
      "id": "w-body-6",
      "en": "leg",
      "zh": "腿",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "leg",
          "zh": "腿"
        }
      ]
    },
    {
      "id": "w-body-7",
      "en": "foot",
      "zh": "腳",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "foot",
          "zh": "腳"
        }
      ]
    },
    {
      "id": "w-body-8",
      "en": "face",
      "zh": "臉",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "face",
          "zh": "臉"
        }
      ]
    },
    {
      "id": "w-body-9",
      "en": "mouth",
      "zh": "嘴巴",
      "emoji": "🖐️",
      "source": "單字／身體部位",
      "page": 3,
      "group": "body",
      "kind": "word",
      "variants": [
        {
          "en": "mouth",
          "zh": "嘴巴"
        }
      ]
    },
    {
      "id": "w-adjectives-0",
      "en": "old",
      "zh": "老的",
      "emoji": "📏",
      "source": "單字／描述事物",
      "page": 3,
      "group": "adjectives",
      "kind": "word",
      "variants": [
        {
          "en": "old",
          "zh": "老的"
        }
      ]
    },
    {
      "id": "w-adjectives-1",
      "en": "short",
      "zh": "矮的；短的",
      "emoji": "📏",
      "source": "單字／描述事物",
      "page": 4,
      "group": "adjectives",
      "kind": "word",
      "variants": [
        {
          "en": "short",
          "zh": "矮的；短的"
        }
      ]
    },
    {
      "id": "w-adjectives-2",
      "en": "tall",
      "zh": "高的",
      "emoji": "📏",
      "source": "單字／描述事物",
      "page": 4,
      "group": "adjectives",
      "kind": "word",
      "variants": [
        {
          "en": "tall",
          "zh": "高的"
        }
      ]
    },
    {
      "id": "w-adjectives-3",
      "en": "big",
      "zh": "大的",
      "emoji": "📏",
      "source": "單字／描述事物",
      "page": 4,
      "group": "adjectives",
      "kind": "word",
      "variants": [
        {
          "en": "big",
          "zh": "大的"
        }
      ]
    },
    {
      "id": "w-adjectives-4",
      "en": "long",
      "zh": "長的",
      "emoji": "📏",
      "source": "單字／描述事物",
      "page": 4,
      "group": "adjectives",
      "kind": "word",
      "variants": [
        {
          "en": "long",
          "zh": "長的"
        }
      ]
    },
    {
      "id": "w-adjectives-5",
      "en": "small",
      "zh": "小的",
      "emoji": "📏",
      "source": "單字／描述事物",
      "page": 4,
      "group": "adjectives",
      "kind": "word",
      "variants": [
        {
          "en": "small",
          "zh": "小的"
        }
      ]
    },
    {
      "id": "w-adjectives-6",
      "en": "thin",
      "zh": "瘦的",
      "emoji": "📏",
      "source": "單字／描述事物",
      "page": 4,
      "group": "adjectives",
      "kind": "word",
      "variants": [
        {
          "en": "thin",
          "zh": "瘦的"
        }
      ]
    },
    {
      "id": "w-weather-0",
      "en": "cold",
      "zh": "冷的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "cold",
          "zh": "冷的"
        }
      ]
    },
    {
      "id": "w-weather-1",
      "en": "cool",
      "zh": "涼爽的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "cool",
          "zh": "涼爽的"
        }
      ]
    },
    {
      "id": "w-weather-2",
      "en": "dry",
      "zh": "乾的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "dry",
          "zh": "乾的"
        }
      ]
    },
    {
      "id": "w-weather-3",
      "en": "hot",
      "zh": "熱的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "hot",
          "zh": "熱的"
        }
      ]
    },
    {
      "id": "w-weather-4",
      "en": "warm",
      "zh": "溫暖的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "warm",
          "zh": "溫暖的"
        }
      ]
    },
    {
      "id": "w-weather-5",
      "en": "wet",
      "zh": "潮濕的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "wet",
          "zh": "潮濕的"
        }
      ]
    },
    {
      "id": "w-weather-6",
      "en": "cloudy",
      "zh": "陰天的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "cloudy",
          "zh": "陰天的"
        }
      ]
    },
    {
      "id": "w-weather-7",
      "en": "rainy",
      "zh": "下雨的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "rainy",
          "zh": "下雨的"
        }
      ]
    },
    {
      "id": "w-weather-8",
      "en": "sunny",
      "zh": "晴朗的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "sunny",
          "zh": "晴朗的"
        }
      ]
    },
    {
      "id": "w-weather-9",
      "en": "weather",
      "zh": "天氣",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "weather",
          "zh": "天氣"
        }
      ]
    },
    {
      "id": "w-weather-10",
      "en": "windy",
      "zh": "颳風的",
      "emoji": "☀️",
      "source": "單字／天氣與自然",
      "page": 4,
      "group": "weather",
      "kind": "word",
      "variants": [
        {
          "en": "windy",
          "zh": "颳風的"
        }
      ]
    },
    {
      "id": "w-time-0",
      "en": "Sunday",
      "zh": "星期日",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "Sunday",
          "zh": "星期日"
        }
      ]
    },
    {
      "id": "w-time-1",
      "en": "Monday",
      "zh": "星期一",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "Monday",
          "zh": "星期一"
        }
      ]
    },
    {
      "id": "w-time-2",
      "en": "Tuesday",
      "zh": "星期二",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "Tuesday",
          "zh": "星期二"
        }
      ]
    },
    {
      "id": "w-time-3",
      "en": "Wednesday",
      "zh": "星期三",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "Wednesday",
          "zh": "星期三"
        }
      ]
    },
    {
      "id": "w-time-4",
      "en": "Thursday",
      "zh": "星期四",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "Thursday",
          "zh": "星期四"
        }
      ]
    },
    {
      "id": "w-time-5",
      "en": "Friday",
      "zh": "星期五",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "Friday",
          "zh": "星期五"
        }
      ]
    },
    {
      "id": "w-time-6",
      "en": "Saturday",
      "zh": "星期六",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "Saturday",
          "zh": "星期六"
        }
      ]
    },
    {
      "id": "w-time-7",
      "en": "day",
      "zh": "天；日",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "day",
          "zh": "天；日"
        }
      ]
    },
    {
      "id": "w-time-8",
      "en": "evening",
      "zh": "晚上",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "evening",
          "zh": "晚上"
        }
      ]
    },
    {
      "id": "w-time-9",
      "en": "morning",
      "zh": "早上",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "morning",
          "zh": "早上"
        }
      ]
    },
    {
      "id": "w-time-10",
      "en": "night",
      "zh": "夜晚",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "night",
          "zh": "夜晚"
        }
      ]
    },
    {
      "id": "w-time-11",
      "en": "now",
      "zh": "現在",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "now",
          "zh": "現在"
        }
      ]
    },
    {
      "id": "w-time-12",
      "en": "time",
      "zh": "時間",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "time",
          "zh": "時間"
        }
      ]
    },
    {
      "id": "w-time-13",
      "en": "today",
      "zh": "今天",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "today",
          "zh": "今天"
        }
      ]
    },
    {
      "id": "w-time-14",
      "en": "tomorrow",
      "zh": "明天",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "tomorrow",
          "zh": "明天"
        }
      ]
    },
    {
      "id": "w-time-15",
      "en": "week",
      "zh": "週",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "week",
          "zh": "週"
        }
      ]
    },
    {
      "id": "w-time-16",
      "en": "year",
      "zh": "年",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "year",
          "zh": "年"
        }
      ]
    },
    {
      "id": "w-time-17",
      "en": "yesterday",
      "zh": "昨天",
      "emoji": "📅",
      "source": "單字／時間與星期",
      "page": 4,
      "group": "time",
      "kind": "word",
      "variants": [
        {
          "en": "yesterday",
          "zh": "昨天"
        }
      ]
    },
    {
      "id": "w-transport-0",
      "en": "bike",
      "zh": "腳踏車",
      "emoji": "🚌",
      "source": "單字／交通工具",
      "page": 5,
      "group": "transport",
      "kind": "word",
      "variants": [
        {
          "en": "bike",
          "zh": "腳踏車"
        }
      ]
    },
    {
      "id": "w-transport-1",
      "en": "bus",
      "zh": "公車",
      "emoji": "🚌",
      "source": "單字／交通工具",
      "page": 5,
      "group": "transport",
      "kind": "word",
      "variants": [
        {
          "en": "bus",
          "zh": "公車"
        }
      ]
    },
    {
      "id": "w-transport-2",
      "en": "car",
      "zh": "汽車",
      "emoji": "🚌",
      "source": "單字／交通工具",
      "page": 5,
      "group": "transport",
      "kind": "word",
      "variants": [
        {
          "en": "car",
          "zh": "汽車"
        }
      ]
    },
    {
      "id": "w-feelings-0",
      "en": "good",
      "zh": "好的",
      "emoji": "💗",
      "source": "單字／感受與心情",
      "page": 5,
      "group": "feelings",
      "kind": "word",
      "variants": [
        {
          "en": "good",
          "zh": "好的"
        }
      ]
    },
    {
      "id": "w-feelings-1",
      "en": "happy",
      "zh": "快樂的",
      "emoji": "💗",
      "source": "單字／感受與心情",
      "page": 5,
      "group": "feelings",
      "kind": "word",
      "variants": [
        {
          "en": "happy",
          "zh": "快樂的"
        }
      ]
    },
    {
      "id": "w-feelings-2",
      "en": "bad",
      "zh": "壞的；不好的",
      "emoji": "💗",
      "source": "單字／感受與心情",
      "page": 5,
      "group": "feelings",
      "kind": "word",
      "variants": [
        {
          "en": "bad",
          "zh": "壞的；不好的"
        }
      ]
    },
    {
      "id": "w-feelings-3",
      "en": "fine",
      "zh": "好的",
      "emoji": "💗",
      "source": "單字／感受與心情",
      "page": 5,
      "group": "feelings",
      "kind": "word",
      "variants": [
        {
          "en": "fine",
          "zh": "好的"
        }
      ]
    },
    {
      "id": "w-feelings-4",
      "en": "great",
      "zh": "好棒",
      "emoji": "💗",
      "source": "單字／感受與心情",
      "page": 5,
      "group": "feelings",
      "kind": "word",
      "variants": [
        {
          "en": "great",
          "zh": "好棒"
        }
      ]
    },
    {
      "id": "w-feelings-5",
      "en": "nice",
      "zh": "不錯的",
      "emoji": "💗",
      "source": "單字／感受與心情",
      "page": 5,
      "group": "feelings",
      "kind": "word",
      "variants": [
        {
          "en": "nice",
          "zh": "不錯的"
        }
      ]
    },
    {
      "id": "w-feelings-6",
      "en": "OK",
      "zh": "好的",
      "emoji": "💗",
      "source": "單字／感受與心情",
      "page": 5,
      "group": "feelings",
      "kind": "word",
      "variants": [
        {
          "en": "OK",
          "zh": "好的"
        }
      ]
    },
    {
      "id": "w-feelings-7",
      "en": "sad",
      "zh": "傷心的",
      "emoji": "💗",
      "source": "單字／感受與心情",
      "page": 5,
      "group": "feelings",
      "kind": "word",
      "variants": [
        {
          "en": "sad",
          "zh": "傷心的"
        }
      ]
    },
    {
      "id": "w-clothing-0",
      "en": "hat",
      "zh": "帽子",
      "emoji": "🧥",
      "source": "單字／舞台服裝",
      "page": 5,
      "group": "clothing",
      "kind": "word",
      "variants": [
        {
          "en": "hat",
          "zh": "帽子"
        }
      ]
    },
    {
      "id": "w-clothing-1",
      "en": "cap",
      "zh": "棒球帽；無邊短帽",
      "emoji": "🧥",
      "source": "單字／舞台服裝",
      "page": 5,
      "group": "clothing",
      "kind": "word",
      "variants": [
        {
          "en": "cap",
          "zh": "棒球帽；無邊短帽"
        }
      ]
    },
    {
      "id": "w-clothing-2",
      "en": "jacket",
      "zh": "夾克",
      "emoji": "🧥",
      "source": "單字／舞台服裝",
      "page": 5,
      "group": "clothing",
      "kind": "word",
      "variants": [
        {
          "en": "jacket",
          "zh": "夾克"
        }
      ]
    },
    {
      "id": "w-clothing-3",
      "en": "shoes",
      "zh": "鞋子",
      "emoji": "🧥",
      "source": "單字／舞台服裝",
      "page": 5,
      "group": "clothing",
      "kind": "word",
      "variants": [
        {
          "en": "shoes",
          "zh": "鞋子"
        }
      ]
    },
    {
      "id": "w-countries-0",
      "en": "Taipei",
      "zh": "臺北",
      "emoji": "🌏",
      "source": "單字／地名與國家",
      "page": 5,
      "group": "countries",
      "kind": "word",
      "variants": [
        {
          "en": "Taipei",
          "zh": "臺北"
        }
      ]
    },
    {
      "id": "w-countries-1",
      "en": "Taiwan",
      "zh": "臺灣",
      "emoji": "🌏",
      "source": "單字／地名與國家",
      "page": 5,
      "group": "countries",
      "kind": "word",
      "variants": [
        {
          "en": "Taiwan",
          "zh": "臺灣"
        }
      ]
    },
    {
      "id": "w-countries-2",
      "en": "Japan",
      "zh": "日本",
      "emoji": "🌏",
      "source": "單字／地名與國家",
      "page": 5,
      "group": "countries",
      "kind": "word",
      "variants": [
        {
          "en": "Japan",
          "zh": "日本"
        }
      ]
    },
    {
      "id": "w-countries-3",
      "en": "UK",
      "zh": "英國",
      "emoji": "🌏",
      "source": "單字／地名與國家",
      "page": 5,
      "group": "countries",
      "kind": "word",
      "variants": [
        {
          "en": "UK",
          "zh": "英國"
        }
      ]
    },
    {
      "id": "w-countries-4",
      "en": "USA",
      "zh": "美國",
      "emoji": "🌏",
      "source": "單字／地名與國家",
      "page": 5,
      "group": "countries",
      "kind": "word",
      "variants": [
        {
          "en": "USA",
          "zh": "美國"
        }
      ]
    },
    {
      "id": "w-hobbies-0",
      "en": "game",
      "zh": "遊戲",
      "emoji": "🥾",
      "source": "單字／運動與興趣",
      "page": 5,
      "group": "hobbies",
      "kind": "word",
      "variants": [
        {
          "en": "game",
          "zh": "遊戲"
        }
      ]
    },
    {
      "id": "w-hobbies-1",
      "en": "hiking",
      "zh": "健行",
      "emoji": "🥾",
      "source": "單字／運動與興趣",
      "page": 5,
      "group": "hobbies",
      "kind": "word",
      "variants": [
        {
          "en": "hiking",
          "zh": "健行"
        }
      ]
    },
    {
      "id": "w-subjects-0",
      "en": "art",
      "zh": "藝術；美術",
      "emoji": "🎵",
      "source": "單字／學科",
      "page": 5,
      "group": "subjects",
      "kind": "word",
      "variants": [
        {
          "en": "art",
          "zh": "藝術；美術"
        }
      ]
    },
    {
      "id": "w-subjects-1",
      "en": "Chinese",
      "zh": "國語；中文",
      "emoji": "🎵",
      "source": "單字／學科",
      "page": 5,
      "group": "subjects",
      "kind": "word",
      "variants": [
        {
          "en": "Chinese",
          "zh": "國語；中文"
        }
      ]
    },
    {
      "id": "w-subjects-2",
      "en": "English",
      "zh": "英語；英文",
      "emoji": "🎵",
      "source": "單字／學科",
      "page": 5,
      "group": "subjects",
      "kind": "word",
      "variants": [
        {
          "en": "English",
          "zh": "英語；英文"
        }
      ]
    },
    {
      "id": "w-subjects-3",
      "en": "math",
      "zh": "數學",
      "emoji": "🎵",
      "source": "單字／學科",
      "page": 5,
      "group": "subjects",
      "kind": "word",
      "variants": [
        {
          "en": "math",
          "zh": "數學"
        }
      ]
    },
    {
      "id": "w-subjects-4",
      "en": "music",
      "zh": "音樂",
      "emoji": "🎵",
      "source": "單字／學科",
      "page": 5,
      "group": "subjects",
      "kind": "word",
      "variants": [
        {
          "en": "music",
          "zh": "音樂"
        }
      ]
    },
    {
      "id": "w-pronouns-0",
      "en": "he",
      "zh": "他",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 5,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "he",
          "zh": "他"
        }
      ]
    },
    {
      "id": "w-pronouns-1",
      "en": "I",
      "zh": "我",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 5,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "I",
          "zh": "我"
        }
      ]
    },
    {
      "id": "w-pronouns-2",
      "en": "it",
      "zh": "它",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 5,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "it",
          "zh": "它"
        }
      ]
    },
    {
      "id": "w-pronouns-3",
      "en": "my",
      "zh": "我的",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 6,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "my",
          "zh": "我的"
        }
      ]
    },
    {
      "id": "w-pronouns-4",
      "en": "she",
      "zh": "她",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 6,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "she",
          "zh": "她"
        }
      ]
    },
    {
      "id": "w-pronouns-5",
      "en": "you",
      "zh": "你；你們",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 6,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "you",
          "zh": "你；你們"
        }
      ]
    },
    {
      "id": "w-pronouns-6",
      "en": "your",
      "zh": "你的；你們的",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 6,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "your",
          "zh": "你的；你們的"
        }
      ]
    },
    {
      "id": "w-pronouns-7",
      "en": "we",
      "zh": "我們",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 6,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "we",
          "zh": "我們"
        }
      ]
    },
    {
      "id": "w-pronouns-8",
      "en": "they",
      "zh": "他們",
      "emoji": "👋",
      "source": "單字／人稱與所有格",
      "page": 6,
      "group": "pronouns",
      "kind": "word",
      "variants": [
        {
          "en": "they",
          "zh": "他們"
        }
      ]
    },
    {
      "id": "w-questions-0",
      "en": "how",
      "zh": "如何",
      "emoji": "❓",
      "source": "單字／疑問詞",
      "page": 6,
      "group": "questions",
      "kind": "word",
      "variants": [
        {
          "en": "how",
          "zh": "如何"
        }
      ]
    },
    {
      "id": "w-questions-1",
      "en": "what",
      "zh": "什麼",
      "emoji": "❓",
      "source": "單字／疑問詞",
      "page": 6,
      "group": "questions",
      "kind": "word",
      "variants": [
        {
          "en": "what",
          "zh": "什麼"
        }
      ]
    },
    {
      "id": "w-questions-2",
      "en": "where",
      "zh": "哪裡",
      "emoji": "❓",
      "source": "單字／疑問詞",
      "page": 6,
      "group": "questions",
      "kind": "word",
      "variants": [
        {
          "en": "where",
          "zh": "哪裡"
        }
      ]
    },
    {
      "id": "w-questions-3",
      "en": "who",
      "zh": "誰",
      "emoji": "❓",
      "source": "單字／疑問詞",
      "page": 6,
      "group": "questions",
      "kind": "word",
      "variants": [
        {
          "en": "who",
          "zh": "誰"
        }
      ]
    },
    {
      "id": "w-questions-4",
      "en": "which",
      "zh": "哪一個",
      "emoji": "❓",
      "source": "單字／疑問詞",
      "page": 6,
      "group": "questions",
      "kind": "word",
      "variants": [
        {
          "en": "which",
          "zh": "哪一個"
        }
      ]
    },
    {
      "id": "w-auxiliary-0",
      "en": "be",
      "zh": "是（原形）",
      "emoji": "🧩",
      "source": "單字／Be 與助動詞",
      "page": 6,
      "group": "auxiliary",
      "kind": "word",
      "variants": [
        {
          "en": "be",
          "zh": "是（原形）"
        }
      ]
    },
    {
      "id": "w-auxiliary-1",
      "en": "am",
      "zh": "是（搭配 I）",
      "emoji": "🧩",
      "source": "單字／Be 與助動詞",
      "page": 6,
      "group": "auxiliary",
      "kind": "word",
      "variants": [
        {
          "en": "am",
          "zh": "是（搭配 I）"
        }
      ]
    },
    {
      "id": "w-auxiliary-2",
      "en": "are",
      "zh": "是（搭配 you、we、they）",
      "emoji": "🧩",
      "source": "單字／Be 與助動詞",
      "page": 6,
      "group": "auxiliary",
      "kind": "word",
      "variants": [
        {
          "en": "are",
          "zh": "是（搭配 you、we、they）"
        }
      ]
    },
    {
      "id": "w-auxiliary-3",
      "en": "is",
      "zh": "是（搭配 he、she、it）",
      "emoji": "🧩",
      "source": "單字／Be 與助動詞",
      "page": 6,
      "group": "auxiliary",
      "kind": "word",
      "variants": [
        {
          "en": "is",
          "zh": "是（搭配 he、she、it）"
        }
      ]
    },
    {
      "id": "w-auxiliary-4",
      "en": "can",
      "zh": "能；會",
      "emoji": "🧩",
      "source": "單字／Be 與助動詞",
      "page": 6,
      "group": "auxiliary",
      "kind": "word",
      "variants": [
        {
          "en": "can",
          "zh": "能；會"
        }
      ]
    },
    {
      "id": "w-auxiliary-5",
      "en": "do",
      "zh": "做；助動詞（搭配 I、you、we、they）",
      "emoji": "🧩",
      "source": "單字／Be 與助動詞",
      "page": 6,
      "group": "auxiliary",
      "kind": "word",
      "variants": [
        {
          "en": "do",
          "zh": "做；助動詞（搭配 I、you、we、they）"
        }
      ]
    },
    {
      "id": "w-auxiliary-6",
      "en": "does",
      "zh": "助動詞（搭配 he、she、it）",
      "emoji": "🧩",
      "source": "單字／Be 與助動詞",
      "page": 6,
      "group": "auxiliary",
      "kind": "word",
      "variants": [
        {
          "en": "does",
          "zh": "助動詞（搭配 he、she、it）"
        }
      ]
    },
    {
      "id": "w-determiners-0",
      "en": "a",
      "zh": "一個（用於子音音素前）",
      "emoji": "👉",
      "source": "單字／冠詞與指示詞",
      "page": 6,
      "group": "determiners",
      "kind": "word",
      "variants": [
        {
          "en": "a",
          "zh": "一個（用於子音音素前）"
        }
      ]
    },
    {
      "id": "w-determiners-1",
      "en": "an",
      "zh": "一個（用於母音音素前）",
      "emoji": "👉",
      "source": "單字／冠詞與指示詞",
      "page": 6,
      "group": "determiners",
      "kind": "word",
      "variants": [
        {
          "en": "an",
          "zh": "一個（用於母音音素前）"
        }
      ]
    },
    {
      "id": "w-determiners-2",
      "en": "this",
      "zh": "這個",
      "emoji": "👉",
      "source": "單字／冠詞與指示詞",
      "page": 6,
      "group": "determiners",
      "kind": "word",
      "variants": [
        {
          "en": "this",
          "zh": "這個"
        }
      ]
    },
    {
      "id": "w-determiners-3",
      "en": "that",
      "zh": "那個",
      "emoji": "👉",
      "source": "單字／冠詞與指示詞",
      "page": 6,
      "group": "determiners",
      "kind": "word",
      "variants": [
        {
          "en": "that",
          "zh": "那個"
        }
      ]
    },
    {
      "id": "w-determiners-4",
      "en": "the",
      "zh": "特指的這個／那個",
      "emoji": "👉",
      "source": "單字／冠詞與指示詞",
      "page": 6,
      "group": "determiners",
      "kind": "word",
      "variants": [
        {
          "en": "the",
          "zh": "特指的這個／那個"
        }
      ]
    },
    {
      "id": "w-determiners-5",
      "en": "these",
      "zh": "這些",
      "emoji": "👉",
      "source": "單字／冠詞與指示詞",
      "page": 6,
      "group": "determiners",
      "kind": "word",
      "variants": [
        {
          "en": "these",
          "zh": "這些"
        }
      ]
    },
    {
      "id": "w-determiners-6",
      "en": "those",
      "zh": "那些",
      "emoji": "👉",
      "source": "單字／冠詞與指示詞",
      "page": 6,
      "group": "determiners",
      "kind": "word",
      "variants": [
        {
          "en": "those",
          "zh": "那些"
        }
      ]
    },
    {
      "id": "w-verbs-0",
      "en": "cry",
      "zh": "哭",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 6,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "cry",
          "zh": "哭"
        }
      ]
    },
    {
      "id": "w-verbs-1",
      "en": "dance",
      "zh": "跳舞",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 6,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "dance",
          "zh": "跳舞"
        }
      ]
    },
    {
      "id": "w-verbs-2",
      "en": "go",
      "zh": "走；去",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 6,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "go",
          "zh": "走；去"
        }
      ]
    },
    {
      "id": "w-verbs-3",
      "en": "jump",
      "zh": "跳",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 6,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "jump",
          "zh": "跳"
        }
      ]
    },
    {
      "id": "w-verbs-4",
      "en": "like",
      "zh": "喜歡",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 6,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "like",
          "zh": "喜歡"
        }
      ]
    },
    {
      "id": "w-verbs-5",
      "en": "look",
      "zh": "看",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 6,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "look",
          "zh": "看"
        }
      ]
    },
    {
      "id": "w-verbs-6",
      "en": "read",
      "zh": "閱讀",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 6,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "read",
          "zh": "閱讀"
        }
      ]
    },
    {
      "id": "w-verbs-7",
      "en": "sing",
      "zh": "唱歌",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 6,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "sing",
          "zh": "唱歌"
        }
      ]
    },
    {
      "id": "w-verbs-8",
      "en": "want",
      "zh": "想要",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "want",
          "zh": "想要"
        }
      ]
    },
    {
      "id": "w-verbs-9",
      "en": "close",
      "zh": "關上",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "close",
          "zh": "關上"
        }
      ]
    },
    {
      "id": "w-verbs-10",
      "en": "come",
      "zh": "來",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "come",
          "zh": "來"
        }
      ]
    },
    {
      "id": "w-verbs-11",
      "en": "cook",
      "zh": "烹飪",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "cook",
          "zh": "烹飪"
        }
      ]
    },
    {
      "id": "w-verbs-12",
      "en": "draw",
      "zh": "繪畫",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "draw",
          "zh": "繪畫"
        }
      ]
    },
    {
      "id": "w-verbs-13",
      "en": "listen",
      "zh": "聆聽",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "listen",
          "zh": "聆聽"
        }
      ]
    },
    {
      "id": "w-verbs-14",
      "en": "open",
      "zh": "打開",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "open",
          "zh": "打開"
        }
      ]
    },
    {
      "id": "w-verbs-15",
      "en": "play",
      "zh": "玩",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "play",
          "zh": "玩"
        }
      ]
    },
    {
      "id": "w-verbs-16",
      "en": "run",
      "zh": "跑步",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "run",
          "zh": "跑步"
        }
      ]
    },
    {
      "id": "w-verbs-17",
      "en": "see",
      "zh": "看見",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "see",
          "zh": "看見"
        }
      ]
    },
    {
      "id": "w-verbs-18",
      "en": "sleep",
      "zh": "睡覺",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "sleep",
          "zh": "睡覺"
        }
      ]
    },
    {
      "id": "w-verbs-19",
      "en": "swim",
      "zh": "游泳",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "swim",
          "zh": "游泳"
        }
      ]
    },
    {
      "id": "w-verbs-20",
      "en": "walk",
      "zh": "走路",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "walk",
          "zh": "走路"
        }
      ]
    },
    {
      "id": "w-verbs-21",
      "en": "write",
      "zh": "寫字",
      "emoji": "💃",
      "source": "單字／動作練習",
      "page": 7,
      "group": "verbs",
      "kind": "word",
      "variants": [
        {
          "en": "write",
          "zh": "寫字"
        }
      ]
    },
    {
      "id": "w-prepositions-0",
      "en": "at",
      "zh": "在某個地方；在某個時間",
      "emoji": "📦",
      "source": "單字／介系詞",
      "page": 7,
      "group": "prepositions",
      "kind": "word",
      "variants": [
        {
          "en": "at",
          "zh": "在某個地方；在某個時間"
        }
      ]
    },
    {
      "id": "w-prepositions-1",
      "en": "in",
      "zh": "在……裡面",
      "emoji": "📦",
      "source": "單字／介系詞",
      "page": 7,
      "group": "prepositions",
      "kind": "word",
      "variants": [
        {
          "en": "in",
          "zh": "在……裡面"
        }
      ]
    },
    {
      "id": "w-prepositions-2",
      "en": "on",
      "zh": "在……上面",
      "emoji": "📦",
      "source": "單字／介系詞",
      "page": 7,
      "group": "prepositions",
      "kind": "word",
      "variants": [
        {
          "en": "on",
          "zh": "在……上面"
        }
      ]
    },
    {
      "id": "w-prepositions-3",
      "en": "under",
      "zh": "在……下面",
      "emoji": "📦",
      "source": "單字／介系詞",
      "page": 7,
      "group": "prepositions",
      "kind": "word",
      "variants": [
        {
          "en": "under",
          "zh": "在……下面"
        }
      ]
    },
    {
      "id": "w-other-nouns-0",
      "en": "kite",
      "zh": "風箏",
      "emoji": "🪁",
      "source": "單字／其他名詞",
      "page": 7,
      "group": "other-nouns",
      "kind": "word",
      "variants": [
        {
          "en": "kite",
          "zh": "風箏"
        }
      ]
    },
    {
      "id": "w-other-nouns-1",
      "en": "name",
      "zh": "名字",
      "emoji": "🪁",
      "source": "單字／其他名詞",
      "page": 7,
      "group": "other-nouns",
      "kind": "word",
      "variants": [
        {
          "en": "name",
          "zh": "名字"
        }
      ]
    },
    {
      "id": "w-other-nouns-2",
      "en": "yo-yo",
      "zh": "溜溜球",
      "emoji": "🪁",
      "source": "單字／其他名詞",
      "page": 7,
      "group": "other-nouns",
      "kind": "word",
      "variants": [
        {
          "en": "yo-yo",
          "zh": "溜溜球"
        }
      ]
    },
    {
      "id": "w-other-nouns-3",
      "en": "o'clock",
      "zh": "點鐘",
      "emoji": "🪁",
      "source": "單字／其他名詞",
      "page": 7,
      "group": "other-nouns",
      "kind": "word",
      "variants": [
        {
          "en": "o'clock",
          "zh": "點鐘"
        }
      ]
    },
    {
      "id": "w-adverbs-0",
      "en": "no",
      "zh": "不",
      "emoji": "✅",
      "source": "單字／肯定與否定",
      "page": 7,
      "group": "adverbs",
      "kind": "word",
      "variants": [
        {
          "en": "no",
          "zh": "不"
        }
      ]
    },
    {
      "id": "w-adverbs-1",
      "en": "not",
      "zh": "不是；不",
      "emoji": "✅",
      "source": "單字／肯定與否定",
      "page": 7,
      "group": "adverbs",
      "kind": "word",
      "variants": [
        {
          "en": "not",
          "zh": "不是；不"
        }
      ]
    },
    {
      "id": "w-adverbs-2",
      "en": "yes",
      "zh": "是的",
      "emoji": "✅",
      "source": "單字／肯定與否定",
      "page": 7,
      "group": "adverbs",
      "kind": "word",
      "variants": [
        {
          "en": "yes",
          "zh": "是的"
        }
      ]
    },
    {
      "id": "w-conjunctions-0",
      "en": "and",
      "zh": "和",
      "emoji": "🔗",
      "source": "單字／連接詞",
      "page": 7,
      "group": "conjunctions",
      "kind": "word",
      "variants": [
        {
          "en": "and",
          "zh": "和"
        }
      ]
    },
    {
      "id": "w-conjunctions-1",
      "en": "but",
      "zh": "但是",
      "emoji": "🔗",
      "source": "單字／連接詞",
      "page": 7,
      "group": "conjunctions",
      "kind": "word",
      "variants": [
        {
          "en": "but",
          "zh": "但是"
        }
      ]
    },
    {
      "id": "w-conjunctions-2",
      "en": "or",
      "zh": "或者",
      "emoji": "🔗",
      "source": "單字／連接詞",
      "page": 7,
      "group": "conjunctions",
      "kind": "word",
      "variants": [
        {
          "en": "or",
          "zh": "或者"
        }
      ]
    },
    {
      "id": "w-conjunctions-3",
      "en": "so",
      "zh": "所以",
      "emoji": "🔗",
      "source": "單字／連接詞",
      "page": 7,
      "group": "conjunctions",
      "kind": "word",
      "variants": [
        {
          "en": "so",
          "zh": "所以"
        }
      ]
    },
    {
      "id": "daily-1",
      "emoji": "💬",
      "source": "生活用語 第 1 組",
      "page": 8,
      "variants": [
        {
          "en": "Be quiet.",
          "zh": "安靜。"
        },
        {
          "en": "Quiet, please.",
          "zh": "請安靜。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Be quiet.",
      "zh": "安靜。"
    },
    {
      "id": "daily-2",
      "emoji": "💬",
      "source": "生活用語 第 2 組",
      "page": 8,
      "variants": [
        {
          "en": "Circle the word \"fish.\"",
          "zh": "圈出 fish 這個字。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Circle the word \"fish.\"",
      "zh": "圈出 fish 這個字。"
    },
    {
      "id": "daily-3",
      "emoji": "💬",
      "source": "生活用語 第 3 組",
      "page": 8,
      "variants": [
        {
          "en": "Come here, please.",
          "zh": "請來這裡。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Come here, please.",
      "zh": "請來這裡。"
    },
    {
      "id": "daily-4",
      "emoji": "💬",
      "source": "生活用語 第 4 組",
      "page": 8,
      "variants": [
        {
          "en": "Go back to your seat, please.",
          "zh": "請回你的座位。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Go back to your seat, please.",
      "zh": "請回你的座位。"
    },
    {
      "id": "daily-5",
      "emoji": "💬",
      "source": "生活用語 第 5 組",
      "page": 8,
      "variants": [
        {
          "en": "Listen!",
          "zh": "聽！"
        },
        {
          "en": "Listen to me!",
          "zh": "聽我說！"
        },
        {
          "en": "Listen carefully!",
          "zh": "仔細聽！"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Listen!",
      "zh": "聽！"
    },
    {
      "id": "daily-6",
      "emoji": "💬",
      "source": "生活用語 第 6 組",
      "page": 8,
      "variants": [
        {
          "en": "Look!",
          "zh": "看！"
        },
        {
          "en": "Look here!",
          "zh": "看這裡！"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Look!",
      "zh": "看！"
    },
    {
      "id": "daily-7",
      "emoji": "💬",
      "source": "生活用語 第 7 組",
      "page": 8,
      "variants": [
        {
          "en": "Open your book.",
          "zh": "打開你的書。"
        },
        {
          "en": "Close your book.",
          "zh": "關上你的書。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Open your book.",
      "zh": "打開你的書。"
    },
    {
      "id": "daily-8",
      "emoji": "💬",
      "source": "生活用語 第 8 組",
      "page": 8,
      "variants": [
        {
          "en": "Point to the word \"fish.\"",
          "zh": "指出 fish 這個字。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Point to the word \"fish.\"",
      "zh": "指出 fish 這個字。"
    },
    {
      "id": "daily-9",
      "emoji": "💬",
      "source": "生活用語 第 9 組",
      "page": 8,
      "variants": [
        {
          "en": "Raise your hand, please.",
          "zh": "請舉起你的手。"
        },
        {
          "en": "Put your hand down, please.",
          "zh": "請把手放下。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Raise your hand, please.",
      "zh": "請舉起你的手。"
    },
    {
      "id": "daily-10",
      "emoji": "💬",
      "source": "生活用語 第 10 組",
      "page": 8,
      "variants": [
        {
          "en": "Repeat.",
          "zh": "重複。"
        },
        {
          "en": "Repeat after me, please.",
          "zh": "請跟我重複。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Repeat.",
      "zh": "重複。"
    },
    {
      "id": "daily-11",
      "emoji": "💬",
      "source": "生活用語 第 11 組",
      "page": 8,
      "variants": [
        {
          "en": "Sit down, please.",
          "zh": "請坐下。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Sit down, please.",
      "zh": "請坐下。"
    },
    {
      "id": "daily-12",
      "emoji": "💬",
      "source": "生活用語 第 12 組",
      "page": 8,
      "variants": [
        {
          "en": "Stand up, please.",
          "zh": "請起立。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Stand up, please.",
      "zh": "請起立。"
    },
    {
      "id": "daily-13",
      "emoji": "💬",
      "source": "生活用語 第 13 組",
      "page": 8,
      "variants": [
        {
          "en": "Take out your book.",
          "zh": "拿出你的書。"
        },
        {
          "en": "Put away your book.",
          "zh": "收起你的書。"
        },
        {
          "en": "Take it out.",
          "zh": "拿出來。"
        },
        {
          "en": "Put it away.",
          "zh": "收起來。"
        }
      ],
      "group": "daily-練習室指令",
      "kind": "daily",
      "en": "Take out your book.",
      "zh": "拿出你的書。"
    },
    {
      "id": "daily-14",
      "emoji": "💬",
      "source": "生活用語 第 14 組",
      "page": 8,
      "variants": [
        {
          "en": "Good morning, Ms. Wang.",
          "zh": "王老師早安。"
        },
        {
          "en": "Good afternoon, Mr. Lee.",
          "zh": "李老師午安。"
        }
      ],
      "group": "daily-見面與鼓勵",
      "kind": "daily",
      "en": "Good morning, Ms. Wang.",
      "zh": "王老師早安。"
    },
    {
      "id": "daily-15",
      "emoji": "💬",
      "source": "生活用語 第 15 組",
      "page": 8,
      "variants": [
        {
          "en": "Goodbye.",
          "zh": "再見。"
        },
        {
          "en": "Bye. See you later.",
          "zh": "再見，待會見。"
        }
      ],
      "group": "daily-見面與鼓勵",
      "kind": "daily",
      "en": "Goodbye.",
      "zh": "再見。"
    },
    {
      "id": "daily-16",
      "emoji": "💬",
      "source": "生活用語 第 16 組",
      "page": 8,
      "variants": [
        {
          "en": "Hi!",
          "zh": "嗨！"
        },
        {
          "en": "Hello!",
          "zh": "哈囉！"
        }
      ],
      "group": "daily-見面與鼓勵",
      "kind": "daily",
      "en": "Hi!",
      "zh": "嗨！"
    },
    {
      "id": "daily-17",
      "emoji": "💬",
      "source": "生活用語 第 17 組",
      "page": 8,
      "variants": [
        {
          "en": "How are you?",
          "zh": "你好嗎？"
        },
        {
          "en": "I'm fine.",
          "zh": "我很好。"
        },
        {
          "en": "I'm OK.",
          "zh": "我很好。"
        },
        {
          "en": "I'm not OK.",
          "zh": "我不太好。"
        }
      ],
      "group": "daily-見面與鼓勵",
      "kind": "daily",
      "en": "How are you?",
      "zh": "你好嗎？"
    },
    {
      "id": "daily-18",
      "emoji": "💬",
      "source": "生活用語 第 18 組",
      "page": 8,
      "variants": [
        {
          "en": "Thank you.",
          "zh": "謝謝你。"
        },
        {
          "en": "You're welcome.",
          "zh": "不客氣。"
        }
      ],
      "group": "daily-見面與鼓勵",
      "kind": "daily",
      "en": "Thank you.",
      "zh": "謝謝你。"
    },
    {
      "id": "daily-19",
      "emoji": "💬",
      "source": "生活用語 第 19 組",
      "page": 8,
      "variants": [
        {
          "en": "Who's next?",
          "zh": "誰是下一個？"
        },
        {
          "en": "It's my turn.",
          "zh": "輪到我了。"
        }
      ],
      "group": "daily-見面與鼓勵",
      "kind": "daily",
      "en": "Who's next?",
      "zh": "誰是下一個？"
    },
    {
      "id": "daily-20",
      "emoji": "💬",
      "source": "生活用語 第 20 組",
      "page": 8,
      "variants": [
        {
          "en": "Are you ready?",
          "zh": "準備好了嗎？"
        },
        {
          "en": "Yes, I am.",
          "zh": "是的，我準備好了。"
        },
        {
          "en": "No, not yet.",
          "zh": "不，還沒。"
        }
      ],
      "group": "daily-見面與鼓勵",
      "kind": "daily",
      "en": "Are you ready?",
      "zh": "準備好了嗎？"
    },
    {
      "id": "daily-21",
      "emoji": "💬",
      "source": "生活用語 第 21 組",
      "page": 8,
      "variants": [
        {
          "en": "Good job.",
          "zh": "非常好。"
        },
        {
          "en": "Very good.",
          "zh": "非常好。"
        },
        {
          "en": "Thanks.",
          "zh": "謝謝。"
        },
        {
          "en": "Thank you.",
          "zh": "謝謝你。"
        }
      ],
      "group": "daily-見面與鼓勵",
      "kind": "daily",
      "en": "Good job.",
      "zh": "非常好。"
    },
    {
      "id": "daily-22",
      "emoji": "💬",
      "source": "生活用語 第 22 組",
      "page": 9,
      "variants": [
        {
          "en": "Come in, please.",
          "zh": "請進來。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Come in, please.",
      "zh": "請進來。"
    },
    {
      "id": "daily-23",
      "emoji": "💬",
      "source": "生活用語 第 23 組",
      "page": 9,
      "variants": [
        {
          "en": "Don't talk.",
          "zh": "不要說話。"
        },
        {
          "en": "Don't run.",
          "zh": "不要跑步。"
        },
        {
          "en": "Don't shout.",
          "zh": "不要喊叫。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Don't talk.",
      "zh": "不要說話。"
    },
    {
      "id": "daily-24",
      "emoji": "💬",
      "source": "生活用語 第 24 組",
      "page": 9,
      "variants": [
        {
          "en": "Let's go.",
          "zh": "我們走吧。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Let's go.",
      "zh": "我們走吧。"
    },
    {
      "id": "daily-25",
      "emoji": "💬",
      "source": "生活用語 第 25 組",
      "page": 9,
      "variants": [
        {
          "en": "Let's read together.",
          "zh": "我們一起來讀一讀。"
        },
        {
          "en": "Let's count together.",
          "zh": "我們一起來數一數。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Let's read together.",
      "zh": "我們一起來讀一讀。"
    },
    {
      "id": "daily-26",
      "emoji": "💬",
      "source": "生活用語 第 26 組",
      "page": 9,
      "variants": [
        {
          "en": "Line up, please.",
          "zh": "請排隊。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Line up, please.",
      "zh": "請排隊。"
    },
    {
      "id": "daily-27",
      "emoji": "💬",
      "source": "生活用語 第 27 組",
      "page": 9,
      "variants": [
        {
          "en": "Please turn to page 12.",
          "zh": "請翻到第十二頁。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Please turn to page 12.",
      "zh": "請翻到第十二頁。"
    },
    {
      "id": "daily-28",
      "emoji": "💬",
      "source": "生活用語 第 28 組",
      "page": 9,
      "variants": [
        {
          "en": "Put down your pencil.",
          "zh": "放下你的鉛筆。"
        },
        {
          "en": "Pick up your pencil.",
          "zh": "拿起你的鉛筆。"
        },
        {
          "en": "Put it down.",
          "zh": "放下來。"
        },
        {
          "en": "Pick it up.",
          "zh": "拿起來。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Put down your pencil.",
      "zh": "放下你的鉛筆。"
    },
    {
      "id": "daily-29",
      "emoji": "💬",
      "source": "生活用語 第 29 組",
      "page": 9,
      "variants": [
        {
          "en": "Show me your homework, please.",
          "zh": "請給我看你的功課。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Show me your homework, please.",
      "zh": "請給我看你的功課。"
    },
    {
      "id": "daily-30",
      "emoji": "💬",
      "source": "生活用語 第 30 組",
      "page": 9,
      "variants": [
        {
          "en": "Spell the word \"book.\"",
          "zh": "拼出 book 這個字。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Spell the word \"book.\"",
      "zh": "拼出 book 這個字。"
    },
    {
      "id": "daily-31",
      "emoji": "💬",
      "source": "生活用語 第 31 組",
      "page": 9,
      "variants": [
        {
          "en": "Time's up. Put away your pencils.",
          "zh": "時間到，收起你們的鉛筆。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Time's up. Put away your pencils.",
      "zh": "時間到，收起你們的鉛筆。"
    },
    {
      "id": "daily-32",
      "emoji": "💬",
      "source": "生活用語 第 32 組",
      "page": 9,
      "variants": [
        {
          "en": "Turn on the light, please.",
          "zh": "請開燈。"
        },
        {
          "en": "Turn off the light, please.",
          "zh": "請關燈。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Turn on the light, please.",
      "zh": "請開燈。"
    },
    {
      "id": "daily-33",
      "emoji": "💬",
      "source": "生活用語 第 33 組",
      "page": 9,
      "variants": [
        {
          "en": "Write down the word, please.",
          "zh": "請寫下這個字。"
        },
        {
          "en": "Write down the sentence, please.",
          "zh": "請寫下這個句子。"
        }
      ],
      "group": "daily-一起上課",
      "kind": "daily",
      "en": "Write down the word, please.",
      "zh": "請寫下這個字。"
    },
    {
      "id": "daily-34",
      "emoji": "💬",
      "source": "生活用語 第 34 組",
      "page": 9,
      "variants": [
        {
          "en": "I'm OK. How about you?",
          "zh": "我很好。你呢？"
        },
        {
          "en": "Great! Thanks.",
          "zh": "很好！謝謝。"
        }
      ],
      "group": "daily-禮貌與求助",
      "kind": "daily",
      "en": "I'm OK. How about you?",
      "zh": "我很好。你呢？"
    },
    {
      "id": "daily-35",
      "emoji": "💬",
      "source": "生活用語 第 35 組",
      "page": 9,
      "variants": [
        {
          "en": "Any questions?",
          "zh": "有任何問題嗎？"
        },
        {
          "en": "No, I don't have any questions.",
          "zh": "沒有，我沒有問題。"
        },
        {
          "en": "No, we don't have any questions.",
          "zh": "沒有，我們沒有問題。"
        },
        {
          "en": "Yes, how much time do we have?",
          "zh": "有，我們還有多少時間呢？"
        }
      ],
      "group": "daily-禮貌與求助",
      "kind": "daily",
      "en": "Any questions?",
      "zh": "有任何問題嗎？"
    },
    {
      "id": "daily-36",
      "emoji": "💬",
      "source": "生活用語 第 36 組",
      "page": 9,
      "variants": [
        {
          "en": "May I go to the bathroom?",
          "zh": "我可以去洗手間嗎？"
        },
        {
          "en": "May I go to the restroom?",
          "zh": "我可以去洗手間嗎？"
        },
        {
          "en": "Sure. Go ahead.",
          "zh": "可以，去吧。"
        }
      ],
      "group": "daily-禮貌與求助",
      "kind": "daily",
      "en": "May I go to the bathroom?",
      "zh": "我可以去洗手間嗎？"
    },
    {
      "id": "daily-37",
      "emoji": "💬",
      "source": "生活用語 第 37 組",
      "page": 9,
      "variants": [
        {
          "en": "Which one do you like?",
          "zh": "你喜歡哪一個？"
        },
        {
          "en": "This one.",
          "zh": "這一個。"
        },
        {
          "en": "That one.",
          "zh": "那一個。"
        }
      ],
      "group": "daily-禮貌與求助",
      "kind": "daily",
      "en": "Which one do you like?",
      "zh": "你喜歡哪一個？"
    },
    {
      "id": "daily-38",
      "emoji": "💬",
      "source": "生活用語 第 38 組",
      "page": 9,
      "variants": [
        {
          "en": "Excuse me. Where is the park?",
          "zh": "不好意思，公園在哪裡？"
        },
        {
          "en": "Sure. It's here.",
          "zh": "沒問題，它在這裡。"
        }
      ],
      "group": "daily-禮貌與求助",
      "kind": "daily",
      "en": "Excuse me. Where is the park?",
      "zh": "不好意思，公園在哪裡？"
    },
    {
      "id": "daily-39",
      "emoji": "💬",
      "source": "生活用語 第 39 組",
      "page": 9,
      "variants": [
        {
          "en": "Sorry, I'm late.",
          "zh": "對不起，我遲到了。"
        },
        {
          "en": "Don't do it again.",
          "zh": "下次別再這樣了。"
        }
      ],
      "group": "daily-禮貌與求助",
      "kind": "daily",
      "en": "Sorry, I'm late.",
      "zh": "對不起，我遲到了。"
    },
    {
      "id": "daily-40",
      "emoji": "💬",
      "source": "生活用語 第 40 組",
      "page": 9,
      "variants": [
        {
          "en": "Nice!",
          "zh": "很棒！"
        },
        {
          "en": "Great!",
          "zh": "很棒！"
        },
        {
          "en": "Thanks a lot.",
          "zh": "非常感謝。"
        },
        {
          "en": "Thank you very much.",
          "zh": "非常感謝你。"
        }
      ],
      "group": "daily-禮貌與求助",
      "kind": "daily",
      "en": "Nice!",
      "zh": "很棒！"
    },
    {
      "id": "daily-41",
      "emoji": "💬",
      "source": "生活用語 第 41 組",
      "page": 9,
      "variants": [
        {
          "en": "Good idea.",
          "zh": "好主意。"
        },
        {
          "en": "Thank you.",
          "zh": "謝謝你。"
        }
      ],
      "group": "daily-禮貌與求助",
      "kind": "daily",
      "en": "Good idea.",
      "zh": "好主意。"
    },
    {
      "id": "pattern-1",
      "emoji": "🎙️",
      "source": "簡易句型 第 1 組",
      "page": 10,
      "variants": [
        {
          "en": "This is my book.",
          "zh": "這是我的書。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "This is my book.",
      "zh": "這是我的書。"
    },
    {
      "id": "pattern-2",
      "emoji": "🎙️",
      "source": "簡易句型 第 2 組",
      "page": 10,
      "variants": [
        {
          "en": "Is this a banana?",
          "zh": "這是一根香蕉嗎？"
        },
        {
          "en": "Is that a banana?",
          "zh": "那是一根香蕉嗎？"
        },
        {
          "en": "Is this an apple?",
          "zh": "這是一顆蘋果嗎？"
        },
        {
          "en": "Is that an apple?",
          "zh": "那是一顆蘋果嗎？"
        },
        {
          "en": "Yes, it is.",
          "zh": "是的。"
        },
        {
          "en": "No, it's not.",
          "zh": "不是。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "Is this a banana?",
      "zh": "這是一根香蕉嗎？"
    },
    {
      "id": "pattern-3",
      "emoji": "🎙️",
      "source": "簡易句型 第 3 組",
      "page": 10,
      "variants": [
        {
          "en": "What's your name?",
          "zh": "你叫什麼名字？"
        },
        {
          "en": "My name is Andy.",
          "zh": "我的名字叫 Andy。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "What's your name?",
      "zh": "你叫什麼名字？"
    },
    {
      "id": "pattern-4",
      "emoji": "🎙️",
      "source": "簡易句型 第 4 組",
      "page": 10,
      "variants": [
        {
          "en": "What's this?",
          "zh": "這是什麼？"
        },
        {
          "en": "What's that?",
          "zh": "那是什麼？"
        },
        {
          "en": "It's a book.",
          "zh": "它是一本書。"
        },
        {
          "en": "It's a hat.",
          "zh": "它是一頂帽子。"
        },
        {
          "en": "It's an apple.",
          "zh": "它是一顆蘋果。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "What's this?",
      "zh": "這是什麼？"
    },
    {
      "id": "pattern-5",
      "emoji": "🎙️",
      "source": "簡易句型 第 5 組",
      "page": 10,
      "variants": [
        {
          "en": "What is it?",
          "zh": "它是什麼？"
        },
        {
          "en": "It's a book.",
          "zh": "它是一本書。"
        },
        {
          "en": "It's an apple.",
          "zh": "它是一顆蘋果。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "What is it?",
      "zh": "它是什麼？"
    },
    {
      "id": "pattern-6",
      "emoji": "🎙️",
      "source": "簡易句型 第 6 組",
      "page": 10,
      "variants": [
        {
          "en": "Who is he?",
          "zh": "他是誰？"
        },
        {
          "en": "Who is she?",
          "zh": "她是誰？"
        },
        {
          "en": "He is my dad.",
          "zh": "他是我的爸爸。"
        },
        {
          "en": "He is my father.",
          "zh": "他是我的爸爸。"
        },
        {
          "en": "She is my mom.",
          "zh": "她是我的媽媽。"
        },
        {
          "en": "She is my mother.",
          "zh": "她是我的媽媽。"
        },
        {
          "en": "He is my brother.",
          "zh": "他是我的兄弟。"
        },
        {
          "en": "She is my sister.",
          "zh": "她是我的姐妹。"
        },
        {
          "en": "He is my teacher.",
          "zh": "他是我的老師。"
        },
        {
          "en": "She is my teacher.",
          "zh": "她是我的老師。"
        },
        {
          "en": "He is my friend.",
          "zh": "他是我的朋友。"
        },
        {
          "en": "She is my friend.",
          "zh": "她是我的朋友。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "Who is he?",
      "zh": "他是誰？"
    },
    {
      "id": "pattern-7",
      "emoji": "🎙️",
      "source": "簡易句型 第 7 組",
      "page": 10,
      "variants": [
        {
          "en": "Are you a teacher?",
          "zh": "你是一位老師嗎？"
        },
        {
          "en": "Yes, I am.",
          "zh": "是的，我是。"
        },
        {
          "en": "No, I'm not.",
          "zh": "不，我不是。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "Are you a teacher?",
      "zh": "你是一位老師嗎？"
    },
    {
      "id": "pattern-8",
      "emoji": "🎙️",
      "source": "簡易句型 第 8 組",
      "page": 10,
      "variants": [
        {
          "en": "Is he a doctor?",
          "zh": "他是一位醫生嗎？"
        },
        {
          "en": "Is she a doctor?",
          "zh": "她是一位醫生嗎？"
        },
        {
          "en": "Yes, he is.",
          "zh": "是的，他是。"
        },
        {
          "en": "Yes, she is.",
          "zh": "是的，她是。"
        },
        {
          "en": "No, he isn't.",
          "zh": "不，他不是。"
        },
        {
          "en": "No, she isn't.",
          "zh": "不，她不是。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "Is he a doctor?",
      "zh": "他是一位醫生嗎？"
    },
    {
      "id": "pattern-9",
      "emoji": "🎙️",
      "source": "簡易句型 第 9 組",
      "page": 10,
      "variants": [
        {
          "en": "Are these bears?",
          "zh": "這些是熊嗎？"
        },
        {
          "en": "Are those bears?",
          "zh": "那些是熊嗎？"
        },
        {
          "en": "Yes, they are.",
          "zh": "是的，牠們是。"
        },
        {
          "en": "No, they aren't.",
          "zh": "不，牠們不是。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "Are these bears?",
      "zh": "這些是熊嗎？"
    },
    {
      "id": "pattern-10",
      "emoji": "🎙️",
      "source": "簡易句型 第 10 組",
      "page": 10,
      "variants": [
        {
          "en": "What are these?",
          "zh": "這些是什麼？"
        },
        {
          "en": "What are those?",
          "zh": "那些是什麼？"
        },
        {
          "en": "They are tigers.",
          "zh": "牠們是老虎。"
        },
        {
          "en": "They are erasers.",
          "zh": "它們是橡皮擦。"
        }
      ],
      "group": "pattern-認識人與物",
      "kind": "pattern",
      "en": "What are these?",
      "zh": "這些是什麼？"
    },
    {
      "id": "pattern-11",
      "emoji": "🎙️",
      "source": "簡易句型 第 11 組",
      "page": 10,
      "variants": [
        {
          "en": "I am tall.",
          "zh": "我很高。"
        },
        {
          "en": "He is tall.",
          "zh": "他很高。"
        },
        {
          "en": "She is tall.",
          "zh": "她很高。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "I am tall.",
      "zh": "我很高。"
    },
    {
      "id": "pattern-12",
      "emoji": "🎙️",
      "source": "簡易句型 第 12 組",
      "page": 10,
      "variants": [
        {
          "en": "Is he tall?",
          "zh": "他很高嗎？"
        },
        {
          "en": "Is she tall?",
          "zh": "她很高嗎？"
        },
        {
          "en": "Yes, he is.",
          "zh": "是的，他很高。"
        },
        {
          "en": "Yes, she is.",
          "zh": "是的，她很高。"
        },
        {
          "en": "No, he isn't.",
          "zh": "不，他不高。"
        },
        {
          "en": "No, she isn't.",
          "zh": "不，她不高。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "Is he tall?",
      "zh": "他很高嗎？"
    },
    {
      "id": "pattern-13",
      "emoji": "🎙️",
      "source": "簡易句型 第 13 組",
      "page": 10,
      "variants": [
        {
          "en": "Are you happy?",
          "zh": "你快樂嗎？"
        },
        {
          "en": "Yes, I am.",
          "zh": "是的，我很快樂。"
        },
        {
          "en": "No, I'm not.",
          "zh": "不，我不快樂。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "Are you happy?",
      "zh": "你快樂嗎？"
    },
    {
      "id": "pattern-14",
      "emoji": "🎙️",
      "source": "簡易句型 第 14 組",
      "page": 11,
      "variants": [
        {
          "en": "Do you like apples?",
          "zh": "你喜歡蘋果嗎？"
        },
        {
          "en": "Yes, I do.",
          "zh": "是的，我喜歡。"
        },
        {
          "en": "No, I don't.",
          "zh": "不，我不喜歡。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "Do you like apples?",
      "zh": "你喜歡蘋果嗎？"
    },
    {
      "id": "pattern-15",
      "emoji": "🎙️",
      "source": "簡易句型 第 15 組",
      "page": 11,
      "variants": [
        {
          "en": "Does he like bananas?",
          "zh": "他喜歡香蕉嗎？"
        },
        {
          "en": "Does she like bananas?",
          "zh": "她喜歡香蕉嗎？"
        },
        {
          "en": "Yes, he does.",
          "zh": "是的，他喜歡。"
        },
        {
          "en": "Yes, she does.",
          "zh": "是的，她喜歡。"
        },
        {
          "en": "No, he doesn't.",
          "zh": "不，他不喜歡。"
        },
        {
          "en": "No, she doesn't.",
          "zh": "不，她不喜歡。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "Does he like bananas?",
      "zh": "他喜歡香蕉嗎？"
    },
    {
      "id": "pattern-16",
      "emoji": "🎙️",
      "source": "簡易句型 第 16 組",
      "page": 11,
      "variants": [
        {
          "en": "Can you dance?",
          "zh": "你會跳舞嗎？"
        },
        {
          "en": "Can he dance?",
          "zh": "他會跳舞嗎？"
        },
        {
          "en": "Can she dance?",
          "zh": "她會跳舞嗎？"
        },
        {
          "en": "Yes, I can.",
          "zh": "是的，我會。"
        },
        {
          "en": "Yes, he can.",
          "zh": "是的，他會。"
        },
        {
          "en": "Yes, she can.",
          "zh": "是的，她會。"
        },
        {
          "en": "No, I can't.",
          "zh": "不，我不會。"
        },
        {
          "en": "No, he can't.",
          "zh": "不，他不會。"
        },
        {
          "en": "No, she can't.",
          "zh": "不，她不會。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "Can you dance?",
      "zh": "你會跳舞嗎？"
    },
    {
      "id": "pattern-17",
      "emoji": "🎙️",
      "source": "簡易句型 第 17 組",
      "page": 11,
      "variants": [
        {
          "en": "What can you do?",
          "zh": "你會做什麼？"
        },
        {
          "en": "What can he do?",
          "zh": "他會做什麼？"
        },
        {
          "en": "What can she do?",
          "zh": "她會做什麼？"
        },
        {
          "en": "I can swim.",
          "zh": "我會游泳。"
        },
        {
          "en": "He can swim.",
          "zh": "他會游泳。"
        },
        {
          "en": "She can swim.",
          "zh": "她會游泳。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "What can you do?",
      "zh": "你會做什麼？"
    },
    {
      "id": "pattern-18",
      "emoji": "🎙️",
      "source": "簡易句型 第 18 組",
      "page": 11,
      "variants": [
        {
          "en": "What are you doing now?",
          "zh": "你現在在做什麼？"
        },
        {
          "en": "I'm reading.",
          "zh": "我正在閱讀。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "What are you doing now?",
      "zh": "你現在在做什麼？"
    },
    {
      "id": "pattern-19",
      "emoji": "🎙️",
      "source": "簡易句型 第 19 組",
      "page": 11,
      "variants": [
        {
          "en": "What is he doing now?",
          "zh": "他現在在做什麼？"
        },
        {
          "en": "What is she doing now?",
          "zh": "她現在在做什麼？"
        },
        {
          "en": "He's writing.",
          "zh": "他正在寫字。"
        },
        {
          "en": "She's writing.",
          "zh": "她正在寫字。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "What is he doing now?",
      "zh": "他現在在做什麼？"
    },
    {
      "id": "pattern-20",
      "emoji": "🎙️",
      "source": "簡易句型 第 20 組",
      "page": 11,
      "variants": [
        {
          "en": "What do you like?",
          "zh": "你喜歡什麼？"
        },
        {
          "en": "I like dogs.",
          "zh": "我喜歡狗。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "What do you like?",
      "zh": "你喜歡什麼？"
    },
    {
      "id": "pattern-21",
      "emoji": "🎙️",
      "source": "簡易句型 第 21 組",
      "page": 11,
      "variants": [
        {
          "en": "What does he like?",
          "zh": "他喜歡什麼？"
        },
        {
          "en": "What does she like?",
          "zh": "她喜歡什麼？"
        },
        {
          "en": "He likes cats.",
          "zh": "他喜歡貓。"
        },
        {
          "en": "She likes cats.",
          "zh": "她喜歡貓。"
        }
      ],
      "group": "pattern-心情喜好與才藝",
      "kind": "pattern",
      "en": "What does he like?",
      "zh": "他喜歡什麼？"
    },
    {
      "id": "pattern-22",
      "emoji": "🎙️",
      "source": "簡易句型 第 22 組",
      "page": 11,
      "variants": [
        {
          "en": "Where is the pen?",
          "zh": "原子筆在哪裡？"
        },
        {
          "en": "It's in the box.",
          "zh": "它在盒子裡面。"
        },
        {
          "en": "It's on the box.",
          "zh": "它在盒子上面。"
        },
        {
          "en": "It's under the box.",
          "zh": "它在盒子下面。"
        }
      ],
      "group": "pattern-位置與年齡",
      "kind": "pattern",
      "en": "Where is the pen?",
      "zh": "原子筆在哪裡？"
    },
    {
      "id": "pattern-23",
      "emoji": "🎙️",
      "source": "簡易句型 第 23 組",
      "page": 11,
      "variants": [
        {
          "en": "Where are the books?",
          "zh": "書本在哪裡？"
        },
        {
          "en": "They're in the desk.",
          "zh": "它們在書桌裡面。"
        },
        {
          "en": "They're on the desk.",
          "zh": "它們在書桌上面。"
        },
        {
          "en": "They're under the desk.",
          "zh": "它們在書桌下面。"
        }
      ],
      "group": "pattern-位置與年齡",
      "kind": "pattern",
      "en": "Where are the books?",
      "zh": "書本在哪裡？"
    },
    {
      "id": "pattern-24",
      "emoji": "🎙️",
      "source": "簡易句型 第 24 組",
      "page": 11,
      "variants": [
        {
          "en": "Where are you?",
          "zh": "你在哪裡？"
        },
        {
          "en": "I'm in the park.",
          "zh": "我在公園裡。"
        },
        {
          "en": "I'm at school.",
          "zh": "我在學校。"
        }
      ],
      "group": "pattern-位置與年齡",
      "kind": "pattern",
      "en": "Where are you?",
      "zh": "你在哪裡？"
    },
    {
      "id": "pattern-25",
      "emoji": "🎙️",
      "source": "簡易句型 第 25 組",
      "page": 11,
      "variants": [
        {
          "en": "Where is he?",
          "zh": "他在哪裡？"
        },
        {
          "en": "Where is she?",
          "zh": "她在哪裡？"
        },
        {
          "en": "He is in the park.",
          "zh": "他在公園裡。"
        },
        {
          "en": "She is in the park.",
          "zh": "她在公園裡。"
        },
        {
          "en": "He is at school.",
          "zh": "他在學校。"
        },
        {
          "en": "She is at school.",
          "zh": "她在學校。"
        }
      ],
      "group": "pattern-位置與年齡",
      "kind": "pattern",
      "en": "Where is he?",
      "zh": "他在哪裡？"
    },
    {
      "id": "pattern-26",
      "emoji": "🎙️",
      "source": "簡易句型 第 26 組",
      "page": 11,
      "variants": [
        {
          "en": "Where are you going?",
          "zh": "你要去哪裡？"
        },
        {
          "en": "I'm going to the park.",
          "zh": "我要去公園。"
        }
      ],
      "group": "pattern-位置與年齡",
      "kind": "pattern",
      "en": "Where are you going?",
      "zh": "你要去哪裡？"
    },
    {
      "id": "pattern-27",
      "emoji": "🎙️",
      "source": "簡易句型 第 27 組",
      "page": 11,
      "variants": [
        {
          "en": "How old are you?",
          "zh": "你幾歲？"
        },
        {
          "en": "I'm eight years old.",
          "zh": "我八歲。"
        }
      ],
      "group": "pattern-位置與年齡",
      "kind": "pattern",
      "en": "How old are you?",
      "zh": "你幾歲？"
    },
    {
      "id": "pattern-28",
      "emoji": "🎙️",
      "source": "簡易句型 第 28 組",
      "page": 11,
      "variants": [
        {
          "en": "How old is he?",
          "zh": "他幾歲？"
        },
        {
          "en": "How old is she?",
          "zh": "她幾歲？"
        },
        {
          "en": "He is ten years old.",
          "zh": "他十歲。"
        },
        {
          "en": "She is ten years old.",
          "zh": "她十歲。"
        }
      ],
      "group": "pattern-位置與年齡",
      "kind": "pattern",
      "en": "How old is he?",
      "zh": "他幾歲？"
    },
    {
      "id": "pattern-29",
      "emoji": "🎙️",
      "source": "簡易句型 第 29 組",
      "page": 12,
      "variants": [
        {
          "en": "What time is it?",
          "zh": "現在幾點？"
        },
        {
          "en": "It's one o'clock.",
          "zh": "現在一點。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "What time is it?",
      "zh": "現在幾點？"
    },
    {
      "id": "pattern-30",
      "emoji": "🎙️",
      "source": "簡易句型 第 30 組",
      "page": 12,
      "variants": [
        {
          "en": "Is it four o'clock?",
          "zh": "四點了嗎？"
        },
        {
          "en": "Yes, it is.",
          "zh": "是的。"
        },
        {
          "en": "No, it isn't.",
          "zh": "不是。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "Is it four o'clock?",
      "zh": "四點了嗎？"
    },
    {
      "id": "pattern-31",
      "emoji": "🎙️",
      "source": "簡易句型 第 31 組",
      "page": 12,
      "variants": [
        {
          "en": "What color is it?",
          "zh": "是什麼顏色？"
        },
        {
          "en": "It's blue.",
          "zh": "是藍色。"
        },
        {
          "en": "It's green.",
          "zh": "是綠色。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "What color is it?",
      "zh": "是什麼顏色？"
    },
    {
      "id": "pattern-32",
      "emoji": "🎙️",
      "source": "簡易句型 第 32 組",
      "page": 12,
      "variants": [
        {
          "en": "What day is today?",
          "zh": "今天是星期幾？"
        },
        {
          "en": "It's Sunday.",
          "zh": "今天是星期日。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "What day is today?",
      "zh": "今天是星期幾？"
    },
    {
      "id": "pattern-33",
      "emoji": "🎙️",
      "source": "簡易句型 第 33 組",
      "page": 12,
      "variants": [
        {
          "en": "Is it Monday today?",
          "zh": "今天是星期一嗎？"
        },
        {
          "en": "Yes, it is.",
          "zh": "是的。"
        },
        {
          "en": "No, it isn't.",
          "zh": "不是。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "Is it Monday today?",
      "zh": "今天是星期一嗎？"
    },
    {
      "id": "pattern-34",
      "emoji": "🎙️",
      "source": "簡易句型 第 34 組",
      "page": 12,
      "variants": [
        {
          "en": "How's the weather?",
          "zh": "天氣如何呢？"
        },
        {
          "en": "It's sunny.",
          "zh": "天氣晴朗。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "How's the weather?",
      "zh": "天氣如何呢？"
    },
    {
      "id": "pattern-35",
      "emoji": "🎙️",
      "source": "簡易句型 第 35 組",
      "page": 12,
      "variants": [
        {
          "en": "How many pencils are there?",
          "zh": "有幾枝鉛筆呢？"
        },
        {
          "en": "There are three.",
          "zh": "有三枝。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "How many pencils are there?",
      "zh": "有幾枝鉛筆呢？"
    },
    {
      "id": "pattern-36",
      "emoji": "🎙️",
      "source": "簡易句型 第 36 組",
      "page": 12,
      "variants": [
        {
          "en": "How many balls do you want?",
          "zh": "你想要幾顆球？"
        },
        {
          "en": "I want two.",
          "zh": "我想要兩顆。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "How many balls do you want?",
      "zh": "你想要幾顆球？"
    },
    {
      "id": "pattern-37",
      "emoji": "🎙️",
      "source": "簡易句型 第 37 組",
      "page": 12,
      "variants": [
        {
          "en": "How much is it?",
          "zh": "這多少錢？"
        },
        {
          "en": "It's five dollars.",
          "zh": "五塊錢。"
        }
      ],
      "group": "pattern-時間天氣與數量",
      "kind": "pattern",
      "en": "How much is it?",
      "zh": "這多少錢？"
    }
  ]
};
