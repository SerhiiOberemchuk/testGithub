import { Link } from 'react-scroll';

import { useTranslation } from 'react-i18next';

const itemsNavigation = [
  'WhatWeDo',
  'OrganicGoods',
  'ArticlesAndTips',
  'FarmLocationsMap',
  'OurPartners',
  'Footer',
];

export const Navigation = ({ css, onClick }) => {
  const { t } = useTranslation('Header');
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        {itemsNavigation.map((name, index) => (
          <li key={index}>
            <Link
              to={name}
              smooth="true"
              duration={500}
              className={css.link}
              onClick={onClick}
            >
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
