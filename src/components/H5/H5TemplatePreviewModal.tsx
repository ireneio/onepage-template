import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useWindowWidth } from '@/hooks/window';
import { flatten } from 'lodash';

type Props = {
  item: string;
  isOpen: boolean;
  carouselItems: any[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateItem: (index: number) => void;
};

const TemplatePreviewModal = ({
  item,
  isOpen,
  setIsOpen,
  setUpdateItem,
  carouselItems,
}: Props) => {
  const windowWidth = useWindowWidth();
  const [current, setCurrent] = useState(0);

  const handleCurrent = (idx: number) => {
    const flattenedLength = flatten(carouselItems).length;
    if (idx === 1 && current === flattenedLength - 1) {
      setCurrent(0);
      setUpdateItem(0);
      return;
    } else if (idx === -1 && current === 0) {
      setCurrent(flattenedLength - 1);
      setUpdateItem(flattenedLength - 1);
      return;
    } else {
      setUpdateItem(current + idx);
      setCurrent((prev) => prev + idx);
      return;
    }
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
        <div
          className="min-h-screen text-center"
          onClick={() => setIsOpen(false)}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-[.8]" />
          </Transition.Child>
          <div
            className="z-[100] absolute flex items-center justify-center bottom-[40px] left-[50%] translate-x-[-50%]"
            onClick={() => setIsOpen(false)}
          >
            <button className="bg-[#B39B5C] shadow-2xl text-[#FFFFFF] px-[24px] py-[6px] text-[16px]">
              ??????
            </button>
          </div>
          <div
            className="hidden lg:block absolute right-[8px] top-[2px] py-[8px] text-[48px] text-[#FFF] cursor-pointer font-thin"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/icon_close.png"
              alt="close"
              // width={32}
              // height={32}
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
              <div className="px-[2px] py-[2px] rounded-[5px] mx-auto">
                <div className="mt-0 px-[0] mx-auto">
                  <div className="h-[100vh] max-w-[1200px] overflow-auto relative mx-auto">
                    <img
                      src={item}
                      alt="template preview"
                      className="mx-auto relative z-[2]"
                    />
                  </div>
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
