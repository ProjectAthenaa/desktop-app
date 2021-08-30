import React, {Ref, useEffect} from 'react';

function useOutsideAlerter(ref: React.MutableRefObject<any>, cb: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (event.which === 3) return;
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideAlerter;
