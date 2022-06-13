import { Carousel } from 'react-responsive-carousel';
import flatten from 'lodash/flatten';

const TemplateCarouselMobile = ({
  onItemClick,
  carouselItems,
  current,
  setCurrent,
}: {
  onItemClick: (item: any) => void;
  carouselItems: any[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleItemClick = (item: any) => {
    onItemClick && onItemClick(item);
  };

  return (
    <div className="relative">
      <Carousel
        selectedItem={current}
        ariaLabel="Carousel"
        useKeyboardArrows
        onChange={(idx) => {
          console.log(idx);

          setCurrent(idx);
        }}
        // swipeable={false}
        stopOnHover
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        width="100%"
        emulateTouch
      >
        {flatten(carouselItems).map((item, idx) => {
          return (
            <div key={idx} onClick={() => handleItemClick(item)}>
              <img src={'/images/template_1.png'} alt="" />
              {/* <div className='text-[28px] text-[#000]'>{idx}</div> */}
            </div>
          );
        })}
      </Carousel>
      <div
        className="absolute left-[-48px] top-[25%]"
        onClick={() => {
          if (current > 0) {
            setCurrent((prev) => prev - 1);
          } else {
            setCurrent(flatten(carouselItems).length - 1);
          }
        }}
      >
        <img src="/images/arrow_left.png" alt="" width={40} height={40} />
      </div>
      <div
        className="absolute right-[-48px] top-[25%]"
        onClick={() => {
          if (current < flatten(carouselItems).length - 1) {
            setCurrent((prev) => prev + 1);
          } else {
            setCurrent(0);
          }
        }}
      >
        <img src="/images/arrow_right.png" alt="" width={40} height={40} />
      </div>
    </div>
  );
};

export default TemplateCarouselMobile;
