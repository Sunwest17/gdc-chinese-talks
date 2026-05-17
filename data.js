const talks = [
  {
    year: 2026,
    category: "音频",
    categoryClass: "category-audio",
    title: "《Helldivers 2》如何用真诚配乐承载讽刺",
    original: "'A Cup of Liber-Tea': Scoring Satire with Sincerity in 'Helldivers 2' Clip #2",
    speaker: "Wilbert Roget / GDC 2025 clip",
    source: "https://www.youtube.com/shorts/Ug4TS5mv9h8",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=Ug4TS5mv9h8",
    transcriptMeta: "16 snippets / English auto-generated / 603 chars",
    tags: ["配乐", "讽刺", "科幻音色"],
    note: "这段内容讨论《Helldivers 2》中 Illuminate 阵营音乐的创作逻辑：音乐并不只追求异域感，而是围绕“时间操控”和高科技文明建立一套内部一致的声音词汇。",
    report: "演讲者把阵营设定翻译为音乐规则：弦乐、独奏大提琴、世界乐器、处理过的人声与合成音色共同构成先进文明的听觉身份。关键不是随意制造怪异，而是让异常结构仍然自洽，让玩家感到这个文明与人类不同但完整存在。",
    points: ["阵营音乐应从世界观逻辑出发，而不是只套用类型标签。", "讽刺作品里的音乐可以保持真诚，从而让荒诞设定更可信。", "“异常但自洽”的结构能强化非人类文明的身份。"],
    terms: ["musical vocabulary / 音乐词汇", "processed vocals / 处理人声", "internal coherence / 内部一致性"]
  },
  {
    year: 2026,
    category: "无障碍",
    categoryClass: "category-ux",
    title: "《LEGO Horizon Adventures》中的边际改进式无障碍设计",
    original: "Building Big Impact, One Brick at a Time: Marginal Gains in 'LEGO Horizon Adventures' #1",
    speaker: "Adam Russell / Studio Gobo",
    source: "https://www.youtube.com/shorts/OD7PaD8k3Tk",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=OD7PaD8k3Tk",
    transcriptMeta: "20 snippets / English auto-generated / 806 chars",
    tags: ["Accessibility", "新手体验", "目标辅助"],
    note: "这段视频强调无障碍不是单一大功能，而是对现有功能持续做边际改进，让更多玩家能以舒适方式进入游戏。",
    report: "演讲者以瞄准模式为例说明：玩家可以调整攻击吸附到有效目标的范围，包括敌人弱点。这种设置尤其适合《LEGO Horizon Adventures》的目标受众，因为它可能是某些玩家的第一款电子游戏。报告重点在于，无障碍设计应被视作核心体验质量的一部分，而不是额外补丁。",
    points: ["无障碍常由许多小改进累积，而非一次性解决。", "目标辅助、输入宽容度和反馈清晰度会直接影响新手第一印象。", "面向年轻或新玩家时，默认体验应尽量减少挫败。"],
    terms: ["accessibility / 无障碍", "marginal gains / 边际改进", "aim assist / 瞄准辅助"]
  },
  {
    year: 2026,
    category: "叙事",
    categoryClass: "category-narrative",
    title: "更新角色原型：写作者如何把个人痕迹放进角色",
    original: "Babygirls, Daddies, and Himbos: Updating Archetypes for Compelling Characters #2",
    speaker: "Alexa Ray Corriea / Gearbox",
    source: "https://www.youtube.com/shorts/teHSnCOTWzA",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=teHSnCOTWzA",
    transcriptMeta: "20 snippets / English auto-generated / 851 chars",
    tags: ["角色写作", "原型", "作者性"],
    note: "这段内容讨论为什么写作者会写作：他们想让某些情感、记忆和个人趣味留存下来，并通过角色与台词表达。",
    report: "演讲者把角色写作从“套用原型”拉回创作者自身：不同背景、偏好和私密趣味会进入作品，成为角色真实感的一部分。她举到自己会在不同项目里藏入某种变体台词，这说明角色原型可以被当代语境和作者习惯重新激活。",
    points: ["角色原型不是固定模板，而是可被当代语言和作者经验更新。", "创作者的小习惯能让作品之间形成隐秘连续性。", "强角色往往来自类型识别与个人表达之间的张力。"],
    terms: ["archetype / 原型", "character writing / 角色写作", "authorial trace / 作者痕迹"]
  },
  {
    year: 2026,
    category: "音频",
    categoryClass: "category-audio",
    title: "重新想象高幻想：《Eternal Strands》的配乐规则",
    original: "Reimagining High Fantasy: The Score to 'Eternal Strands'",
    speaker: "Austin Wintory / Independent",
    source: "https://www.youtube.com/shorts/d4C2fb6yi-s",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=d4C2fb6yi-s",
    transcriptMeta: "17 snippets / English auto-generated / 689 chars",
    tags: ["高幻想", "配乐限制", "纹理写作"],
    note: "这段视频聚焦一个创作限制：基本不使用合成器，但仍要为游戏建立大面积的纹理化、情绪化音乐。",
    report: "演讲者提出“无合成器”的规则，迫使团队用传统或声学材料创造现代质感。这里的设计价值在于：限制不是削弱表达，而是让配乐形成清晰语法。即使出现华丽的大提琴独奏，也应像是音乐词汇内部的自然偏移，而不是跳出世界观的装饰。",
    points: ["限制能帮助幻想世界建立更清楚的声音身份。", "纹理化音乐不一定依赖合成器，也可以来自演奏和编曲。", "配乐规则应允许例外，但例外也要服务整体语法。"],
    terms: ["score / 配乐", "textural writing / 纹理写作", "creative constraint / 创作限制"]
  },
  {
    year: 2026,
    category: "团队领导",
    categoryClass: "category-leadership",
    title: "神经多样性与游戏行业领导力",
    original: "Embracing Neurodiversity and Leadership in the Game Industry",
    speaker: "Stuart Massie / GDC 2025 panel clip",
    source: "https://www.youtube.com/shorts/vRehu7ke_EE",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=vRehu7ke_EE",
    transcriptMeta: "22 snippets / English auto-generated / 820 chars",
    tags: ["Neurodiversity", "领导力", "信任"],
    note: "这段内容从个人经历出发，讨论神经多样性者在职业成长、问题解决、信任建立和领导关系中的挑战与优势。",
    report: "演讲者明确说自己不是专家，而是以神经多样性成长经历来反思职业表现。他把特殊项目、解决问题、获得上级信任和工作伦理联系起来，提示管理者不要只看到困难，也要看到不同认知方式带来的独特贡献。",
    points: ["神经多样性讨论应允许个人叙事，而不是只停留在抽象政策。", "信任和清晰预期能让不同认知方式转化为团队优势。", "领导者需要识别成员的支持需求和独特能力。"],
    terms: ["neurodiversity / 神经多样性", "trust / 信任", "work ethic / 工作伦理"]
  },
  {
    year: 2026,
    category: "QA 与叙事",
    categoryClass: "category-production",
    title: "《Avowed》分支叙事：QA 从测试转向分析",
    original: "'Avowed' Branching Narratives: Shifting from QA Testing to Analyzing Clip",
    speaker: "David Benefield / Obsidian Entertainment",
    source: "https://www.youtube.com/shorts/Y2mn_kcT47w",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=Y2mn_kcT47w",
    transcriptMeta: "27 snippets / English auto-generated / 966 chars",
    tags: ["QA", "分支叙事", "Unreal Blueprint"],
    note: "这段视频展示 QA 如何不只是验证结果，而是直接进入脚本条件、变量组合和蓝图逻辑，分析任务在各种排列下应该如何运行。",
    report: "片段中的团队一起查看任务 NPC 何时出现、何时进入 forced stasis，并检查多个变量如何控制分支。QA 因此从“看见实际发生了什么”推进到“理解系统本应如何工作”。这种方式能更早发现未覆盖排列，也能把设计、脚本和测试变成同一场逻辑审查。",
    points: ["复杂分支叙事需要 QA 理解条件逻辑，而不只是跑流程。", "实时审查蓝图或脚本能暴露隐藏排列和遗漏状态。", "QA 从测试者转为分析者后，可以更早参与质量设计。"],
    terms: ["branching narrative / 分支叙事", "conditionals / 条件逻辑", "forced stasis / 强制静止状态"]
  },
  {
    year: 2026,
    category: "商业策略",
    categoryClass: "category-business",
    title: "众筹最佳实践：用关注者数量反推上线准备",
    original: "Crowdfunding Best Practices",
    speaker: "Thomas Bidaux / ICO",
    source: "https://www.youtube.com/shorts/_09SrR5y9tw",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=_09SrR5y9tw",
    transcriptMeta: "24 snippets / English auto-generated / 937 chars",
    tags: ["众筹", "转化率", "发行准备"],
    note: "这段内容给出众筹上线前的预测思路：根据关注者到支持者的转化比例估算首日和全周期表现。",
    report: "演讲者强调众筹不是凭感觉上线。若上线前已有关注者，可以用首日约一成左右转化、全周期更高转化的经验区间来估算目标所需的受众规模。关键是先算出需要多少支持者、平均客单价和目标金额，再反推上线前必须积累的关注者数量。",
    points: ["众筹上线前应建立受众规模和转化率模型。", "首日表现通常决定平台信号和后续传播势能。", "目标金额、平均支持额和关注者池需要互相校验。"],
    terms: ["crowdfunding / 众筹", "conversion rate / 转化率", "backer / 支持者"]
  },
  {
    year: 2026,
    category: "主题演讲",
    categoryClass: "category-leadership",
    title: "GDC 2026 Keynote：打造能长久存在的游戏",
    original: "GDC 2026 Keynote - An Odyssey in Building Games That Last",
    speaker: "Rob Pardo / Bonfire Studios",
    source: "https://www.youtube.com/watch?v=XxvLyd4lKZM",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=XxvLyd4lKZM",
    transcriptMeta: "1491 snippets / English manual / 43,999 chars",
    tags: ["Keynote", "长期游戏", "团队迭代"],
    note: "这场完整 keynote 围绕“能持续被玩家热爱的游戏”展开。Rob Pardo 结合 StarCraft、Warcraft、Hearthstone 与 Bonfire 的 Arkheron，讨论团队如何通过反复游玩发现真正的核心乐趣。",
    report: "主题演讲的核心不是追求所谓 forever game 的商业口号，而是回到团队与游戏本身的关系：团队必须成为第一批真正停不下来的玩家。演讲强调，能长久存在的游戏无法靠计划表强行制造，它来自反复迭代、团队对核心体验的迷恋、对玩家判断的谦逊，以及愿意在错误路径中转向的耐心。",
    points: ["长期游戏的基础是团队自己也被核心体验吸引。", "取消或转向并不只是失败，也可能说明核心乐趣尚未被发现。", "社区共创应建立在已经找到火花之后，而不是用玩家替团队找方向。"],
    terms: ["forever game / 长期游戏", "core experience / 核心体验", "iteration / 迭代"]
  },
  {
    year: 2026,
    category: "AI 与导航",
    categoryClass: "category-programming",
    title: "Navmesh 作为解决方案：Apex Legends 的导航网格问题",
    original: "Navmesh as a Solution",
    speaker: "Ian Holsted / Apex Legends GDC 2025 clip",
    source: "https://www.youtube.com/shorts/tQHpLPLnYjc",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=tQHpLPLnYjc",
    transcriptMeta: "56 snippets / English auto-generated / 2,144 chars",
    tags: ["Navmesh", "Recast", "AI 导航"],
    note: "这段内容解释 navmesh 是如何用二维凸多边形表示可通行空间，并讨论为什么现成 navmesh 并不总是准确匹配真实可玩空间。",
    report: "演讲者先定义 navmesh：它是用于代理导航的简化环境表示，相邻多边形构成图结构。但在 Apex Legends 的场景里，navmesh 并没有精确代表玩家可通行空间，甚至会在实体内部生成。这说明导航系统不能只依赖默认工具输出，还必须结合游戏的移动规则、地图结构和实际玩法空间进行验证。",
    points: ["navmesh 是可通行空间的简化图，而不是地图真实几何的复制。", "默认生成结果可能与玩法空间不一致，需要工具和人工校验。", "从 Titanfall 2 继承的技术在 Apex 场景中需要重新审视。"],
    terms: ["navmesh / 导航网格", "convex polygon / 凸多边形", "Recast / Recast 导航库"]
  },
  {
    year: 2026,
    category: "视觉技术",
    categoryClass: "category-programming",
    title: "程序化毛发与羽毛：用 strand-based 方法提升表现",
    original: "Fur and Feathers: A Procedural Approach",
    speaker: "Oliver Castaneda / Sky GDC 2025 clip",
    source: "https://www.youtube.com/shorts/E_u22_D02GI",
    sourceLabel: "YouTube",
    transcriptSource: "https://ytscribe.io/watch?v=E_u22_D02GI",
    transcriptMeta: "62 snippets / English auto-generated / 2,258 chars",
    tags: ["程序化", "毛发", "角色表现"],
    note: "这段内容展示从 jagged polygon 假毛皮转向 strand-based 程序化方案的原因：更魔法、更可动画、更有角色表现力。",
    report: "演讲者描述早期毛皮披风只是用锯齿状多边形暗示毛感，但效果不够“魔法”。团队改用 strand-based 方案，让每根 strand 可以单独动画，从而提升角色表现。技术上，流程会在网格三角形上根据面积和密度散布 strands，并用重心坐标插值放置位置。",
    points: ["程序化毛发可以把视觉细节转化为可动画的表现系统。", "strand-based 方法比简单建模更适合表达柔软、动态和魔法感。", "重心坐标散布能让毛发跟随网格结构稳定生成。"],
    terms: ["strand-based / 基于发束", "barycentric coordinates / 重心坐标", "procedural scattering / 程序化散布"]
  }
];

