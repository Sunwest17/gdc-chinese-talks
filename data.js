const talks = [
  {
    year: 2006,
    category: "制作管理",
    categoryClass: "category-production",
    title: "Valve 的《Half-Life 2》设计流程",
    original: "Valve's Design Process for Creating Half-Life 2",
    speaker: "Brian Jacobson, David Speyrer / Valve Software",
    source: "https://gdcvault.com/play/1013237/Valve-s-Design-Process-for",
    sourceLabel: "GDC Vault",
    tags: ["Cabal", "团队协作", "关卡设计", "生产流程"],
    note:
      "这场演讲适合把“创意团队如何协作”当成系统问题来看。Valve 将《Half-Life》时期的 Cabal 流程进一步拆成多个相对独立的小组，让设计、美术、声音和故事团队在约束明确的情况下并行推进。导读重点不是复制 Valve 的组织结构，而是理解它如何降低跨团队依赖成本、让约束变成设计语言，并用持续评审把分散创意重新收束成一致体验。",
    points: [
      "大型项目的设计流程应服务于依赖管理，而不仅是头脑风暴。",
      "多团队并行需要清楚划分责任区，同时保留足够频繁的体验校准。",
      "约束不是创意的敌人，好的约束能帮助团队判断哪些想法属于同一款游戏。",
      "流程设计的目标是让关卡、故事、声音和节奏共同承担玩家体验。"
    ],
    terms: ["Cabal process / 小组共创流程", "dependency cost / 依赖成本", "playtest loop / 试玩反馈循环"]
  },
  {
    year: 2011,
    category: "游戏设计",
    categoryClass: "category-design",
    title: "经典游戏复盘：《DOOM》",
    original: "Classic Game Postmortem - DOOM",
    speaker: "Tom Hall, John Romero / Loot Drop",
    source: "https://www.gdcvault.com/play/1014627/",
    sourceLabel: "GDC Vault",
    tags: ["FPS", "关卡节奏", "技术限制", "经典复盘"],
    note:
      "《DOOM》的价值不只在于它开创了第一人称射击的流行范式，也在于它展示了技术、关卡、速度感和玩家幻想如何相互放大。中文导读应聚焦它如何在硬件限制下形成清晰的战斗节奏：空间既要让玩家迷路，又要让玩家始终相信自己能读懂危险。对今天的开发者来说，这场复盘更像一次“少量规则如何制造强烈风格”的案例研究。",
    points: [
      "速度、武器反馈和敌人辨识度共同塑造了 FPS 的核心手感。",
      "技术限制反而迫使关卡语言更直接、更容易被玩家记住。",
      "怪物、弹药、钥匙和空间循环共同构成玩家的行动节奏。",
      "经典复盘的学习重点是抽象原则，而不是复刻表面元素。"
    ],
    terms: ["postmortem / 项目复盘", "combat readability / 战斗可读性", "level loop / 关卡循环"]
  },
  {
    year: 2012,
    category: "游戏设计",
    categoryClass: "category-design",
    title: "有趣的决策",
    original: "Interesting Decisions",
    speaker: "Sid Meier / Firaxis Games",
    source: "https://www.gdcvault.com/play/1015756/Interesting",
    sourceLabel: "GDC Vault",
    tags: ["策略游戏", "选择设计", "反馈", "玩家心理"],
    note:
      "Sid Meier 重新拆解“游戏是一系列有趣决策”这句被反复引用的设计格言。它不是鼓励给玩家堆更多选项，而是要求每个选择都具备情境、可理解后果和反馈。真正有趣的决策通常让玩家在短期收益、长期布局、风险暴露和个人风格之间权衡。导读可把这场演讲作为设计检查表：玩家是否理解选择，选择是否有代价，反馈是否让下一次选择更聪明。",
    points: [
      "有趣选择不是数量问题，而是信息、后果和玩家意图之间的关系。",
      "短期、中期、长期决策应交错出现，避免体验变成单一优化题。",
      "玩家需要足够反馈来相信自己是在学习，而不是被系统随机惩罚。",
      "玩家类型差异会影响他们如何解释风险、公平性和历史准确性。"
    ],
    terms: ["interesting decision / 有趣决策", "feedback / 反馈", "risk-reward / 风险收益"]
  },
  {
    year: 2012,
    category: "商业运营",
    categoryClass: "category-business",
    title: "核心游戏免费游玩的崛起",
    original: "The Rise of Free-To-Play Core Gaming",
    speaker: "Mitch Lasky / Benchmark Capital",
    source: "https://gdcvault.com/play/1015749/The-Rise-of-Free-To",
    sourceLabel: "GDC Vault",
    tags: ["F2P", "商业模式", "发行", "运营"],
    note:
      "这场演讲把免费游玩从“收费方式”提升为完整的产品结构问题。它强调核心游戏不能把免费分发和虚拟商品直接贴到传统买断制上，而要重新设计生产节奏、基础设施、营销、客户关系和收入确认方式。今天回看，它可以帮助理解服务型游戏为什么要求设计、数据、社区和商业团队从项目早期就一起工作。",
    points: [
      "免费游玩不是单个价格策略，而是改变产品生命周期的商业结构。",
      "核心玩家产品的制作成本更高，因此留存、转化和信任更关键。",
      "虚拟商品销售需要和设计承诺一致，否则会伤害长期关系。",
      "发行和运营能力会变成产品竞争力的一部分。"
    ],
    terms: ["free-to-play / 免费游玩", "virtual goods / 虚拟商品", "live operations / 长线运营"]
  },
  {
    year: 2013,
    category: "游戏设计",
    categoryClass: "category-design",
    title: "经典游戏复盘：《Myst》",
    original: "Classic Game Postmortem: Myst",
    speaker: "Robyn Miller / Zoo Break Gun Club",
    source: "https://www.gdcvault.com/play/1018048/classic-game-postmortem",
    sourceLabel: "GDC Vault",
    tags: ["解谜", "氛围", "CD-ROM", "环境叙事"],
    note:
      "《Myst》的复盘适合从“限制如何塑造审美”切入。CD-ROM 容量、预渲染图像和第一人称探索让它形成了一种静默、神秘、以观察为核心的体验。它并不是靠复杂操作留住玩家，而是让世界本身成为谜题。中文整理时应突出它如何通过美术、声音、空间和节奏建立沉浸感，并说明为什么这种设计在多年后仍可被移植和重新理解。",
    points: [
      "技术媒介会决定玩家如何接近世界，也会影响谜题形态。",
      "安静、留白和空间连续性可以成为强叙事工具。",
      "环境设计需要让玩家相信每个物件都可能有意义。",
      "商业成功和文化影响往往来自体验整体，而不是单个机制。"
    ],
    terms: ["environmental storytelling / 环境叙事", "pre-rendered art / 预渲染美术", "immersion / 沉浸感"]
  },
  {
    year: 2015,
    category: "叙事",
    categoryClass: "category-narrative",
    title: "文本冒险的新生：互动小说的创新",
    original: "Adventures in Text: Innovating in Interactive Fiction",
    speaker: "Jon Ingold / inkle",
    source: "https://www.gdcvault.com/play/1021774/",
    sourceLabel: "GDC Vault",
    tags: ["互动小说", "分支叙事", "80 Days", "工具"],
    note:
      "inkle 的经验说明，文字并不是游戏表现力的退路，而可以是高密度系统。演讲围绕《Sorcery!》和《80 Days》等作品，讨论如何让选择、节奏、文本生成和状态一致性共同工作。深度导读应关注两个问题：第一，如何让大量分支文本仍然保持角色和世界一致；第二，如何让文字不只是剧情容器，而成为导航、策略和情绪节奏的一部分。",
    points: [
      "互动文本的难点在于状态一致性，而不是单纯写更多分支。",
      "选择需要被节奏化，玩家不能一直处在同等强度的分岔点。",
      "脚本工具会直接影响叙事团队能否快速迭代。",
      "文字、系统和 UI 应共同承担故事推进。"
    ],
    terms: ["interactive fiction / 互动小说", "branching logic / 分支逻辑", "narrative pacing / 叙事节奏"]
  },
  {
    year: 2015,
    category: "制作管理",
    categoryClass: "category-production",
    title: "《Gone Home》的关卡设计",
    original: "Level Design in a Day: The Level Design of Gone Home",
    speaker: "Kate Craig, Steve Gaynor / Fullbright",
    source: "https://www.gdcvault.com/play/1022112/Level-Design-in-a-Day",
    sourceLabel: "GDC Vault",
    tags: ["关卡设计", "环境叙事", "独立游戏", "玩家心理"],
    note:
      "这场演讲展示了叙事探索游戏如何用空间组织玩家心理。房屋不是背景，而是叙事机器：布局、装饰、锁门、回环和物件密度都在调度玩家的怀疑、亲密感和发现欲。中文导读应强调“看似自然的房子”其实经过严格的路径设计，它既要让玩家感觉自由，又要保证关键线索在合适的情绪阶段出现。",
    points: [
      "叙事空间要兼顾可信建筑和可控节奏。",
      "玩家的移动路线可以被物件密度、门锁和视线引导温和塑形。",
      "环境细节不是装饰，而是角色关系和历史痕迹。",
      "非线性体验仍然需要清晰的情绪曲线。"
    ],
    terms: ["spatial storytelling / 空间叙事", "critical path / 关键路径", "environmental clue / 环境线索"]
  },
  {
    year: 2015,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "渲染《Far Cry 4》的世界",
    original: "Rendering the World of Far Cry 4",
    speaker: "Stephen McAuley / Ubisoft Montreal",
    source: "https://www.gdcvault.com/play/1022234/Rendering-the-World-of-Far",
    sourceLabel: "GDC Vault",
    tags: ["渲染", "开放世界", "植被", "抗锯齿"],
    note:
      "这是一场面向图形程序和技术美术的开放世界渲染案例。它从材质、天空遮蔽、全局光照、植被系统和时间稳定性等方面解释 Kyrat 世界如何在新硬件上成立。导读重点应放在技术取舍：真实感并不来自单个昂贵特效，而来自多层系统在距离、运动、光照和材质上的协同。",
    points: [
      "开放世界画质依赖从近景到远景的连续 LOD 策略。",
      "植被系统既是渲染问题，也是物理、内存和工具链问题。",
      "运动向量、SMAA 和时间稳定能显著改善整体图像质量。",
      "技术方案要围绕目标世界的视觉身份选择。"
    ],
    terms: ["BRDF / 双向反射分布函数", "sky occlusion / 天空遮蔽", "temporal stabilization / 时间稳定"]
  },
  {
    year: 2016,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "经典游戏复盘：《Diablo》",
    original: "Classic Game Postmortem: Diablo",
    speaker: "David Brevik / Gazillion Entertainment",
    source: "https://gdcvault.com/play/1023469/Classic-Game-Postmortem",
    sourceLabel: "GDC Vault",
    tags: ["ARPG", "战利品", "多人联机", "复盘"],
    note:
      "《Diablo》的复盘最有价值的部分，是它如何从最初的回合制、黏土动画、DOS 单机设想，演变为定义动作 RPG 的即时制体验。中文导读应关注产品形态的连续转向：当操作节奏改变，战斗反馈、掉落循环、网络体验和暗黑氛围都被重新组织。它说明伟大类型常常不是一次性设计出来，而是在开发压力和团队判断中逐步显形。",
    points: [
      "核心循环从回合制变为即时制，会改变整个游戏的反馈密度。",
      "战利品系统要服务于短期惊喜和长期构筑欲望。",
      "多人联机会放大经济、平衡和社交设计问题。",
      "类型定义往往来自多次方向调整后的体验聚焦。"
    ],
    terms: ["loot loop / 掉落循环", "action RPG / 动作角色扮演", "real-time combat / 即时战斗"]
  },
  {
    year: 2017,
    category: "音频",
    categoryClass: "category-audio",
    title: "《DOOM》：音乐背后",
    original: "'DOOM': Behind the Music",
    speaker: "Mick Gordon / Game Audio Australia",
    source: "https://www.gdcvault.com/play/1024068/DOOM-Behind-the-Music",
    sourceLabel: "GDC Vault",
    tags: ["音乐", "声音设计", "交互音乐", "工业金属"],
    note:
      "这场演讲说明游戏音乐可以像玩法一样被系统化设计。Mick Gordon 不是简单写一组重型曲目，而是围绕《DOOM》的科技恶魔气质，探索合成、采样、吉他、混音和互动结构如何让音乐站到前台。中文导读应强调过程实验的重要性：改变制作方法会带来不同结果，声音设计可以直接参与玩家的攻击性、节奏感和身份认同。",
    points: [
      "音乐风格要和游戏幻想一致，而不只是符合类型标签。",
      "合成、失真和采样实验能创造独特的声音身份。",
      "交互音乐需要支持玩家行动，而不是覆盖玩法反馈。",
      "远程协作和迭代流程会影响最终声音品质。"
    ],
    terms: ["interactive music / 交互音乐", "synthesis / 合成", "mixing / 混音"]
  },
  {
    year: 2017,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "为《Horizon Zero Dawn》创建工具管线",
    original: "Creating a Tools Pipeline for 'Horizon: Zero Dawn'",
    speaker: "Guerrilla Games",
    source: "https://www.gdcvault.com/play/1024124/Creating-a-Tools-Pipeline-for",
    sourceLabel: "GDC Vault",
    tags: ["工具链", "开放世界", "管线", "编辑器"],
    note:
      "Guerrilla 从线性战术射击转向开放世界 RPG，意味着工具管线也必须重建。对团队而言，工具不是附属品，而是内容生产速度和质量边界。中文导读应把这场演讲放在“组织转型”语境下理解：当游戏类型变化，编辑器、数据结构、构建流程和跨部门协作方式都必须跟着变化，否则内容野心会被生产系统拖住。",
    points: [
      "开放世界项目需要工具支持规模化内容创作和验证。",
      "工具管线重建是团队能力升级，不只是工程重构。",
      "编辑器体验会影响设计、美术和 QA 的日常产出。",
      "数据一致性和构建反馈速度是大型内容团队的关键基础设施。"
    ],
    terms: ["tools pipeline / 工具管线", "content pipeline / 内容管线", "editor workflow / 编辑器工作流"]
  },
  {
    year: 2018,
    category: "制作管理",
    categoryClass: "category-production",
    title: "《Horizon Zero Dawn》开放世界 QA 案例",
    original: "'Horizon Zero Dawn': A QA Open World Case Study",
    speaker: "Ana Barbuta / Guerrilla Games",
    source: "https://www.gdcvault.com/play/1025153/-Horizon-Zero-Dawn-A",
    sourceLabel: "GDC Vault",
    tags: ["QA", "开放世界", "遥测", "发布后支持"],
    note:
      "这场 QA 案例适合纠正一个误区：测试不是开发末端的找 bug 工种，而是开放世界项目的风险管理系统。演讲覆盖早期介入、信任、敏捷协作、测试策略、工具、遥测和发布后支持。中文导读应突出 QA 如何利用跨团队关系和数据，让不可穷尽的开放世界测试变成可优先级排序、可沟通、可持续改进的过程。",
    points: [
      "开放世界 QA 的核心是风险建模，而不是盲目遍历。",
      "QA 越早进入设计和生产讨论，越能减少后期返工。",
      "遥测和工具能帮助团队发现人工测试难以覆盖的模式。",
      "信任关系会直接影响问题报告是否被及时理解和处理。"
    ],
    terms: ["risk management / 风险管理", "telemetry / 遥测", "post-launch support / 发布后支持"]
  },
  {
    year: 2018,
    category: "商业运营",
    categoryClass: "category-business",
    title: "《刺客信条》品牌十年进化",
    original: "10 Years of Evolution of the 'Assassin's Creed' Brand",
    speaker: "Jean Guesdon / Ubisoft",
    source: "https://www.gdcvault.com/play/1024890/10-Years-of-Evolution-of",
    sourceLabel: "GDC Vault",
    tags: ["品牌", "系列化", "跨媒体", "生产管线"],
    note:
      "这场演讲把系列游戏视为长期品牌系统来拆解。《刺客信条》从单一叙事作品扩展为跨硬件、跨工作室、跨媒体的全球 IP，同时还要保持身份支柱。中文导读应关注“传统一致性”和“新鲜感”之间的平衡：系列化不是无限重复，也不是每代推倒重来，而是在核心承诺、生产能力和市场期待之间持续校准。",
    points: [
      "长期 IP 需要清晰的身份支柱，否则扩张会稀释品牌。",
      "年度化和跨工作室协作会改变管线、文档和决策节奏。",
      "跨媒体扩展必须服务主品牌，而不是制造互相矛盾的设定。",
      "系列更新需要区分哪些元素可变，哪些承诺不能丢。"
    ],
    terms: ["brand pillars / 品牌支柱", "transmedia / 跨媒体", "co-development / 协同开发"]
  },
  {
    year: 2019,
    category: "游戏设计",
    categoryClass: "category-design",
    title: "游戏设计中的诅咒问题",
    original: "Cursed Problems in Game Design",
    speaker: "Alex Jaffe / Riot Games",
    source: "https://www.gdcvault.com/play/1025756/Cursed-Problems-in-Game",
    sourceLabel: "GDC Vault",
    tags: ["系统设计", "玩家承诺", "多人游戏", "设计理论"],
    note:
      "这场演讲提出“诅咒问题”概念：有些设计难题并不是努力不够，而是玩家承诺之间存在根本冲突。它对多人、交易、社交、竞技和长期运营尤其有用。中文导读应把它当成决策工具：先识别冲突的玩家幻想，再选择牺牲、隔离、重构或接受哪一部分，而不是把团队拖进无止境的调参。",
    points: [
      "诅咒问题来自核心玩家承诺之间的冲突，而不是普通难题。",
      "识别不可兼得的体验能节省大量错误迭代。",
      "解决方式通常是取舍、隔离模式、重定义承诺或承认代价。",
      "它适合用来讨论交易、竞技公平、社交压力和内容消耗。"
    ],
    terms: ["cursed problem / 诅咒问题", "player promise / 玩家承诺", "trade-off / 取舍"]
  },
  {
    year: 2026,
    category: "UX",
    categoryClass: "category-ux",
    title: "设计 Stadium：为《Overwatch》打造新模式",
    original: "Designing Stadium: Crafting a New Game Mode for 'Overwatch'",
    speaker: "Scott Hwang, Larry Wu / Blizzard Entertainment",
    source: "https://schedule.gdconf.com/session/designing-stadium-crafting-a-new-game-mode-for-overwatch/914889",
    sourceLabel: "GDC 官方日程",
    tags: ["Live Game", "UX", "英雄设计", "数据平衡"],
    note:
      "这条目来自 GDC 官方日程，可作为近年服务型竞技游戏的观察样本。Stadium 模式涉及商店系统、第三人称镜头、英雄能力改造、视觉清晰度和玩家测试。中文导读应强调在成熟游戏里做新模式的难处：创新必须足够明显，但又不能破坏玩家对角色、节奏和公平性的既有理解。",
    points: [
      "成熟竞技游戏的新模式必须保护核心手感和角色幻想。",
      "镜头、商店和能力改动会连锁影响 UI、VFX、平衡和学习成本。",
      "数据看板、限时测试和社区反馈可以降低正式上线风险。",
      "跨职能协作是快速迭代能否稳定落地的前提。"
    ],
    terms: ["visual clarity / 视觉清晰度", "live testing / 线上测试", "hero fantasy / 英雄幻想"]
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

function normalize(value) {
  return String(value).toLowerCase().trim();
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
    talk.tags.join(" "),
    talk.terms.join(" ")
  ].join(" "));
  const queryMatch = !state.query || haystack.includes(normalize(state.query));
  return categoryMatch && queryMatch;
}

