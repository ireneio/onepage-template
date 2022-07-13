export const customerServices = [
  {
    image: '/images/cs_cs.png',
    title: '专属客户服务',
    description:
      '业务团队提供市场动态咨询与经营规划；服务团队最专业的客服中心提供24小时的技术与网站操作流程咨询；技术团队负责维护系统稳定，开发更具市场性与吸引力的产品。',
  },
  {
    image: '/images/cs_data.png',
    title: '数据分析',
    description:
      '实时在线人数统计，随时监控游戏情况；实时存取款数据统计，把控整体资金流转；全面游戏数据统计，准确获取游戏数据。',
  },
  {
    image: '/images/cs_api.png',
    title: 'API对接',
    description:
      '专业的技术团队，为您在对接时提供专属的API对接服务，透过我们制定的系统化流程，为您解决所有对接遇到的问题，排除一切后顾之忧。',
  },
  {
    image: '/images/cs_safe.png',
    title: '安全充值服务',
    description:
      '支持多种充值方式，即使到账，在线支付多渠道支付，微信、支付宝、财付通、网银、灵活快速。公司入款网银支付，银联扫码等，大额支付安全无忧。',
  },
];

export const services = [
  { image: '/images/first_live.png', value: '真人' },
  { image: '/images/first_qp.png', value: '棋牌' },
  { image: '/images/first_fish.png', value: '捕鱼' },
  { image: '/images/first_slot.png', value: '电子' },
  { image: '/images/first_sport.png', value: '体育' },
  { image: '/images/first_game.png', value: '电竞' },
  { image: '/images/first_lottery.png', value: '彩票' },
];

export const games = [
  {
    image: '/images/circle_games.png',
    title: '千种游戏',
    description:
      '千余种主流游戏，包含真人、棋牌、体育、电子、电竞、彩票和捕鱼。您想要的我们都有。',
  },
  {
    image: '/images/circle_responsive.png',
    title: '全平台适配',
    description:
      '支持手机、电脑、平板等多端进行游戏，您可以通过任何一端的浏览器进行平台登录或下载App直接使用。',
  },
  {
    image: '/images/circle_dashboard.png',
    title: '高效后台管理',
    description: '高效操作的管理后台，运营数据一目了然，有效提升业务效率。',
  },
  {
    image: '/images/circle_cs.png',
    title: '7x24小时技术支持',
    description:
      '我们的技术团队，7x24小时全天侯提供技术支持，全程为您保驾护航。',
  },
];

export const partners = [
  { image: '/images/partners_ag.png', value: '' },
  { image: '/images/partners_bbn.png', value: '' },
  { image: '/images/partners_cq9.png', value: '' },
  { image: '/images/partners_mg.png', value: '' },
  { image: '/images/partners_ob.png', value: '' },
  { image: '/images/partners_pt.png', value: '' },
  { image: '/images/partners_sb.png', value: '' },
  { image: '/images/partners_sun.png', value: '' },
];

export const about = [
  {
    title: '专业团队',
    description:
      '亚洲一流的项目方案解决团队，顶级的团队配置，将是您坚强的后盾。',
    image: '/images/about_team.png',
  },
  {
    title: '产品多样',
    description:
      '多年来不断的整合市场上各种游戏，为游戏供应商整合标准接口的同时，更为您站点上的用户提供更多产品的选择。',
    image: '/images/about_pkg.png',
  },
  {
    title: '持续创新',
    description: '专业的产品需求团队，常年全天候不断探索市场发展方向。',
    image: '/images/about_creative.png',
  },
  {
    title: '贴心服务',
    description:
      ' 将为您配置一对一的VIP商务经理，随时聆听您的意见，您所想要的，将会是我们努力的方向。',
    image: '/images/about_heart.png',
  },
];

export const devices = [
  { text: 'PC端', value: 'pc' },
  { text: '移动端', value: 'mobile' },
];

