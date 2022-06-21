import { services } from '@/data';
import { useWindowWidth } from '@/hooks/window';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import AnimationWrapperChild from './AnimationWrapperChild';

const IntroView = () => {
  const windowWidth = useWindowWidth();
  const [currentHover, setCurrentHover] = useState(-1);

  const handleMouseEnter = (idx: number) => {
    if (currentHover !== idx) {
      setCurrentHover(idx);
    }
  };

  const handleMouseLeave = () => {
    setCurrentHover(-1);
  };

  return (
    <div
      className="relative text-[#FFFFFF] bg-no-repeat bg-cover bg-center flex items-center justify-center h-[100vh]"
      style={{
        backgroundImage: 'url(/images/bg_first.png)',
        // height:
        //   windowWidth < 1366 ? 'calc(100vh - 44px)' : 'calc(100vh - 75px)',
        // paddingTop: windowWidth < 1366 ? '44px' : '75px',
      }}
    >
      <AnimationWrapperChild headerStyle="dark" headerItem="#entry" delay={0.3}>
        <div className="text-center mt-[-100px]">
          <div className="text-[48px] text-[#FFFFFF]">最全面的包网服务商</div>
          <div className="mt-0 mb-0 text-[80px] text-[#FFFFFF] font-bold">
            建站，从未如此<span className="text-[#B39B5C]">简单</span>
          </div>
          <div className="text-[#EDEDED] text-[24px] font-light">
            个性化定制，独特创新的视觉呈现
          </div>
          <div className="text-[#EDEDED] text-[24px] font-light">
            事为先，人为重，共创共赢，您的明智选择
          </div>
          <div className="flex justify-between items-center mt-[48px] mx-auto">
            {services.map((service, idx) => {
              return (
                <div
                  key={idx}
                  className="relative cursor-pointer flex items-center justify-center"
                  onMouseOver={() => handleMouseEnter(idx)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <img src={service.image} alt="" />
                  {currentHover === idx && (
                    <img
                      src="/images/hover.png"
                      alt=""
                      className="absolute top-0 left-0 opacity-100"
                    />
                  )}
                  {currentHover === idx && (
                    <div className="text-[18px] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      {service.value}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <ScrollIntoView selector="#template" className="lg:hidden">
          <motion.div
            className="absolute left-[50%] bottom-[60px] cursor-pointer"
            initial={{ y: 0, x: '-50%' }}
            animate={{ y: -5, x: '-50%' }}
            transition={{
              repeatType: 'mirror',
              repeat: 1000000,
              duration: 0.6,
            }}
          >
            <img
              src="/images/float_arrow.png"
              alt="arrow"
              width={20}
              height={20}
            />
          </motion.div>
        </ScrollIntoView>
      </AnimationWrapperChild>
      <Cr />
      <MouseHandle
        anchor="#template"
        headerStyleOnScroll="light"
        headerValueOnScroll="#template"
      />
      <SocialList />
    </div>
  );
};

export default IntroView;
