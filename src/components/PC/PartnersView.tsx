import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import AnimationWrapperChild from './AnimationWrapperChild';
import PartnersCarousel from './PartnersCarousel';

const PartnersView = () => {
  return (
    <div
      className="relative h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pb-0 pt-[75px]"
      style={{ backgroundImage: 'url(/images/bg_partners.png)' }}
    >
      <AnimationWrapperChild
        headerStyle="dark"
        headerItem="#partners"
        delay={0.3}
      >
        <AnimationWrapperChild delay={0.1}>
          <div className="mx-auto flex justify-center items-center mt-[18px]">
            <img
              src="/images/banner_partners_pc.png"
              alt="partners"
              className="h-[18vh]"
            />
          </div>
        </AnimationWrapperChild>
        <AnimationWrapperChild delay={0.2}>
          <div className="mt-[12px]">
            <PartnersCarousel />
          </div>
        </AnimationWrapperChild>
      </AnimationWrapperChild>
      <Cr />
      <MouseHandle
        anchor="#about"
        headerStyleOnScroll="light"
        headerValueOnScroll="#about"
      />
      <SocialList />
    </div>
  );
};

export default PartnersView;
