import { useState, useEffect } from 'react';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    const width = window.innerWidth;
    if (width >= 960) {
      return 'large';
    } else if (width >= 600) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
