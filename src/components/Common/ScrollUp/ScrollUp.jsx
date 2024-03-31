import { useEffect, useState } from 'react';
import Arrow from '../../../assets/icons/arrow_swiper.svg?react';
import style from './ScrollUp.module.scss';

export const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else setIsVisible(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <button
      type="button"
      className={`${style.scrollButton} ${isVisible ? '' : style.hide}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Arrow className={style.scrollArrow} />
    </button>
  );
};
