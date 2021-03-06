import AnimationWrapperChild from '../General/AnimationWrapperChild';
import CooperationCarouselMobile from './CooperationCarouselMobile';

const H5CooperationView = () => {
  return (
    <div
      id="cooperation"
      className="relative z-[3] w-full bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] pb-[24px] overflow-hidden"
    >
      <AnimationWrapperChild delay={0.3} disableOnScrollUp>
        <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
          <img
            src="/images/banner_cooperation_mobile.png"
            alt="template"
            className="h-auto"
          />
        </div>
      </AnimationWrapperChild>
      <AnimationWrapperChild delay={0.5} disableOnScrollUp>
        <div className="mt-[12px] mx-[45px]">
          <CooperationCarouselMobile />
        </div>
      </AnimationWrapperChild>
    </div>
  );
};

export default H5CooperationView;
