import ContactUsView from '@/components/H5/ContactUsView';
import H5AboutView from '@/components/H5/H5AboutView';
import H5CooperationView from '@/components/H5/H5CooperationView';
import H5IntroView from '@/components/H5/H5IntroView';
import H5PartnersView from '@/components/H5/H5PartnersView';
import H5ProductView from '@/components/H5/H5ProductView';
import H5TemplateView from '@/components/H5/H5TemplateView';
import H5Layout from '@/components/Layout/H5Layout';

const H5 = () => {
  return (
    <H5Layout>
      <H5IntroView />
      {/* <div id="template"> */}
      <H5TemplateView />
      {/* </div> */}
      <H5ProductView />
      <H5CooperationView />
      <H5PartnersView />
      <H5AboutView />
      <ContactUsView />
    </H5Layout>
  );
};

export default H5;
