// ========== Hero Data ==========
const heroes = [
  {
    name: '恶魔猎手', en: 'Demon Hunter',
    power: '英雄技能：恶魔之爪 — 本回合获得+1攻击力',
    detail: '快攻王者。残片体系提供持续的过牌与伤害，配合流放机制打出爆炸性回合。当前环境T1，适合喜欢高速节奏的玩家。',
    keywords: ['流放', '残片', '攻击力']
  },
  {
    name: '德鲁伊', en: 'Druid',
    power: '英雄技能：变形 — 本回合获得+1攻击力和1点护甲值',
    detail: '跳费专家。通过法力水晶加速进入后期，用海量大哥碾压对手。抉择机制让每张牌都有多种用法，灵活多变。',
    keywords: ['跳费', '抉择', '铺场']
  },
  {
    name: '猎人', en: 'Hunter',
    power: '英雄技能：稳固射击 — 对敌方英雄造成2点伤害',
    detail: '打脸之王。最强英雄技能直接输出，配合野兽体系和奥秘控制场面。快攻打脸和中速野兽两条路线都很有竞争力。',
    keywords: ['野兽', '奥秘', '打脸']
  },
  {
    name: '法师', en: 'Mage',
    power: '英雄技能：火焰冲击 — 造成1点伤害',
    detail: '法术大师。拥有最丰富的AOE和控制法术，既可打快攻元素法，也能打控制大法术法。随机性带来无穷乐趣。',
    keywords: ['法术', 'AOE', '元素']
  },
  {
    name: '圣骑士', en: 'Paladin',
    power: '英雄技能：援军 — 召唤一个1/1的白银之手新兵',
    detail: 'BUFF专家。通过圣契、光环和手牌BUFF不断滚雪球，场面越打越强。龙骑体系提供强大的中期爆发。',
    keywords: ['圣契', 'BUFF', '龙']
  },
  {
    name: '牧师', en: 'Priest',
    power: '英雄技能：次级治疗术 — 恢复2点生命值',
    detail: '控制之王。强大的解场、偷牌和回复能力，让对手绝望。暗牧形态可转快攻，控制牧则让游戏拖到疲劳。',
    keywords: ['治疗', '控制', '偷牌']
  },
  {
    name: '潜行者', en: 'Rogue',
    power: '英雄技能：装备一把1/2的匕首',
    detail: '连击大师。通过低费法术和连击机制打出变幻莫测的操作，节奏感极强。奇迹贼和武器贼各有千秋。',
    keywords: ['连击', '武器', '过牌']
  },
  {
    name: '萨满', en: 'Shaman',
    power: '英雄技能：召唤图腾（随机一种）',
    detail: '图腾之主。鱼人体系、元素体系和进化体系三线开花。最强过载和AOE让萨满在控场方面首屈一指。',
    keywords: ['图腾', '过载', '进化']
  },
  {
    name: '术士', en: 'Warlock',
    power: '英雄技能：生命分流 — 抽一张牌，受到2点伤害',
    detail: '资源恶魔。最强英雄技能 — 用血量换手牌。疲劳术利用自残机制打出海量伤害，控制术则是后期的王。',
    keywords: ['自残', '过牌', '恶魔']
  },
  {
    name: '战士', en: 'Warrior',
    power: '英雄技能：全副武装 — 获得2点护甲值',
    detail: '护甲之王。叠甲、过牌、解场三位一体的慢速职业。控制战打不死的后期噩梦，激怒战则有中速爆发。',
    keywords: ['护甲', '激怒', '控制']
  },
  {
    name: '死亡骑士', en: 'Death Knight',
    power: '英雄技能：食尸鬼冲锋 — 召唤一个1/1并具有冲锋的食尸鬼',
    detail: '符文大师。三色符文系统提供了高度自定义的构筑空间。血DK控制、冰DK快攻、邪DK铺场，三种打法皆有一战之力。',
    keywords: ['符文', '尸体', '冲锋']
  }
];

