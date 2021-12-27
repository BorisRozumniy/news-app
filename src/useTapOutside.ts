import { RefObject, useEffect } from 'react';

export const useTapOutside = (
  ref: RefObject<HTMLDivElement>,
  close: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (!target.dataset.windowError) close();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);
};
