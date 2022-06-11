import { useAppDispatch, useAppSelector } from '@/store';
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
  const headerStyle = useAppSelector((state) => state.layout.header.style);

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
        {/* <img
          src="/images/cursor_outline.png"
          alt="cursor"
          className={
            headerStyleOnScroll === 'light' ? 'bg-[#181818] rounded-[50%]' : ''
          }
        /> */}
        <div
          className="w-[24px] h-[42px] rounded-[12px] border-[1px]"
          style={{
            borderColor: headerStyle === 'light' ? '#aaa' : 'a5a5a5',
          }}
        ></div>
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
