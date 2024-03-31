import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container } from '../Common/Container/Container';

import arrowSwiper from '../../assets/icons/arrow_swiper.svg';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ArticlesAndTips.module.scss';

import img1 from '../../assets/ArticlesAndTips/articleSlide3F.png';
import img2 from '../../assets/ArticlesAndTips/articleSlide2F.png';
import img3 from '../../assets/ArticlesAndTips/articleSlide1F.png';
import articleImgOne from '../../assets/ArticlesAndTips/firstModalArticle.png';
import articleImgTwo from '../../assets/ArticlesAndTips/secondModalArticle.png';
import articleImgThree from '../../assets/ArticlesAndTips/thirdModalArticle.png';

import arrow from '../../assets/icons/arrowDown.svg';

import { useTranslation } from "react-i18next"
import Modal from './ArticlesModal';



export const ArticlesAndTips = () => {
  const { t } = useTranslation('ArticlesAndTips')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    img: '',
    title: '',
    content: '',
    date: '',
  });
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const openModal = (img, title, content, date) => {
    setModalContent({ img, title, content, date });
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <section className={styles.articlesSection}>
      <Container>
        <div>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>{t('title')}</h1>
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
            spaceBetween={16}
            slidesPerView={2.5}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={4000}
            navigation={{
              prevEl: `.${styles.customPrevButton}`,
              nextEl: `.${styles.customNextButton}`,
            }}
          >
            <div className={styles.sliders}>
              <SwiperSlide>
                <div
                  className={styles.article}
                  onClick={() =>
                    openModal(
                      articleImgOne,
                      t('firstArticle'),
                      t('firstArticleText'),
                      '21.02.2024'
                    )
                  }
                >
                  <img
                    className={styles.articleImg}
                    src={img1}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>21.02.2024</p>
                  <p className={styles.articleTitle}>{t('firstArticle')}</p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={styles.article}
                  onClick={() =>
                    openModal(
                      articleImgTwo,
                      t('secondArticle'),
                      t('secondArticleText'),
                      '08.02.2024'
                    )
                  }
                >
                  <img
                    className={styles.articleImg}
                    src={img3}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>08.02.2024</p>
                  <p className={styles.articleTitle}>{t('secondArticle')}</p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={styles.article}
                  onClick={() =>
                    openModal(
                      articleImgThree,
                      t('thirdArticle'),
                      t('thirdArticleText'),
                      '23.01.2024'
                    )
                  }
                >
                  <img
                    className={styles.articleImg}
                    src={img2}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>23.01.2024</p>
                  <p className={styles.articleTitle}>{t('thirdArticle')}</p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={styles.article}
                  onClick={() =>
                    openModal(
                      articleImgOne,
                      t('firstArticle'),
                      t('firstArticleText'),
                      '21.02.2024'
                    )
                  }
                >
                  <img
                    className={styles.articleImg}
                    src={img1}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>21.02.2024</p>
                  <p className={styles.articleTitle}>{t('firstArticle')}</p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={styles.article}
                  onClick={() =>
                    openModal(
                      articleImgTwo,
                      t('secondArticle'),
                      t('secondArticleText'),
                      '08.02.2024'
                    )
                  }
                >
                  <img
                    className={styles.articleImg}
                    src={img3}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>08.02.2024</p>
                  <p className={styles.articleTitle}>{t('secondArticle')}</p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={styles.article}
                  onClick={() =>
                    openModal(
                      articleImgThree,
                      t('thirdArticle'),
                      t('thirdArticleText'),
                      '23.01.2024'
                    )
                  }
                >
                  <img
                    className={styles.articleImg}
                    src={img2}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>23.01.2024</p>
                  <p className={styles.articleTitle}>{t('thirdArticle')}</p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </Container>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        img={modalContent.img}
        title={modalContent.title}
        content={modalContent.content}
        date={modalContent.date}
      />
    </section>
  );
};