const state = {
  category: "全部",
  query: ""
};

const talkGrid = document.querySelector("#talkGrid");
const searchInput = document.querySelector("#searchInput");
const resultMeta = document.querySelector("#resultMeta");
const emptyState = document.querySelector("#emptyState");
const timeline = document.querySelector("#timeline");
const talkCount = document.querySelector("#talkCount");
const yearRange = document.querySelector("#yearRange");
const categoryCount = document.querySelector("#categoryCount");
const filterRow = document.querySelector("#filterRow");

function normalize(value) {
  return String(value).toLowerCase().trim();
}

function categories() {
  return ["全部", ...Array.from(new Set(talks.map((talk) => talk.category)))];
}

function talkMatches(talk) {
  const categoryMatch = state.category === "全部" || talk.category === state.category;
  const haystack = normalize([
    talk.year,
    talk.category,
    talk.title,
    talk.original,
    talk.speaker,
    talk.note,
    talk.report,
    talk.tags.join(" "),
    talk.terms.join(" ")
  ].join(" "));
  const queryMatch = !state.query || haystack.includes(normalize(state.query));
  return categoryMatch && queryMatch;
}

function renderCard(talk, index) {
  const points = talk.points.map((point) => `<li>${point}</li>`).join("");
  const terms = talk.terms.map((term) => `<li>${term}</li>`).join("");
  const tags = talk.tags.map((tag) => `<span class="badge">${tag}</span>`).join("");

  return `
    <article class="talk-card">
      <div class="card-topline">
        <span class="rank">#${String(index + 1).padStart(2, "0")}</span>
        <span class="badge ${talk.categoryClass}">${talk.category}</span>
        ${tags}
      </div>
      <div>
        <h3>${talk.title}</h3>
        <p class="original-title">${talk.original}</p>
      </div>
      <p class="speaker-line">${talk.speaker}</p>
      <p class="transcript-meta">内容依据：${talk.transcriptMeta}</p>
      <p class="deep-note">${talk.note}</p>
      <details class="content-report" open>
        <summary>视频内容中文报告</summary>
        <div class="report-body">
          <h4>报告正文</h4>
          <p>${talk.report}</p>
          <h4>关键观点</h4>
          <ul>${points}</ul>
          <h4>术语表</h4>
          <ul>${terms}</ul>
          <p class="report-source-note">本条目只在拿到 YouTube 字幕/转写后收录；未取得字幕或内容的链接不进入列表。</p>
        </div>
      </details>
      <div class="card-actions">
        <a class="source-button" href="${talk.source}" target="_blank" rel="noreferrer">${talk.sourceLabel}</a>
        <a class="transcript-link" href="${talk.transcriptSource}" target="_blank" rel="noreferrer">Transcript</a>
      </div>
    </article>
  `;
}

