import { partners } from '@/data';
import { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { v4 as uuid } from 'uuid';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PartnersCarousel = () => {
  const [carouselItems] = useState([partners, partners, partners]);
  const [current, setCurrent] = useState(0);
  const ref = useRef<any>(null);

  return (
    <div className="max-w-[1325px] mx-auto overflow-hidden">
      <Slider
        ref={(slider) => (ref.current = slider)}
        {...settings}
        afterChange={(current) => {
          setCurrent(current);
        }}
      >
        {carouselItems.map((array) => {
          return (
            <>
              <div
                key={uuid()}
                className="grid gap-[32px] grid-cols-4 grid-rows-2 mx-auto mt-[22px] flex-wrap mr-[32px]"
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
      </Slider>
      <div className="flex mt-[24px] lg:mt-[48px] w-full justify-center">
        {carouselItems.map((item, idx) => {
          return (
            <div
              key={uuid()}
              className="w-[50px] lg:w-[100px] h-[1px]"
              style={{
                backgroundColor: current === idx ? '#B39B5C' : '#363636',
              }}
              onClick={() => {
                ref?.current.slickGoTo(idx);
                setCurrent(idx);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersCarousel;
