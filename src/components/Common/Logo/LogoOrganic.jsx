import Logo from '../../../assets/icons/NewlogoOrganic.svg';
import style from './LogoOrganic.module.css';
export const LogoOrganic = () => {
  return <img src={Logo} alt="logo" className={style.logo} />;
};
