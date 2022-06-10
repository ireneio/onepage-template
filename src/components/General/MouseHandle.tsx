import { useAppDispatch } from '@/store';
import ScrollIntoView from 'react-scroll-into-view';
import { motion } from 'framer-motion';

const MouseHandle = ({
  headerStyleOnScroll,
  headerValueOnScroll,
  anchor,
}: {
  headerStyleOnScroll: 'light' | 'dark';
  headerValueOnScroll: string;
  anchor: string;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="absolute left-[50%] translate-x-[-50%] bottom-[12px] uppercase text-[#3C3C3C] text-[14px]">
      <ScrollIntoView
        selector={anchor}
        className="relative cursor-pointer"
        onClick={() => {
          dispatch({ type: 'SET_HEADER_STYLE', payload: headerStyleOnScroll });
          dispatch({ type: 'SET_HEADER_ITEM', payload: headerValueOnScroll });
        }}
      >
        <img src="/images/cursor_outline.png" alt="cursor" />
        <motion.div
          className="absolute bottom-[8px] left-[6px]"
          initial={{ y: 0 }}
          animate={{ y: -5 }}
          transition={{ repeatType: 'mirror', repeat: 1000000, duration: 0.6 }}
        >
          <img src="/images/cursor_anim.png" alt="cursor" />
        </motion.div>
      </ScrollIntoView>
    </div>
  );
};

export default MouseHandle;
