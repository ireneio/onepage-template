import Cr from '../General/Cr';
import SocialList from '../General/SocialList';

const ContactUsView = () => {
  return (
    <div className="lg:hidden relative w-full h-[35vh] bg-[#252525] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] lg:pt-[75px]">
      <div className="w-[80%] mx-auto flex justify-center items-center mt-[32px]">
        <img
          src="/images/banner_contact.png"
          alt="contact"
          className="h-auto lg:h-[22vh]"
        />
      </div>
      <div className="mt-[40px]">
        <SocialList className="static flex items-center justify-around w-[80vw] mx-auto" />
      </div>
      <Cr className="aboslute bottom-[12px] left-0 w-[100vw] text-center text-[#8b8b8b]" />
    </div>
  );
};

export default ContactUsView;