// ========== Deck Data (2026.05 — 大地的裂变) ==========
const decks = [
  {
    name: '兆示萨', cls: '萨满', type: 'combo', tier: 'T1',
    desc: '6费兆示龙→7费死亡之翼返场→风怒刀终结。节奏链极强，高分段最稳定上分选择。',
    dust: '约 8,600 尘', cost: '中',
    cards: '兆示之龙、死亡之翼、风怒刀、海潮之力',
    code: 'AAECAZKrBATYxgSJ5ATO8QXRngYNqNQEpeQEh/YEp4AGpYcGzrUGmLcGl7kGpMsG+dsGueEG7OUGAAA='
  },
  {
    name: '法术瞎', cls: '恶魔猎手', type: 'aggro', tier: 'T1',
    desc: '海洋咒符+布洛克斯加奋战+双地标体系。对多数卡组优势，黄金赛验证竞技强度。',
    dust: '约 7,200 尘', cost: '中',
    cards: '海洋咒符、布洛克斯·亡刃、邪能地标、残片震击',
    code: 'AAECAZDdAwTn9QXHpAbEuAbBwQYNlugFhaoG/q4GprMG7b4GxNEG1NEGpdIGotYGm9kGvOEG4OIGAAA='
  },
  {
    name: '兆示龙战', cls: '战士', type: 'midrange', tier: 'T1',
    desc: '战士最强形态，按费拍怪+兆示联动+龙族BUFF，57.6%胜率。',
    dust: '约 11,400 尘', cost: '高',
    cards: '拉格纳罗斯·绝世烈火、末世特使、龙息烈焰',
    code: 'AAECAQcIx6QGpKcGi7AGn7gG1boG+skG5OQGmN4GC4agBI7UBI7oBYWcBqCgBqSnBqeoBqeoBo6+BvDKBgAA'
  },
  {
    name: '打脸法', cls: '法师', type: 'aggro', tier: 'T1',
    desc: '极致快攻，高效过牌+海量直伤，59.4%胜率冠绝。7费前终结比赛。',
    dust: '约 4,800 尘', cost: '低',
    cards: '炎爆术、冰枪术、火球术、大法师安东尼',
    code: 'AAECAf0EBM6SBf3EBabxBdf0BQ2pnwS3oASuwASQyQTB0AXI0AXs4wWo7wXb+AXPngbDugbI6wYAAA=='
  },
  {
    name: '结束骑(光环骑)', cls: '圣骑士', type: 'midrange', tier: 'T1',
    desc: '版本答案！低费站场→光环BUFF滚雪球→终极一波，62.3%胜率领跑。',
    dust: '约 14,700 尘', cost: '高',
    cards: '光铸凯尔萨斯、光环护盾、龙骑之誓、克洛玛图斯',
    code: 'AAECAZ8FBITgBY3OBYCuBt++Bg2cnwTunwTQpAW9pwXR+AXVngbCngafoAaroAavqAbRrAbPvQYAAA=='
  },
  {
    name: '彩虹DK', cls: '死亡骑士', type: 'control', tier: 'T2',
    desc: '三色符文灵活应对所有对局，吸血光环+大量解牌让快攻绝望。国际服S级。',
    dust: '约 9,800 尘', cost: '高',
    cards: '吸血光环、帕奇维克、血虫感染、冰霜巨龙',
    code: 'AAECAfHhBATYxgSJ5ATO8QXRngYNqNQEpeQEh/YEp4AGpYcGzrUGmLcGl7kGpMsG+dsGueEG7OUGAAA='
  },
  {
    name: '控制战', cls: '战士', type: 'control', tier: 'T2',
    desc: '叠最厚的甲，解最多的场。后期靠绝命乱斗清场后反杀，打不死的小强。',
    dust: '约 10,800 尘', cost: '高',
    cards: '绝命乱斗、奥丁、裂盾一击、盾牌猛击',
    code: 'AAECAQcIx6QGpKcGi7AGn7gG1boG+skG5OQGmN4GC4agBI7UBI7oBYWcBqCgBqSnBqeoBqeoBo6+BvDKBgAA'
  },
  {
    name: '树人德', cls: '德鲁伊', type: 'aggro', tier: 'T2',
    desc: '快速跳费→铺场树人海→群体BUFF带走。造价低廉，新手友好。',
    dust: '约 3,200 尘', cost: '低',
    cards: '树人召唤、丛林之魂、自然之力、古夫·符文图腾',
    code: 'AAECAZICBM6SBf3EBabxBdf0BQ2pnwS3oASuwASQyQTB0AXI0AXs4wWo7wXb+AXPngbDugbI6wYAAA=='
  },
  {
    name: '兆示蛋术', cls: '术士', type: 'combo', tier: 'T2',
    desc: '兆示关键词联动，单卡爆发力极强。自残过牌→兆示组件→OTK斩杀。',
    dust: '约 8,200 尘', cost: '中',
    cards: '兆示之卵、暗影华尔兹、黑眼、痛苦诅咒',
    code: 'AAECAf0GBM6SBf3EBabxBdf0BQ2pnwS3oASuwASQyQTB0AXI0AXs4wWo7wXb+AXPngbDugbI6wYAAA=='
  },
  {
    name: '自然萨', cls: '萨满', type: 'aggro', tier: 'T2',
    desc: '低费自然法术+元素联动快速铺场。55%胜率，传奇分段热门之选。',
    dust: '约 3,800 尘', cost: '低',
    cards: '闪电箭、图腾巨像、自然之怒、熔岩爆裂',
    code: 'AAECAZKrBALYxgSJ5AQNqNQEpeQEh/YEp4AGpYcGzrUGmLcGl7kGpMsG+dsGueEG7OUGAAA='
  },
  {
    name: '法术法', cls: '法师', type: 'midrange', tier: 'T2',
    desc: '法术联动+强力AOE清场+后期大法师爆发。元素体系提供稳定过牌。',
    dust: '约 7,600 尘', cost: '中',
    cards: '流水元素、元素唤醒、炎爆术、大法师安东尼',
    code: 'AAECAf0EBM6SBf3EBabxBdf0BQ2pnwS3oASuwASQyQTB0AXI0AXs4wWo7wXb+AXPngbDugbI6wYAAA=='
  },
  {
    name: '纯净骑', cls: '圣骑士', type: 'midrange', tier: 'T2',
    desc: '纯职业卡联动、光环BUFF体系滚雪球。无中立卡触发强力职业加成。',
    dust: '约 6,400 尘', cost: '中',
    cards: '光铸远征军、青铜龙、龙息烈焰、时光探险者',
    code: 'AAECAZ8FBITgBY3OBYCuBt++Bg2cnwTunwTQpAW9pwXR+AXVngbCngafoAaroAavqAbRrAbPvQYAAA=='
  },
  {
    name: '野兽猎', cls: '猎人', type: 'aggro', tier: 'T2',
    desc: '蓝白构筑极致性价比，简单粗暴打脸。新手上分首选，只需一张免费传说。',
    dust: '约 2,400 尘', cost: '低',
    cards: '杀戮命令、动物伙伴、暴龙王、快速射击',
    code: 'AAECAR8Cx6QG5OQGDoagBI7UBI7oBYWcBqCgBqSnBqeoBqeoBo6+BqDIBq7IBrDIBvDKBgAA'
  },
  {
    name: '龙战(吼爹版)', cls: '战士', type: 'midrange', tier: 'T2',
    desc: '全蓝白仅1橙！56.2%胜率（7128场），按费拍怪节奏清晰，新手入坑首选。',
    dust: '约 3,600 尘', cost: '低',
    cards: '格罗玛什·地狱咆哮、龙匠、奥金斧、库卡隆精英',
    code: 'AAECAQcIx6QGpKcGi7AGn7gG1boG+skG5OQGmN4GC4agBI7UBI7oBYWcBqCgBqSnBqeoBqeoBo6+BvDKBgAA'
  },
  {
    name: '控制牧', cls: '牧师', type: 'control', tier: 'T3',
    desc: '海量解牌和回复，偷牌耗资源，持久战天花板。造价昂贵但体验独特。',
    dust: '约 12,000 尘', cost: '高',
    cards: '暗言术·毁、灵魂之镜、窃取、暗影精华',
    code: 'AAECAZKrBATYxgSJ5ATO8QXRngYNqNQEpeQEh/YEp4AGpYcGzrUGmLcGl7kGpMsG+dsGueEG7OUGAAA='
  },
  {
    name: '机械贼', cls: '潜行者', type: 'midrange', tier: 'T3',
    desc: '机械亡语联动，场面无限续杯。56%胜率，特定对局中有奇效。',
    dust: '约 5,800 尘', cost: '中',
    cards: '机械龙、钩镰弯刀、钢铁舞者、齿轮大师',
    code: 'AAECAZKrBALYxgSJ5AQNqNQEpeQEhPYEp4AGpYcGzrUGmLcGl7kGpMsG+dsGueEG7OUGAAA='
  }
];

