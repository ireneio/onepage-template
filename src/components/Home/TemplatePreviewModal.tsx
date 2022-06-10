import * as React from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PreviewCarousel from './PreviewCarousel';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TemplatePreviewModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Transition show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-hidden font-circularstdbook"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="min-h-screen px-4 text-center">
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
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="absolute right-[12px] top-[0px] px-[12px] text-[48px] text-[#FFF] cursor-pointer font-thin"
            onClick={() => setIsOpen(false)}
          >
            x
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
              className="login_dialog_parent relative inline-block w-[60vw] my-12 overflow-hidden text-left align-middle transition-all
            transform shadow-xl rounded-[5px] bg-[#FFF] font-circularstdbook"
            >
              <div className="px-[2px] py-[2px] rounded-[5px]">
                <div className="relative flex items-center w-full justify-center">
                  <div>
                    {/* <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold leading-6 text-white pb-2 flex flex-col items-center"
                    >
                      title
                    </Dialog.Title> */}
                    <div className="mt-0 px-[0]">
                      <div className="min-h-full w-full flex flex-col justify-center overflow-hidden">
                        <PreviewCarousel />
                      </div>
                    </div>
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
