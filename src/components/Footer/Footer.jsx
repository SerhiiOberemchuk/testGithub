import { Container } from '../Common/Container/Container';
import { LogoOrganic } from '../Common/Logo/LogoOrganic';

import Facebook from '../../assets/icons/facebook.svg?react';
import Linkedin from '../../assets/icons/linkedin.svg?react';
import Instagram from '../../assets/icons/instagram.svg?react';
import Telegram from '../../assets/icons/telegram.svg?react';
import { useTranslation } from 'react-i18next';

import styles from './Footer.module.scss';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { FooterNavigation } from './FooterNavigation/FooterNavigation';

export const Footer = () => {
  const { t } = useTranslation('Footer');

  return (
    <footer id="Footer" className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.footerLogoSocials}>
            <LogoOrganic />
            <div className={styles.footerSocials}>
              <a
                href="https://www.facebook.com/BazaTraineeUkraine"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Facebook className={styles.social} />
              </a>
              <a
                href="https://www.linkedin.com/company/baza-trainee-ukraine/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Linkedin className={styles.social} />
              </a>
              <a
                href="https://www.instagram.com/baza_poligon/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Instagram className={styles.social} />
              </a>
              <a
                href="https://t.me/+CBXkAJlsCy83ZDYy"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Telegram className={styles.social} />
              </a>
            </div>
          </div>
          <div className={styles.footerNavigation}>
            <FooterNavigation />
            <p>
              {t('Created')}
              <a
                href="https://baza-trainee.tech/ua"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {t('DevelopLink')}
              </a>
              {t('CreatedMark')} <span>{t('Rights')}</span>
            </p>
          </div>
          <div className={styles.footerContacts}>
            <SupportTheProject />
            <address className={styles.contacts}>
              <ul>
                <li className={styles.phone}>
                  <a href="tel:+380636286630">+380 63 628 66 30</a>
                </li>
                <li className={styles.phone}>
                  <a href="tel:+380675681788">+380 67 568 17 88</a>
                </li>
                <li className={styles.email}>
                  <a href="mailto:info@baza-trainee.tech">
                    info@baza-trainee.tech
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </Container>
    </footer>
  );
};
