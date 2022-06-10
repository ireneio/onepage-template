import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const templates = Array(8).fill(0);

const TemplateCarousel = () => {
  const [carouselItems] = useState([templates, templates, templates]);

  return (
    <div>
      <Carousel
        ariaLabel="Carousel"
        useKeyboardArrows
        swipeable
        stopOnHover
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        width="100%"
        emulateTouch
        renderIndicator={(onClick: any, selected: any, index: number) => {
          return (
            <div
              className="w-[80px] h-[5px] rounded-[5px] inline-block cursor-pointer absolute bottom-[0] translate-x-[-50%]"
              style={{
                backgroundColor: selected ? '#B39B5C' : '#E8E8E8',
                left: `calc(50% + ${(index + 1) * 80}px)`,
              }}
              onClick={onClick}
            />
          );
        }}
      >
        {carouselItems.map((array, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-[32px] grid-cols-4 w-[80%] justify-between items-start mx-auto mt-[12px] flex-wrap"
            >
              {array.map((item, itemIdx) => {
                return (
                  <div key={itemIdx} className="h-[150px]">
                    <img src={'/images/template_1.png'} alt="" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TemplateCarousel;
