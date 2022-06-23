import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { throttle } from 'lodash';

const TemplateCarousel = ({
  onItemClick,
  carouselItems,
  setCurrent,
  current,
  selectedDevice,
}: {
  onItemClick: (item: any) => void;
  carouselItems: any[];
  current: number;
  selectedDevice: string;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [currentHover, setCurrentHover] = useState(-1);
  const [gridBlock, setGridBlock] = useState(8);

  useEffect(() => {
    if (selectedDevice === 'pc') {
      setGridBlock(4);
    } else if (selectedDevice === 'mobile') {
      setGridBlock(6);
    }
  }, [selectedDevice]);

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

  const wheelEventCb = (e: any) => {
    e.stopPropagation();
    console.log(e.deltaX);
    const scrollingLeft = e.deltaX > 0;

    let isWheeled = false;
    function cb() {
      console.log('wheeled');
      console.log('scrollingLeft', scrollingLeft);

      console.log(current, carouselItems.length - 1);
      isWheeled = true;
      if (scrollingLeft) {
        if (current === 0) {
          setCurrent(carouselItems.length - 1);
        } else {
          setCurrent((prev) => prev + 1);
        }
      } else {
        if (current === carouselItems.length - 1) {
          setCurrent(0);
        } else {
          setCurrent((prev) => prev - 1);
        }
      }
      const tid = setTimeout(() => {
        isWheeled = false;
        clearTimeout(tid);
      }, 1200);
    }
    if (!isWheeled) {
      cb();
    }
  };

  const handleMouseOverParent = () => {
    console.log('mouseover');

    // function attachListener() {
    //   const el = window.document.getElementById('carousel_parent');
    //   if (el) {
    //     el.addEventListener('wheel', wheelEventCb);
    //   }
    // }
    // attachListener();
  };

  const handleMouseLeaveParent = () => {
    // const el = window.document.getElementById('carousel_parent');
    // if (el) {
    //   el.removeEventListener('wheel', wheelEventCb);
    // }
  };

  return (
    <div
      id="carousel_parent"
      className="max-w-[1325px] mx-auto"
      onMouseOver={() => handleMouseOverParent()}
      onMouseLeave={() => handleMouseLeaveParent()}
    >
      <Carousel
        ariaLabel="Carousel"
        selectedItem={current}
        useKeyboardArrows
        autoPlay={false}
        swipeable={true}
        stopOnHover
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        onChange={(index) => {
          // setCurrent(index);
        }}
        infiniteLoop
        width="100%"
        emulateTouch
      >
        {carouselItems.map((array: any, idx) => {
          return (
            <div
              key={idx}
              className="grid gap-[24px] grid-cols-6 justify-between items-start flex-wrap mr-[24px]"
              style={{
                gridTemplateColumns: `repeat(${gridBlock}, minmax(0, 1fr))`,
              }}
            >
              {array.map((item: any, itemIdx: number) => {
                return (
                  <div
                    key={itemIdx}
                    className="w-full mt-[12px] relative cursor-pointer"
                    onClick={() => handleItemClick(item)}
                    onMouseOver={(e) => handleMouseEnter(e, itemIdx)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <img
                      src={item?.image}
                      alt=""
                      className="w-[225px] h-[486px] object-cover"
                      style={{
                        width: selectedDevice === 'mobile' ? 225 : 400,
                        height: selectedDevice === 'mobile' ? 486 : 226,
                      }}
                    />
                    {currentHover === itemIdx && (
                      <div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[#181818] opacity-30 flex items-center justify-center"></div>
                        <div className="absolute top-0 left-0 w-full h-full opacity-100 flex items-center justify-center">
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