function renderFilters() {
  filterRow.innerHTML = categories().map((category) => `
    <button class="filter-chip ${category === state.category ? "is-active" : ""}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function render() {
  const filtered = talks.filter(talkMatches);
  talkGrid.innerHTML = filtered.map(renderCard).join("");
  emptyState.hidden = filtered.length > 0;
  resultMeta.textContent = `当前显示 ${filtered.length} / ${talks.length} 条；分类：${state.category}`;
}

function renderTimeline() {
  const counts = talks.reduce((acc, talk) => {
    acc[talk.year] = (acc[talk.year] || 0) + 1;
    return acc;
  }, {});
  const years = Object.keys(counts).map(Number).sort((a, b) => a - b);
  timeline.innerHTML = years.map((year) => `
    <button class="year-pill" type="button" data-year="${year}">
      <strong>${year}</strong>
      <span>${counts[year]} 条</span>
    </button>
  `).join("");
  talkCount.textContent = talks.length;
  yearRange.textContent = years.length === 1 ? String(years[0]) : `${years[0]}-${years[years.length - 1]}`;
  categoryCount.textContent = categories().length - 1;
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

timeline.addEventListener("click", (event) => {
  const button = event.target.closest("[data-year]");
  if (!button) return;
  searchInput.value = button.dataset.year;
  state.query = button.dataset.year;
  render();
  document.querySelector(".library-section").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderFilters();
renderTimeline();
render();
