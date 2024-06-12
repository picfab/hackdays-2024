import { useEffect, useRef } from 'react';

export const useWindowResize = (handler: any) => {
  const refHandler = useRef<any>();

  useEffect(() => {
    // Avoid infinite re-render
    refHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventHandler = (e: any) => refHandler.current(e);

    window.addEventListener('resize', eventHandler);

    return () => window.removeEventListener('resize', eventHandler);
  }, []);
};
