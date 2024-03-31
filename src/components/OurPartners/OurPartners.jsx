import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
// import SwiperNavigation from '../Common/SwiperNavigation/SwiperNavigation';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './OurPartners.module.scss';

import arrowSwiper from '../../assets/icons/arrow_swiper.svg';
import partnersSlide1 from '../../assets/images/ourPartners/partners_slide1.webp';
import partnersSlide2 from '../../assets/images/ourPartners/partners_slide2.webp';
import partnersSlide3 from '../../assets/images/ourPartners/partners_slide3.webp';
import partnersSlide4 from '../../assets/images/ourPartners/partners_slide4.webp';
import partnersSlide5 from '../../assets/images/ourPartners/partners_slide5.webp';
import partnersSlide6 from '../../assets/images/ourPartners/partners_slide6.webp';
import partnersSlide7 from '../../assets/images/ourPartners/partners_slide7.webp';
import partnersSlide8 from '../../assets/images/ourPartners/partners_slide8.webp';
import partnersSlide9 from '../../assets/images/ourPartners/partners_slide9.webp';

export const OurPartners = () => {
  const { t } = useTranslation('OurPartners');

  const partnersSlides = [
    partnersSlide1,
    partnersSlide2,
    partnersSlide3,
    partnersSlide4,
    partnersSlide5,
    partnersSlide6,
    partnersSlide7,
    partnersSlide8,
    partnersSlide9,
  ];

  const repeatedPartnersSlides = partnersSlides.concat(partnersSlides);

  return (
    <section className={styles.partnersSection} id="OurPartners">
      <div className={styles.partnersSectionHeader}>
        <h2 className={styles.partnersSectionTitle}> {t('OurPartners')}</h2>
        {/* <SwiperNavigation
            customPrevButton={styles.customPrevButton}
            customNextButton={styles.customNextButton}
            customNavigationBlock={styles.customNavigationBlock}
          /> */}
        <div className={styles.customNavigationBlock}>
          <div className={styles.customPrevButton}>
            <img src={arrowSwiper} alt="Arrow left" />
          </div>
          <div className={styles.customNextButton}>
            <img src={arrowSwiper} alt="Arrow right" />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={8}
        slidesPerView={2}
        loop={true}
        // autoplay={{ delay: 2000, disableOnInteraction: false}}
        speed={3000}
        navigation={{
          prevEl: `.${styles.customPrevButton}`,
          nextEl: `.${styles.customNextButton}`,
        }}
        breakpoints={{
          1400: {
            slidesPerView: 5.7,
          },
          1200: {
            slidesPerView: 5.1,
          },
          1050: {
            slidesPerView: 4.3,
          },
          850: {
            slidesPerView: 3.8,
          },

          768: {
            slidesPerView: 3.2,
          },
          590: {
            slidesPerView: 3.2,
          },
        }}
        className={styles.partnersSwiper}
      >
        {repeatedPartnersSlides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.partnersSwiperSlide}>
            <img src={slide} alt="organic partners" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
