import Cr from '@/components/General/Cr';
import MouseHandle from '@/components/General/MouseHandle';
import SocialList from '@/components/General/SocialList';
import DefaultLayout from '@/components/Layout/DefaultLayout';

const services = [
  { image: '/images/first_live.png', value: '' },
  { image: '/images/first_qp.png', value: '' },
  { image: '/images/first_fish.png', value: '' },
  { image: '/images/first_slot.png', value: '' },
  { image: '/images/first_game.png', value: '' },
  { image: '/images/first_sport.png', value: '' },
];

const games = [
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

const customerServices = [
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

const partners = [
  { image: '/images/partners_ag.png', value: '' },
  { image: '/images/partners_ag.png', value: '' },
  { image: '/images/partners_ag.png', value: '' },
  { image: '/images/partners_ag.png', value: '' },
  { image: '/images/partners_ag.png', value: '' },
  { image: '/images/partners_ag.png', value: '' },
  { image: '/images/partners_ag.png', value: '' },
  { image: '/images/partners_ag.png', value: '' },
];

const about = [
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

const Index = () => {
  return (
    <DefaultLayout>
      <div>
        <div
          className="relative w-full text-[#FFFFFF] bg-no-repeat bg-cover bg-center h-[100vh] flex items-center justify-center"
          style={{
            backgroundImage: 'url(/images/bg_first.png)',
            height: 'calc(100vh - 75px)',
          }}
        >
          <div className="text-center">
            <div className="text-[48px] text-[#FFFFFF]">最全面的包网服务商</div>
            <div className="text-[80px] text-[#FFFFFF]">
              建站，从未如此<span className="text-[#B39B5C]">简单</span>
            </div>
            <div className="text-[#EDEDED] text-[24px] font-light">
              个性化定制，独特创新的视觉呈现
            </div>
            <div className="text-[#EDEDED] text-[24px] font-light">
              事为先，人为重，共创共赢，您的明智选择
            </div>
            <div className="flex justify-between items-center mt-[48px] w-[46vw] mx-auto">
              {services.map((service, idx) => {
                return (
                  <div key={idx}>
                    <img src={service.image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <Cr />
          <MouseHandle
            anchor="#template"
            headerStyleOnScroll="light"
            headerValueOnScroll="#template"
          />
          <SocialList />
        </div>
        <div
          id="template"
          className="relative w-full h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[75px]"
        >
          <div className="w-[80%] mx-auto flex justify-center items-center mt-[32px]">
            <img
              src="/images/banner_template.png"
              alt="template"
              className="h-[18vh]"
            />
          </div>
          <div className="grid gap-[32px] grid-cols-4 w-[80%] justify-between items-start mx-auto mt-[12px] flex-wrap">
            {Array(8)
              .fill(0)
              .map((template, idx) => {
                return (
                  <div key={idx} className="h-[150px]">
                    <img src={'/images/template_1.png'} alt="" />
                  </div>
                );
              })}
          </div>
          <Cr />
          <MouseHandle
            anchor="#products"
            headerStyleOnScroll="light"
            headerValueOnScroll="#products"
          />
          <SocialList />
        </div>
        <div
          id="products"
          className="relative w-full h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[75px]"
          style={{ backgroundImage: 'url(/images/bg_product.png)' }}
        >
          <div className="w-[80%] mx-auto flex justify-center items-center mt-[32px]">
            <img
              src="/images/banner_product.png"
              alt="product"
              className="h-[18vh]"
            />
          </div>
          <div className="flex w-[80%] justify-between items-start mx-auto mt-[10vh] flex-wrap">
            {games.map((game, idx) => {
              return (
                <div key={idx} className="text-[#FFFFFF] text-center flex-1">
                  <div className="flex justify-center">
                    <img src={game.image} alt={game.title} />
                  </div>
                  <div className="text-[18px] mt-[24px] font-bold">
                    {game.title}
                  </div>
                  <div className="text-[16px] mt-[24px] text-center">
                    {game.description}
                  </div>
                </div>
              );
            })}
          </div>
          <Cr />
          <MouseHandle
            anchor="#cooperation"
            headerStyleOnScroll="dark"
            headerValueOnScroll="#cooperation"
          />
          <SocialList />
        </div>
        <div
          id="cooperation"
          className="relative w-full h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[75px]"
        >
          <div className="w-[80%] mx-auto flex justify-center items-center mt-[32px]">
            <img
              src="/images/banner_cooperation.png"
              alt="cooperation"
              className="h-[22vh]"
            />
          </div>
          <div className="grid gap-[32px] grid-cols-4 w-[80%] justify-between items-start mx-auto mt-[72px] flex-wrap">
            {customerServices.map((cs, idx) => {
              return (
                <div key={idx} className="flex-1 relative h-[320px] bg-[#eee]">
                  <div>
                    <img
                      src={cs.image}
                      alt={cs.title}
                      width={120}
                      height={120}
                      className="absolute top-[-18%] left-[50%] translate-x-[-50%]"
                    />
                    <div className="pt-[30px] px-[24px]">
                      <div className="text-[#000000] text-[24px] font-bold text-center mt-[42px]">
                        {cs.title}
                      </div>
                      <div className="w-[40px] h-[6px] bg-[#B39B5C] mx-auto mt-[4px]"></div>
                      <div className="mt-[40px] text-[#8b8b8b] font-normal">
                        {cs.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Cr />
          <MouseHandle
            anchor="#partners"
            headerStyleOnScroll="dark"
            headerValueOnScroll="#partners"
          />
          <SocialList />
        </div>
        <div
          id="partners"
          className="relative w-full h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[75px]"
          style={{ backgroundImage: 'url(/images/bg_partners.png)' }}
        >
          <div className="w-[80%] mx-auto flex justify-center items-center mt-[32px]">
            <img
              src="/images/banner_partners.png"
              alt="partners"
              className="h-[18vh]"
            />
          </div>
          <div className="grid gap-[32px] grid-cols-4 grid-rows-2 w-[80%] justify-between items-start mx-auto mt-[22px] flex-wrap">
            {partners.map((partner, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-[#363636] h-[150px] flex justify-center"
                >
                  <img src={partner.image} alt="" className="h-[150px]" />
                </div>
              );
            })}
          </div>
          <Cr />
          <MouseHandle
            anchor="#about"
            headerStyleOnScroll="light"
            headerValueOnScroll="#about"
          />
          <SocialList />
        </div>
        <div
          id="about"
          className="w-full h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] pt-[75px]"
        >
          <div className="w-[80%] mx-auto flex justify-center items-center mt-[12px]">
            <img
              src="/images/banner_about.png"
              alt="about"
              className="h-[18vh]"
            />
          </div>
          <div className="justify-between flex flex-wrap px-[140px]">
            <div className="text-[#000000] basis-[50%]">
              <div className="font-semibold pr-[80px] mb-[32px]">
                我们是真正能站在您与用户的角度考虑的平台，想您所想，急您所急。
                十一年的游戏研发团队，十五年的网络安全团队。
              </div>
              <div className="grid grid-cols-2 grid-rows-2">
                {about.map((feature, idx) => {
                  return (
                    <div key={idx} className="text-center w-[230px]">
                      <div className="flex justify-center">
                        <img src={feature.image} alt="" />
                      </div>
                      <div className="font-bold text-[18px]">
                        {feature.title}
                      </div>
                      <div>{feature.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="basis-[50%] flex">
              <div className="ml-auto">
                <img
                  src="/images/about_intro_right.png"
                  alt=""
                  className="w-[350px]"
                />
              </div>
            </div>
          </div>
          <Cr />
          <SocialList />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
