import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PreviewCarousel from './PreviewCarousel';
import { useWindowWidth } from '@/hooks/window';
import { templatePreviews } from '@/data';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TemplatePreviewModal = ({ isOpen, setIsOpen }: Props) => {
  const windowWidth = useWindowWidth();
  const [current, setCurrent] = useState(0);

  const handleCurrent = (idx: number) => {
    if (idx === 1 && current === templatePreviews.length - 1) {
      setCurrent(0);
    } else if (idx === -1 && current === 0) {
      setCurrent(templatePreviews.length - 1);
      return;
    }
    setCurrent((prev) => prev + idx);
  };

  return (
    <Transition show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[1000] font-circularstdbook w-[100vw] mx-auto"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>
          <div
            className="z-[100] absolute flex items-center justify-center bottom-[40px] left-[50%] translate-x-[-50%]"
            onClick={() => setIsOpen(false)}
          >
            {windowWidth < 768 && (
              <button className="bg-[#B39B5C] shadow-2xl text-[#FFFFFF] px-[24px] py-[6px] text-[16px]">
                关闭
              </button>
            )}
          </div>
          <div
            className="hidden lg:block absolute right-[8px] top-[2px] py-[8px] text-[48px] text-[#FFF] cursor-pointer font-thin"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/icon_close.png"
              alt="close"
              width={32}
              height={32}
            />
          </div>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className="relative inline-block w-[100vw] lg:w-[80vw] overflow-hidden text-left align-middle transition-all
            transform rounded-[5px] bg-transparent font-circularstdbook"
            >
              <div className="px-[2px] py-[2px] rounded-[5px]">
                <div className="mt-0 px-[0] w-[100vw] lg:w-[60vw] mx-auto">
                  <PreviewCarousel
                    current={current}
                    carouselItems={templatePreviews}
                  />
                </div>
                <div
                  className="absolute right-[12px] top-[50%] cursor-pointer"
                  onClick={() => handleCurrent(1)}
                >
                  <img
                    src="/images/arrow_right.png"
                    alt=""
                    className="w-[38px] h-[38px]"
                  />
                </div>
                <div
                  className="absolute left-[12px] top-[50%] cursor-pointer"
                  onClick={() => handleCurrent(-1)}
                >
                  <img
                    src="/images/arrow_left.png"
                    alt=""
                    className="w-[38px] h-[38px]"
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TemplatePreviewModal;
