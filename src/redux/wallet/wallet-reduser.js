import { createReducer } from '@reduxjs/toolkit';
import { ModalLogout } from './wallet-actions';

const modalLogout = createReducer(false, {
  [ModalLogout]: (state, _) => !state,
});

export { modalLogout };
