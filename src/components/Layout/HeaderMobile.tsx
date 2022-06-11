const HeaderMobile = ({
  onHamburgerClick,
}: {
  onHamburgerClick: () => void;
}) => {
  return (
    <div className="fixed top-0 left-0 h-[44px] w-[100vw] flex items-center justify-between z-[102] bg-[#252525]">
      <div className="px-[12px]">
        <img className="block h-8 w-auto" src={'/images/logo.png'} alt="LXBW" />
      </div>
      <div
        className="bg-[#B39B5C] w-[44px] h-[44px] cursor-pointer flex items-center justify-center"
        onClick={() => onHamburgerClick()}
      >
        <img
          src="/images/hamburger.png"
          alt="hamburger"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
