// import { useSelector } from 'react-redux';
// import { getUserName } from '../../../redux/auth/auth-selectors';
import './UserMenu.scss';
import exitSvg from '../../../image/exit.svg';

const UserMenu = () => {
  //   const name = useSelector(getUserName);
  return (
    <div className="header_container">
      {/* <span className={s.user_name_text}>{name}</span> */}
      <svg src={exitSvg}></svg>
      <span className="title_exit">Выйти</span>
    </div>
  );
};

export default UserMenu;
