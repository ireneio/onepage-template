import { sidebarItems } from '@/data';
import { motion } from 'framer-motion';
import ScrollIntoView from 'react-scroll-into-view';
import SocialList from '../General/SocialList';

interface Props {
  onSetOpen: (value: boolean) => void | Promise<void>;
  open: boolean;
}

const variants = {
  show: {
    x: 0,
    z: 101,
    padding: '20px 12px',
    display: 'block',
  },
  hide: { x: '100%', z: -1, padding: 0, display: 'none' },
};

const Sidebar = ({ open, onSetOpen }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial={'hide'}
      animate={open ? 'show' : 'hide'}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 bottom-0 h-[100vh] z-[103] mt-[0] overflow-hidden bg-[#B39B5C] shadow-xl hide-scrollbar"
    >
      <div
        className="absolute right-[8px] top-[2px] py-[8px] text-[48px] text-[#FFF] cursor-pointer font-thin"
        onClick={() => onSetOpen(false)}
      >
        <img src="/images/close.png" alt="close" width={32} height={32} />
      </div>
      <div className="mt-[100px]">
        {sidebarItems.map((item) => {
          return (
            <ScrollIntoView
              key={item.value}
              selector={item.value}
              onClick={() => onSetOpen(false)}
            >
              <div className="text-[#FFFFFF] flex justify-between py-[15px] border-b border-[#C2B48E] relative cursor-pointer items-center">
                <div className="text-[20px] pl-[26px] uppercase">{item.en}</div>
                <div className="text-[15px]">{item.cn}</div>
                <div className="absolute top-[12px] left-[-2px] text-[#c2b48e] opacity-90 text-[15px]">
                  {item.tag}
                </div>
              </div>
            </ScrollIntoView>
          );
        })}
      </div>
      <div className="relative w-full flex flex-wrap justify-center mt-[42px]">
        <div className="flex items-center">
          <div className="w-[30px] h-[1px] bg-[#C2B48E]"></div>
          <div className="ml-[14px] mr-[14px] text-[#FFFFFF] text-[15px] uppercase ">
            contact us
          </div>
          <div className="w-[30px] h-[1px] bg-[#C2B48E]"></div>
        </div>
        <div className="basis-[100%] flex justify-center mt-[24px]">
          <SocialList className="static" isNav />
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
