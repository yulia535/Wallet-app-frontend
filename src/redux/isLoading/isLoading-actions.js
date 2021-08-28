import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from '../auth/auth-actions';
import { transactionsActions } from '../transactions';

const isLoading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [transactionsActions.fetchTransactionsRequest]: () => true,
  [transactionsActions.fetchTransactionsSuccess]: () => false,
  [transactionsActions.fetchTransactionsError]: () => false,
  [transactionsActions.addTransactionRequest]: () => true,
  [transactionsActions.addTransactionSuccess]: () => false,
  [transactionsActions.addTransactionError]: () => false,
  [transactionsActions.fetchBalanceRequest]: () => true,
  [transactionsActions.fetchBalanceSuccess]: () => false,
  [transactionsActions.fetchBalanceError]: () => false,
});

export default isLoading;
