import { pay } from '@/data';
import AnimationWrapperChild from '../General/AnimationWrapperChild';

const H5PayView = () => {
  return (
    <div
      id="pay"
      className="relative z-[4] w-full lg:h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] overflow-hidden"
      style={{ backgroundImage: 'url(/images/bg_pay_h5.png)' }}
    >
      <AnimationWrapperChild delay={0.3} disableOnScrollUp>
        <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
          <img
            src="/images/banner_pay_h5.png"
            alt="product"
            className="h-auto"
          />
        </div>
      </AnimationWrapperChild>
      <AnimationWrapperChild delay={0.5} disableOnScrollUp>
        <div className="grid grid-cols-2 gap-[44px] w-[80%] justify-between items-start mx-auto mt-[48px] flex-wrap">
          {pay.map((item, idx) => {
            return (
              <div key={idx} className="text-[#FFFFFF] text-center flex-1">
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-[15px] mt-[24px] font-bold">
                  {item.title}
                </div>
                <div className='flex items-center justify-center'>
                  <div className='bg-[#B39B5C] h-[2px] w-[25px] mt-[5px] mb-[10px]'></div>
                </div>
                <div className="text-[12px] text-[#B1B1B1] text-center">
                  <div dangerouslySetInnerHTML={{ __html: item.description.replaceAll('\n', '<br />') }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </AnimationWrapperChild>
      <div className='w-[100vw] h-[1px] bg-[#363636] mt-[24px]'></div>
    </div>
  );
};

export default H5PayView;
