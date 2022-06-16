import { contacts } from '@/data';
import { useWindowWidth } from '@/hooks/window';
import { useAppSelector } from '@/store';
import { twMerge } from 'tailwind-merge';

const SocialList = ({
  className,
}: // isNav,
{
  className?: string;
  isNav?: boolean;
}) => {
  const headerStyle = useAppSelector((state) => state.layout.header.style);
  const windowWidth = useWindowWidth();

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
                windowWidth < 1366
                  ? contact.image
                  : headerStyle === 'dark'
                  ? contact.image.split('.').join('_pc.')
                  : contact.image
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
