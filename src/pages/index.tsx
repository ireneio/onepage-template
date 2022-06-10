import AboutView from '@/components/Home/AboutView';
import CooperationView from '@/components/Home/CooperationView';
import IntroView from '@/components/Home/IntroView';
import PartnersView from '@/components/Home/PartnersView';
import ProductView from '@/components/Home/ProductView';
import TemplateView from '@/components/Home/TemplateView';
import DefaultLayout from '@/components/Layout/DefaultLayout';

const Index = () => {
  return (
    <DefaultLayout>
      <div>
        <IntroView />
        <TemplateView />
        <ProductView />
        <CooperationView />
        <PartnersView />
        <AboutView />
      </div>
    </DefaultLayout>
  );
};

export default Index;
