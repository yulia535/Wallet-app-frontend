import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { walletActions } from '../../../redux/actions';
import s from './ModalLogout.module.css';
import FormButtons from '../../FormButtons';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const logoutModalAction = useCallback(
    () => dispatch(walletActions.logoutModalAction()),
    [dispatch],
  );

  return (
    <div className={s.modal_logout}>
      <h2 className={s.title_modal_logout}>Вы уверены, что хотите выйти?</h2>
      <FormButtons
        canselAction={logoutModalAction}
        firtsButtonText="ВЫЙТИ"
        secondButtonText="ОТМЕНА"
        firstLinkButton="/login"
      />
    </div>
  );
};

export default ModalLogout;