export const pcTemplates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  .map((val, idx) => {
    const num = idx + 1;
    return {
      image: `/images/templates/t${num}_pcs.png`,
      enlarged: `/images/templates/t${num}_pc.png`,
      num,
    };
  })
  .sort((a, b) => {
    // order by black to white
    if (b.num === 1 || b.num === 7 || b.num === 13 || b.num === 9) {
      return 1
    }
    return -1
  })
  .reduce(
    (acc: any[], curr: any, idx: number) => {
      if (idx < 8) {
        acc[0].push(curr);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },
    [[], []],
  );

export const mobileTemplates = Array(13)
  .fill(0)
  .map((val, idx) => {
    const num = idx + 1;
    return {
      image: `/images/templates/t${num}_apps.png`,
      enlarged: `/images/templates/t${num}_app.png`,
      num,
    };
  })
  .sort((a, b) => {
    // order by black to white
    if (b.num === 1 || b.num === 7 || b.num === 13 || b.num === 9) {
      return 1
    }
    return -1
  })
  .reduce(
    (acc: any[], curr: any, idx: number) => {
      if (idx < 8) {
        acc[0].push(curr);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },
    [[], []],
  );

export const mobileTemplatesPc = Array(13)
  .fill(0)
  .map((val, idx) => {
    const num = idx + 1;
    return {
      image: `/images/templates/t${num}_apps_pc.png`,
      enlarged: `/images/templates/t${num}_app.png`,
      num,
    };
  })
  .sort((a, b) => {
    // order by black to white
    if (b.num === 1 || b.num === 7 || b.num === 13 || b.num === 9) {
      return 1
    }
    return -1
  })
  .reduce(
    (acc: any[], curr: any, idx: number) => {
      if (idx < 6) {
        acc[0].push(curr);
      } else if (idx < 12) {
        acc[1].push(curr);
      } else {
        acc[2].push(curr);
      }
      return acc;
    },
    [[], [], []],
  );

export const sidebarItems = [
  {
    en: "it's us",
    cn: '首页',
    tag: '01',
    value: '#entry',
    theme: 'dark',
  },
  {
    en: 'template',
    cn: '包网模板',
    tag: '02',
    value: '#template',
    theme: 'light',
  },
  {
    en: 'products',
    cn: '产品介绍',
    tag: '03',
    value: '#products',
    theme: 'dark',
  },
  {
    en: 'BUSINESS',
    cn: '业务合作',
    tag: '04',
    value: '#cooperation',
    theme: 'light',
  },
  {
    en: 'Cooperation',
    cn: '合作伙伴',
    tag: '05',
    value: '#partners',
    theme: 'dark',
  },
  {
    en: 'about us',
    cn: '公司简介',
    tag: '06',
    value: '#about',
    theme: 'light',
  },
  {
    en: 'pay',
    cn: '支付优势',
    tag: '07',
    value: '#pay',
    theme: 'dark',
  },
];

export const contacts = [
  { image: '/images/ct_wx.png', value: '' },
  { image: '/images/ct_telegram.png', value: '' },
  { image: '/images/ct_skype.png', value: '' },
  { image: '/images/ct_whasapp.png', value: '' },
  { image: '/images/ct_bbm.png', value: '' },
];

export const pay = [
  {
    image: '/images/pay_1.png',
    title: 'USDT支付',
    description:
      '支持市面上所有的交易所/钱包\n单笔限额：100-100000¥\n成率：100%'
  },
  {
    image: '/images/pay_2.png',
    title: '数字人民币',
    description:
      '全新数字人民币\n单笔限额：100-100000¥\n成率：100%',
  },
  {
    image: '/images/pay_3.png',
    title: '聚合支付',
    description: '无需下载任何三方APP即可在线支付\n单笔限额：500-100000¥\n成率：90%',
  },
  {
    image: '/images/pay_4.png',
    title: '代付',
    description:
      '零风控零冻结，解决您的代付烦恼\n单笔限额：100-100000¥\n成率：100%',
  },
];