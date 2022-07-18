import { about } from '@/data';
import Cr from '../General/Cr';
import SocialList from '../General/SocialList';
import AnimationWrapperChild from '../General/AnimationWrapperChild';
import MouseHandle from '../General/MouseHandle';
import Header from '../Layout/Header';
import SideScroller from '../General/SideScroller';

const AboutView = () => {
  return (
    <div
      id="about"
      className="overflow-hidden relative w-full h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] pt-[75px] pb-[24px] lg:pb-0"
    >
      <Header selected="#about" bg="light" />
      <SideScroller selected="#about" bg="light" />
      <AnimationWrapperChild
        headerStyle="light"
        headerItem="#about"
        delay={0.3}
      >
        <AnimationWrapperChild delay={0.1}>
          <div className="w-[80%] mx-auto flex justify-center items-center mt-[12px] mb-[30px]">
            <img
              src="/images/banner_about.png"
              alt="about"
              className="h-[18vh]"
            />
          </div>
        </AnimationWrapperChild>
        <AnimationWrapperChild delay={0.2}>
          <div className="justify-between flex flex-wrap px-[24px] lg:px-[140px]">
            <div className="basis-[50%] order-1 pt-[50px] px-[50px]">
              <div className="font-semibold mb-[62px] text-center text-[#363636]">
                我们是真正能站在您与用户的角度考虑的平台，想您所想，急您所急。
                十一年的游戏研发团队，十五年的网络安全团队。
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-[24px] mb-0">
                {about.map((feature, idx) => {
                  return (
                    <div key={idx} className="text-center w-auto">
                      <div className="flex justify-center">
                        <img
                          src={feature.image}
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="font-bold text-[18px] mt-[12px] mb-[8px] text-[#363636]">
                        {feature.title}
                      </div>
                      <div className="text-[14px] text-[#5b5b5b]">
                        {feature.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="basis-[50%] flex order-2 mb-0 mt-0 justify-center items-center">
              <img
                src="/images/about_intro_right.png"
                alt=""
                className="w-[350px]"
              />
            </div>
          </div>
        </AnimationWrapperChild>
      </AnimationWrapperChild>
      <Cr />
      <MouseHandle anchor="#pay" bg="light" />
      <SocialList bg="light" />
    </div>
  );
};

export default AboutView;
