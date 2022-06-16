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
