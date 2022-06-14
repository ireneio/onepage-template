import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TemplateCarousel = ({
  onItemClick,
  carouselItems,
  setCurrent,
  current,
}: {
  onItemClick: (item: any) => void;
  carouselItems: any[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
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

  const handleItemClick = (item: any) => {
    onItemClick && onItemClick(item);
  };

  return (
    <div>
      <Carousel
        ariaLabel="Carousel"
        selectedItem={current}
        useKeyboardArrows
        autoPlay={false}
        swipeable={false}
        stopOnHover
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        onChange={(index) => {
          setCurrent(index);
        }}
        infiniteLoop
        width="100%"
        emulateTouch
      >
        {carouselItems.map((array: any, idx) => {
          return (
            <div
              key={idx}
              className="hidden lg:grid gap-[12px] grid-cols-4 w-[80%] justify-between items-start mx-auto mt-[12px] flex-wrap"
            >
              {array.map((item: any, itemIdx: number) => {
                return (
                  <div
                    key={itemIdx}
                    className="h-[150px] w-[200px] mt-[12px] relative cursor-pointer"
                    onClick={() => handleItemClick(item)}
                    onMouseOver={(e) => handleMouseEnter(e, itemIdx)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <img
                      src={item?.image}
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
    </div>
  );
};

export default TemplateCarousel;
