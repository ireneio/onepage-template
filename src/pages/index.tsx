import SideScroller from '@/components/General/SideScroller';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import Header from '@/components/Layout/Header';
import AboutView from '@/components/PC/AboutView';
import CooperationView from '@/components/PC/CooperationView';
import IntroView from '@/components/PC/IntroView';
import PartnersView from '@/components/PC/PartnersView';
import PayView from '@/components/PC/PayView';
import ProductView from '@/components/PC/ProductView';
import TemplateView from '@/components/PC/TemplateView';
import { MOBILE_VIEWWIDTH, useWindowWidth } from '@/hooks/window';
import ReactFullpage from '@fullpage/react-fullpage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const pluginWrapper = () => {
  // require('./statics/fullpage.scrollHorizontally.min');
};

const Index = () => {
  const router = useRouter();
  const windowWidth = useWindowWidth();

  // useEffect(() => {
  //   if (windowWidth <= MOBILE_VIEWWIDTH) {
  //     router.push('/h5');
  //   }
  // }, [windowWidth]);

  return (
    <ReactFullpage
      pluginWrapper={pluginWrapper}
      autoScrolling={false}
      //fullpage options
      // licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */
      // scrollHorizontallyKey={'YOUR KEY HERE'}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <IntroView />
            </div>
            <div className="section">
              <TemplateView />
            </div>
            <div className="section">
              <ProductView />
            </div>
            <div className="section">
              <CooperationView />
            </div>
            <div className="section">
              <PartnersView />
            </div>
            <div className="section">
              <AboutView />
            </div>
            <div className="section">
              <PayView />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Index;
