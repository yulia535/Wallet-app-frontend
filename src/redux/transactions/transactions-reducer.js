import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import transactionsActions from './transactions-actions';

const transactionsHolder = [
  {
    type: true,
    date: { month: '01', year: '2021' },
    category: 'Доход',
    comment: '',
    amount: 5000.1,
    balanceAfter: 6000,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Машина',
    comment: '',
    amount: 1000.5,
    balanceAfter: 5000,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Продукты',
    comment: '',
    amount: 1500.6,
    balanceAfter: 3500,
  },
  {
    type: true,
    date: { month: '01', year: '2021' },
    category: 'Доход',
    comment: '',
    amount: 5000,
    balanceAfter: 8500,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Забота о себе',
    comment: '',
    amount: 1500,
    balanceAfter: 7000,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Забота о детях',
    comment: '',
    amount: 1500,
    balanceAfter: 5500,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Товары для дома',
    comment: '',
    amount: 1000,
    balanceAfter: 4500,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Образование',
    comment: '',
    amount: 1500,
    balanceAfter: 3000,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Досуг',
    comment: '',
    amount: 500,
    balanceAfter: 2500,
  },
  {
    type: false,
    date: { month: '01', year: '2021' },
    category: 'Другие расходы',
    comment: '',
    amount: 500,
    balanceAfter: 2000,
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
