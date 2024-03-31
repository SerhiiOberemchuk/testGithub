import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation/Navigation';

import style from './Header.module.scss';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { LogoOrganic } from '../Common/Logo/LogoOrganic';
import css from './Navigation/HeaderNavigation.module.scss';
import BurgerMenuTablet from '../../assets/icons/burgermenu.svg?react';
import BurgerMenuMobile from '../../assets/icons/burgermenu_mobile.svg?react';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const isMobileOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const togleIsMenu = () => {
    setIsMenu(!isMenu);
    document.body.style.overflow = 'hidden';
  };
  const closeMemu = () => {
    setIsMenu(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={style.headerSection}>
      <Container>
        <div className={style.headerBox}>
          <LogoOrganic />
          <Navigation css={css} />
          <div className={style.linkBox}>
            <SupportTheProject />
            <SelectLanguage />
          </div>

          <button
            type="button"
            className={style.buttonOpenModal}
            onClick={togleIsMenu}
          >
            {isMobileOrTablet ? <BurgerMenuTablet /> : <BurgerMenuMobile />}
          </button>
        </div>
        {isMenu && <MobileMenu isMenu={closeMemu} />}
      </Container>
    </header>
  );
};
