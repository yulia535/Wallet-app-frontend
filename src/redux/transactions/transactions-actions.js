import { createAction } from '@reduxjs/toolkit';
const fetchTransactionsRequest = createAction(
  'transaction/fetchTransactionsRequest',
);
const fetchTransactionsSuccess = createAction(
  'transaction/fetchTransactionsSuccess',
);
const fetchTransactionsError = createAction(
  'transaction/fetchTransactionsError',
);

const addTransactionRequest = createAction('transaction/addTransactionRequest');
const addTransactionSuccess = createAction('transaction/addTransactionSuccess');
const addTransactionError = createAction('transaction/addTransactionError');

const changeMonth = createAction('transaction/changeMonth');
const changeYear = createAction('transaction/changeYear');

const transactionsActions = {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  changeMonth,
  changeYear,
};
export default transactionsActions;
