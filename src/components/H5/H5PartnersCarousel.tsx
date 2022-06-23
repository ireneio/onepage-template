import { partners } from '@/data';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { v4 as uuid } from 'uuid';

const H5PartnersCarousel = () => {
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
        autoPlay={false}
        width="100%"
        emulateTouch
        onChange={(e) => handleChange(e)}
      >
        {carouselItems.map((array, idx) => {
          return (
            <>
              <div
                key={idx}
                className="grid gap-[12px] grid-cols-2 grid-rows-4 w-[80%] justify-center items-start mx-auto mt-[22px] flex-wrap"
              >
                {array.map((item, itemIdx) => {
                  return (
                    <div
                      key={itemIdx + item.image}
                      className="flex justify-center items-center"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-[100px] object-contain"
                        style={{ maxWidth: 150 }}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </Carousel>
      <div className="flex mt-[24px] w-full justify-center">
        {carouselItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[50px] h-[1px]"
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

export default H5PartnersCarousel;
