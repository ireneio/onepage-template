import { customerServices } from '@/data';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import AnimationWrapperChild from './AnimationWrapperChild';

const CooperationView = () => {
  return (
    <AnimationWrapperChild headerStyle="light" headerItem="#cooperation">
      <div className="relative h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[75px] pb-0">
        <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
          <img
            src="/images/banner_cooperation_mobile.png"
            alt="template"
            className="h-[18vh]"
          />
        </div>
        <div className="flex text-[#363636] w-full justify-center text-[18px] px-[200px] mt-[12px] mb-[100px]">
          一直秉承诚信可靠、服务周到的企业宗旨为广大客户服务。以超专业的服务素质、最先进完备的网上游戏系统，每天为成千上万的用户提供难忘的游戏体验。
        </div>
        <div className="grid gap-[44px] grid-cols-4 w-[80%] justify-between items-start mx-auto mt-[60px] flex-wrap">
          {customerServices.map((cs, idx) => {
            return (
              <div
                key={idx}
                className="flex-1 relative min-h-[320px] bg-[#EEEEEE] px-[12px] py-[12px]"
              >
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
        </div>
        <Cr />
        <MouseHandle
          anchor="#partners"
          headerStyleOnScroll="dark"
          headerValueOnScroll="#partners"
        />
        <SocialList />
      </div>
    </AnimationWrapperChild>
  );
};

export default CooperationView;
