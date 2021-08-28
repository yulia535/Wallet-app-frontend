import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import transactionsActions from './transactions-actions';

const transactionsHolder = [
  {
    type: true,
    date: { month: '01', year: '2021' },
    category: 'Доход',
    comment: '',
    amount: 5000,
    balanceAfter: 6000,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Машина',
    comment: '',
    amount: 1000,
    balanceAfter: 5000,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Продукты',
    comment: '',
    amount: 1500,
    balanceAfter: 3500,
  },
];

const monthNow = new Date().getMonth();
const yearNow = new Date().getFullYear();

const items = createReducer(transactionsHolder, {
  [transactionsActions.fetchTransactionsSuccess]: (_, { payload }) => payload,
  [transactionsActions.addTransactionSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
});

const error = createReducer(null, {
  [transactionsActions.fetchTransactionsError]: (_, { payload }) => {
    alert(payload);
    return payload;
  },
  [transactionsActions.addTransactionError]: (_, { payload }) => {
    alert(payload);
    return payload;
  },
  [transactionsActions.fetchTransactionsSuccess]: () => null,
  [transactionsActions.addTransactionSuccess]: () => null,
});

const loading = createReducer(false, {
  [transactionsActions.fetchTransactionsRequest]: () => true,
  [transactionsActions.fetchTransactionsSuccess]: () => false,
  [transactionsActions.fetchTransactionsError]: () => false,
  [transactionsActions.addTransactionRequest]: () => true,
  [transactionsActions.addTransactionSuccess]: () => false,
  [transactionsActions.addTransactionError]: () => false,
});

const balance = createReducer(null, {
  [transactionsActions.fetchBalanceSuccess]: (_, { payload }) => payload,
});

const month = createReducer(monthNow, {
  [transactionsActions.changeMonth]: (_, { payload }) => payload,
});
const year = createReducer(yearNow, {
  [transactionsActions.changeYear]: (_, { payload }) => payload,
});

export default combineReducers({ items, error, loading, month, year, balance });
