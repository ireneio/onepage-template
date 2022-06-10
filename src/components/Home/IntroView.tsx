import { services } from '@/data';
import { motion } from 'framer-motion';
import ScrollIntoView from 'react-scroll-into-view';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';

const IntroView = () => {
  return (
    <div
      className="relative w-[100vw] text-[#FFFFFF] bg-no-repeat bg-cover bg-center h-[100vh] flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/bg_first.png)',
        height: 'calc(100vh - 75px)',
      }}
    >
      <div className="text-center">
        <div className="text-[24px] lg:text-[48px] text-[#FFFFFF]">
          最全面的包网服务商
        </div>
        <div className="text-[38px] lg:text-[80px] text-[#FFFFFF]">
          建站，从未如此<span className="text-[#B39B5C]">简单</span>
        </div>
        <div className="text-[#EDEDED] text-[15px] lg:text-[24px] font-light">
          个性化定制，独特创新的视觉呈现
        </div>
        <div className="text-[#EDEDED] text-[15px] lg:text-[24px] font-light">
          事为先，人为重，共创共赢，您的明智选择
        </div>
        <div className="flex justify-between items-center mt-[48px] w-[46vw] mx-auto">
          {services.map((service, idx) => {
            return (
              <div key={idx}>
                <img src={service.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <ScrollIntoView selector="#template" className="lg:hidden">
        <motion.div
          className="absolute left-[50%] translate-x-[-50%] bottom-[32px] cursor-pointer"
          initial={{ y: 0 }}
          animate={{ y: -5 }}
          transition={{ repeatType: 'mirror', repeat: 1000000, duration: 0.6 }}
        >
          <img
            src="/images/float_arrow.png"
            alt="arrow"
            width={20}
            height={0}
          />
        </motion.div>
      </ScrollIntoView>
      <div className="hidden lg:block">
        <Cr />
        <MouseHandle
          anchor="#template"
          headerStyleOnScroll="light"
          headerValueOnScroll="#template"
        />
        <SocialList />
      </div>
    </div>
  );
};

export default IntroView;
