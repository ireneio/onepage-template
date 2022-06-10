import { templatePreviews } from '@/data';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PreviewCarousel = () => {
  const [carouselItems] = useState(templatePreviews);

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
        showThumbs={false}
        infiniteLoop
        autoPlay
        width="100%"
        emulateTouch
      >
        {carouselItems.map((preview, idx) => {
          return (
            <div key={idx} className="flex items-center">
              <img src={preview.image} alt="" className="object-contain" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PreviewCarousel;
