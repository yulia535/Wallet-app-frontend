import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

import { getUserName } from '../../../redux/auth/auth-selectors';
import { authOperations } from '../../../redux/auth';
import { walletActions } from '../../../redux/wallet';

import ModalLogout from '../ModalLogout';
import s from './UserMenu.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  // const onlogout = useCallback(() => {
  //   dispatch(authOperations.logout());
  // }, [dispatch]);//////////////////////////////////

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
