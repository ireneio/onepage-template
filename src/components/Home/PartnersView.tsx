import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import PartnersCarousel from './PartnersCarousel';

const PartnersView = () => {
  return (
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
  );
};

export default PartnersView;
