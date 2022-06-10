import { customerServices } from '@/data';
import Slider from 'react-slick';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        zIndex: 12,
        right: '0px',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,.2)',
      }}
      onClick={onClick}
    >
      {/* <img src="/images/arrow_right.png" alt="" /> */}
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        zIndex: 10,
        left: '0px',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,.2)',
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CooperationCarouselMobile = () => {
  return (
    <div>
      <Slider {...settings}>
        {customerServices.map((cs, idx) => {
          return (
            <div key={idx} className="flex-1 relative h-[320px] bg-[#fff]">
              <div>
                <img
                  src={cs.image}
                  alt={cs.title}
                  width={120}
                  height={120}
                  className="absolute top-[-18%] left-[50%] translate-x-[-50%]"
                />
                <div className="pt-[30px] px-[18px]">
                  <div className="text-[#000000] text-[18px] font-bold text-center mt-[42px]">
                    {cs.title}
                  </div>
                  <div className="w-[40px] h-[6px] bg-[#B39B5C] mx-auto mt-[4px]"></div>
                  <div className="mt-[24px] text-[#8b8b8b] font-normal text-[16px]">
                    {cs.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default CooperationCarouselMobile;
