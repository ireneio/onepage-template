import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import PartnersCarousel from './PartnersCarousel';

const PartnersView = () => {
  return (
    <div
      id="partners"
      className="relative w-full h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] lg:pt-[75px]"
      style={{ backgroundImage: 'url(/images/bg_partners.png)' }}
    >
      <div className="w-[80%] mx-auto flex justify-center items-center mt-[32px]">
        <img
          src="/images/banner_partners.png"
          alt="partners"
          className="h-auto lg:h-[18vh]"
        />
      </div>
      <PartnersCarousel />
      <div className="hidden lg:block">
        <Cr />
        <MouseHandle
          anchor="#about"
          headerStyleOnScroll="light"
          headerValueOnScroll="#about"
        />
        <SocialList />
      </div>
    </div>
  );
};

export default PartnersView;
