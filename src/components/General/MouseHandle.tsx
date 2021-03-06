import { useAppSelector } from '@/store';
import ScrollIntoView from 'react-scroll-into-view';
import { motion } from 'framer-motion';

const MouseHandle = ({
  bg,
  anchor,
}: {
  bg: 'light' | 'dark';
  anchor: string;
}) => {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] bottom-[12px] uppercase text-[#3C3C3C] text-[14px]">
      <ScrollIntoView selector={anchor} className="relative cursor-pointer">
        <div
          className="w-[24px] h-[42px] rounded-[12px] border-[2px]"
          style={{
            borderColor: bg === 'light' ? '#aaa' : 'a5a5a5',
          }}
        ></div>
        <motion.div
          className="absolute bottom-[8px] left-[6px]"
          initial={{ y: 0 }}
          animate={{ y: -5 }}
          transition={{ repeatType: 'mirror', repeat: 1000000, duration: 0.6 }}
        >
          <img
            src={
              bg === 'dark'
                ? '/images/cursor_anim.png'
                : '/images/cursor_anim_gold.png'
            }
            alt="cursor"
          />
        </motion.div>
      </ScrollIntoView>
    </div>
  );
};

export default MouseHandle;
