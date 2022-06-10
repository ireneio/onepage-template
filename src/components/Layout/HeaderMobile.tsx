const HeaderMobile = () => {
  return (
    <div className="h-[44px] w-[100vw] flex items-center justify-between">
      <div className="px-[12px]">
        <img className="block h-8 w-auto" src={'/images/logo.png'} alt="LXBW" />
      </div>
      <div className="bg-[#B39B5C] w-[44px] h-[44px]">{/* TODO ICON */}</div>
    </div>
  );
};

export default HeaderMobile;