// ========== Render Heroes ==========
const heroesGrid = document.getElementById('heroesGrid');
if (!heroesGrid) { console.warn('heroesGrid element not found'); } else {

heroes.forEach(hero => {
  const card = document.createElement('div');
  card.className = 'hero-card';
  card.innerHTML = `
    <h3>${hero.name}</h3>
    <p class="hero-class">${hero.en}</p>
    <p class="hero-power">${hero.power}</p>
    <div class="hero-detail">
      <p>${hero.detail}</p>
      <p class="keyword-row">
        ${hero.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join(' ')}
      </p>
    </div>
  `;
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
  heroesGrid.appendChild(card);
});

}

// ========== Render Decks ==========
const decksGrid = document.getElementById('decksGrid');
if (!decksGrid) { console.warn('decksGrid element not found'); } else {

function renderDecks(filter) {
  decksGrid.innerHTML = '';
  const filtered = filter === 'all' ? decks : decks.filter(d => d.type === filter);

  filtered.forEach(deck => {
    const card = document.createElement('div');
    card.className = 'deck-card';
    card.innerHTML = `
      <span class="deck-tier ${deck.tier === 'T1' ? 'tier-s' : deck.tier === 'T2' ? 'tier-a' : 'tier-b'}">${deck.tier}</span>
      <span class="deck-type ${deck.type}">${getTypeLabel(deck.type)}</span>
      <span class="deck-cost cost-${deck.cost}">${deck.cost}造价</span>
      <h3>${deck.name}</h3>
      <p class="deck-class">${deck.cls}</p>
      <p class="deck-desc">${deck.desc}</p>
      <p class="deck-cards">核心：${deck.cards}</p>
      <div class="deck-bottom">
        <p class="deck-dust">${deck.dust}</p>
        <button class="deck-code-btn" data-code="${deck.code}" title="复制卡组代码">📋 复制代码</button>
      </div>
    `;
    decksGrid.appendChild(card);
  });

  // Deck code copy buttons
  document.querySelectorAll('.deck-code-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const code = btn.dataset.code;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = '✅ 已复制';
        setTimeout(() => { btn.textContent = '📋 复制代码'; }, 2000);
      }).catch(() => {
        btn.textContent = '❌ 失败';
        setTimeout(() => { btn.textContent = '📋 复制代码'; }, 2000);
      });
    });
  });
}

