import arrowSwiper from '../../../assets/icons/arrow_swiper.svg';
import styles from './SwiperNavigation.module.scss';

const SwiperNavigation = () => {
  return (
    <div className={styles.customNavigationBlock}>
      <div className={styles.customPrevButton}>
        <img src={arrowSwiper} alt="Arrow left" />
      </div>
      <div className={styles.customNextButton}>
        <img src={arrowSwiper} alt="Arrow right" />
      </div>
    </div>
  );
};

export default SwiperNavigation;
