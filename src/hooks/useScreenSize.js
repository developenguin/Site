import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';

export const useScreenSize = () => {

  const getProperties = () => {

    if (typeof window !== 'undefined') {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    } else {
      return {
        width: 0,
        height: 0
      }
    }
  };

  const [ state, setState ] = useState(getProperties());

  useEffect(() => {

    const onResize = debounce(() => {
      setState(getProperties());
    }, 100);

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);

  }, []);

  return {
    width: state.width,
    height: state.height,
    isXS: state.width < 768,
    isSM: state.width >= 768 && state.width < 1024,
    isMD: state.width >= 1024 && state.width < 1440,
    isLG: state.width >= 1440
  };

};

export default useScreenSize;
