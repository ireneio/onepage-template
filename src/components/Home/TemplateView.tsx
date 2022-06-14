import { devices, mobileTemplates, pcTemplates } from '@/data';
import { flatten } from 'lodash';
import { useEffect, useState } from 'react';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import TemplateCarousel from './TemplateCarousel';
import TemplateCarouselMobile from './TemplateCarouselMobile';
import TemplatePreviewModal from './TemplatePreviewModal';

const TemplateView = () => {
  const [selectedDevice, setSelectedDevice] = useState<'pc' | 'mobile'>('pc');
  const [showPreview, setShowPreview] = useState(false);
  const [previewItem, setPreviewItem] = useState('');
  const [carouselItems, setCarouselItems] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window) {
      const div = document.getElementById('infinite_scroller');
      if (div) {
        const image: string = flatten(carouselItems)[current]?.image;
        const target = document.getElementById(image);
        if (target) {
          div.scrollTo({ left: Number(target?.clientWidth) * current });
        }
      }
    }
  }, [current, carouselItems]);

  useEffect(() => {
    if (selectedDevice === 'pc') {
      setCarouselItems(pcTemplates);
    } else {
      setCarouselItems(mobileTemplates);
    }
  }, [selectedDevice]);

  const handlePreview = (item: any) => {
    setPreviewItem(item.enlarged);
    setShowPreview(true);
  };

  const handlePreviewModalUpdateItem = (idx: number) => {
    const reduce = carouselItems.reduce((acc, curr) => {
      const _acc = acc.concat([...curr]);
      return _acc;
    }, []);

    setPreviewItem(reduce[idx].enlarged);
  };

  return (
    <div className="relative w-full lg:h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] lg:pt-[75px] pb-[24px] lg:pb-0">
      <div className="w-[80%] mx-auto flex justify-center items-center">
        <img
          src="/images/banner_template.png"
          alt="template"
          className="h-auto lg:h-[18vh]"
        />
      </div>
      <div className="grid grid-cols-2 gap-[12px] text-[14px] w-[200px] mx-auto justify-center mt-[16px] mb-[0px]">
        {devices.map((device) => {
          return (
            <div
              key={device.value}
              className="cursor-pointer text-center"
              onClick={() => setSelectedDevice(device.value as 'pc' | 'mobile')}
            >
              <div
                style={{
                  color:
                    selectedDevice === device.value ? '#B39B5C' : '#BCBCBC',
                }}
                className="text-[20px] text-center"
              >
                {device.text}
                {selectedDevice === device.value && (
                  <div className="w-full h-[2px] bg-[#B39B5C]"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block">
        <TemplateCarousel
          onItemClick={(item) => handlePreview(item)}
          carouselItems={carouselItems}
          setCurrent={setCurrent}
          current={current}
        />
      </div>
      <div className="lg:hidden mx-[60px] mt-[32px]">
        <TemplateCarouselMobile
          onItemClick={(item) => handlePreview(item)}
          carouselItems={carouselItems}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
      <div
        id="infinite_scroller"
        className="lg:hidden mt-[24px] overflow-x-scroll w-[100vw] scroll-smooth flex hide-scrollbar"
      >
        {flatten(carouselItems).map((item, idx) => {
          return (
            <div
              key={idx}
              id={item.image}
              className="w-[120px] h-[60px] flex-shrink-0 relative mx-[6px]"
              onClick={() => setCurrent(idx)}
            >
              <div>
                {current !== idx && (
                  <div className="absolute top-0 left-0 w-[120px] h-[60px] bg-[#000000] opacity-60 transition-all"></div>
                )}
                <img src={item.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-[24px] lg:mt-[28px] w-full justify-center hidden lg:flex">
        {carouselItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[50px] lg:w-[100px] h-[2px]"
              style={{
                backgroundColor: current === idx ? '#B39B5C' : '#E8E8E8',
              }}
              onClick={() => setCurrent(idx)}
            ></div>
          );
        })}
      </div>
      <div className="mt-[24px] lg:mt-[28px] w-full justify-center lg:hidden flex">
        {flatten(carouselItems).map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[12px] lg:w-[100px] h-[2px]"
              style={{
                backgroundColor: current === idx ? '#B39B5C' : '#E8E8E8',
              }}
              onClick={() => setCurrent(idx)}
            ></div>
          );
        })}
      </div>
      <div className="hidden lg:block">
        <Cr />
        <MouseHandle
          anchor="#products"
          headerStyleOnScroll="light"
          headerValueOnScroll="#products"
        />
        <SocialList />
        <TemplatePreviewModal
          isOpen={showPreview}
          item={previewItem}
          carouselItems={carouselItems}
          setIsOpen={(val) => setShowPreview(val)}
          setUpdateItem={(idx) => handlePreviewModalUpdateItem(idx)}
        />
      </div>
    </div>
  );
};

export default TemplateView;
