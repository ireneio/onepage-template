const HeaderMobile = ({
  onHamburgerClick,
}: {
  onHamburgerClick: () => void;
}) => {
  return (
    <div className="h-[44px] w-[100vw] flex items-center justify-between z-[102]">
      <div className="px-[12px]">
        <img className="block h-8 w-auto" src={'/images/logo.png'} alt="LXBW" />
      </div>
      <div
        className="bg-[#B39B5C] w-[44px] h-[44px] cursor-pointer"
        onClick={() => onHamburgerClick()}
      >
        {/* TODO ICON */}
      </div>
    </div>
  );
};

export default HeaderMobile;
