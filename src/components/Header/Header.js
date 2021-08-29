import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import Logo from './Logo';
import s from './Header.module.css';
import Modal from '../ModalLogoutBt';
import ModalLogout from './ModalLogout';
import { walletSelectors } from '../../redux/wallet';
import { authOperations } from '../../redux/auth';

const Header = () => {
  const dispatch = useDispatch();

  // const modalLogout = useSelector(walletSelectors.modalLogout);
  // const onLogout = useCallback(() => {
  //   dispatch(authOperations.logout());
  // }, [dispatch]);

  return (
    <header className={s.header}>
      <NavLink exact to="/home" className={s.homeLink}>
        <Logo />
      </NavLink>
      <UserMenu />

      {/* {modalLogout && (
        <Modal modalValue={modalLogout} modalAction={onLogout}>
          <ModalLogout />
        </Modal>
      )} */}
    </header>
  );
};

export default Header;
