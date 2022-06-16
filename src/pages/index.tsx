import AboutView from '../components/Home/AboutView';
import CooperationView from '../components/Home/CooperationView';
import IntroView from '../components/Home/IntroView';
import PartnersView from '../components/Home/PartnersView';
import ProductView from '../components/Home/ProductView';
import TemplateView from '../components/Home/TemplateView';
import DefaultLayout from '../components/Layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store';
import { sidebarItems } from '@/data';
import { useWindowWidth } from '@/hooks/window';

const Index = () => {
  const windowWidth = useWindowWidth();
  const dispatch = useAppDispatch();
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimer, setScrollTimer] = useState<any>(-1);

  useEffect(() => {
    const cb = () => {
      if (!isScrolling) {
        const viewHeight = window.innerHeight;
        if (window.scrollY < viewHeight) {
          console.log('here', scrollDir);

          dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[0].value });
          dispatch({
            type: 'SET_HEADER_STYLE',
            payload: sidebarItems[0].theme as 'light' | 'dark',
          });
          if (scrollDir === 'd') {
            window.scrollTo({ top: viewHeight });
          } else {
            window.scrollTo({ top: 0 });
          }
        }
        // else if (
        //   window.scrollY >= viewHeight &&
        //   window.scrollY < viewHeight * 2
        // ) {
        //   dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[1].value });
        //   dispatch({
        //     type: 'SET_HEADER_STYLE',
        //     payload: sidebarItems[1].theme as 'light' | 'dark',
        //   });
        //   if (scrollDir === 'd') {
        //     window.scrollTo({ top: viewHeight * 2 });
        //   } else {
        //     window.scrollTo({ top: viewHeight });
        //   }
        // } else if (
        //   window.scrollY >= viewHeight &&
        //   window.scrollY < viewHeight * 3
        // ) {
        //   dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[2].value });
        //   dispatch({
        //     type: 'SET_HEADER_STYLE',
        //     payload: sidebarItems[2].theme as 'light' | 'dark',
        //   });
        //   if (scrollDir === 'd') {
        //     window.scrollTo({ top: viewHeight * 3 });
        //   } else {
        //     window.scrollTo({ top: viewHeight * 2 });
        //   }
        // } else if (
        //   window.scrollY >= viewHeight &&
        //   window.scrollY < viewHeight * 4
        // ) {
        //   dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[3].value });
        //   dispatch({
        //     type: 'SET_HEADER_STYLE',
        //     payload: sidebarItems[3].theme as 'light' | 'dark',
        //   });
        //   if (scrollDir === 'd') {
        //     window.scrollTo({ top: viewHeight * 4 });
        //   } else {
        //     window.scrollTo({ top: viewHeight * 3 });
        //   }
        // } else if (
        //   window.scrollY >= viewHeight &&
        //   window.scrollY < viewHeight * 5
        // ) {
        //   dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[4].value });
        //   dispatch({
        //     type: 'SET_HEADER_STYLE',
        //     payload: sidebarItems[4].theme as 'light' | 'dark',
        //   });
        //   if (scrollDir === 'd') {
        //     window.scrollTo({ top: viewHeight * 5 });
        //   } else {
        //     window.scrollTo({ top: viewHeight * 4 });
        //   }
        // } else if (
        //   window.scrollY >= viewHeight &&
        //   window.scrollY < viewHeight * 6
        // ) {
        //   dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[5].value });
        //   dispatch({
        //     type: 'SET_HEADER_STYLE',
        //     payload: sidebarItems[5].theme as 'light' | 'dark',
        //   });
        //   if (scrollDir === 'd') {
        //     window.scrollTo({ top: viewHeight * 6 });
        //   } else {
        //     window.scrollTo({ top: viewHeight * 5 });
        //   }
        // }
      }
    };
    if (window && windowWidth > 768) {
      // window.addEventListener('scroll', cb);
    }
    return () => {
      if (window && windowWidth > 768) {
        // window.removeEventListener('scroll', cb);
      }
    };
  }, [windowWidth, isScrolling]);

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

  useEffect(() => {
    console.log('scrollDir', scrollDir);
  }, [scrollDir]);

  // const isAtBottom = (element: any) => {
  //   return element.scrollHeight - element.scrollTop === element.clientHeight;
  // };

  // useEffect(() => {
  //   const cb = () => {
  //     const entry = window.document.getElementById('entry');
  //     const template = window.document.getElementById('template');
  //     const cooperation = window.document.getElementById('cooperation');
  //     const partners = window.document.getElementById('partners');
  //     const about = window.document.getElementById('about');
  //     const products = window.document.getElementById('products');

  //     console.log('entry', entry);
  //     console.log('template', template);
  //     console.log('cooperation', cooperation);
  //     console.log('partners', partners);
  //     console.log('about', about);
  //     console.log('products', products);
  //     const viewHeight = window.innerHeight;
  //     console.log('isAtBottom(template)', isAtBottom(template));

  //     if (isAtBottom(entry)) {
  //       // if (window.scrollY < viewHeight) {
  //       //   // dispatch({ type: 'SET_HEADER_ITEM', payload: sidebarItems[0].value });
  //       //   // dispatch({
  //       //   //   type: 'SET_HEADER_STYLE',
  //       //   //   payload: sidebarItems[0].theme as 'light' | 'dark',
  //       //   // });
  //       //   if (scrollDir === 'd') {
  //       //     window.scrollTo({ top: viewHeight });
  //       //   } else {
  //       //     window.scrollTo({ top: 0 });
  //       //   }
  //       // }
  //     }
  //   };
  //   if (window) {
  //     window.addEventListener('scroll', cb);
  //   }
  //   return () => {
  //     window.removeEventListener('scroll', cb);
  //   };
  // }, []);

  return (
    <DefaultLayout>
      <div>
        <div id="entry">
          <IntroView />
        </div>
        <div id="template">
          <TemplateView />
        </div>
        <div id="products">
          <ProductView />
        </div>
        <div id="cooperation">
          <CooperationView />
        </div>
        <div id="partners">
          <PartnersView />
        </div>
        <div id="about">
          <AboutView />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
