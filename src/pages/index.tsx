import AboutView from '../components/PC/AboutView';
import CooperationView from '../components/PC/CooperationView';
import IntroView from '../components/PC/IntroView';
import PartnersView from '../components/PC/PartnersView';
import ProductView from '../components/PC/ProductView';
import TemplateView from '../components/PC/TemplateView';
import DefaultLayout from '../components/Layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store';
import { sidebarItems } from '@/data';
import { useWindowWidth } from '@/hooks/window';
import AnimationWrapper from '@/components/PC/AnimationWrapper';

const Index = () => {
  const windowWidth = useWindowWidth();
  const dispatch = useAppDispatch();
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimer, setScrollTimer] = useState<any>(-1);

  useEffect(() => {
    const cb = () => {
      const viewHeight = window.innerHeight;
      console.log('viewHeight', viewHeight);

      if (window.scrollY < viewHeight) {
        dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[0].value });
        dispatch({
          type: 'SET_HEADER_STYLE',
          payload: sidebarItems[0].theme as 'light' | 'dark',
        });
      } else if (
        window.scrollY >= viewHeight &&
        window.scrollY < viewHeight * 2
      ) {
        dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[1].value });
        dispatch({
          type: 'SET_HEADER_STYLE',
          payload: sidebarItems[1].theme as 'light' | 'dark',
        });
      } else if (
        window.scrollY >= viewHeight &&
        window.scrollY < viewHeight * 3
      ) {
        dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[2].value });
        dispatch({
          type: 'SET_HEADER_STYLE',
          payload: sidebarItems[2].theme as 'light' | 'dark',
        });
      } else if (
        window.scrollY >= viewHeight &&
        window.scrollY < viewHeight * 4
      ) {
        dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[3].value });
        dispatch({
          type: 'SET_HEADER_STYLE',
          payload: sidebarItems[3].theme as 'light' | 'dark',
        });
      } else if (
        window.scrollY >= viewHeight &&
        window.scrollY < viewHeight * 5
      ) {
        dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[4].value });
        dispatch({
          type: 'SET_HEADER_STYLE',
          payload: sidebarItems[4].theme as 'light' | 'dark',
        });
      } else if (
        window.scrollY >= viewHeight &&
        window.scrollY < viewHeight * 6
      ) {
        dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[5].value });
        dispatch({
          type: 'SET_HEADER_STYLE',
          payload: sidebarItems[5].theme as 'light' | 'dark',
        });
      }
    };
    window.addEventListener('scroll', cb);
    return () => {
      window.removeEventListener('scroll', cb);
    };
  }, []);

  // const [scrollDir, setScrollDir] = useState('d');

  // useEffect(() => {
  //   const threshold = 0;
  //   let lastScrollY = window.pageYOffset;
  //   let ticking = false;

  //   const updateScrollDir = () => {
  //     const scrollY = window.pageYOffset;

  //     if (Math.abs(scrollY - lastScrollY) < threshold) {
  //       ticking = false;
  //       return;
  //     }
  //     setScrollDir(scrollY > lastScrollY ? 'd' : 'u');
  //     lastScrollY = scrollY > 0 ? scrollY : 0;
  //     ticking = false;
  //   };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [scrollDir]);

  useEffect(() => {
    const cb = () => {
      if (scrollTimer === -1) {
        clearTimeout(scrollTimer);
        setIsScrolling(true);
      }
      const _scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
      setScrollTimer(_scrollTimer);
    };
    window.addEventListener('scroll', cb);
    return () => {
      window.removeEventListener('scroll', cb);
    };
  });

  useEffect(() => {
    console.log('isScrolling', isScrolling);
  }, [isScrolling]);

  // useEffect(() => {
  //   console.log('scrollDir', scrollDir);
  // }, [scrollDir]);

  return (
    <DefaultLayout>
      <div className="snap-y snap-mandatory h-[100vh] w-[100vw] overflow-y-scroll">
        <div className="bg-[#181818] snap-start h-[101vh]">
          <div id="entry">
            <IntroView />
          </div>
        </div>
        <AnimationWrapper bg="#FFF" headerStyle="light">
          <div id="template">
            <TemplateView />
          </div>
        </AnimationWrapper>
        <AnimationWrapper bg="#000" headerStyle="dark">
          <div id="products">
            <ProductView />
          </div>
        </AnimationWrapper>
        <AnimationWrapper bg="#FFF" headerStyle="light">
          <div id="cooperation">
            <CooperationView />
          </div>
        </AnimationWrapper>
        <AnimationWrapper bg="#000" headerStyle="dark">
          <div id="partners">
            <PartnersView />
          </div>
        </AnimationWrapper>
        <AnimationWrapper bg="#FFF" headerStyle="light">
          <div id="about">
            <AboutView />
          </div>
        </AnimationWrapper>
      </div>
    </DefaultLayout>
  );
};

export default Index;
