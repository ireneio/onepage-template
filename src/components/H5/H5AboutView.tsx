import { about } from '@/data';
import AnimationWrapperChild from '../PC/AnimationWrapperChild';

const H5AboutView = () => {
  return (
    <div className="w-full relative z-[6] h-auto bg-[#FFFFFF] text-[#FFFFFF] pt-[24px] pb-[24px] overflow-hidden">
      <AnimationWrapperChild delay={0}>
        <div className="w-[80%] mx-auto flex justify-center items-center mt-[12px] mb-[30px]">
          <img
            src="/images/banner_about.png"
            alt="about"
            className="h-auto lg:h-[18vh]"
          />
        </div>
      </AnimationWrapperChild>
      <div className="justify-between flex flex-wrap px-[24px] lg:px-[140px]">
        <div className="basis-[100%] flex order-1 mb-[16px] mt-[12px] justify-center items-center">
          <img
            src="/images/about_intro_right.png"
            alt=""
            className="w-[190px]"
          />
        </div>
        <div className="basis-[100%] order-2">
          <AnimationWrapperChild delay={0.3}>
            <div className="font-semibold mb-[62px] text-center text-[#363636]">
              我们是真正能站在您与用户的角度考虑的平台，想您所想，急您所急。
              十一年的游戏研发团队，十五年的网络安全团队。
            </div>
          </AnimationWrapperChild>
          <AnimationWrapperChild delay={0.5}>
            <div className="grid grid-cols-2 grid-rows-2 gap-[24px] mb-[16px]">
              {about.map((feature, idx) => {
                return (
                  <div key={idx} className="text-center w-auto">
                    <div className="flex justify-center">
                      <img src={feature.image} alt="" width={32} height={32} />
                    </div>
                    <div className="font-bold text-[14px] mt-[12px] mb-[8px] text-[#363636]">
                      {feature.title}
                    </div>
                    <div className="text-[12px] text-[#5b5b5b]">
                      {feature.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimationWrapperChild>
        </div>
      </div>
    </div>
  );
};

export default H5AboutView;
