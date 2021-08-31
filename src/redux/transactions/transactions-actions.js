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

const fetchTransactionsByDateRequest = createAction(
  'transaction/fetchTransactionsByDateRequest',
);
const fetchTransactionsByDateSuccess = createAction(
  'transaction/fetchTransactionsByDateSuccess',
);
const fetchTransactionsByDateError = createAction(
  'transaction/fetchTransactionsByDateError',
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
  fetchTransactionsByDateRequest,
  fetchTransactionsByDateSuccess,
  fetchTransactionsByDateError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  changeMonth,
  changeYear,
};
export default transactionsActions;
