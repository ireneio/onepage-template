import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import flatten from 'lodash/flatten';

const pcTemplates = Array(8).fill(0);
const mobileTemplates = Array(8).fill(0);

const TemplateCarouselMobile = ({
  device,
  onItemClick,
}: {
  device: 'pc' | 'mobile';
  onItemClick: (item: any) => void;
}) => {
  const [carouselItems, setCarouselItems] = useState([
    pcTemplates,
    pcTemplates,
    pcTemplates,
  ]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (device === 'pc') {
      setCarouselItems([pcTemplates, pcTemplates, pcTemplates]);
    } else {
      setCarouselItems([mobileTemplates, mobileTemplates, mobileTemplates]);
    }
  }, [device]);

  const handleItemClick = (item: any) => {
    onItemClick && onItemClick(item);
  };

  return (
    <div className="relative">
      <Carousel
        selectedItem={current}
        ariaLabel="Carousel"
        useKeyboardArrows
        swipeable
        stopOnHover
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={true}
        infiniteLoop
        autoPlay
        width="100%"
        emulateTouch
      >
        {flatten(carouselItems).map((item, idx) => {
          return (
            <div key={idx} onClick={() => handleItemClick(item)}>
              <img src={'/images/template_1.png'} alt="" />
            </div>
          );
        })}
      </Carousel>
      <div
        className="absolute left-[-42px] top-[25%]"
        onClick={() => {
          if (current > 0) {
            setCurrent((prev) => prev - 1);
          } else {
            setCurrent(carouselItems.length - 1);
          }
        }}
      >
        <img src="/images/arrow_left.png" alt="" width={40} height={40} />
      </div>
      <div
        className="absolute right-[-42px] top-[25%]"
        onClick={() => {
          if (current < carouselItems.length - 1) {
            setCurrent((prev) => prev + 1);
          } else {
            setCurrent(0);
          }
        }}
      >
        <img src="/images/arrow_right.png" alt="" width={40} height={40} />
      </div>
      <div className="flex mt-[24px] lg:mt-[72px] w-full justify-center">
        {carouselItems.map((item, idx) => {
          return (
            <div
              key={idx}
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

export default TemplateCarouselMobile;
