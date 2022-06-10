import Cr from '@/components/General/Cr';
import MouseHandle from '@/components/General/MouseHandle';
import SocialList from '@/components/General/SocialList';
import PartnersCarousel from '@/components/Home/PartnersCarousel';
import LandingCarousel from '@/components/Home/PartnersCarousel';
import TemplateCarousel from '@/components/Home/TemplateCarousel';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import { about, customerServices, games, partners, services } from '@/data';

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
          <TemplateCarousel />
          {/* <div className="grid gap-[32px] grid-cols-4 w-[80%] justify-between items-start mx-auto mt-[12px] flex-wrap">
            {Array(8)
              .fill(0)
              .map((template, idx) => {
                return (
                  <div key={idx} className="h-[150px]">
                    <img src={'/images/template_1.png'} alt="" />
                  </div>
                );
              })}
          </div> */}
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
                    <div className="pt-[30px] px-[18px]">
                      <div className="text-[#000000] text-[18px] font-bold text-center mt-[42px]">
                        {cs.title}
                      </div>
                      <div className="w-[40px] h-[6px] bg-[#B39B5C] mx-auto mt-[4px]"></div>
                      <div className="mt-[24px] text-[#8b8b8b] font-normal text-[16px]">
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
          <PartnersCarousel />
          {/* <div className="grid gap-[32px] grid-cols-4 grid-rows-2 w-[80%] justify-between items-start mx-auto mt-[22px] flex-wrap">
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
          </div> */}
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
