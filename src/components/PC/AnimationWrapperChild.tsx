import { useAppDispatch } from '@/store';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const variants = {
  start: {
    y: '100%',
  },
  end: {
    y: 0,
  },
};

const variants2 = {
  start: {
    width: '50vw',
    height: '50vh',
    y: '1000%',
  },
  end: {
    width: '100vw',
    height: '100vh',
    y: '100%',
    transitionEnd: {
      display: 'none',
    },
  },
};

const AnimationWrapperChild = ({
  children,
  headerStyle,
  headerItem,
}: {
  children: React.ReactNode;
  headerStyle: 'light' | 'dark';
  headerItem: string;
}) => {
  const dispatch = useAppDispatch();
  const control = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log('inView', inView);
    if (inView) {
      control.start('end');
      dispatch({ type: 'SET_HEADER_STYLE', payload: headerStyle });
      dispatch({ type: 'SET_HEADER_ITEM', payload: headerItem });
    } else {
      control.set('start');
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        initial={'start'}
        animate={control}
        transition={{ delay: 0.8, duration: 0.5 }}
        variants={variants2}
        className="absolute top-0 left-0 border-4 border-[#000] shadow-inner"
      ></motion.div>
      <motion.div
        initial={'start'}
        animate={control}
        transition={{ delay: 0.5, duration: 0.8 }}
        variants={variants}
        className="relative h-[100vh] text-[#FFFFFF] bg-no-repeat bg-cover bg-center lg:pb-0"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationWrapperChild;
