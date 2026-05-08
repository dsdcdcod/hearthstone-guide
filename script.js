// ========== Safe HTML Helpers ==========
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

function sanitizeCardText(value) {
  return escapeHTML(value)
    .replace(/&lt;(\/?)b&gt;/g, '<$1b>')
    .replace(/\n/g, '<br>');
}

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
  // ===== 标准模式 T1 =====
  {
    name: '兆示萨', cls: '萨满', type: 'combo', tier: 'T1', format: 'standard',
    desc: '补丁后钻石到传说5508场胜率58.8%。兆示龙→奥拉基尔返场→风怒刀终结，当前最稳定上分选择。',
    dust: '约 9,200 尘', cost: '中',
    cards: '兆示之龙、奥拉基尔·风暴之主、风怒刀、海潮之力',
    code: 'AAECAaoICq+fBP2fBMODB4KYB9umB9+mB+WmB9C/B4LUB5vUBwrmlgf1rAexsAe8sQePvgfDwAfJwAf3wAf2wQfm/QcAAA=='
  },
  {
    name: '法术瞎', cls: '恶魔猎手', type: 'aggro', tier: 'T1', format: 'standard',
    desc: '海洋咒符+布洛克斯+双地标体系，解场打脸兼顾。直伤充足，对多数卡组保持优势，56.0%胜率。',
    dust: '约 7,600 尘', cost: '中',
    cards: '海洋咒符、布洛克斯·亡刃、邪能地标、残片震击',
    code: 'AAECAea5Awi2nwSKqgeSqgeTqgeUvwfQvwfUyQeb1AcLs6AE4fgF3v8GqocHpYgHtJcHtpcHjb8Hkr8Hlb8H4L8HAAA='
  },
  {
    name: '兆示龙战', cls: '战士', type: 'midrange', tier: 'T1', format: 'standard',
    desc: '4费先觉蜿变幼龙→5费乘风浮龙→赤红深渊，中期场面定型。拉格纳罗斯巨型提供压制力，57.6%胜率。',
    dust: '约 11,400 尘', cost: '高',
    cards: '拉格纳罗斯·绝世烈火、先觉蜿变幼龙、乘风浮龙、赤红深渊',
    code: 'AAECAQcEhJ0H0L8HzskHm9QHDePmBqr8Bqv8BveDB+iHB9KXB4+xB9CyB+yyB4S9B7XAB6/BB6DFBwAA'
  },
  {
    name: '直伤法', cls: '法师', type: 'aggro', tier: 'T1', format: 'standard',
    desc: '裂变体系+高效过牌+海量直伤，287场/63.8%（部分分段）。7费前终结比赛，当前环境最强快攻之一。',
    dust: '约 5,200 尘', cost: '低',
    cards: '裂变法术、冰枪术、火球术、大法师安东尼',
    code: 'AAECAf0EArOHB4i+Bw79ngTHhwf0kQeflgfopQeLsQfWvAfXwweGxAeSxAebxAesxgeT2geG4AcAAA=='
  },
  {
    name: '快攻猎(T7猎)', cls: '猎人', type: 'aggro', tier: 'T1', format: 'standard',
    desc: '62%胜率！低费随从站场+英雄技能持续输出+杀戮命令终结。操作简单，新手上分首选。',
    dust: '约 3,200 尘', cost: '低',
    cards: '杀戮命令、动物伙伴、快速射击、兽群呼唤',
    code: 'AAECAR8G054GmacHmqcHm6cHxbEHwbIHDKmfBKqfBK+SB4WVB86bB+6fB5CnB5inB9SvB7TAB7nAB7vABwA='
  },
  {
    name: '灌注德', cls: '德鲁伊', type: 'aggro', tier: 'T1', format: 'standard',
    desc: '529场/67.3%胜率（补丁前）！前期跳费灌注→中期铺场爆发。热修后仍保持高胜率，环境定义者之一。',
    dust: '约 7,200 尘', cost: '中',
    cards: '古夫·符文图腾、树人召唤、自然之力、塞纳留斯',
    code: 'AAECAZICBtb6BqqBB5KDB/KDB6+HB5iXBwyunwSB1ATggQf3gQeIgwewhwfAhwekiQeqrwfWwAfXwAfswAcAAA=='
  },
  // ===== 标准模式 T2 =====
  {
    name: '光环骑', cls: '圣骑士', type: 'midrange', tier: 'T2', format: 'standard',
    desc: '低费站场→光环BUFF滚雪球→克洛玛图斯巨型终结。经典滚雪球体系，54%胜率，适合稳健型玩家。',
    dust: '约 10,800 尘', cost: '高',
    cards: '光铸凯尔萨斯、克洛玛图斯、光环护盾、龙骑之誓',
    code: 'AAECAZ8FCvD+Bsj/BrSBB8ODB+6oB++oB/CoB/SqB+XBB6vGBwrJoATv/ga6lgebqQfLqQfErge+sgfiwQfowQfqwQcA'
  },
  {
    name: '兆示蛋术', cls: '术士', type: 'combo', tier: 'T2', format: 'standard',
    desc: '兆示关键词联动，自残过牌→兆示组件→OTK斩杀。小样本胜率高达77%，上限极高但吃熟练度。',
    dust: '约 8,600 尘', cost: '中',
    cards: '兆示之卵、暗影华尔兹、黑眼、拉法姆',
    code: 'AAECAf0GBsODB/WYB9edB9C/B/jTB5vUBwyPnwTnoATrhAepiAeEmQfgnQePvgeTvgfXvgfYvgfgvgf0wQcA'
  },
  {
    name: '兆示贼', cls: '潜行者', type: 'combo', tier: 'T2', format: 'standard',
    desc: '环境出场率最高(16%)！4费即可打出希奈丝特拉巨型。吃熟练度，上限极高，好玩又有强度。',
    dust: '约 8,800 尘', cost: '中',
    cards: '希奈丝特拉、兆示匕首、钢铁舞者、钩镰弯刀',
    code: 'AAECAaIHDtmiBqGBB5KDB4KYB9GdB4aoB4eoB4ioB8euB8u2B9C/B4rUB5vUB4jZBwj3nwTTngaQgwfBlwe0wQfAwQedxQfVxQcAAA=='
  },
  {
    name: '麦琳德', cls: '德鲁伊', type: 'midrange', tier: 'T2', format: 'standard',
    desc: '8.1%出场率/55.2%胜率！柳牙为核心的跳费体系，中期爆发力极强。德鲁伊稳定上分选择。',
    dust: '约 10,200 尘', cost: '高',
    cards: '柳牙、古夫·符文图腾、塞纳留斯、优胜劣汰',
    code: 'AAECAZICBtb6BqqBB5KDB/KDB6+HB5iXBwyunwSB1ATggQf3gQeIgwewhwfAhwekiQeqrwfWwAfXwAfswAcAAA=='
  },
  {
    name: '任务法', cls: '法师', type: 'combo', tier: 'T2', format: 'standard',
    desc: '挂刀超展开体系，营地千胜构筑验证。裂变法术分裂+任务奖励终结，适合喜欢OTK的玩家。',
    dust: '约 9,800 尘', cost: '高',
    cards: '打开时空之门、裂变法术、大法师安东尼、卡雷苟斯',
    code: 'AAECAanlBwTygwenmwfysgecgggNm/IGtfoG8ZEHsJsH+psH2J4H0aYHy7YH+cMHhsQHksQHk9oHhuAHAAA='
  },
  {
    name: '铺场德', cls: '德鲁伊', type: 'aggro', tier: 'T2', format: 'standard',
    desc: '55-59.3%胜率！快速跳费→铺场树人海→群体BUFF一波带走。造价低廉，打不过兆示但稳定上分。',
    dust: '约 3,800 尘', cost: '低',
    cards: '树人召唤、丛林之魂、自然之力、古夫·符文图腾',
    code: 'AAECAZICAuDAB7HjBw6HnwTZnwSB1ASuhwfEjAeSlweUlwfanQfgnQe4nwfJrAfWwAfbwAePwQcA'
  },
  {
    name: '兆示DK', cls: '死亡骑士', type: 'control', tier: 'T2', format: 'standard',
    desc: '三色符文+兆示体系，帮桑迪套件提供强力返场。应对快攻和控制都有手段，全面型卡组。',
    dust: '约 9,600 尘', cost: '高',
    cards: '复活的奥妮克希亚、帮桑迪、吸血光环、帕奇维克',
    code: 'AAECAfHhBAqSgwfDgweCmAefngfSrgeosQfisQfQvwfqyQeb1AcKh/YE2OUGgf0Gl4IHupUHkasHj74Hjr8HmsUH0MUHAAA='
  },
  {
    name: '任务牧', cls: '牧师', type: 'control', tier: 'T2', format: 'standard',
    desc: '任务奖励提供无限价值，大量解牌和回复耗死对手。偏娱乐向但中低分段表现不错，体验独特。',
    dust: '约 9,400 尘', cost: '高',
    cards: '暗言术·毁、灵魂之镜、窃取、暗影精华',
    code: 'AAECAa0GBqiWB/ypB4CqB4SqB+SyB4O/BwzwnwTLoASg+wbD/waFhgedrQeFvweWvwebvweixAeyxQeW/AcAAA=='
  },
  // ===== 标准模式 T3 / 预算 =====
  {
    name: '龙战(吼爹版)', cls: '战士', type: 'midrange', tier: 'T3', format: 'standard',
    desc: '全蓝白仅1橙！按费拍怪节奏清晰，56.2%胜率（7128场）。新手入坑首选，性价比最高。',
    dust: '约 3,600 尘', cost: '低',
    cards: '格罗玛什·地狱咆哮、龙匠、奥金斧、库卡隆精英',
    code: 'AAECAQcIx6QGpKcGi7AGn7gG1boG+skG5OQGmN4GC4agBI7UBI7oBYWcBqCgBqSnBqeoBqeoBo6+BvDKBgAA'
  },
  {
    name: '树人德', cls: '德鲁伊', type: 'aggro', tier: 'T3', format: 'standard',
    desc: '蓝白构筑极致性价比，简单粗暴铺场打脸。新手上分首选，只需一张免费传说即可启动。',
    dust: '约 2,400 尘', cost: '低',
    cards: '树人召唤、丛林之魂、自然之力、古夫·符文图腾',
    code: 'AAECAZICBM6SBf3EBabxBdf0BQ2pnwS3oASuwASQyQTB0AXI0AXs4wWo7wXb+AXPngbDugbI6wYAAA=='
  },
  // ========== 狂野模式 ==========
  {
    name: '任务术(恶魔之种)', cls: '术士', type: 'combo', tier: 'T1', format: 'wild',
    desc: '狂野霸主！集铺场、控制、OTK于一体。术士出场率超60%，该卡组是定义环境的核心。',
    dust: '约 9,600 尘', cost: '高',
    cards: '恶魔之种、黑暗之门、塔姆辛·罗姆、暗影华尔兹',
    code: 'AAECAf0GBM6SBf3EBabxBdf0BQ2pnwS3oASuwASQyQTB0AXI0AXs4wWo7wXb+AXPngbDugbI6wYAAA=='
  },
  {
    name: '海盗烧树贼', cls: '潜行者', type: 'aggro', tier: 'T1', format: 'wild',
    desc: '60%+胜率（3000+场）！前期海盗站场+武器抢血，下限极高，狂野最稳定上分选择。',
    dust: '约 5,200 尘', cost: '中',
    cards: '海盗帕奇斯、钩镰弯刀、船载火炮、烧树符文',
    code: 'AAECAZKrBALYxgSJ5AQNqNQEpeQEhPYEp4AGpYcGzrUGmLcGl7kGpMsG+dsGueEG7OUGAAA='
  },
  {
    name: '全聚德', cls: '德鲁伊', type: 'combo', tier: 'T1', format: 'wild',
    desc: '巴内斯体系加入后强度登顶！快速跳费→高费传说一波压死，抗性极强。',
    dust: '约 13,000 尘', cost: '高',
    cards: '巴内斯、古夫·符文图腾、优胜劣汰、塞纳留斯',
    code: 'AAECAZICBM6SBf3EBabxBdf0BQ2pnwS3oASuwASQyQTB0AXI0AXs4wWo7wXb+AXPngbDugbI6wYAAA=='
  },
  {
    name: '号角骑', cls: '圣骑士', type: 'aggro', tier: 'T1', format: 'wild',
    desc: '战斗号角快速铺场+光环BUFF滚雪球，新晋狂野热门。低费展开能力极强。',
    dust: '约 7,400 尘', cost: '中',
    cards: '战斗号角、光铸凯尔萨斯、光环护盾、龙骑之誓',
    code: 'AAECAZ8FBITgBY3OBYCuBt++Bg2cnwTunwTQpAW9pwXR+AXVngbCngafoAaroAavqAbRrAbPvQYAAA=='
  },
  {
    name: '宇宙任务法', cls: '法师', type: 'combo', tier: 'T1', format: 'wild',
    desc: '55.5%胜率（4169场）！无限火球OTK，上限极高。宇宙体系灵活应对各种对局。',
    dust: '约 11,800 尘', cost: '高',
    cards: '打开时空之门、大法师安东尼、寒冰屏障、卡雷苟斯',
    code: 'AAECAf0EBM6SBf3EBabxBdf0BQ2pnwS3oASuwASQyQTB0AXI0AXs4wWo7wXb+AXPngbDugbI6wYAAA=='
  },
  {
    name: '海盗战', cls: '战士', type: 'aggro', tier: 'T2', format: 'wild',
    desc: '回归经典快攻！低费海盗+武器+冲锋，63%胜率简单粗暴。最适合新手入狂野。',
    dust: '约 4,400 尘', cost: '低',
    cards: '海盗帕奇斯、库卡隆精英、奥金斧、血帆教徒',
    code: 'AAECAQcIx6QGpKcGi7AGn7gG1boG+skG5OQGmN4GC4agBI7UBI7oBYWcBqCgBqSnBqeoBqeoBo6+BvDKBgAA'
  },
  {
    name: '偶数萨', cls: '萨满', type: 'aggro', tier: 'T2', format: 'wild',
    desc: '吉恩·格雷迈恩体系，1费英雄技能→偶数随从铺场。稳定性极高，低保首选。',
    dust: '约 5,600 尘', cost: '中',
    cards: '吉恩·格雷迈恩、图腾巨像、海潮之力、风怒刀',
    code: 'AAECAZKrBALYxgSJ5AQNqNQEpeQEhPYEp4AGpYcGzrUGmLcGl7kGpMsG+dsGueEG7OUGAAA='
  },
  {
    name: '宇宙猎', cls: '猎人', type: 'midrange', tier: 'T2', format: 'wild',
    desc: '兽王/节奏两种构筑，8费30-40血斩杀。宇宙体系+野兽联动，控场斩杀兼具。',
    dust: '约 10,200 尘', cost: '高',
    cards: '兽王雷克萨、暴龙王、动物伙伴、杀戮命令',
    code: 'AAECAR8Cx6QG5OQGDoagBI7UBI7oBYWcBqCgBqSnBqeoBqeoBo6+BqDIBq7IBrDIBvDKBgAA'
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

let currentDeckFormat = 'all';
let currentDeckType = 'all';
let currentDeckClass = 'all';

// Build class filter buttons from deck data
const classFilterRow = document.getElementById('classFilterRow');
if (classFilterRow) {
  const classes = [...new Set(decks.map(d => d.cls))];
  classes.forEach(cls => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn class-filter-btn';
    btn.dataset.class = cls;
    btn.textContent = cls;
    classFilterRow.appendChild(btn);
  });
}

