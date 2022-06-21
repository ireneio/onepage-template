import { useAppDispatch } from '@/store';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const variants = {
  start: {
    y: '100%',
    opacity: 0,
    // display: 'none',
  },
  end: {
    y: 0,
    opacity: 1,
    // display: 'block',
  },
};

const AnimationWrapperChild = ({
  children,
  headerStyle,
  headerItem,
  delay,
  duration,
}: {
  children: React.ReactNode;
  headerStyle?: 'light' | 'dark';
  headerItem?: string;
  delay?: number;
  duration?: number;
}) => {
  const dispatch = useAppDispatch();
  const control = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      control.start('end');
      if (headerStyle && headerItem) {
        dispatch({ type: 'SET_HEADER_STYLE', payload: headerStyle });
        dispatch({ type: 'SET_HEADER_ITEM', payload: headerItem });
      }
    } else {
      control.set('start');
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        initial={'start'}
        animate={control}
        transition={{ delay: delay || 0.5, duration: duration || 1.5 }}
        variants={variants}
        className="relative text-[#FFFFFF] bg-no-repeat bg-cover bg-center lg:pb-0"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationWrapperChild;
