import React, { useEffect, useState } from 'react';

import css from './WhatWeDo.module.css';

import { Container } from '../Common/Container/Container';

import images from '../WhatWeDo/ImagesWhatWeDo.jsx';
import farms from '../../assets/WhatWeDo/farms.png'
import lands from '../../assets/WhatWeDo/lands.png'
import workers from '../../assets/WhatWeDo/workers.png'

import { useTranslation } from 'react-i18next';
import Modal from '../WhatWeDo/WWDModal.jsx';

export const WhatWeDo = () => {
  const { t } = useTranslation('WhatWeDo');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

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

  return (
    <section>
      <Container>
        <div className={css.container}>
          <div className={css.section_header}>
            <h2 className={css.main_title}>{t('WhatWeDo')}</h2>
            <p className={css.section_title}>{t('BoldText')}</p>
            <p className={css.section_text}>{t('Text')}</p>
            <button className={css.read_button} onClick={toggleModal}>
              {t('Button')}
            </button>

            <div className={css.stats_container}>
              <div className={css.stat}>
                <img
                  className={css.stats_img}

                  src={farms}

                  alt="farms"
                />
                <span className={css.stat_value}>53</span>
                <span className={css.stat_label}>{t('Farms')}</span>
              </div>
              <div className={css.stat}>
                <img
                  className={css.stats_img}

                  src={lands}

                  alt="farms"
                />
                <span className={css.stat_value}>221</span>
                <span className={css.stat_label}>{t('Lands')}</span>
              </div>
              <div className={css.stat}>
                <img
                  className={css.stats_img}

                  src={workers}

                  alt="farms"
                />
                <span className={css.stat_value}>3770</span>
                <span className={css.stat_label}>{t('Workers')}</span>
              </div>
            </div>
          </div>
          <div className={css.images_container}>
            {images.map((image, index) => (
              <div className={css.image} key={index}>
                <img
                  className={css.image_item}
                  src={image.src || `https://placehold.co/100`}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className={css.modalContent}>
          <h2 className={css.main_title}>{t('WhatWeDo')}</h2>
          <p className={css.section_title}>{t('BoldText')}</p>
          <p className={css.section_text}>{t('ModalText')}</p>
          <p className={css.organicName}>Organic Ukraine</p>
        </div>
        <div className={css.modalImages}>
          {images.map((image, index) => (
            <div className={css.image} key={index}>
              <img
                className={css.image_item}
                src={image.src || `https://placehold.co/100`}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};
