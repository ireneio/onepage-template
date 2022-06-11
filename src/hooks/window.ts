import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const cb = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('load', cb);
    return () => {
      window.removeEventListener('load', cb);
    };
  });

  return windowWidth;
};
