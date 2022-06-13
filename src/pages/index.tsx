import AboutView from '../components/Home/AboutView';
import CooperationView from '../components/Home/CooperationView';
import IntroView from '../components/Home/IntroView';
import PartnersView from '../components/Home/PartnersView';
import ProductView from '../components/Home/ProductView';
import TemplateView from '../components/Home/TemplateView';
import ContactUsView from '../components/Home/ContactUsView';
import DefaultLayout from '../components/Layout/DefaultLayout';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { sidebarItems } from '@/data';

const Index = () => {
  const dispatch = useAppDispatch();
  const cb = () => {
    const viewHeight = window.innerHeight;
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
  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', cb);
    }
    return () => {
      window.removeEventListener('scroll', cb);
    };
  }, []);

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
        <div id="contact">
          <ContactUsView />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
