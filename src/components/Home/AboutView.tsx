import { about } from '@/data';
import Cr from '../General/Cr';
import SocialList from '../General/SocialList';

const AboutView = () => {
  return (
    <div className="w-full h-auto lg:h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] pt-[24px] lg:pt-[75px]">
      <div className="w-[80%] mx-auto flex justify-center items-center mt-[12px]">
        <img
          src="/images/banner_about.png"
          alt="about"
          className="h-auto lg:h-[18vh]"
        />
      </div>
      <div className="justify-between flex flex-wrap px-[24px] lg:px-[140px]">
        <div className="text-[#000000] basis-[100%] lg:basis-[50%] order-2 lg:order-1">
          <div className="font-semibold mb-[32px] 2xl:pr-[140px] text-center lg:text-left">
            我们是真正能站在您与用户的角度考虑的平台，想您所想，急您所急。
            十一年的游戏研发团队，十五年的网络安全团队。
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-[24px] mb-[16px] lg:mb-0">
            {about.map((feature, idx) => {
              return (
                <div key={idx} className="text-center w-auto lg:w-[230px]">
                  <div className="flex justify-center">
                    <img src={feature.image} alt="" width={32} height={32} />
                  </div>
                  <div className="font-bold text-[14px] lg:text-[18px]">
                    {feature.title}
                  </div>
                  <div className="text-[12px] text-[#5b5b5b]">
                    {feature.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-[100%] lg:basis-[50%] flex order-1 lg:order-2 mb-[16px] lg:mb-0 mt-[12px] lg:mt-0">
          <div className="mx-auto lg:mr-0 lg:ml-auto">
            <img
              src="/images/about_intro_right.png"
              alt=""
              className="w-[190px] lg:w-[350px]"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Cr />
        <SocialList />
      </div>
    </div>
  );
};

export default AboutView;