function getTypeLabel(type) {
  const labels = { aggro: '快攻', midrange: '中速', control: '控制', combo: '组合技' };
  return labels[type] || type;
}

renderDecks('all');

// ========== Deck Filter ==========
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDecks(btn.dataset.filter);
  });
});

// ========== Deck Compare ==========
const compareToggle = document.getElementById('compareToggle');
const comparePanel = document.getElementById('comparePanel');
const compareSlot1 = document.getElementById('compareSlot1');
const compareSlot2 = document.getElementById('compareSlot2');

if (compareToggle && comparePanel && compareSlot1 && compareSlot2) {
  let compareMode = false;
  let selectedDecks = [];
  let currentFilter = 'all';

  function updateCompareSlots() {
    [compareSlot1, compareSlot2].forEach((slot, i) => {
      if (selectedDecks[i]) {
        const d = selectedDecks[i];
        slot.innerHTML = `<h4>${d.name}</h4><p>${d.cls} · ${getTypeLabel(d.type)} · ${d.tier}</p><p class="compare-dust">${d.dust}</p><p class="compare-cards">核心：${d.cards}</p>`;
      } else {
        slot.innerHTML = `<span class="compare-placeholder">选择第${i + 1}个卡组</span>`;
      }
    });
  }

  function applyCompareModeToCards() {
    const filtered = currentFilter === 'all' ? decks : decks.filter(d => d.type === currentFilter);
    document.querySelectorAll('.deck-card').forEach((card, i) => {
      card.classList.add('compare-mode');
      if (!card.querySelector('.compare-check')) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'compare-check';
        card.appendChild(checkbox);
      }
      const deckData = filtered[i];
      if (deckData && selectedDecks.some(d => d.name === deckData.name)) {
        card.classList.add('compare-selected');
      }
      card.onclick = function() {
        if (!compareMode || !deckData) return;
        const selIdx = selectedDecks.findIndex(d => d.name === deckData.name);
        if (selIdx >= 0) {
          selectedDecks.splice(selIdx, 1);
          card.classList.remove('compare-selected');
        } else if (selectedDecks.length < 2) {
          selectedDecks.push(deckData);
          card.classList.add('compare-selected');
        }
        updateCompareSlots();
      };
    });
  }

  compareToggle.addEventListener('click', () => {
    compareMode = !compareMode;
    compareToggle.classList.toggle('active', compareMode);
    selectedDecks = [];
    updateCompareSlots();
    comparePanel.style.display = compareMode ? 'flex' : 'none';
    if (compareMode) {
      applyCompareModeToCards();
    } else {
      document.querySelectorAll('.deck-card').forEach(card => {
        card.classList.remove('compare-mode', 'compare-selected');
        card.onclick = null;
        const checkbox = card.querySelector('.compare-check');
        if (checkbox) checkbox.remove();
      });
    }
  });

  const origRenderDecks = renderDecks;
  renderDecks = function(filter) {
    currentFilter = filter;
    origRenderDecks(filter);
    if (compareMode) {
      applyCompareModeToCards();
    }
  };
}

}

// ========== Accordion ==========
document.querySelectorAll('.tip-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.tip-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('open');
        i.querySelector('.tip-header')?.setAttribute('aria-expanded', 'false');
      }
    });
    item.classList.toggle('open');
    header.setAttribute('aria-expanded', !isOpen);
  });
});

