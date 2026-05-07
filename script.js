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

// ========== Deck Data ==========
const decks = [
  {
    name: '残片快攻 DH', class: '恶魔猎手', type: 'aggro',
    desc: '利用残片体系不断过牌，配合流放机制在6-7费完成斩杀。环境中速与慢速卡组的噩梦。',
    dust: '粉尘需求：约 6800',
    cards: '核心卡：凯恩·日怒、残片震击、灵魂裂劈'
  },
  {
    name: '血DK控制', class: '死亡骑士', type: 'control',
    desc: '依靠鲜血符文的大量回复和解场，把游戏拖入疲劳，靠发现的资源获胜。',
    dust: '粉尘需求：约 9200',
    cards: '核心卡：吸血光环、血虫感染、帕奇维克'
  },
  {
    name: '龙骑中速', class: '圣骑士', type: 'midrange',
    desc: '利用龙族BUFF卡牌不断强化场面，中期一波龙息爆发带走对手。',
    dust: '粉尘需求：约 7400',
    cards: '核心卡：时光探险者、龙息烈焰、青铜龙'
  },
  {
    name: '疲劳术', class: '术士', type: 'combo',
    desc: '通过自残机制堆叠疲劳伤害，配合暗影法术在后期完成高额斩杀。',
    dust: '粉尘需求：约 8600',
    cards: '核心卡：痛苦诅咒、暗影华尔兹、黑眼'
  },
  {
    name: '元素法', class: '法师', type: 'midrange',
    desc: '利用元素链触发元素联动效果，快速铺场形成压制之势。',
    dust: '粉尘需求：约 5600',
    cards: '核心卡：流水元素、元素唤醒、炎爆'
  },
  {
    name: '海盗贼', class: '潜行者', type: 'aggro',
    desc: '低曲线 + 海盗联动，前三费就能把场面铺满，用武器和冲锋收人头。',
    dust: '粉尘需求：约 4200',
    cards: '核心卡：海盗帕奇斯、钩镰弯刀、船载火炮'
  },
  {
    name: '控制牧', class: '牧师', type: 'control',
    desc: '堆叠海量解牌和回复，用偷来的牌打败对手。持久战的天花板。',
    dust: '粉尘需求：约 9800',
    cards: '核心卡：暗言术·毁、灵魂之镜、窃取'
  },
  {
    name: '大哥德', class: '德鲁伊', type: 'combo',
    desc: '快速跳费到10费，用优胜劣汰+大量传说随从一波带走。',
    dust: '粉尘需求：约 12000',
    cards: '核心卡：优胜劣汰、古夫·符文图腾、塞纳留斯'
  },
  {
    name: '打脸猎', class: '猎人', type: 'aggro',
    desc: '纯打脸策略，利用英雄技能和直伤法术7回合内结束战斗。',
    dust: '粉尘需求：约 3400',
    cards: '核心卡：杀戮命令、快速射击、动物伙伴'
  },
  {
    name: '控制战', class: '战士', type: 'control',
    desc: '叠最厚的甲，解最多的场，用疲劳和后期橙卡终结比赛。',
    dust: '粉尘需求：约 10800',
    cards: '核心卡：绝命乱斗、奥丁、裂盾一击'
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
      <span class="deck-type ${deck.type}">${getTypeLabel(deck.type)}</span>
      <h3>${deck.name}</h3>
      <p class="deck-class">${deck.class}</p>
      <p class="deck-desc">${deck.desc}</p>
      <p class="deck-dust">${deck.dust}</p>
      <p class="deck-cards">${deck.cards}</p>
    `;
    decksGrid.appendChild(card);
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
        slot.innerHTML = `<h4>${d.name}</h4><p>${d.class} · ${getTypeLabel(d.type)}</p><p class="compare-dust">${d.dust}</p><p class="compare-cards">${d.cards}</p>`;
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

