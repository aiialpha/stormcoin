/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

const PreventSwipeDown: React.FC = () => {
  // let touchStartY = 0;

  // const handleTouchStart = (event: TouchEvent) => {
  //   touchStartY = event.touches[0].clientY;
  // };

  const handleTouchMove = (event: TouchEvent) => {
    const touchEndY = event.touches[0].clientY;
    if (1 < touchEndY) {
     // console.log('drag')
     // event.preventDefault();
       if (window.Telegram && window.Telegram.WebApp && typeof window.Telegram.WebApp.expand === 'function') {
         window.Telegram.WebApp.expand();
       }
    }
  };

  useEffect(() => {
    // document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      // document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
};

export default PreventSwipeDown;