function renderCard(talk) {
  const points = talk.points.map((point) => `<li>${point}</li>`).join("");
  const terms = talk.terms.map((term) => `<li>${term}</li>`).join("");
  const tags = talk.tags.map((tag) => `<span class="badge">${tag}</span>`).join("");

  return `
    <article class="talk-card" id="year-${talk.year}">
      <div class="card-topline">
        <span class="badge ${talk.categoryClass}">${talk.year}</span>
        <span class="badge ${talk.categoryClass}">${talk.category}</span>
        ${tags}
      </div>
      <div>
        <h3>${talk.title}</h3>
        <p class="original-title">${talk.original}</p>
      </div>
      <p class="speaker-line">${talk.speaker}</p>
      <p class="deep-note">${talk.note}</p>
      <ul class="keypoints">${points}</ul>
      <ul class="terms" aria-label="术语表">${terms}</ul>
      <div class="card-actions">
        <a class="source-button" href="${talk.source}" target="_blank" rel="noreferrer">${talk.sourceLabel}</a>
        <a class="youlearn-button" href="https://www.youlearn.ai/" target="_blank" rel="noreferrer">YouLearn 辅助学习</a>
        <span class="transcript-button" title="导入授权字幕或讲稿后可启用">授权全文译文：待导入</span>
      </div>
    </article>
  `;
}

function render() {
  const filtered = talks.filter(talkMatches).sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  talkGrid.innerHTML = filtered.map(renderCard).join("");
  emptyState.hidden = filtered.length > 0;
  resultMeta.textContent = `当前显示 ${filtered.length} / ${talks.length} 条；类别：${state.category}`;
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
  yearRange.textContent = `${years[0]}-${years[years.length - 1]}`;
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.category = button.dataset.category;
    render();
  });
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

renderTimeline();
render();
