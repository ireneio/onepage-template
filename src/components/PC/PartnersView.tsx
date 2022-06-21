import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import AnimationWrapperChild from './AnimationWrapperChild';
import PartnersCarousel from './PartnersCarousel';

const PartnersView = () => {
  return (
    <AnimationWrapperChild headerStyle="dark" headerItem="#partners">
      <div
        className="relative h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pb-0 pt-[75px]"
        style={{ backgroundImage: 'url(/images/bg_partners.png)' }}
      >
        <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
          <img
            src="/images/banner_partners_pc.png"
            alt="partners"
            className="h-[18vh]"
          />
        </div>
        <div className="mt-[12px]">
          <PartnersCarousel />
        </div>
        <Cr />
        <MouseHandle
          anchor="#about"
          headerStyleOnScroll="light"
          headerValueOnScroll="#about"
        />
        <SocialList />
      </div>
    </AnimationWrapperChild>
  );
};

export default PartnersView;
