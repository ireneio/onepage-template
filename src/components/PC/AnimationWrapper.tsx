import { useAppDispatch } from '@/store';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const fadeInVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const AnimationWrapper = ({
  children,
  bg,
  headerStyle,
}: {
  children: React.ReactNode;
  bg?: string;
  headerStyle: 'light' | 'dark';
}) => {
  const dispatch = useAppDispatch();
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('end');
      dispatch({ type: 'SET_HEADER_STYLE', payload: headerStyle });
    } else {
      control.set('start');
    }
  }, [control, inView]);

  return (
    <motion.div
      initial={'start'}
      animate={control}
      transition={{ duration: 1.5 }}
      ref={ref}
      variants={fadeInVariants}
      className="snap-start h-[100vh]"
      style={{ backgroundColor: bg || '#000' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
