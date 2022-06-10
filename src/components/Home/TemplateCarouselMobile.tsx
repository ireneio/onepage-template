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
    <div>
      <Carousel
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
        {flatten(carouselItems).map((item, idx) => {
          return (
            <div key={idx} onClick={() => handleItemClick(item)}>
              <img src={'/images/template_1.png'} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TemplateCarouselMobile;
