import { useEffect, useState } from 'react';

export function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMdUp(e.matches);
    };

    setIsMdUp(mql.matches);
    mql.addEventListener(
      'change',
      onChange as (e: MediaQueryListEvent) => void,
    );

    return () => {
      mql.removeEventListener(
        'change',
        onChange as (e: MediaQueryListEvent) => void,
      );
    };
  }, []);

  return isMdUp;
}
