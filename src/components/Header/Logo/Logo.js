import logo from '../../../image/logo.svg';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <img src={logo} alt="Logo" className={s.logoSvg} />
      <span className={s.logoText}>Wallet</span>
    </>
  );
};
export default Logo;
