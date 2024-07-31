import { useCallback, useState } from "react";

export const useExpose = (def = false) => {
  const [isOpen, setIsOpen] = useState(def);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback((val: boolean) => {
    if (!val) {
      setIsOpen((prev) => !prev);
    } else {
      setIsOpen(val);
    }
  }, []);

  return { isOpen, open, close, toggle };
};
