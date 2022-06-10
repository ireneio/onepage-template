import { partners } from '@/data';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PartnersCarousel = () => {
  const [carouselItems] = useState([partners, partners, partners]);

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
              className="w-[80px] h-[5px] ml-[2px] mr-[2px] rounded-[5px] inline-block cursor-pointer absolute bottom-[0]"
              style={{
                backgroundColor: selected ? '#B39B5C' : '#E8E8E8',
                left: `calc(50% + ${(index - 1.5) * 80}px)`,
              }}
              onClick={onClick}
            />
          );
        }}
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
                      key={itemIdx}
                      className="bg-[#363636] h-[100px] lg:h-[150px] flex justify-center"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-[100px] lg:h-[150px]"
                      />
                    </div>
                  );
                })}
              </div>
              {/* <div className='lg:hidden' key={idx}>

              </div> */}
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PartnersCarousel;
