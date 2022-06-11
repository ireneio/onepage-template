import { useAppSelector } from '@/store';
import { twMerge } from 'tailwind-merge';

const contacts = [
  { image: '/images/ct_wx.png', value: '' },
  { image: '/images/ct_telegram.png', value: '' },
  { image: '/images/ct_skype.png', value: '' },
  { image: '/images/ct_whasapp.png', value: '' },
  { image: '/images/ct_bbm.png', value: '' },
];

const SocialList = ({ className }: { className?: string }) => {
  const headerStyle = useAppSelector((state) => state.layout.header.style);

  return (
    <div
      className={twMerge(
        'absolute right-[24px] bottom-[12px] flex w-[300px] justify-between',
        className,
      )}
    >
      {contacts.map((contact, idx) => {
        return (
          <a
            key={idx}
            href={contact.value}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-[50%]"
            style={{ backgroundColor: headerStyle === 'light' ? '#ddd' : '' }}
          >
            <img src={contact.image} alt="" width={30} height={30} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialList;
