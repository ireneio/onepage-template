import {
  devices,
  mobileTemplates,
  pcTemplates,
  templatePageCount,
} from '@/data';
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
  const [carouselItems, setCarouselItems] = useState([
    pcTemplates,
    pcTemplates,
    pcTemplates,
  ]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (selectedDevice === 'pc') {
      setCarouselItems([pcTemplates, pcTemplates, pcTemplates]);
    } else {
      setCarouselItems([mobileTemplates, mobileTemplates, mobileTemplates]);
    }
  }, [selectedDevice]);

  const handlePreview = () => {
    setShowPreview(true);
  };

  return (
    <div className="relative w-full lg:h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] lg:pt-[75px] pb-[24px] lg:pb-0">
      <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
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
          device={selectedDevice}
          onItemClick={() => handlePreview()}
        />
      </div>
      <div className="lg:hidden mx-[60px] mt-[32px]">
        <TemplateCarouselMobile
          onItemClick={() => handlePreview()}
          carouselItems={carouselItems}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
      <div className="mt-[24px] overflow-x-scroll w-[100vw] scroll-smooth flex hide-scrollbar">
        {flatten(carouselItems)
          .slice(current)
          .map((item, idx) => {
            return (
              <div
                key={idx}
                className="w-[120px] h-[56px] flex-shrink-0"
                onClick={() => setCurrent(idx)}
              >
                <img src={'/images/template_1.png'} alt="" />
              </div>
            );
          })}
      </div>
      <div className="flex mt-[24px] lg:mt-[72px] w-full justify-center">
        {carouselItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[50px] lg:w-[100px] h-[2px]"
              style={{
                backgroundColor:
                  Math.floor(current / templatePageCount) === idx
                    ? '#B39B5C'
                    : '#E8E8E8',
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
          setIsOpen={(val) => setShowPreview(val)}
        />
      </div>
    </div>
  );
};

export default TemplateView;
