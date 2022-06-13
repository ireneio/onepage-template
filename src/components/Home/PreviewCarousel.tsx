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
    <div className="abddde">
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
                className="min-h-[100vh] object-cover"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PreviewCarousel;
