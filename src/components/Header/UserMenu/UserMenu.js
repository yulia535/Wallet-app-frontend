import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from '../../../redux/auth/auth-selectors';

import { walletActions } from '../../../redux/wallet';

import s from './UserMenu.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const openModal = () => dispatch(walletActions.logoutModalAction());

  return (
    <div className={s.header}>
      <span className={s.user_name_text}>{name}</span>
      <button
        className={s.btnLogout}
        name="onLogout"
        type="button"
        onClick={openModal}
      >
        <ExitToAppIcon className={s.icon_btn_logout} />
        <span className={s.title_exit}>Выйти</span>
      </button>
    </div>
  );
};

export default UserMenu;
