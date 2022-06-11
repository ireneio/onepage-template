import { twMerge } from 'tailwind-merge';

const Cr = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        'absolute bottom-[12px] left-[24px] uppercase text-[#B9B9B9] text-[14px]',
        className,
      )}
    >
      copyright 2022. all rights reserved
    </div>
  );
};

export default Cr;
