import { customerServices } from '@/data';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

const CooperationCarouselMobile = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative">
      <div
        className="absolute left-[-42px] top-[25%]"
        onClick={() => {
          if (current > 0) {
            setCurrent((prev) => prev - 1);
          } else {
            setCurrent(customerServices.length - 1);
          }
        }}
      >
        <img src="/images/arrow_left.png" alt="" width={40} height={40} />
      </div>
      <div
        className="absolute right-[-42px] top-[25%]"
        onClick={() => {
          if (current < customerServices.length - 1) {
            setCurrent((prev) => prev + 1);
          } else {
            setCurrent(0);
          }
        }}
      >
        <img src="/images/arrow_right.png" alt="" width={40} height={40} />
      </div>
      <Carousel
        selectedItem={current}
        ariaLabel="Carousel"
        useKeyboardArrows
        swipeable
        stopOnHover
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={true}
        infiniteLoop
        autoPlay
        width="100%"
        emulateTouch
      >
        {customerServices.map((cs, idx) => {
          return (
            <div key={idx} className="relative bg-[#fff]">
              <div>
                <img src={cs.image} alt={cs.title} width={50} height={50} />
                <div className="px-[18px]">
                  <div className="text-[#000000] text-[18px] font-bold text-center mt-[12px]">
                    {cs.title}
                  </div>
                  <div className="w-[40px] h-[6px] bg-[#B39B5C] mx-auto mt-[4px]"></div>
                  <div className="mt-[24px] text-[#8b8b8b] font-normal text-[16px]">
                    {cs.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="flex mt-[24px] lg:mt-[72px] w-full justify-center">
        {customerServices.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[50px] lg:w-[100px] h-[2px] mx-[4px]"
              style={{
                backgroundColor: current === idx ? '#B39B5C' : '#E8E8E8',
              }}
              onClick={() => setCurrent(idx)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default CooperationCarouselMobile;