function renderDecks() {
  decksGrid.innerHTML = '';
  const filtered = decks.filter(d => {
    if (currentDeckFormat !== 'all' && d.format !== currentDeckFormat) return false;
    if (currentDeckType !== 'all' && d.type !== currentDeckType) return false;
    if (currentDeckClass !== 'all' && d.cls !== currentDeckClass) return false;
    return true;
  });

  filtered.forEach(deck => {
    const card = document.createElement('div');
    card.className = 'deck-card';
    card.innerHTML = `
      <span class="deck-tier ${deck.tier === 'T1' ? 'tier-s' : deck.tier === 'T2' ? 'tier-a' : 'tier-b'}">${deck.tier}</span>
      <span class="deck-type ${deck.type}">${getTypeLabel(deck.type)}</span>
      <span class="deck-cost cost-${deck.cost}">${deck.cost}造价</span>
      <h3>${escapeHTML(deck.name)}</h3>
      <p class="deck-class">${escapeHTML(deck.cls)}</p>
      <p class="deck-desc">${escapeHTML(deck.desc)}</p>
      <p class="deck-cards">核心：${deck.cards.split('、').map(c => `<span class="card-link" data-card-name="${escapeHTML(c.trim())}">${escapeHTML(c.trim())}</span>`).join('、')}</p>
      <div class="deck-bottom">
        <p class="deck-dust">${escapeHTML(deck.dust)}</p>
        <button class="deck-code-btn" data-code="${escapeHTML(deck.code)}" title="复制卡组代码">📋 复制代码</button>
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

// Card name link → card gallery
decksGrid.addEventListener('click', (e) => {
  const link = e.target.closest('.card-link');
  if (!link) return;
  const cardName = link.dataset.cardName;
  if (cardSearch && cardName) {
    cardSearch.value = cardName;
    if (!cardsLoaded) loadCardsData();
    else applyFilters();
    document.querySelector('#cards').scrollIntoView({ behavior: 'smooth' });
  }
});

function getTypeLabel(type) {
  const labels = { aggro: '快攻', midrange: '中速', control: '控制', combo: '组合技' };
  return labels[type] || type;
}

renderDecks();

// ========== Deck Filter (Format) ==========
document.querySelectorAll('.format-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDeckFormat = btn.dataset.format;
    renderDecks();
  });
});

// ========== Deck Filter (Type) ==========
document.querySelectorAll('.filter-btn:not(.format-btn):not(.class-filter-btn)').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn:not(.format-btn):not(.class-filter-btn)').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDeckType = btn.dataset.filter;
    renderDecks();
  });
});

// ========== Deck Filter (Class) ==========
if (classFilterRow) {
  classFilterRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.class-filter-btn');
    if (!btn) return;
    document.querySelectorAll('.class-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDeckClass = btn.dataset.class;
    renderDecks();
  });
}

// ========== Deck Compare ==========
const compareToggle = document.getElementById('compareToggle');
const comparePanel = document.getElementById('comparePanel');
const compareSlot1 = document.getElementById('compareSlot1');
const compareSlot2 = document.getElementById('compareSlot2');

if (compareToggle && comparePanel && compareSlot1 && compareSlot2) {
  let compareMode = false;
  let selectedDecks = [];

  function getVisibleDecks() {
    return decks.filter(d => {
      if (currentDeckFormat !== 'all' && d.format !== currentDeckFormat) return false;
      if (currentDeckType !== 'all' && d.type !== currentDeckType) return false;
      if (currentDeckClass !== 'all' && d.cls !== currentDeckClass) return false;
      return true;
    });
  }

  function updateCompareSlots() {
    [compareSlot1, compareSlot2].forEach((slot, i) => {
      if (selectedDecks[i]) {
        const d = selectedDecks[i];
        slot.innerHTML = `<h4>${escapeHTML(d.name)}</h4><p>${escapeHTML(d.cls)} · ${escapeHTML(getTypeLabel(d.type))} · ${escapeHTML(d.tier)} · ${d.format === 'standard' ? '标准' : '狂野'}</p><p class="compare-dust">${escapeHTML(d.dust)}</p><p class="compare-cards">核心：${escapeHTML(d.cards)}</p><p class="compare-code">${escapeHTML(d.code)}</p>`;
      } else {
        slot.innerHTML = `<span class="compare-placeholder">选择第${i + 1}个卡组</span>`;
      }
    });
  }

  function applyCompareModeToCards() {
    const visible = getVisibleDecks();
    document.querySelectorAll('.deck-card').forEach((card, i) => {
      card.classList.add('compare-mode');
      if (!card.querySelector('.compare-check')) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'compare-check';
        card.appendChild(checkbox);
      }
      const deckData = visible[i];
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
  renderDecks = function() {
    origRenderDecks();
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

// ========== Global Search ==========
const globalSearch = document.getElementById('globalSearch');
const globalSearchResults = document.getElementById('globalSearchResults');
if (globalSearch && globalSearchResults) {
  let gsTimeout;
  globalSearch.addEventListener('input', () => {
    clearTimeout(gsTimeout);
    gsTimeout = setTimeout(() => {
      const q = globalSearch.value.trim().toLowerCase();
      if (!q) { globalSearchResults.style.display = 'none'; return; }

      const results = [];
      // Search heroes
      heroes.forEach(h => {
        if (h.name.includes(q) || h.en.toLowerCase().includes(q) || h.keywords.some(k => k.includes(q))) {
          results.push({ section: '职业攻略', text: `${h.name} (${h.en})`, href: '#heroes' });
        }
      });
      // Search decks
      decks.forEach(d => {
        if (d.name.includes(q) || d.cls.includes(q) || d.desc.includes(q)) {
          results.push({ section: '卡组推荐', text: `${d.name} — ${d.cls} ${d.tier}`, href: '#decks' });
        }
      });
      // Search tips
      document.querySelectorAll('.tip-body').forEach(body => {
        if (body.textContent.toLowerCase().includes(q)) {
          const header = body.parentElement.querySelector('.tip-header');
          if (header) results.push({ section: '进阶技巧', text: header.textContent.replace('▾','').trim(), href: '#tips' });
        }
      });
      // Search beginner guide
      document.querySelectorAll('.step-card').forEach(card => {
        if (card.textContent.toLowerCase().includes(q)) {
          const h3 = card.querySelector('h3');
          if (h3) results.push({ section: '新手入门', text: h3.textContent, href: '#beginner' });
        }
      });
      // Search card gallery
      if (cardsLoaded) {
        const cardMatches = allCards.filter(c => (c.name || '').toLowerCase().includes(q));
        if (cardMatches.length > 0) {
          results.push({ section: '卡牌图鉴', text: `搜索卡牌 "${q}" (${cardMatches.length} 张匹配)`, href: '#cards', cardQuery: q });
        }
      } else {
        results.push({ section: '卡牌图鉴', text: `搜索卡牌 "${q}" (滚动到卡牌区域加载)`, href: '#cards', cardQuery: q });
      }

      if (results.length === 0) {
        globalSearchResults.innerHTML = '<div class="global-search-no-result">未找到相关内容</div>';
      } else {
        globalSearchResults.innerHTML = results.slice(0, 8).map(r => `
          <a class="global-search-result-item" href="${escapeHTML(r.href)}" data-card-query="${escapeHTML(r.cardQuery || '')}">
            <span class="result-section">${escapeHTML(r.section)}</span>
            <span>${escapeHTML(r.text)}</span>
          </a>
        `).join('');
      }
      globalSearchResults.style.display = '';
    }, 200);
  });

  // Handle result clicks
  globalSearchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.global-search-result-item');
    if (!item) return;
    const cardQuery = item.dataset.cardQuery;
    if (cardQuery) {
      cardSearch.value = cardQuery;
      if (!cardsLoaded) loadCardsData();
      else applyFilters();
    }
    globalSearchResults.style.display = 'none';
    globalSearch.value = '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!globalSearch.contains(e.target) && !globalSearchResults.contains(e.target)) {
      globalSearchResults.style.display = 'none';
    }
  });
}

// ========== Hamburger Menu ==========
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');
if (hamburgerBtn && navBar) {
  hamburgerBtn.addEventListener('click', () => {
    const open = navBar.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', open);
  });
  // Close on nav link click
  navBar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navBar.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ========== Nav Scroll Spy ==========
(() => {
  const navLinks = [...document.querySelectorAll('.nav-bar a[href^="#"]')];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-bar a[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
})();

// ========== Theme Toggle ==========
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (saved === 'light' || (!saved && prefersLight)) {
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
  { question: '每回合最多可以拥有多少颗法力水晶？', options: ['8', '10', '12', '无上限'], answer: 1 },
  { question: '以下哪个关键词表示"无法成为法术或英雄技能的目标"？', options: ['嘲讽', '圣盾', '潜行', '魔免'], answer: 3 },
  { question: '新手推荐从哪种类型的卡组入手？', options: ['控制卡组', '组合技卡组', '快攻卡组', '疲劳卡组'], answer: 2 },
  { question: '"发现"机制会从几张牌中选择？', options: ['1张', '2张', '3张', '随机'], answer: 2 },
  { question: '以下哪种行为可以获得"卡差优势"？', options: ['每回合用满法力水晶', '使用英雄技能打脸', '过牌比对手多', '抢先使用传说卡牌'], answer: 2 },
  { question: '"大地的裂变"中"兆示"关键词的效果是什么？', options: ['召唤巨型随从士兵', '抽到时分裂成两张牌', '使随从获得+1/+1', '摧毁对手的法力水晶'], answer: 0 },
  { question: '标准模式最多可以使用几个扩展包的卡牌？', options: ['全部扩展包', '最近4-6个扩展包', '最近2个扩展包', '无限制'], answer: 1 },
  { question: '"战吼"效果在什么时候触发？', options: ['随从死亡时', '随从攻击时', '随从从手牌打出时', '回合开始时'], answer: 2 },
  { question: '以下哪个是狂野模式特有的卡组？', options: ['兆示萨', '法术瞎', '海盗烧树贼', '直伤法'], answer: 2 },
  { question: '酒馆战棋中"铜须"的效果是什么？', options: ['战吼触发两次', '亡语触发两次', '+2攻击力', '所有随从+1/+1'], answer: 0 },
  { question: '竞技场普通模式最高可以获得几胜？', options: ['7胜', '5胜', '12胜', '9胜'], answer: 1 },
  { question: '一张传说卡牌在卡组中最多可以带几张？', options: ['1张', '2张', '4张', '无限制'], answer: 0 },
  { question: '"突袭"随从在打出的当回合可以做什么？', options: ['攻击英雄', '攻击敌方随从', '无法攻击', '任意攻击'], answer: 1 },
  { question: '以下哪张牌是中立英雄牌？', options: ['古夫·符文图腾', '灭世者死亡之翼', '光铸凯尔萨斯', '拉格纳罗斯'], answer: 1 },
  { question: '新手完成学徒路线后可以获得什么？', options: ['直接上传说', '免费试玩6套竞技卡组', '全部卡牌', '无限金币'], answer: 1 }
];

const quizStartBtn = document.getElementById('quizStartBtn');
const quizContainer = document.getElementById('quizContainer');

if (quizStartBtn && quizContainer) {
  let currentQuiz = [];
  let userAnswers = [];
  let quizSubmitted = false;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function renderQuiz() {
    quizSubmitted = false;
    currentQuiz = shuffle(quizData).slice(0, 5);
    userAnswers = new Array(currentQuiz.length).fill(-1);
    quizContainer.innerHTML = currentQuiz.map((q, qi) => `
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
    currentQuiz.forEach((q, qi) => {
      if (userAnswers[qi] === q.answer) score++;
    });
    quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
      const qi = parseInt(btn.dataset.q);
      btn.disabled = true;
      if (parseInt(btn.dataset.o) === currentQuiz[qi].answer) btn.classList.add('correct');
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
        <div class="score">${score} / ${currentQuiz.length}</div>
        <div class="comment">${comments[score]}</div>
        <button class="quiz-retry-btn" id="quizRetry">重新答题</button>
      </div>
    `);
    document.getElementById('quizRetry').addEventListener('click', renderQuiz);
    quizContainer.querySelector('.quiz-result').scrollIntoView({ behavior: 'smooth' });
  }

  quizStartBtn.addEventListener('click', renderQuiz);
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

  var applyFilters = function() {};

  var allCards = [];
  var filteredCards = [];
  var cardsLoaded = false;
  var loadCardsData = function() {};
  var cardLookup = {};
  let currentPage = 1;
  const PER_PAGE = 30;

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

  // Set display names and chronological order
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

  // Chronological order by release date
  const SET_CHRONO = [
    'VANILLA','EXPERT1','LEGACY','NAXX','GVG','BRM','TGT','LOE',
    'OG','KARA','GANGS','UNGORO','ICECROWN','LOOTAPALOOZA',
    'GILNEAS','BOOMSDAY','TROLL','DALARAN','ULDUM','DRAGONS',
    'DEMON_HUNTER_INITIATE','BLACK_TEMPLE','SCHOLOMANCE','DARKMOON_FAIRE',
    'THE_BARRENS','STORMWIND','ALTERAC_VALLEY','THE_SUNKEN_CITY',
    'REVENDRETH','PATH_OF_ARTHAS','RETURN_OF_THE_LICH_KING',
    'BATTLE_OF_THE_BANDS','TITANS','WILD_WEST','WHIZBANGS_WORKSHOP',
    'SPACE','WONDERS','EMERALD_DREAM','ISLAND_VACATION','THE_LOST_CITY',
    'TIME_TRAVEL','CATACLYSM'
  ];

  // Non-card sets excluded from expansion filter (hero skins, events, placeholders)
  const EXCLUDED_SETS = new Set(['HERO_SKINS','EVENT','PLACEHOLDER_202204','YEAR_OF_THE_DRAGON','VANILLA']);

  function getSetName(set) { return SET_NAMES[set] || set; }

  function getCardClass(c) { return c.cardClass || 'NEUTRAL'; }

  applyFilters = function() {
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
    const setNames = new Set(allCards.map(c => c.set).filter(Boolean));
    const setOrder = SET_CHRONO.filter(s => setNames.has(s));
    filteredCards.sort((a, b) => {
      switch (sort) {
        case 'set-cost-asc':
          const ai = setOrder.indexOf(a.set), bi = setOrder.indexOf(b.set);
          const aIdx = ai === -1 ? 9999 : ai, bIdx = bi === -1 ? 9999 : bi;
          const si = aIdx - bIdx;
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
      const cardImg = `https://art.hearthstonejson.com/v1/render/latest/zhCN/256x/${encodeURIComponent(c.id)}.png`;
      const cardName = c.name || '卡牌';

      return `
        <div class="card-item" data-card-id="${escapeHTML(c.id)}" role="button" tabindex="0" aria-label="查看 ${escapeHTML(cardName)} 详情">
          <img src="${cardImg}" alt="${escapeHTML(cardName)}" loading="lazy" onerror="this.style.display='none'">
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

  function handleCardItemOpen(target) {
    const item = target.closest('.card-item');
    if (!item) return;
    openCardModal(item.dataset.cardId);
  }

  cardsGrid.addEventListener('click', (e) => handleCardItemOpen(e.target));
  cardsGrid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const item = e.target.closest('.card-item');
    if (!item) return;
    e.preventDefault();
    openCardModal(item.dataset.cardId);
  });

  // Card detail modal
  const cardModal = document.getElementById('cardModal');
  const cardModalImg = document.getElementById('cardModalImg');
  const cardModalInfo = document.getElementById('cardModalInfo');
  const cardModalClose = document.getElementById('cardModalClose');

  function openCardModal(cardId) {
    const c = cardLookup[cardId];
    if (!c || !cardModal) return;
    cardModalImg.src = `https://art.hearthstonejson.com/v1/render/latest/zhCN/512x/${encodeURIComponent(c.id)}.png`;
    cardModalImg.alt = c.name || '卡牌';
    cardModalInfo.innerHTML = `
      <h3>${escapeHTML(c.name || '')}</h3>
      <p class="modal-meta">${escapeHTML(c.cost ?? 0)}费 · ${escapeHTML(TYPE_MAP[c.type] || c.type || '')} · ${escapeHTML(RARITY_MAP[c.rarity] || c.rarity || '')} · ${escapeHTML(getSetName(c.set))}</p>
      ${c.text ? `<p class="modal-text">${sanitizeCardText(c.text)}</p>` : ''}
    `;
    cardModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeCardModal() {
    if (!cardModal) return;
    cardModal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (cardModal) {
    cardModalClose.addEventListener('click', closeCardModal);
    cardModal.addEventListener('click', (e) => {
      if (e.target === cardModal) closeCardModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cardModal.style.display === 'flex') closeCardModal();
    });
  }

  // Load cards data on demand — only when section is visible
  let cardsLoadStarted = false;
  let cardsLoadPromise = null;

  loadCardsData = function() {
    if (cardsLoaded) {
      if (cardSearch.value.trim()) applyFilters();
      return Promise.resolve(allCards);
    }
    if (cardsLoadStarted) return cardsLoadPromise;
    cardsLoadStarted = true;
    cardsLoading.style.display = '';
    cardsLoading.textContent = '🔄 正在加载卡牌数据库...';

    cardsLoadPromise = fetch('cards-data.json')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => {
        // Deduplicate by name — keep newest version (highest dbfId)
        const seen = new Map();
        data.forEach(c => {
          const key = c.name;
          if (!seen.has(key) || (c.dbfId || 0) > (seen.get(key).dbfId || 0)) seen.set(key, c);
        });
        allCards = [...seen.values()];
        cardLookup = {};
        allCards.forEach(c => { cardLookup[c.id] = c; });

        // Build set filter in chronological order (skip excluded sets)
        const setNames = new Set(allCards.map(c => c.set).filter(Boolean));
        const setOrder = SET_CHRONO.filter(s => setNames.has(s) && !EXCLUDED_SETS.has(s));
        setOrder.forEach(s => {
          const opt = document.createElement('option');
          opt.value = s; opt.textContent = getSetName(s);
          setFilter.appendChild(opt);
        });

        // Default sort: set → cost asc (excluded sets sorted last)
        filteredCards = [...allCards];
        filteredCards.sort((a, b) => {
          const ai = setOrder.indexOf(a.set), bi = setOrder.indexOf(b.set);
          const aIdx = ai === -1 ? 9999 : ai, bIdx = bi === -1 ? 9999 : bi;
          const si = aIdx - bIdx;
          return si !== 0 ? si : ((a.cost || 0) - (b.cost || 0));
        });

        const countTag = document.querySelector('#cards .version-tag');
        if (countTag) countTag.textContent = allCards.length.toLocaleString() + ' 张';
        cardsLoaded = true;
        cardsLoading.style.display = 'none';
        if (cardSearch.value.trim()) applyFilters();
        else renderPage();
        return allCards;
      })
      .catch(err => {
        cardsLoadStarted = false;
        cardsLoadPromise = null;
        cardsLoading.textContent = '⚠️ 卡牌数据加载失败，请刷新页面重试。';
        console.error('Card data load error:', err);
      });
    return cardsLoadPromise;
  }

  // Lazy-load when cards section scrolls into view
  const cardsSection = document.getElementById('cards');
  if (cardsSection) {
    const cardsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadCardsData();
        cardsObserver.unobserve(cardsSection);
      }
    }, { rootMargin: '200px' });
    cardsObserver.observe(cardsSection);
  } else {
    loadCardsData(); // fallback
  }

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
