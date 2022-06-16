import CooperationCarouselMobile from './CooperationCarouselMobile';

const H5CooperationView = () => {
  return (
    <div className="relative w-full bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] pb-[24px]">
      <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
        <img
          src="/images/banner_cooperation_mobile.png"
          alt="template"
          className="h-auto"
        />
      </div>
      <div className="mt-[12px] mx-[45px]">
        <CooperationCarouselMobile />
      </div>
    </div>
  );
};

export default H5CooperationView;
