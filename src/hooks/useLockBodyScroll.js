import { useEffect } from 'react';

let lockCount = 0;
let originalOverflow = '';

/**
 * Custom hook to manage body scroll locking with reference counting
 * Prevents multiple modal/drawer components from conflicting with each other.
 * @param {boolean} isLocked
 */
export function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    if (lockCount === 0) {
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [isLocked]);
}
