import { useWindowWidth } from '@/hooks/window';
import { useEffect, useState } from 'react';

const FloatTopBtn = () => {
  const windowWidth = useWindowWidth();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const cb = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', cb);

    return () => {
      removeEventListener('scroll', cb);
    };
  }, []);

  return (
    <div>
      {windowWidth < 768 && (
        <div
          className="lg:hidden fixed bottom-[12px] right-[12px] z-[100] cursor-pointer"
          onClick={() => handleClick()}
          style={{ display: show ? 'block' : 'none' }}
        >
          <img src="/images/back_to_top.png" alt="" width={44} height={44} />
        </div>
      )}
    </div>
  );
};

export default FloatTopBtn;
