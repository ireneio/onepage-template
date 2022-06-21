import AnimationWrapperChild from '../PC/AnimationWrapperChild';
import H5PartnersCarousel from './H5PartnersCarousel';

const H5PartnersView = () => {
  return (
    <div
      className="relative z-[5] w-full lg:h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] pb-[24px] lg:pb-0 lg:pt-[75px]"
      style={{ backgroundImage: 'url(/images/bg_partners.png)' }}
    >
      <AnimationWrapperChild delay={0.3}>
        <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
          <img
            src="/images/banner_partners.png"
            alt="partners"
            className="h-auto lg:h-[18vh]"
          />
        </div>
      </AnimationWrapperChild>
      <AnimationWrapperChild delay={0.5}>
        <div className="mt-[12px]">
          <H5PartnersCarousel />
        </div>
      </AnimationWrapperChild>
    </div>
  );
};

export default H5PartnersView;
