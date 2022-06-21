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
      <div
        className="absolute left-[-48px] top-[50%] translate-y-[-50%] rounded-full"
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
        className="absolute right-[-48px] top-[50%] translate-y-[-50%] rounded-full"
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
      <Carousel
        selectedItem={current}
        ariaLabel="Carousel"
        useKeyboardArrows
        onChange={(idx) => {
          setCurrent(idx);
        }}
        // swipeable={false}
        stopOnHover
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        swipeable={false}
        infiniteLoop
        autoPlay={false}
        width="100%"
        emulateTouch
      >
        {flatten(carouselItems).map((item, idx) => {
          return (
            <div key={idx} onClick={() => handleItemClick(item)}>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TemplateCarouselMobile;
