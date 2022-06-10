import { devices } from '@/data';
import { useState } from 'react';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import TemplateCarousel from './TemplateCarousel';
import TemplateCarouselMobile from './TemplateCarouselMobile';
import TemplatePreviewModal from './TemplatePreviewModal';

const TemplateView = () => {
  const [selectedDevice, setSelectedDevice] = useState<'pc' | 'mobile'>('pc');
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = () => {
    setShowPreview(true);
  };

  return (
    <div
      id="template"
      className="relative w-full h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] lg:pt-[75px]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto flex justify-center items-center mt-[32px]">
        <img
          src="/images/banner_template.png"
          alt="template"
          className="h-auto lg:h-[18vh]"
        />
      </div>
      <div className="flex text-[14px] w-[200px] mx-auto justify-center mt-[12px] mb-[12px]">
        {devices.map((device) => {
          return (
            <div
              key={device.value}
              className="mr-[18px] cursor-pointer"
              onClick={() => setSelectedDevice(device.value as 'pc' | 'mobile')}
            >
              <div
                style={{
                  color:
                    selectedDevice === device.value ? '#B39B5C' : '#BCBCBC',
                }}
              >
                {device.text}
              </div>
              {selectedDevice === device.value && (
                <div className="w-full h-[2px] bg-[#B39B5C]"></div>
              )}
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
      <div className="lg:hidden">
        <TemplateCarouselMobile
          device={selectedDevice}
          onItemClick={() => handlePreview()}
        />
      </div>
      {/* <div className="grid gap-[32px] grid-cols-4 w-[80%] justify-between items-start mx-auto mt-[12px] flex-wrap">
      {Array(8)
        .fill(0)
        .map((template, idx) => {
          return (
            <div key={idx} className="h-[150px]">
              <img src={'/images/template_1.png'} alt="" />
            </div>
          );
        })}
    </div> */}
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
