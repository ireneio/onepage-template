import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PreviewCarousel = ({
  current,
  carouselItems,
}: {
  current: number;
  carouselItems: any[];
}) => {
  return (
    <div className="relative h-[100vh]">
      <Carousel
        ariaLabel="Carousel"
        selectedItem={current}
        useKeyboardArrows
        swipeable
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
        {carouselItems.map((preview, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center min-h-[100vh] overflow-auto"
            >
              <img
                src={preview.image}
                alt="template preview"
                className="min-h-[100vh]"
              />
            </div>
          );
        })}
      </Carousel>
      {/* <div
        className="absolute left-[0] top-[25%] z-[10001]"
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
      </div> */}
    </div>
  );
};

export default PreviewCarousel;