// ========== Scroll Progress ==========
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  });
}

// ========== Back to Top ==========
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  });

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== Smooth Nav Scroll (offset for sticky header) ==========
document.querySelectorAll('.nav-bar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ========== Theme Toggle ==========
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    }
  });
}

// ========== Hero Search ==========
const heroSearch = document.getElementById('heroSearch');
const heroSearchEmpty = document.getElementById('heroSearchEmpty');
if (heroSearch && heroesGrid) {
  let searchTimeout;
  heroSearch.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = heroSearch.value.trim().toLowerCase();
      let visibleCount = 0;
      document.querySelectorAll('.hero-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        const match = !query || text.includes(query);
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      heroSearchEmpty.style.display = visibleCount === 0 ? 'block' : 'none';
    }, 200);
  });
}

// ========== Quiz ==========
const quizData = [
  {
    question: '每回合最多可以拥有多少颗法力水晶？',
    options: ['8', '10', '12', '无上限'],
    answer: 1
  },
  {
    question: '以下哪个关键词表示"无法成为法术或英雄技能的目标"？',
    options: ['嘲讽', '圣盾', '潜行', '魔免'],
    answer: 3
  },
  {
    question: '新手推荐从哪种类型的卡组入手？',
    options: ['控制卡组', '组合技卡组', '快攻卡组', '疲劳卡组'],
    answer: 2
  },
  {
    question: '"发现"机制会从几张牌中选择？',
    options: ['1张', '2张', '3张', '随机'],
    answer: 2
  },
  {
    question: '以下哪种行为可以获得"卡差优势"？',
    options: ['每回合用满法力水晶', '使用英雄技能打脸', '过牌比对手多', '抢先使用传说卡牌'],
    answer: 2
  }
];

const quizStartBtn = document.getElementById('quizStartBtn');
const quizContainer = document.getElementById('quizContainer');

if (quizStartBtn && quizContainer) {
  let userAnswers = new Array(quizData.length).fill(-1);
  let quizSubmitted = false;

  function renderQuiz() {
    quizSubmitted = false;
    userAnswers = new Array(quizData.length).fill(-1);
    quizContainer.innerHTML = quizData.map((q, qi) => `
      <div class="quiz-question">
        <h4>${qi + 1}. ${q.question}</h4>
        ${q.options.map((opt, oi) => `
          <button class="quiz-option" data-q="${qi}" data-o="${oi}">${opt}</button>
        `).join('')}
      </div>
    `).join('') + `
      <button class="quiz-submit-btn" id="quizSubmit">提交答案</button>
    `;
    quizContainer.style.display = 'block';
    quizStartBtn.style.display = 'none';

    quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizSubmitted) return;
        const qi = parseInt(btn.dataset.q);
        const oi = parseInt(btn.dataset.o);
        userAnswers[qi] = oi;
        quizContainer.querySelectorAll(`.quiz-option[data-q="${qi}"]`).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById('quizSubmit').disabled = userAnswers.includes(-1);
      });
    });

    document.getElementById('quizSubmit').addEventListener('click', submitQuiz);
  }

  function submitQuiz() {
    if (userAnswers.includes(-1)) return;
    quizSubmitted = true;
    let score = 0;
    quizData.forEach((q, qi) => {
      if (userAnswers[qi] === q.answer) score++;
    });
    quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
      const qi = parseInt(btn.dataset.q);
      btn.disabled = true;
      if (parseInt(btn.dataset.o) === quizData[qi].answer) btn.classList.add('correct');
      else if (parseInt(btn.dataset.o) === userAnswers[qi]) btn.classList.add('wrong');
    });
    const comments = [
      '多看看新手攻略再试试吧！',
      '还需要多多练习哦~',
      '不错，对游戏有一定了解！',
      '很扎实！差一点就满分了。',
      '满分！你已经准备好爬天梯了！'
    ];
    document.getElementById('quizSubmit').remove();
    quizContainer.insertAdjacentHTML('beforeend', `
      <div class="quiz-result">
        <div class="score">${score} / ${quizData.length}</div>
        <div class="comment">${comments[score]}</div>
        <button class="quiz-retry-btn" id="quizRetry">重新答题</button>
      </div>
    `);
    document.getElementById('quizRetry').addEventListener('click', renderQuiz);
    quizContainer.querySelector('.quiz-result').scrollIntoView({ behavior: 'smooth' });
  }

  quizStartBtn.addEventListener('click', renderQuiz);
}

// ========== Count-Up Animation ==========
const statNums = document.querySelectorAll('.stat-num[data-target]');
if (statNums.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const duration = 1500;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.6 });

  statNums.forEach(el => observer.observe(el));
}

