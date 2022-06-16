import { useWindowWidth } from '@/hooks/window';

const HeaderMobile = ({
  onHamburgerClick,
}: {
  onHamburgerClick: () => void;
}) => {
  const windowWidth = useWindowWidth();
  return (
    <div
      style={{ height: windowWidth <= 375 ? 88 : 44 }}
      className="fixed top-0 left-0 w-[100vw] flex items-center justify-between z-[102] bg-[#252525]"
    >
      <div className="px-[12px]">
        <img className="block h-8 w-auto" src={'/images/logo.png'} alt="LXBW" />
      </div>
      <div
        style={{
          height: windowWidth <= 375 ? 88 : 44,
          width: windowWidth <= 375 ? 88 : 44,
        }}
        className="bg-[#B39B5C] w-[44px] h-[44px] cursor-pointer flex items-center justify-center"
        onClick={() => onHamburgerClick()}
      >
        <img
          src="/images/hamburger.png"
          alt="hamburger"
          width={windowWidth <= 375 ? 48 : 24}
          height={windowWidth <= 375 ? 48 : 24}
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
