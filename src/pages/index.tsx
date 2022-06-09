import AllCollections from '@/components/Home/AllCollections';
import LandingCarousel from '@/components/Home/LandingCarousel';
import LatestSales from '@/components/Home/LatestSales';
import LatestTransactions from '@/components/Home/LatestTransactions';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import Breadcrumb from '@/components/Shared/Breadcrumb';
import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect, useMemo, useRef, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

const services = [
  { image: '/images/first_live.png', value: '' },
  { image: '/images/first_qp.png', value: '' },
  { image: '/images/first_fish.png', value: '' },
  { image: '/images/first_slot.png', value: '' },
  { image: '/images/first_game.png', value: '' },
  { image: '/images/first_sport.png', value: '' },
];

const contacts = [
  { image: '/images/ct_wx.png', value: '' },
  { image: '/images/ct_telegram.png', value: '' },
  { image: '/images/ct_skype.png', value: '' },
  { image: '/images/ct_whasapp.png', value: '' },
  { image: '/images/ct_bbm.png', value: '' },
];

const Index = () => {
  const dispatch = useAppDispatch();
  const [windowHeight, setWindowHeight] = useState(768);

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <DefaultLayout>
      <div>
        <div
          className="relative w-full text-[#FFFFFF] bg-no-repeat bg-cover bg-center h-[100vh] flex items-center justify-center"
          style={{
            backgroundImage: 'url(/images/bg_first.png)',
            height: windowHeight - 75,
          }}
        >
          <div className="text-center">
            <div className="text-[48px] text-[#FFFFFF]">最全面的包网服务商</div>
            <div className="text-[80px] text-[#FFFFFF]">
              建站，从未如此<span className="text-[#B39B5C]">简单</span>
            </div>
            <div className="text-[#EDEDED] text-[24px] font-light">
              个性化定制，独特创新的视觉呈现
            </div>
            <div className="text-[#EDEDED] text-[24px] font-light">
              事为先，人为重，共创共赢，您的明智选择
            </div>
            <div className="flex justify-between items-center mt-[48px] w-[46vw] mx-auto">
              {services.map((service, idx) => {
                return (
                  <div key={idx}>
                    <img src={service.image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute bottom-[12px] left-[24px] uppercase text-[#3C3C3C] text-[14px]">
            copyright 2022. all rights reserved
          </div>
          <div className="absolute left-[50%] translate-x-[-50%] bottom-[12px] uppercase text-[#3C3C3C] text-[14px]">
            <ScrollIntoView
              selector="#template"
              className="relative cursor-pointer"
              onClick={() =>
                dispatch({ type: 'SET_HEADER_STYLE', payload: 'light' })
              }
            >
              <img src="/images/cursor_outline.png" alt="cursor" />
              <div className="absolute bottom-[8px] left-[6px]">
                <img src="/images/cursor_anim.png" alt="cursor" />
              </div>
            </ScrollIntoView>
          </div>
          <div className="absolute right-[24px] bottom-[12px] flex w-[300px] justify-between">
            {contacts.map((contact, idx) => {
              return (
                <div key={idx}>
                  <img src={contact.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="template"
          className="w-full h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center"
        >
          template
        </div>
        <div
          id="products"
          className="w-full h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/bg_product.png)' }}
        >
          products
        </div>
        <div
          id="cooperation"
          className="w-full h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center"
        >
          cooperation
        </div>
        <div
          id="partners"
          className="w-full h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/bg_partners.png)' }}
        >
          partners
        </div>
        <div
          id="about"
          className="w-full h-[100vh] bg-[#D9D9D9] text-[#FFFFFF]"
        >
          about
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
