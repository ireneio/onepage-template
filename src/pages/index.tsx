import AboutView from '../components/PC/AboutView';
import CooperationView from '../components/PC/CooperationView';
import IntroView from '../components/PC/IntroView';
import PartnersView from '../components/PC/PartnersView';
import ProductView from '../components/PC/ProductView';
import TemplateView from '../components/PC/TemplateView';
import DefaultLayout from '../components/Layout/DefaultLayout';
import AnimationWrapper from '@/components/PC/AnimationWrapper';

const Index = () => {
  return (
    <DefaultLayout>
      <div className="snap-y snap-mandatory h-[100vh] w-[100vw] overflow-y-scroll">
        <div className="bg-[#181818] snap-start h-[100vh]">
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
