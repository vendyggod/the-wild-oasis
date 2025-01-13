import { useEffect, useRef } from 'react';

function useOutsideClick(action) {
  const ref = useRef();

  useEffect(() => {
    if (!action) return;

    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) action();
    }

    document.addEventListener('click', handleClick, true);

    return () => document.removeEventListener('click', handleClick, true);
  }, [action]);

  return ref;
}

export default useOutsideClick;
