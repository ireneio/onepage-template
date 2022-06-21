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
    <div className="max-w-[1325px] mx-auto">
      <Carousel
        ariaLabel="Carousel"
        selectedItem={current}
        useKeyboardArrows
        swipeable={true}
        stopOnHover
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        autoPlay={false}
        width="100%"
        emulateTouch={true}
        onChange={(e) => handleChange(e)}
      >
        {carouselItems.map((array) => {
          return (
            <>
              <div
                key={uuid()}
                className="grid gap-[32px] grid-cols-4 grid-rows-2 mx-auto mt-[22px] flex-wrap"
              >
                {array.map((item) => {
                  return (
                    <div key={uuid()}>
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
