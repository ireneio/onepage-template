import { useEffect, useRef, useState } from 'react';
import { useWindowWidth } from '@/hooks/window';

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
  const windowWidth = useWindowWidth();
  const ref = useRef<any>(null);

  useEffect(() => {
    setCurrent(0);
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

  return (
    <div
      id="carousel_parent"
      className="mx-auto overflow-hidden"
      style={{ maxWidth: windowWidth <= 1366 ? 1000 : 1350 }}
    >
      <Slider
        {...settings}
        ref={(slider) => (ref.current = slider)}
        key={selectedDevice}
        afterChange={(current) => {
          setCurrent(current);
        }}
      >
        {carouselItems.map((array: any, idx) => {
          return (
            <div key={idx}>
              <div
                className="grid gap-[10px] grid-cols-6 justify-between items-start flex-wrap mr-[24px]"
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
                      <img src={item?.image} alt="" />
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
            </div>
          );
        })}
      </Slider>
      <div className="w-full justify-center flex mt-[40px]">
        {carouselItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[100px] h-[2px]"
              style={{
                backgroundColor: current === idx ? '#B39B5C' : '#E8E8E8',
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

export default TemplateCarousel;
