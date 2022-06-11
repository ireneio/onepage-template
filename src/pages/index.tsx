import AboutView from '@/components/Home/AboutView';
import CooperationView from '@/components/Home/CooperationView';
import IntroView from '@/components/Home/IntroView';
import PartnersView from '@/components/Home/PartnersView';
import ProductView from '@/components/Home/ProductView';
import TemplateView from '@/components/Home/TemplateView';
import ContactUsView from '@/components/Home/ContactUsView';
import DefaultLayout from '@/components/Layout/DefaultLayout';

const Index = () => {
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
