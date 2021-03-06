import { contacts } from '@/data';
import { twMerge } from 'tailwind-merge';

const SocialList = ({
  bg,
  className,
  isNav,
}: {
  bg?: 'light' | 'dark';
  className?: string;
  isNav?: boolean;
}) => {
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
          >
            <img
              src={
                isNav
                  ? contact.image.split('.').join('_h5.')
                  : bg === 'light'
                  ? contact.image.split('.').join('_white.')
                  : contact.image.split('.').join('_dark.')
              }
              alt=""
              width={30}
              height={30}
              className="hover:opacity-[0.8]"
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialList;
