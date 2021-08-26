import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import Logo from './Logo';
import s from './Header.module.css';
import Modal from '../HomeTab/ModalAddTransaction/ModalAddTransaction.jsx';
import ModalLogout from './ModalLogout';
import { walletSelectors } from '../../redux/actions';
import { authOperations } from '../../redux/auth';

const Header = () => {
  const dispatch = useDispatch();

  const modalLogout = useSelector(walletSelectors.logoutModalAction);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <header className={s.header}>
      <NavLink exact to="/home" className={s.homeLink}>
        <Logo />
      </NavLink>
      <UserMenu />
      {modalLogout && (
        <Modal modalValue={modalLogout} modalAction={onLogOut}>
          <ModalLogout />
        </Modal>
      )}
    </header>
  );
};

export default Header;
