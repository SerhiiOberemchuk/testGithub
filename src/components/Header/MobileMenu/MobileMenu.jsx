import { LogoOrganic } from '../../Common/Logo/LogoOrganic';
import { SupportTheProject } from '../../Common/SupportTheProject/SupportTheProject';
import { Navigation } from '../Navigation/Navigation';
import { SelectLanguage } from '../SelectLanguage/SelectLanguage';
import CloseIcon from '../../../assets/icons/closeIcon.svg?react';

import styles from './MenuStyle.module.scss';

export const MobileMenu = ({ isMenu }) => {
  const handleClickInsideMenu = e => {
    e.stopPropagation();
  };
  return (
    <div className={styles.menuSection} onClick={isMenu}>
      <div className={styles.menu} onClick={handleClickInsideMenu}>
        <div className={styles.menuContent}>
          <button type="button" onClick={isMenu} className={styles.closeMenu}>
            <CloseIcon className={styles.iconClose} />
          </button>
          <LogoOrganic />
          <Navigation css={styles} onClick={isMenu} />
          <div className={styles.supportBox}>
            <SupportTheProject />
            <SelectLanguage />
          </div>
        </div>
      </div>
    </div>
  );
};
