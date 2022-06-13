import { partners } from '@/data';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { v4 as uuid } from 'uuid';

const PartnersCarousel = () => {
  const [carouselItems] = useState([partners, partners, partners]);
  const [current, setCurrent] = useState(0);

  const handleChange = (current: number) => {
    setCurrent(current);
  };

  return (
    <div>
      <Carousel
        ariaLabel="Carousel"
        selectedItem={current}
        useKeyboardArrows
        swipeable
        stopOnHover
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        width="100%"
        emulateTouch
        onChange={(e) => handleChange(e)}
      >
        {carouselItems.map((array, idx) => {
          return (
            <>
              <div
                key={idx}
                className="grid gap-[12px] lg:gap-[32px] grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 w-[80%] justify-between items-start mx-auto mt-[22px] flex-wrap"
              >
                {array.map((item, itemIdx) => {
                  return (
                    <div
                      key={String(itemIdx) + String(idx) + uuid()}
                      className="bg-[#363636] flex justify-center items-center"
                    >
                      <img src={item.image} alt="" />
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </Carousel>
      <div className="flex mt-[24px] lg:mt-[48px] w-full justify-center">
        {carouselItems.map((item, idx) => {
          return (
            <div
              key={uuid()}
              className="w-[50px] lg:w-[100px] h-[1px]"
              style={{
                backgroundColor: current === idx ? '#B39B5C' : '#363636',
              }}
              onClick={() => setCurrent(idx)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersCarousel;
