const cards = [
  {
    word: "absorb",
    definition: "吸收；理解",
    pos: "v.",
    example: "The sponge can absorb a lot of water.",
    analysis: "ab- (向下、加強) + sorb (吸收) = 吸收"
  },
  {
    word: "compose",
    definition: "組成；創作",
    pos: "v.",
    example: "She will compose a new song for the concert.",
    analysis: "com- (一起) + pose (放置) = 組成"
  },
  {
    word: "device",
    definition: "裝置；器具",
    pos: "n.",
    example: "The new device helps students learn faster.",
    analysis: "de- (向下) + vice (轉換) = 裝置"
  },
  {
    word: "expand",
    definition: "擴大；展開",
    pos: "v.",
    example: "The city continues to expand rapidly.",
    analysis: "ex- (向外) + pand (伸展) = 擴大"
  },
  {
    word: "fragile",
    definition: "易碎的；脆弱的",
    pos: "adj.",
    example: "The glass vase is very fragile.",
    analysis: "frag- (破裂) + -ile (形容詞) = 易碎的"
  },
  {
    word: "genuine",
    definition: "真誠的；真正的",
    pos: "adj.",
    example: "Her apology sounded genuine.",
    analysis: "gene- (出生、產生) + -ine = 真正的"
  },
  {
    word: "harmony",
    definition: "和諧；協調",
    pos: "n.",
    example: "The choir sang in perfect harmony.",
    analysis: "harm- (傷害) + -ony (名詞) 表示調和"
  },
  {
    word: "ignore",
    definition: "忽視；不理會",
    pos: "v.",
    example: "Please do not ignore your homework.",
    analysis: "ig- (不) + nore (知道) = 不知道、忽視"
  },
  {
    word: "justify",
    definition: "證明⋯正當；使合理",
    pos: "v.",
    example: "He had to justify his absence to the teacher.",
    analysis: "just- (正義) + -ify (使成為) = 證明正當"
  },
  {
    word: "lecture",
    definition: "演講；講課",
    pos: "n.",
    example: "The professor gave a fascinating lecture.",
    analysis: "lect- (選擇、收集) + -ure = 演講"
  }
];

const wordEl = document.getElementById("word");
const definitionEl = document.getElementById("definition");
const posEl = document.getElementById("pos");
const exampleEl = document.getElementById("example");
const analysisEl = document.getElementById("analysis");
const cardEl = document.getElementById("word-card");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let isFlipped = false;

function renderCard(index) {
  const card = cards[index];
  wordEl.textContent = card.word;
  definitionEl.textContent = card.definition;
  posEl.textContent = card.pos;
  exampleEl.textContent = card.example;
  analysisEl.textContent = card.analysis;
  if (isFlipped) {
    cardEl.classList.add("is-flipped");
  } else {
    cardEl.classList.remove("is-flipped");
  }
}

function showNext() {
  currentIndex = (currentIndex + 1) % cards.length;
  isFlipped = false;
  renderCard(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  isFlipped = false;
  renderCard(currentIndex);
}

cardEl.addEventListener("click", () => {
  isFlipped = !isFlipped;
  cardEl.classList.toggle("is-flipped", isFlipped);
});

nextBtn.addEventListener("click", () => {
  showNext();
});

prevBtn.addEventListener("click", () => {
  showPrev();
});

renderCard(currentIndex);
