import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Posune stránku na začátek
  }, []); // Tento efekt se spustí pouze při načtení komponenty

  return null;
};


export default ScrollToTop;