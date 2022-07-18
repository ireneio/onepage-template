import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import AnimationWrapperChild from '../General/AnimationWrapperChild';
import PartnersCarousel from './PartnersCarousel';
import Header from '../Layout/Header';
import SideScroller from '../General/SideScroller';

const PartnersView = () => {
  return (
    <div
      id="partners"
      className="overflow-hidden relative h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pb-0 pt-[75px]"
      style={{ backgroundImage: 'url(/images/bg_partners.png)' }}
    >
      <Header selected="#partners" bg="dark" />
      <SideScroller selected="#partners" bg="dark" />
      <AnimationWrapperChild delay={0.3}>
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
      <MouseHandle anchor="#about" bg="dark" />
      <SocialList bg="dark" />
    </div>
  );
};

export default PartnersView;
