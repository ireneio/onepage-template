import { devices, mobileTemplates, pcTemplates } from '@/data';
import { flatten } from 'lodash';
import { useEffect, useState } from 'react';
import TemplateCarouselMobile from './TemplateCarouselMobile';
import H5TemplatePreviewModal from './H5TemplatePreviewModal';
import AnimationWrapperChild from '../General/AnimationWrapperChild';

const H5TemplateView = () => {
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
    <div
      id="template"
      className="relative z-[2] w-full bg-[#FFFFFF] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] pb-[24px] overflow-hidden"
    >
      <AnimationWrapperChild delay={0.3} disableOnScrollUp>
        <div className="w-[80%] mx-auto flex justify-center items-center">
          <img
            src="/images/banner_template.png"
            alt="template"
            className="h-auto lg:h-[18vh]"
          />
        </div>
      </AnimationWrapperChild>
      <AnimationWrapperChild delay={0.5} disableOnScrollUp>
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
      </AnimationWrapperChild>
      <AnimationWrapperChild delay={0.8} disableOnScrollUp>
        <div className="mx-[60px] mt-[32px]">
          <TemplateCarouselMobile
            onItemClick={(item) => handlePreview(item)}
            carouselItems={carouselItems}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
        <div
          id="infinite_scroller"
          className="mt-[24px] overflow-x-scroll w-[100vw] scroll-smooth flex hide-scrollbar overflow-y-hidden"
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
      </AnimationWrapperChild>
      <div className="mt-[24px] w-full justify-center flex">
        {flatten(carouselItems).map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[12px] h-[2px]"
              style={{
                backgroundColor: current === idx ? '#B39B5C' : '#E8E8E8',
              }}
              onClick={() => setCurrent(idx)}
            ></div>
          );
        })}
      </div>
      <H5TemplatePreviewModal
        isOpen={showPreview}
        item={previewItem}
        carouselItems={carouselItems}
        setIsOpen={(val) => setShowPreview(val)}
        setUpdateItem={(idx) => handlePreviewModalUpdateItem(idx)}
      />
    </div>
  );
};

export default H5TemplateView;
