import { useTranslation } from 'react-i18next';

import style from './Hero.module.scss';
import heroImage1 from '../../assets/images/Hero/HeroDesctop1.webp';
import heroImage2 from '../../assets/images/Hero/HeroDesctop2.webp';
import heroImage3 from '../../assets/images/Hero/HeroDesctop1.webp';
import vector from '../../assets/images/Hero/Vector.png';
import vectorTablet from '../../assets/images/Hero/VectorTablet.png';
import vectorMobile from '../../assets/images/Hero/VectorMobile.png';
import imageTabl1 from '../../assets/images/Hero/HeroTablet1.webp';
import imageTabl2 from '../../assets/images/Hero/HeroTablet2.webp';
import imageTabl3 from '../../assets/images/Hero/HeroTablet1.webp';

import imageMobile1 from '../../assets/images/Hero/HeroMobile1.webp';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiperStyle.scss';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const banersDesctop = [heroImage1, heroImage2, heroImage3];
const banersTablet = [imageTabl1, imageTabl2, imageTabl3];
const banersMobile = [imageMobile1, imageMobile1, imageMobile1];

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation('Hero');
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const imagesArrey = isMobile
    ? banersMobile
    : isDesktopOrLaptop
      ? banersDesctop
      : banersTablet;

  const bottomImage = isMobile
    ? vectorMobile
    : isDesktopOrLaptop
      ? vector
      : vectorTablet;
  return (
    <section className={style.heroSection}>
      <div className={style.heroContainer}>
        <Swiper
          className={'swiper-first'}
          speed={2000}
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={swiper => setActiveSlide(swiper.activeIndex)}
        >
          {imagesArrey.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={slide}
                alt="organic baners"
                className={style.mainImage}
                width={1440}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.heroTextBox}>
          <h1
            className={`${style.mainText} ${activeSlide ? '' : style.firstSlide}`}
          >
            {t('H1')}
          </h1>
          <p className={style.secondText}>{t('paragraf')}</p>
        </div>

        <img src={bottomImage} alt="bottom" className={style.bottomImage} />
      </div>
    </section>
  );
};
