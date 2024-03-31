import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

// import SwiperNavigation from '../Common/SwiperNavigation/SwiperNavigation';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './OrganicGoods.module.scss';
import './organic.css';

import arrowSwiper from '../../assets/icons/arrow_swiper.svg';

import organic_productsSlide1 from '../../assets/images/organic_products/broccoli.webp';
import organic_productsSlide2 from '../../assets/images/organic_products/blueberry.webp';
import organic_productsSlide3 from '../../assets/images/organic_products/milk.webp';
import organic_productsSlide4 from '../../assets/images/organic_products/strawberry.webp';
import organic_productsSlide5 from '../../assets/images/organic_products/cucumber.webp';
import organic_productsSlide6 from '../../assets/images/organic_products/spinach.webp';
import organic_productsSlide7 from '../../assets/images/organic_products/cheese.webp';
import organic_productsSlide8 from '../../assets/images/organic_products/blackberry.webp';
import organic_productsSlide9 from '../../assets/images/organic_products/tea.webp';
import organic_productsSlide10 from '../../assets/images/organic_products/berries.webp';

export const OrganicGoods = () => {
  const { t } = useTranslation('OrganicGoods');

  const organic_productsSlides1 = [
    organic_productsSlide1,
    organic_productsSlide2,
    organic_productsSlide3,
    organic_productsSlide4,
    organic_productsSlide5,
  ];

  const organic_productsSlides2 = [
    organic_productsSlide6,
    organic_productsSlide7,
    organic_productsSlide8,
    organic_productsSlide9,
    organic_productsSlide10,
  ];

  return (
    <section className={styles.organicProductsSection} id="OrganicGoods">
      <div className={styles.organicProductsSectionHeader}>
        <h2 className={styles.organicProductsSectionTitle}>
          {t('OrganicProducts')}
        </h2>
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
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        speed={1500}
        navigation={{
          prevEl: `.${styles.customPrevButton}`,
          nextEl: `.${styles.customNextButton}`,
        }}
         breakpoints={{
          1400: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 3.7,
          },
          1050: {
            slidesPerView: 3.2,
           },
           900: {
             slidesPerView: 2.7
           },
          768: {
            slidesPerView: 2.35,
          },
          590: {
            slidesPerView: 2,
          },
        }}
        className={`${styles.organicProductsSwiper} swiper`}
      >
        {organic_productsSlides1.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.organicProductsSwiperSlide} ${index === 0 ? 'first-slide' : ''}`}
          >
            <img
              src={slide}
              alt="organic products"
              className={`${styles.organicImg} organic-img`}
            />
            <div
              className={`${styles.organicProductsSwiperSlideWrapper} organic-wrapper`}
            >
              <h3
                className={`${styles.organicProductsSwiperSlideTitle} organic-title`}
              >
                {t(`Category1.${index}`)}
              </h3>
              <p
                className={`${styles.organicProductsSwiperSlideDescription} organic-description`}
              >
                {t(`Description1.${index}`)}
              </p>
              <p
                className={`${styles.organicProductsSwiperSlideQuality} quality`}
              >
                {t('Quality')}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        speed={1500}
        navigation={{
          prevEl: `.${styles.customPrevButton}`,
          nextEl: `.${styles.customNextButton}`,
        }}
          breakpoints={{
          1400: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 3.7,
          },
          1050: {
            slidesPerView: 3.2,
           },
           900: {
             slidesPerView: 2.7
           },
          768: {
            slidesPerView: 2.35,
          },
          590: {
            slidesPerView: 2,
          },
        }}
        className={`${styles.organicProductsSwiper} swiper`}
      >
        {organic_productsSlides2.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.organicProductsSwiperSlide} ${index === 0 ? 'first-slide' : ''}`}
          >
            <img
              src={slide}
              alt="organic partners"
              className={`${styles.organicImg} organic-img`}
            />
            <div
              className={`${styles.organicProductsSwiperSlideWrapper} organic-wrapper`}
            >
              <h3
                className={`${styles.organicProductsSwiperSlideTitle} organic-title`}
              >
                {t(`Category2.${index}`)}
              </h3>
              <p className={styles.organicProductsSwiperSlideDescription}>
                {t(`Description2.${index}`)}
              </p>
              <p
                className={`${styles.organicProductsSwiperSlideQuality} quality`}
              >
                {t('Quality')}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