// ========== Battlegrounds Render ==========
const bgGrid = document.getElementById('bgGrid');
if (bgGrid) {
  const bgComps = [
    {
      name: '护戒纳迦跳操流', tier: 'T0', tribes: '纳迦 / 龙',
      desc: '6本护戒纳迦+瑞文戴尔+暮光巢母，战斗中打出海量法术。大漩涡纳迦翻倍法术值，搭配诗心龙保留属性。当前上限最高的阵容。',
      key: '护戒纳迦、瑞文戴尔、暮光巢母、诗心龙'
    },
    {
      name: '大威天龙·卡雷体系', tier: 'T1', tribes: '龙',
      desc: '5本卡雷苟斯+铜须+多彩龙，中期就能发力。骨火龙、诗心龙、琥珀卫士传攻体系，节奏极快。',
      key: '卡雷苟斯、铜须、多彩龙、骨火龙'
    },
    {
      name: '亡灵纺织工电表流', tier: 'T1', tribes: '亡灵',
      desc: '纺织工BUFF翻倍(+1→+2)，配合私掠者+罗杰斯翻倍释放悬赏令。成型后千攻亡灵不是梦，但成型难度较大。',
      key: '纺织工、私掠者、罗杰斯、悬赏令'
    },
    {
      name: '沙锤手蓝调纳迦', tier: 'T1', tribes: '纳迦',
      desc: '蓝调BUFF上调至+2/+2，沙锤手肖像费用从7降为3。配合骨火巨龙、亡灵马等优质单核高效转化法术。',
      key: '沙锤手、蓝调节奏、骨火巨龙、智慧之球'
    },
    {
      name: '鱼人画家流', tier: 'T2', tribes: '鱼人',
      desc: '莫格顿爹妈下调至3星让前中期过渡更丝滑，搭配原始鱼人画家灵活运营。中规中矩但稳定上分。',
      key: '莫格顿爹妈、原始鱼人画家、蛮鱼队长'
    }
  ];

  const bgHeroes = [
    { name: '吉恩', tier: 'T0', desc: '格雷迈恩 — 奇偶体系核心，灵活切换英雄技能节奏' },
    { name: '米罗克', tier: 'T0', desc: '米尔豪斯·法力风暴 — 起始2金但后续购买永久-1金' },
    { name: '加里维克斯', tier: 'T0', desc: '贸易大王 — 卖随从获得额外铸币，经济碾压' },
    { name: '斯尼德', tier: 'T0', desc: '伐木机驾驶员 — 亡语召唤高本随从，战力碾压' }
  ];

  // Render compositions
  bgComps.forEach(comp => {
    const card = document.createElement('div');
    card.className = 'bg-comp-card';
    card.innerHTML = `
      <span class="bg-tier bg-tier-${comp.tier.toLowerCase()}">${comp.tier}</span>
      <h4>${comp.name}</h4>
      <p class="bg-tribes">${comp.tribes}</p>
      <p class="bg-desc">${comp.desc}</p>
      <p class="bg-key">关键随从：${comp.key}</p>
    `;
    bgGrid.appendChild(card);
  });

  // Render heroes
  const bgHeroesGrid = document.getElementById('bgHeroesGrid');
  if (bgHeroesGrid) {
    bgHeroes.forEach(h => {
      const card = document.createElement('div');
      card.className = 'bg-hero-card';
      card.innerHTML = `<span class="bg-tier bg-tier-${h.tier.toLowerCase()}">${h.tier}</span><h4>${h.name}</h4><p>${h.desc}</p>`;
      bgHeroesGrid.appendChild(card);
    });
  }
}

// ========== Card Browser ==========
const cardsGrid = document.getElementById('cardsGrid');
const cardsLoading = document.getElementById('cardsLoading');
const cardsPagination = document.getElementById('cardsPagination');
const classFilters = document.getElementById('classFilters');
const typeFilter = document.getElementById('typeFilter');
const rarityFilter = document.getElementById('rarityFilter');
const costFilter = document.getElementById('costFilter');
const cardSearch = document.getElementById('cardSearch');

