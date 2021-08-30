import { createReducer } from '@reduxjs/toolkit';
import { logoutModalAction } from './wallet-actions';

const modalLogout = createReducer(false, {
  [logoutModalAction]: (state, _) => !state,
});

export { modalLogout };
