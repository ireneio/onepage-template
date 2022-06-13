import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const pcTemplates = Array(8).fill(0);
const mobileTemplates = Array(8).fill(0);

const TemplateCarousel = ({
  device,
  onItemClick,
}: {
  device: 'pc' | 'mobile';
  onItemClick: (item: any) => void;
}) => {
  const [current, setCurrent] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    pcTemplates,
    pcTemplates,
    pcTemplates,
  ]);
  const [currentHover, setCurrentHover] = useState(-1);

  const handleMouseEnter = (e: any, idx: number) => {
    e.stopPropagation();
    if (currentHover !== idx) {
      setCurrentHover(idx);
    }
  };

  const handleMouseLeave = () => {
    setCurrentHover(-1);
  };

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
        selectedItem={current}
        useKeyboardArrows
        // swipeable={false}
        stopOnHover
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        onChange={(index) => {
          setCurrent(index);
        }}
        infiniteLoop
        // autoPlay
        width="100%"
        emulateTouch
      >
        {carouselItems.map((array, idx) => {
          return (
            <div
              key={idx}
              className="hidden lg:grid gap-[32px] grid-cols-4 w-[80%] justify-between items-start mx-auto mt-[12px] flex-wrap cursor-pointer"
            >
              {array.map((item, itemIdx) => {
                return (
                  <div
                    key={itemIdx}
                    className="h-[150px] w-[200px] mt-[12px] relative"
                    onClick={() => handleItemClick(item)}
                    onMouseOver={(e) => handleMouseEnter(e, itemIdx)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <img
                      src={'/images/template_1.png'}
                      alt=""
                      className="h-[150px] w-[200px] object-cover"
                    />
                    {currentHover === itemIdx && (
                      <div>
                        <div className="absolute top-0 left-0 h-[150px] w-[200px] bg-[#181818] opacity-30 flex items-center justify-center"></div>
                        <div className="absolute top-0 left-0 h-[150px] w-[200px] opacity-100 flex items-center justify-center">
                          <div
                            className="bg-no-repeat bg-cover w-[48px] h-[48px]"
                            style={{
                              backgroundImage: 'url(/images/search.png)',
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </Carousel>
      <div className="flex mt-[8px] lg:mt-[8px] w-full justify-center">
        {carouselItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[50px] lg:w-[100px] h-[2px] cursor-pointer"
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

export default TemplateCarousel;
