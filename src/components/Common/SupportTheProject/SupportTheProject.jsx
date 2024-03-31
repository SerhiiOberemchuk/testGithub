import { useTranslation } from 'react-i18next';
import css from './SupportTheProject.module.scss';

export const SupportTheProject = () => {
  const { t } = useTranslation('SupportTheProject');
  return (
    <>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      >
        {t('SupportTheProject')}
      </a>
    </>
  );
};
