import { createReducer } from '@reduxjs/toolkit';
import { ModalLogoutAction } from './wallet-actions';

const modalLogout = createReducer(false, {
  [ModalLogoutAction]: (state, _) => !state,
});

export { modalLogout };