if (cardsGrid) {
  const CLASS_MAP = {
    NEUTRAL: '中立', DEMONHUNTER: '恶魔猎手', DRUID: '德鲁伊', HUNTER: '猎人',
    MAGE: '法师', PALADIN: '圣骑士', PRIEST: '牧师', ROGUE: '潜行者',
    SHAMAN: '萨满', WARLOCK: '术士', WARRIOR: '战士', DEATHKNIGHT: '死亡骑士'
  };
  const TYPE_MAP = { MINION: '随从', SPELL: '法术', WEAPON: '武器', HERO: '英雄牌', LOCATION: '地标' };
  const RARITY_MAP = { COMMON: '普通', RARE: '稀有', EPIC: '史诗', LEGENDARY: '传说', FREE: '免费' };

  let allCards = [];
  let filteredCards = [];
  let currentPage = 1;
  const PER_PAGE = 30;
  let cardsLoaded = false;

  const classOrder = ['ALL','NEUTRAL','DEMONHUNTER','DRUID','HUNTER','MAGE','PALADIN','PRIEST','ROGUE','SHAMAN','WARLOCK','WARRIOR','DEATHKNIGHT'];

  // Build class filter buttons
  classOrder.forEach(cls => {
    const btn = document.createElement('button');
    btn.className = 'cards-filter-btn' + (cls === 'ALL' ? ' active' : '');
    btn.dataset.filter = cls;
    btn.textContent = cls === 'ALL' ? '全部' : (CLASS_MAP[cls] || cls);
    classFilters.appendChild(btn);
  });

  // Build cost filter options
  for (let i = 0; i <= 9; i++) {
    const opt = document.createElement('option');
    opt.value = i; opt.textContent = i + ' 费';
    costFilter.appendChild(opt);
  }
  const opt10 = document.createElement('option');
  opt10.value = '10+'; opt10.textContent = '10+ 费';
  costFilter.appendChild(opt10);

  // Set display names
  const SET_NAMES = {
    CORE: '核心', EXPERT1: '经典', LEGACY: '怀旧', NAXX: '纳克萨玛斯',
    GVG: '地精大战侏儒', BRM: '黑石山', TGT: '冠军的试炼', LOE: '探险者协会',
    OG: '古神低语', KARA: '卡拉赞之夜', GANGS: '龙争虎斗加基森',
    UNGORO: '勇闯安戈洛', ICECROWN: '冰封王座', LOOTAPALOOZA: '狗头人与地下世界',
    GILNEAS: '女巫森林', BOOMSDAY: '砰砰计划', TROLL: '拉斯塔哈的大乱斗',
    DALARAN: '暗影崛起', ULDUM: '奥丹姆奇兵', DRAGONS: '巨龙降临',
    DEMON_HUNTER_INITIATE: '恶魔猎手序章', BLACK_TEMPLE: '外域的灰烬',
    SCHOLOMANCE: '通灵学园', DARKMOON_FAIRE: '暗月马戏团', THE_BARRENS: '贫瘠之地',
    STORMWIND: '暴风城', ALTERAC_VALLEY: '奥特兰克', THE_SUNKEN_CITY: '沉没之城',
    REVENDRETH: '纳斯利亚堡', RETURN_OF_THE_LICH_KING: '巫妖王归来',
    PATH_OF_ARTHAS: '阿尔萨斯之路', BATTLE_OF_THE_BANDS: '传奇音乐节',
    TITANS: '泰坦诸神', WILD_WEST: '决战荒芜之地', WHIZBANGS_WORKSHOP: '威兹班工坊',
    SPACE: '深暗领域', TIME_TRAVEL: '时光之穴', EMERALD_DREAM: '漫游翡翠梦境',
    CATACLYSM: '大地的裂变', ISLAND_VACATION: '安戈洛龟途', THE_LOST_CITY: '失落之城',
    WONDERS: '星际英雄传', YEAR_OF_THE_DRAGON: '巨龙年', VANILLA: '基础',
    HERO_SKINS: '英雄皮肤', EVENT: '活动', PLACEHOLDER_202204: '占位'
  };

  function getSetName(set) { return SET_NAMES[set] || set; }

  function getCardClass(c) { return c.cardClass || 'NEUTRAL'; }

  function applyFilters() {
    const cls = document.querySelector('#classFilters .cards-filter-btn.active')?.dataset?.filter || 'ALL';
    const type = typeFilter.value;
    const rarity = rarityFilter.value;
    const cost = costFilter.value;
    const set = setFilter.value;
    const sort = sortBy.value;
    const query = cardSearch.value.trim().toLowerCase();

    filteredCards = allCards.filter(c => {
      if (cls !== 'ALL' && getCardClass(c) !== cls) return false;
      if (type !== 'ALL' && c.type !== type) return false;
      if (rarity !== 'ALL' && c.rarity !== rarity) return false;
      if (set !== 'ALL' && c.set !== set) return false;
      if (cost !== 'ALL') {
        if (cost === '10+') { if ((c.cost || 0) < 10) return false; }
        else { if (c.cost !== parseInt(cost)) return false; }
      }
      if (query && !(c.name || '').toLowerCase().includes(query) && !(c.text || '').toLowerCase().includes(query)) return false;
      return true;
    });

    // Sort
    const setOrder = [...new Set(allCards.map(c => c.set).filter(Boolean))].sort();
    filteredCards.sort((a, b) => {
      switch (sort) {
        case 'set-cost-asc':
          const si = setOrder.indexOf(a.set) - setOrder.indexOf(b.set);
          return si !== 0 ? si : ((a.cost || 0) - (b.cost || 0));
        case 'cost-asc': return (a.cost || 0) - (b.cost || 0);
        case 'cost-desc': return (b.cost || 0) - (a.cost || 0);
        case 'name-asc': return (a.name || '').localeCompare(b.name || '', 'zh');
        default: return 0;
      }
    });

    currentPage = 1;
    renderPage();
  }

  function renderPage() {
    const totalPages = Math.ceil(filteredCards.length / PER_PAGE) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * PER_PAGE;
    const pageCards = filteredCards.slice(start, start + PER_PAGE);

    cardsGrid.innerHTML = pageCards.map(c => {
      const cardImg = `https://art.hearthstonejson.com/v1/render/latest/zhCN/256x/${c.id}.png`;
      const cardImgBig = `https://art.hearthstonejson.com/v1/render/latest/zhCN/512x/${c.id}.png`;

      return `
        <div class="card-item">
          <img src="${cardImg}" alt="${c.name || '卡牌'}" loading="lazy" onerror="this.style.display='none'">
          <div class="card-hover-zoom">
            <img src="${cardImgBig}" alt="${c.name || '卡牌'}" loading="lazy">
          </div>
        </div>`;
    }).join('');

    // Pagination controls
    let pagHTML = '';
    pagHTML += `<button class="cards-page-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="prev">◀ 上一页</button>`;
    const maxShow = 7;
    let startP = Math.max(1, currentPage - 3);
    let endP = Math.min(totalPages, startP + maxShow - 1);
    if (endP - startP < maxShow - 1) startP = Math.max(1, endP - maxShow + 1);

    for (let p = startP; p <= endP; p++) {
      pagHTML += `<button class="cards-page-btn ${p === currentPage ? 'active' : ''}" data-page="${p}">${p}</button>`;
    }
    pagHTML += `<button class="cards-page-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="next">下一页 ▶</button>`;
    pagHTML += `<div class="cards-result-info">共 ${filteredCards.length} 张卡牌 · 第 ${currentPage}/${totalPages} 页</div>`;
    cardsPagination.innerHTML = pagHTML;

    // Page button events
    cardsPagination.querySelectorAll('.cards-page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        if (page === 'prev') currentPage--;
        else if (page === 'next') currentPage++;
        else currentPage = parseInt(page);
        renderPage();
        cardsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    cardsGrid.style.display = '';
  }

  // Load cards data
  fetch('cards-data.json')
    .then(r => r.json())
    .then(data => {
      // Deduplicate by name — keep newest version (highest dbfId)
      const seen = new Map();
      data.forEach(c => {
        const key = c.name;
        if (!seen.has(key) || (c.dbfId || 0) > (seen.get(key).dbfId || 0)) seen.set(key, c);
      });
      allCards = [...seen.values()];

      // Build set filter from data
      const setOrder = [...new Set(allCards.map(c => c.set).filter(Boolean))].sort();
      setOrder.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s; opt.textContent = getSetName(s);
        setFilter.appendChild(opt);
      });

      // Default sort: set → cost asc
      filteredCards = [...allCards];
      filteredCards.sort((a, b) => {
        const si = setOrder.indexOf(a.set) - setOrder.indexOf(b.set);
        return si !== 0 ? si : ((a.cost || 0) - (b.cost || 0));
      });

      const countTag = document.querySelector('#cards .version-tag');
      if (countTag) countTag.textContent = allCards.length.toLocaleString() + ' 张';
      cardsLoaded = true;
      cardsLoading.style.display = 'none';
      renderPage();
    })
    .catch(err => {
      cardsLoading.textContent = '⚠️ 卡牌数据加载失败，请刷新页面重试。';
      console.error('Card data load error:', err);
    });

  // Filter event listeners
  document.querySelectorAll('#classFilters .cards-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#classFilters .cards-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (cardsLoaded) applyFilters();
    });
  });

  typeFilter.addEventListener('change', () => { if (cardsLoaded) applyFilters(); });
  rarityFilter.addEventListener('change', () => { if (cardsLoaded) applyFilters(); });
  costFilter.addEventListener('change', () => { if (cardsLoaded) applyFilters(); });
  setFilter.addEventListener('change', () => { if (cardsLoaded) applyFilters(); });
  sortBy.addEventListener('change', () => { if (cardsLoaded) applyFilters(); });

  let searchTimeout;
  cardSearch.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => { if (cardsLoaded) applyFilters(); }, 300);
  });
}

