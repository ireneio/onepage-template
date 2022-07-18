import { devices, mobileTemplatesPc, pcTemplates } from '@/data';
import { flatten } from 'lodash';
import { useEffect, useState } from 'react';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import TemplateCarousel from './TemplateCarousel';
import TemplatePreviewModal from './TemplatePreviewModal';
import AnimationWrapperChild from '../General/AnimationWrapperChild';
import Header from '../Layout/Header';
import SideScroller from '../General/SideScroller';

const TemplateView = () => {
  const [selectedDevice, setSelectedDevice] = useState<'pc' | 'mobile'>('pc');
  const [showPreview, setShowPreview] = useState(false);
  const [previewItem, setPreviewItem] = useState('');
  const [carouselItems, setCarouselItems] = useState<any[]>([]);
  const [current, setCurrent] = useState(-1);

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
      setCarouselItems(mobileTemplatesPc);
    }
    setCurrent(0);
  }, [selectedDevice]);

  const handlePreview = (item: any) => {
    setPreviewItem(item.enlarged);
    setShowPreview(true);
  };

  const handlePreviewModalUpdateItem = (idx: number) => {
    const reduce = carouselItems.reduce((acc, curr) => {
      const _acc: any[] = acc.concat([...curr]);
      return _acc;
    }, []);

    setPreviewItem(reduce[idx].enlarged);
  };

  return (
    <div
      id="template"
      className="relative h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[75px] pb-[24px] lg:pb-0 overflow-hidden"
    >
      <Header selected="#template" bg="light" />
      <SideScroller selected="#template" bg="light" />
      <AnimationWrapperChild delay={0.3}>
        <AnimationWrapperChild delay={0.1}>
          <div className="w-[80%] mx-auto flex justify-center items-center">
            <img
              src="/images/banner_template.png"
              alt="template"
              className="h-auto lg:h-[18vh]"
            />
          </div>
        </AnimationWrapperChild>
        <AnimationWrapperChild delay={0.2}>
          <div className="grid grid-cols-2 gap-[12px] text-[14px] w-[200px] mx-auto justify-center mt-[16px] mb-[40px]">
            {devices.map((device) => {
              return (
                <div
                  key={device.value}
                  className="cursor-pointer text-center"
                  onClick={() =>
                    setSelectedDevice(device.value as 'pc' | 'mobile')
                  }
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
          <div>
            <TemplateCarousel
              onItemClick={(item) => handlePreview(item)}
              carouselItems={carouselItems}
              setCurrent={setCurrent}
              current={current}
              selectedDevice={selectedDevice}
            />
          </div>
        </AnimationWrapperChild>
      </AnimationWrapperChild>
      <Cr />
      <MouseHandle anchor="#products" bg="light" />
      <SocialList bg="light" />
      <TemplatePreviewModal
        isOpen={showPreview}
        item={previewItem}
        carouselItems={carouselItems}
        setIsOpen={(val) => setShowPreview(val)}
        setUpdateItem={(idx) => handlePreviewModalUpdateItem(idx)}
      />
    </div>
  );
};

export default TemplateView;
