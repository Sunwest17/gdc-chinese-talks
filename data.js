const talks = [
  {
    year: 2026,
    category: "文化与可持续",
    categoryClass: "category-culture",
    title: "成为自己的理由：#1ReasonToBe",
    original: "#1ReasonToBe",
    speaker: "Laia Bee / Pincer Games",
    source: "https://gdcvault.com/play/1035753/",
    sourceLabel: "GDC Vault",
    tags: ["Microtalks", "多元化", "职业路径"],
    note: "#1ReasonToBe 延续了 GDC 长期的多元化主题，用个人经验讨论女性创作者为什么留下、如何成长，以及行业需要怎样的支持结构。适合作为团队文化、人才保留和创作者身份认同的入口资料。",
    points: ["把个人叙事放回行业结构中理解，而不只当作励志故事。", "关注支持网络、可见性和机会分配如何影响职业持续性。", "适合整理成团队 DEI 讨论材料和新人 onboarding 阅读。"],
    terms: ["representation / 代表性", "belonging / 归属感", "career sustainability / 职业可持续"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "《Ragnarok Online 3》百万 CCU 弹性 MMO 云架构实践",
    original: "'Ragnarok Online 3': The Evolution and Practice of Elastic MMO Cloud Architecture Supporting Million CCU",
    speaker: "Chao Yang / JoyMaker",
    source: "https://gdcvault.com/play/1036032/-Ragnarok-Online-3-The",
    sourceLabel: "GDC Vault",
    tags: ["MMO", "云架构", "可扩展性"],
    note: "这场演讲聚焦大型 MMORPG 如何从单服架构演进到水平扩展、跨服协同和弹性承载。重点不是某个云服务名词，而是高并发在线游戏如何拆分状态、负载、区域和跨服交互。",
    points: ["百万级并发需要从一开始就规划容量模型和故障边界。", "跨服玩法会把技术架构、运维和设计约束绑定在一起。", "弹性云架构的价值在于高峰期抗压和低峰期成本控制。"],
    terms: ["CCU / 同时在线人数", "horizontal scaling / 水平扩展", "cross-server / 跨服"]
  },
  {
    year: 2026,
    category: "音频",
    categoryClass: "category-audio",
    title: "《Roco Kingdom》500 多种生物的声音生态设计",
    original: "'Roco Kingdom': Crafting a Comprehensive Soundscape for Over 500 Creatures",
    speaker: "Runhang Zeng / Morefun Studio, Tencent Games",
    source: "https://gdcvault.com/play/1036031/-Roco-Kingdom-Crafting-a",
    sourceLabel: "GDC Vault",
    tags: ["声音设计", "生物系统", "音频管线"],
    note: "演讲讨论如何为超过 500 种不同形态的生物建立可维护的声音体系。它适合从资产规模、分类规则、情绪辨识和复用策略角度学习大型内容项目的音频生产。",
    points: ["大量生物音效需要先建立分类法，而不是逐个临场创作。", "声音要服务于角色识别、生态感和玩家反馈。", "复用与差异化之间的平衡决定了管线能否长期扩展。"],
    terms: ["soundscape / 声音景观", "creature audio / 生物音效", "asset taxonomy / 资产分类"]
  },
  {
    year: 2026,
    category: "音频",
    categoryClass: "category-audio",
    title: "第三届游戏开发者音乐会",
    original: "3rd Annual Game Developer's Concert",
    speaker: "Austin Wintory / Independent",
    source: "https://gdcvault.com/play/1036021/3rd-Annual-Game-Developer-s",
    sourceLabel: "GDC Vault",
    tags: ["音乐", "现场演出", "GDC Nights"],
    note: "这不是传统技术讲座，而是 GDC Nights 的开发者音乐会。它适合作为观察游戏音乐社区、作曲家表达和游戏音乐现场化传播的文化样本。",
    points: ["游戏音乐可以脱离游戏现场独立建立情绪和社区连接。", "现场演出放大了作曲、编曲和玩家记忆之间的关系。", "可作为研究游戏音乐品牌化与开发者文化的材料。"],
    terms: ["game concert / 游戏音乐会", "live arrangement / 现场编曲", "community memory / 社群记忆"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "Windows 高级着色器分发",
    original: "Advanced Shader Delivery on Windows",
    speaker: "Jesse Natalie / Microsoft",
    source: "https://gdcvault.com/play/1036022/Advanced-Shader-Delivery-on-Windows",
    sourceLabel: "GDC Vault",
    tags: ["Shader", "PC 性能", "发布管线"],
    note: "PC 游戏的着色器编译会带来首次加载慢和游玩中卡顿。演讲介绍通过商店分发预编译 shader 的新路径，重点是把性能问题前移到发布和平台管线中解决。",
    points: ["shader stutter 是体验问题，也是发布流程问题。", "预编译与分发机制可以降低玩家端运行时成本。", "适合图形程序、构建工程和发行团队一起阅读。"],
    terms: ["shader compilation / 着色器编译", "stutter / 卡顿", "precompiled shader / 预编译着色器"]
  },
  {
    year: 2026,
    category: "产品与运营",
    categoryClass: "category-product",
    title: "Agentic Live Ops：把玩家数据转化为可行动洞察",
    original: "Agentic Live Ops: Turning Player Data into Actionable Insights",
    speaker: "Pat Santora / AWS",
    source: "https://gdcvault.com/play/1035622/Agentic-Live-Ops-Turning-Player",
    sourceLabel: "GDC Vault",
    tags: ["LiveOps", "遥测", "Agentic AI"],
    note: "演讲关注实时运营中的数据延迟问题：游戏每天产生大量玩家遥测，但传统分析常常太慢。Agentic Live Ops 的核心是把数据解释、机会识别和运营动作更紧密地连接起来。",
    points: ["LiveOps 的价值取决于洞察到行动的速度。", "Agent 系统可用于分群、异常识别和运营建议。", "要警惕自动化建议与设计判断之间的责任边界。"],
    terms: ["telemetry / 遥测", "agentic workflow / 智能体流程", "actionable insight / 可行动洞察"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "Agentic LiveOps：从概念验证到生产落地",
    original: "Agentic LiveOps: From Concept to Production",
    speaker: "Matt Stevenson / AWS",
    source: "https://gdcvault.com/play/1035623/Agentic-LiveOps-From-Concept-to",
    sourceLabel: "GDC Vault",
    tags: ["LiveOps", "生产化", "AI 平台"],
    note: "这场演讲更偏工程落地，讨论如何把 LiveOps 相关 Agent 从原型推进到可运行、可观测、可治理的生产系统。它适合关注 AI 应用工程化的团队。",
    points: ["原型有效不等于生产可用，监控、权限和回滚同样关键。", "LiveOps agent 应该围绕具体运营场景而不是泛化聊天能力设计。", "从概念到生产需要产品、数据和平台团队共同定义边界。"],
    terms: ["productionization / 生产化", "segmentation / 玩家分群", "governance / 治理"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "AI + 游戏：生产更有创造力，玩法更有深度",
    original: "AI + Games: More Creativity in Production, Deeper Fun in Gameplay",
    speaker: "Ethan Hu / Meshy AI",
    source: "https://gdcvault.com/play/1035655/AI-Games-More-Creativity-in",
    sourceLabel: "GDC Vault",
    tags: ["生成式 AI", "3D 工具", "AI 原生玩法"],
    note: "演讲把 AI 对游戏的影响拆成两条线：生产中增强创作者，以及玩法上生成新的互动形态。适合用于区分 AI 工具效率提升与 AI-native game 的设计可能。",
    points: ["AI 生产工具的目标应是提高试错速度，而不是替代创意判断。", "AI 原生玩法需要重新定义玩家输入、反馈和可控性。", "3D 内容生成会改变原型、资产和美术评审节奏。"],
    terms: ["AI-empowered production / AI 增强生产", "AI-native game / AI 原生游戏", "3D generation / 3D 生成"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "大型游戏工程中的 AI 瓶颈与解决方案",
    original: "AI Bottlenecks & Solutions in Massive Game Engineering",
    speaker: "Yu Yu / Tencent Games",
    source: "https://gdcvault.com/play/1036039/AI-Bottlenecks-Solutions-in-Massive",
    sourceLabel: "GDC Vault",
    tags: ["AI 工程", "大型项目", "研发效率"],
    note: "演讲讨论大型游戏项目使用 AI 编程工具时遇到的痛点，包括上下文、代码库规模、可靠性和差异化工程需求。它适合技术管理者评估 AI 工具链的真实边界。",
    points: ["大代码库里 AI 的难点往往是上下文与验证，而不是生成速度。", "工程团队需要把 AI 输出纳入测试、审查和持续集成。", "可微分或专用方案可能比通用 LLM 更适合部分工程任务。"],
    terms: ["massive engineering / 大型工程", "LLM bottleneck / 大模型瓶颈", "verification / 验证"]
  },
  {
    year: 2026,
    category: "商业策略",
    categoryClass: "category-business",
    title: "Agentic AI 如何理解玩家并提供超个性化体验",
    original: "AI Executive Panel: Using Agentic AI to Understand Your Players and Provide Hyper-Personalized Experiences",
    speaker: "Vitalii Vashchuk / EPAM",
    source: "https://gdcvault.com/play/1035641/AI-Executive-Panel-Using-Agentic",
    sourceLabel: "GDC Vault",
    tags: ["高管圆桌", "玩家理解", "个性化"],
    note: "这场 panel 从业务视角讨论 agentic AI 如何利用实时玩家数据支持个性化体验。重点是机会、风险和组织能力，而不仅是模型功能。",
    points: ["个性化体验需要数据、信任和设计边界共同成立。", "Agentic AI 可以帮助发现玩家需求，但不应替代产品判断。", "商业价值要与隐私、透明度和玩家公平感同时评估。"],
    terms: ["hyper-personalization / 超个性化", "player understanding / 玩家理解", "executive panel / 高管圆桌"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "AI 驱动的 3D 游戏原型与引擎集成",
    original: "AI-Driven 3D Game Prototyping with Engine Integration",
    speaker: "Yang Hao / Tencent Games",
    source: "https://gdcvault.com/play/1036034/AI-Driven-3D-Game-Prototyping",
    sourceLabel: "GDC Vault",
    tags: ["3D 原型", "引擎集成", "工作流"],
    note: "演讲讨论 AI 如何进入 3D 游戏开发关键流程，并通过引擎集成降低原型门槛。核心看点是生成能力如何与可编辑、可验证、可运行的游戏工程连接。",
    points: ["3D 原型不只是生成模型，还要能在引擎中被测试和迭代。", "AI 工作流需要保留设计师调整和工程约束。", "原型速度提升会改变早期玩法验证方式。"],
    terms: ["engine integration / 引擎集成", "rapid prototyping / 快速原型", "reasoning LLM / 推理模型"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "撤离射击游戏中的 AI 反作弊运营",
    original: "AI-Powered Anti-Cheat Operations in Extraction Shooter Games",
    speaker: "Xiaoyu Zhou / Tencent Games",
    source: "https://gdcvault.com/play/1036043/AI-Powered-Anti-Cheat-Operations",
    sourceLabel: "GDC Vault",
    tags: ["反作弊", "安全运营", "撤离射击"],
    note: "撤离射击把战斗、潜行、搜刮和经济收益绑在一起，作弊破坏成本更高。演讲适合从安全、运营和玩法经济三方面理解 AI 反作弊。",
    points: ["反作弊不是单点检测，而是持续运营体系。", "AI 可以帮助识别异常行为模式，但需要可解释和人工复核。", "安全策略会影响匹配、公平性和玩家信任。"],
    terms: ["anti-cheat / 反作弊", "extraction shooter / 撤离射击", "security operations / 安全运营"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "在 Amazon GameLift 上构建抗 DDoS 多人服务器",
    original: "Architecting DDoS-Resilient Multiplayer Game Servers on Amazon GameLift",
    speaker: "Michael Jackson / AWS",
    source: "https://gdcvault.com/play/1035624/Architecting-DDoS-Resilient-Multiplayer-Game",
    sourceLabel: "GDC Vault",
    tags: ["多人服务器", "DDoS", "网络韧性"],
    note: "多人游戏连接可靠性越来越依赖网络防护能力。演讲关注如何在不显著牺牲延迟和玩家体验的前提下，为服务器架构加入抗攻击能力。",
    points: ["抗 DDoS 设计要同时考虑延迟、路由和扩容。", "防护机制需要贴合匹配、会话和区域部署模型。", "网络韧性应在上线前通过压力与攻击场景演练验证。"],
    terms: ["DDoS resilience / 抗 DDoS 韧性", "multiplayer server / 多人服务器", "traffic protection / 流量防护"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "用 LLM 增强 NPC：NC State 与 Arm 的实践经验",
    original: "Augmenting NPCs with LLMs: Practical Experience from NC State University & Arm Developer Labs",
    speaker: "Kieran Hejmadi / Arm",
    source: "https://gdcvault.com/play/1035613/Augmenting-NPCs-with-LLMs-Practical",
    sourceLabel: "GDC Vault",
    tags: ["NPC", "LLM", "AI 角色"],
    note: "演讲讨论 NPC 从脚本树走向可对话、可计划、能根据上下文行动的 agent。它适合和 F.E.A.R. 的 GOAP 一起阅读：一个偏规划动作，一个偏语言与上下文。",
    points: ["LLM NPC 的关键不是能聊天，而是能与游戏状态可靠连接。", "响应性、成本、延迟和内容安全会共同限制落地范围。", "应把 LLM 作为行为系统的一层，而不是整个 NPC 大脑。"],
    terms: ["NPC augmentation / NPC 增强", "contextual agent / 上下文智能体", "latency / 延迟"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "用 WrapAI 自动包裹面部表情扫描",
    original: "Automatic Wrapping of Facial Expression Scans with WrapAI",
    speaker: "Andrei Krovopuskov / Faceform",
    source: "https://gdcvault.com/play/1035647/Automatic-Wrapping-of-Facial-Expression",
    sourceLabel: "GDC Vault",
    tags: ["面部扫描", "角色管线", "自动化"],
    note: "演讲介绍如何把大量 FACS 表情扫描自动包裹和清理，用于相似度 rig。它适合角色技术美术和扫描资产团队学习自动化如何减少手工重复劳动。",
    points: ["高质量角色面部管线依赖稳定的扫描清理和拓扑匹配。", "自动化价值在于把人工时间转向审核和微调。", "真实扫描数据仍需要质量控制和一致性检查。"],
    terms: ["FACS / 面部动作编码系统", "wrapping / 包裹", "likeness rig / 相似度绑定"]
  },
  {
    year: 2026,
    category: "营销与发现",
    categoryClass: "category-marketing",
    title: "回到基础：把隐形营销基础转化为可见度",
    original: "Back to Basics: Translating Your Invisible Marketing Foundation into Visibility",
    speaker: "Dana Trebella / Spoke and Wheel Strategy",
    source: "https://gdcvault.com/play/1035767/Back-to-Basics-Translating-Your",
    sourceLabel: "GDC Vault",
    tags: ["营销", "定位", "可见度"],
    note: "许多开发者会跳过看不见的营销准备工作。演讲强调定位、受众、信息和节奏这些基础如何最终转化为玩家能看到、能理解、愿意点击的内容。",
    points: ["营销不是上线前发帖，而是从定位开始的长期工作。", "不可见的基础决定了 trailer、商店页和社媒内容是否一致。", "适合独立团队用作发布前检查清单。"],
    terms: ["positioning / 定位", "visibility / 可见度", "marketing foundation / 营销基础"]
  },
  {
    year: 2026,
    category: "商业策略",
    categoryClass: "category-business",
    title: "游戏融资幕后",
    original: "Behind the Scenes of Game Funding",
    speaker: "Emily Greer / 1Up Ventures",
    source: "https://gdcvault.com/play/1035772/Behind-the-Scenes-of-Game",
    sourceLabel: "GDC Vault",
    tags: ["融资", "独立工作室", "资本伙伴"],
    note: "演讲关注动荡融资环境中，独立工作室如何理解资本伙伴、融资路径和长期战略。它适合创始人、制作人和商务负责人作为融资基础课。",
    points: ["融资不是单次拿钱，而是选择关系、约束和未来路径。", "团队需要把创意愿景翻译成投资者能评估的风险模型。", "资本结构会影响控制权、节奏和产品方向。"],
    terms: ["funding / 融资", "capital partnership / 资本伙伴", "studio strategy / 工作室战略"]
  },
  {
    year: 2026,
    category: "教育与社会影响",
    categoryClass: "category-education",
    title: "游戏除了创造快乐，还能为下一代做什么",
    original: "Beyond Creating Joy, What Else Can Games Do for Our Next Generation?",
    speaker: "Lei Zheng / Tencent Games",
    source: "https://gdcvault.com/play/1036046/Beyond-Creating-Joy-What-Else",
    sourceLabel: "GDC Vault",
    tags: ["未成年人保护", "公益", "社会价值"],
    note: "演讲讨论游戏如何连接玩家善意与青少年发展需求。它适合从平台责任、公益机制和社区参与角度理解游戏的社会影响。",
    points: ["游戏社会价值需要被设计成可参与、可衡量的机制。", "未成年人保护不仅是限制，也包括积极的成长支持。", "公益活动要避免与核心玩法和商业目标割裂。"],
    terms: ["minor protection / 未成年人保护", "social impact / 社会影响", "gift-for-good / 公益赠礼"]
  },
  {
    year: 2026,
    category: "文化与可持续",
    categoryClass: "category-culture",
    title: "玩家之外：阿拉伯世界女性创始人塑造独立游戏",
    original: "Beyond the Player: Pathways of Women Founders Shaping Indie Games in the Arab World",
    speaker: "Areej Al-Wabil / Alfaisal University",
    source: "https://gdcvault.com/play/1035776/Beyond-the-Player-Pathways-of",
    sourceLabel: "GDC Vault",
    tags: ["独立游戏", "女性创始人", "地区生态"],
    note: "演讲聚焦阿拉伯独立游戏场景中女性创始人和开发者的路径。它提醒我们，玩家群体增长之外，更要看到谁在创造游戏、如何获得资源和话语权。",
    points: ["地区游戏生态应同时观察玩家市场和创作者结构。", "女性创始人的路径受到文化、教育、资本和平台多重影响。", "适合整理成游戏产业地区研究素材。"],
    terms: ["indie ecosystem / 独立生态", "women founders / 女性创始人", "regional industry / 地区产业"]
  },
  {
    year: 2026,
    category: "音频",
    categoryClass: "category-audio",
    title: "用语音、AI 与加速服务提升游戏留存",
    original: "Boosting Game Retention with Voice, AI & Acceleration",
    speaker: "Jiayi Chen / Tencent",
    source: "https://gdcvault.com/play/1036040/Boosting-Game-Retention-with-Voice",
    sourceLabel: "GDC Vault",
    tags: ["语音聊天", "留存", "AI 音频"],
    note: "演讲介绍综合多媒体方案如何把游戏内语音、安全加速和 AI 能力整合到现代游戏体验里。核心问题是通信质量如何影响社交、组队和留存。",
    points: ["语音体验是多人游戏留存的一部分，而不是附属功能。", "通信、安全和 AI 能力需要统一考虑延迟与稳定性。", "音频基础设施会直接影响社交玩法质量。"],
    terms: ["voice chat / 语音聊天", "retention / 留存", "network acceleration / 网络加速"]
  },
  {
    year: 2026,
    category: "团队领导",
    categoryClass: "category-leadership",
    title: "聪明混蛋：有毒绩效的代价",
    original: "Brilliant Jerks: The Cost of Toxic Performance",
    speaker: "Fleur Marty / Gearbox",
    source: "https://gdcvault.com/play/1035780/Brilliant-Jerks-The-Cost-of",
    sourceLabel: "GDC Vault",
    tags: ["团队文化", "管理", "信任"],
    note: "演讲讨论高能力但有毒的成员如何破坏团队信任、协作和长期人才保留。它适合管理者把“结果导向”与“团队健康”放在同一张表里评估。",
    points: ["短期高产出不能抵消长期信任损耗。", "管理者纵容有毒行为会向团队传递真实价值排序。", "绩效评价应纳入合作质量和文化影响。"],
    terms: ["toxic performance / 有毒绩效", "team trust / 团队信任", "leadership accountability / 领导责任"]
  },
  {
    year: 2026,
    category: "营销与发现",
    categoryClass: "category-marketing",
    title: "传奇回归：《Delta Force》的全球多平台发行策略",
    original: "Bringing Back a Legend: The Global Multi-Platform Publishing Strategy of Delta Force",
    speaker: "Jingshen Wei / Team Jade, Tencent Games",
    source: "https://gdcvault.com/play/1036026/Bringing-Back-a-Legend-The",
    sourceLabel: "GDC Vault",
    tags: ["发行", "全球化", "多平台"],
    note: "演讲讨论《Delta Force》如何建立全球发行管线并服务全球玩家社群。重点是经典 IP 回归时如何同时处理品牌记忆、新玩家获取和多平台运营。",
    points: ["经典 IP 回归需要尊重记忆，也要重新证明当代价值。", "全球发行管线要覆盖本地化、社区、平台和反馈节奏。", "多平台策略会改变内容、技术和市场投放协同。"],
    terms: ["global publishing / 全球发行", "legacy IP / 经典 IP", "multi-platform / 多平台"]
  },
  {
    year: 2026,
    category: "制作",
    categoryClass: "category-production",
    title: "把《Cyberpunk 2077》带到 Mac",
    original: "Bringing Cyberpunk 2077 to Mac",
    speaker: "Charlyn Keating / Apple",
    source: "https://gdcvault.com/play/1035610/Bringing-Cyberpunk-2077-to-Mac",
    sourceLabel: "GDC Vault",
    tags: ["Mac", "AAA 移植", "平台工具"],
    note: "演讲讲述《Cyberpunk 2077》登陆 macOS 的幕后流程。它适合从平台能力、性能适配、工具链和高保真内容迁移角度理解 AAA 移植。",
    points: ["平台移植不是编译通过，而是完整体验标准迁移。", "硬件、图形 API、工具和测试流程需要协同。", "高规格游戏登陆新平台会改变玩家对平台能力的认知。"],
    terms: ["porting / 移植", "macOS gaming / Mac 游戏", "platform tools / 平台工具"]
  },
  {
    year: 2026,
    category: "独立开发",
    categoryClass: "category-indie",
    title: "18 个月做出高评价授权游戏",
    original: "Building a Critically Acclaimed Licensed Game in 18 Months",
    speaker: "Amanda Farough / Strange Scaffold",
    source: "https://gdcvault.com/play/1035784/Building-a-Critically-Acclaimed-Licensed",
    sourceLabel: "GDC Vault",
    tags: ["授权游戏", "制作节奏", "独立团队"],
    note: "演讲拆解小团队如何在短周期内完成有口碑的授权作品。核心不是压缩开发，而是明确授权边界、创意重点和生产取舍。",
    points: ["授权游戏需要理解原作精神，而不是堆砌表面元素。", "18 个月周期要求团队极早锁定核心体验和风险。", "小团队可以用清晰范围和强风格对抗资源劣势。"],
    terms: ["licensed game / 授权游戏", "scope control / 范围控制", "critical reception / 口碑"]
  },
  {
    year: 2026,
    category: "商业策略",
    categoryClass: "category-business",
    title: "打造能推动游戏成功的 Discord 策略",
    original: "Building a Winning Discord Strategy to Fuel the Success of Your Game",
    speaker: "Mason Sciotti / Discord",
    source: "https://gdcvault.com/play/1035637/Building-a-Winning-Discord-Strategy",
    sourceLabel: "GDC Vault",
    tags: ["社区", "Discord", "玩家运营"],
    note: "演讲从平台视角讲 Discord 如何成为游戏社群和增长工具。适合团队思考社区空间、公告、反馈、活动和转化之间的关系。",
    points: ["Discord 策略应服务玩家关系，而不只是开一个服务器。", "社区结构会影响信息传播、反馈质量和成员留存。", "需要把社区运营与发布节奏、活动和支持流程连接。"],
    terms: ["community strategy / 社区策略", "Discord / Discord", "engagement / 互动"]
  },
  {
    year: 2026,
    category: "商业策略",
    categoryClass: "category-business",
    title: "通过伙伴关系增长：Avia 在 Meta 上的品牌与效果实践",
    original: "Building Growth Through Partnership: A Practical Avia Playbook for Brand + Performance on Meta",
    speaker: "Ping Wang / AviaGames",
    source: "https://gdcvault.com/play/1035620/Building-Growth-Through-Partnership-A",
    sourceLabel: "GDC Vault",
    tags: ["增长", "品牌", "效果营销"],
    note: "演讲讨论品牌与效果如何通过合作模式一起运作。重点是共同定义目标、共创素材，并通过测试学习节奏持续优化。",
    points: ["品牌和效果不应被割裂成两个互相竞争的目标。", "合作增长需要共享指标、创意假设和复盘节奏。", "投放学习应反哺产品定位和用户理解。"],
    terms: ["brand + performance / 品牌与效果", "growth partnership / 增长伙伴", "testing cadence / 测试节奏"]
  },
  {
    year: 2026,
    category: "文化与可持续",
    categoryClass: "category-culture",
    title: "构建《Indiana Jones and the Great Circle》的文化世界",
    original: "Building the Cultural World of 'Indiana Jones and the Great Circle'",
    speaker: "Kate Edwards / Geogrify, SetJetters",
    source: "https://gdcvault.com/play/1035787/Building-the-Cultural-World-of",
    sourceLabel: "GDC Vault",
    tags: ["世界观", "文化顾问", "历史地点"],
    note: "演讲关注真实地点与文化在游戏世界构建中的责任和细节。它适合环境叙事、IP 改编和文化准确性相关团队学习。",
    points: ["真实文化不是装饰素材，而是需要研究和尊重的语境。", "历史地点再现要在冒险幻想和现实责任之间取得平衡。", "文化顾问可以帮助团队避免刻板化和误读。"],
    terms: ["culturalization / 文化化", "world-building / 世界构建", "authenticity / 真实感"]
  },
  {
    year: 2026,
    category: "制作",
    categoryClass: "category-production",
    title: "为游戏而生：Apple 硬件与软件开发能力概览",
    original: "Built for Games: Explore Apple Hardware and Software for Game Developers",
    speaker: "Allan Schaffer / Apple",
    source: "https://gdcvault.com/play/1035611/Built-for-Games-Explore-Apple",
    sourceLabel: "GDC Vault",
    tags: ["Apple", "跨平台", "工具链"],
    note: "演讲概览 Apple 在 iOS、iPadOS、macOS 和 visionOS 上的游戏开发能力。适合用于判断 Apple 生态内游戏开发的工具、系统特性和平台机会。",
    points: ["统一架构可以降低多设备开发和优化成本。", "平台工具链会影响性能、输入、分发和测试方式。", "跨 Apple 设备体验需要从早期就考虑 UI 与性能差异。"],
    terms: ["Apple ecosystem / Apple 生态", "visionOS / visionOS", "unified architecture / 统一架构"]
  },
  {
    year: 2026,
    category: "团队领导",
    categoryClass: "category-leadership",
    title: "改变我们领导变革的范式",
    original: "Changing our Paradigm of Leading Change",
    speaker: "Drew Kugler / The Kugler Company",
    source: "https://gdcvault.com/play/1035792/Changing-our-Paradigm-of-Leading",
    sourceLabel: "GDC Vault",
    tags: ["变革管理", "团队文化", "领导力"],
    note: "演讲重新审视管理者推动团队文化改善的方式，指出许多看似解决问题的方案反而增加负担。适合团队领导用于反思变革的节奏和人性成本。",
    points: ["变革不是增加更多流程，而是改变团队理解问题的方式。", "管理者需要区分真实阻力和被错误方案制造的疲惫。", "文化改善要从可持续行为开始，而不是口号。"],
    terms: ["change leadership / 变革领导", "team culture / 团队文化", "sustainable practice / 可持续实践"]
  },
  {
    year: 2026,
    category: "程序与技术",
    categoryClass: "category-programming",
    title: "共创可能性：移动游戏性能的未来",
    original: "Co-Creating Possibility: The Future of Mobile Gaming Performance",
    speaker: "Lukas Medek / Sumo Digital",
    source: "https://gdcvault.com/play/1035614/Co-Creating-Possibility-The-Future",
    sourceLabel: "GDC Vault",
    tags: ["移动性能", "硬件碎片化", "优化"],
    note: "演讲讨论 AI 加速开发后，移动端部署仍会受到硬件和软件碎片化、性能不可预测等问题限制。它适合移动技术团队梳理性能策略。",
    points: ["移动性能问题常来自设备碎片化，而不是单一优化点。", "AI 提升开发速度后，更需要稳定的测试和性能预算。", "跨团队共创能让硬件、引擎和内容目标对齐。"],
    terms: ["mobile performance / 移动性能", "fragmentation / 碎片化", "performance budget / 性能预算"]
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
      <p class="deep-note">${talk.note}</p>
      <ul class="keypoints">${points}</ul>
      <ul class="terms" aria-label="术语表">${terms}</ul>
      <div class="card-actions">
        <a class="source-button" href="${talk.source}" target="_blank" rel="noreferrer">${talk.sourceLabel}</a>
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
