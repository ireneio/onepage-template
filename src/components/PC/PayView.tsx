import { pay } from '@/data';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import AnimationWrapperChild from '../General/AnimationWrapperChild';

const PayView = () => {
  return (
    <div
      className="relative w-full h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pb-0 pt-[75px]"
      style={{ backgroundImage: 'url(/images/bg_pay.png)' }}
    >
      <AnimationWrapperChild
        headerStyle="dark"
        headerItem="#pay"
        delay={0.3}
        disableOnScrollUp
      >
        <AnimationWrapperChild delay={0.1} disableOnScrollUp>
          <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
            <img
              src="/images/banner_pay.png"
              alt="product"
              className="h-auto lg:h-[18vh]"
            />
          </div>
        </AnimationWrapperChild>
        <AnimationWrapperChild delay={0.2} disableOnScrollUp>
          <div className="grid grid-cols-4 gap-[44px] w-[80%] justify-between items-start mx-auto mt-[10vh] flex-wrap">
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
                  <div className="text-[18px] mt-[24px] font-bold">
                    {item.title}
                  </div>
                  <div className='flex items-center justify-center'>
                    <div className='bg-[#B39B5C] h-[4px] w-[50px] mt-[20px] mb-[20px]'></div>
                  </div>
                  <div className="text-[16px] text-[#B1B1B1] text-center">
                    <div dangerouslySetInnerHTML={{ __html: item.description.replaceAll('\n', '<br />') }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimationWrapperChild>
      </AnimationWrapperChild>
      <Cr />
      <SocialList />
    </div>
  );
};

export default PayView;
