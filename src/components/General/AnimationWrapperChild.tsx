import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
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
  delay,
  duration,
  disableOnScrollUp,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  disableOnScrollUp?: boolean;
}) => {
  const control = useAnimation();
  const { ref, inView } = useInView();
  const [scrollDir, setScrollDir] = useState('d');

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'd' : 'u');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  const setAnimation = () => {
    if (inView) {
      control.start('end');
    } else {
      control.set('start');
    }
  };

  useEffect(() => {
    if (disableOnScrollUp) {
      if (scrollDir === 'd') {
        setAnimation();
      } else {
        control.set('end');
      }
    } else {
      setAnimation();
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        initial={'start'}
        animate={control}
        transition={{ delay: delay || 0.5, duration: duration || 1 }}
        variants={variants}
        className="text-[#FFFFFF] bg-no-repeat bg-cover bg-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationWrapperChild;
