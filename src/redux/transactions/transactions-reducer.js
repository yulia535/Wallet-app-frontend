import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import transactionsActions from './transactions-actions';

// const transactionsHolder = [
//   {
//     id:1,
//     type: true,
//     // date: { month: '01', year: '2021' },
//     date: '05.10',
//     category: 'Доход',
//     comment: '',
//     amount: 5000.1,
//     balanceAfter: 6000,
//   },
//   {
//     id:2,
//     type: false,
//     // date: { month: '01', year: '2021' },
//     date: '06.10',

//     category: 'Машина',
//     comment: '',
//     amount: 1000.5,
//     balanceAfter: 5000,
//   },
//   {
//     id:3,
//     type: false,
//     // date: { month: '01', year: '2021' },
//     date: '07.10',

//     category: 'Продукты',
//     comment: '',
//     amount: 1500.6,
//     balanceAfter: 3500,
//   },
//   {
//     id:4,
//     type: true,
//     // date: { month: '01', year: '2021' },
//     date: '08.10',

//     category: 'Доход',
//     comment: '',
//     amount: 5000,
//     balanceAfter: 8500,
//   },
//   {
//     id:5,
//     type: false,
//     // date: { month: '01', year: '2021' },
//     date: '09.10',

//     category: 'Забота о себе',
//     comment: '',
//     amount: 1500,
//     balanceAfter: 7000,
//   },
//   {
//     id:6,
//     type: false,
//     // date: { month: '01', year: '2021' },
//     date: '10.10',

//     category: 'Забота о детях',
//     comment: '',
//     amount: 1500,
//     balanceAfter: 5500,
//   },
//   {
//     id:7,
//     type: false,
//     // date: { month: '01', year: '2021' },
//     date: '11.10',

//     category: 'Товары для дома',
//     comment: '',
//     amount: 1000,
//     balanceAfter: 4500,
//   },
//   {
//     id:8,
//     type: false,
//     // date: { month: '01', year: '2021' },
//     date: '12.10',

//     category: 'Образование',
//     comment: '',
//     amount: 1500,
//     balanceAfter: 3000,
//   },
//   {
//     id:9,
//     type: false,
//     // date: { month: '01', year: '2021' },
//     date: '13.10',

//     category: 'Досуг',
//     comment: '',
//     amount: 500,
//     balanceAfter: 2500,
//   },
//   {
//     id:10,
//     type: false,
//     // date: { month: '01', year: '2021' },
//     date: '14.10',

//     category: 'Другие расходы',
//     comment: '',
//     amount: 500,
//     balanceAfter: 2000,
//   },
// ];
const transactionsHolder = [];

const monthNow = new Date().getMonth();
const yearNow = new Date().getFullYear();

const items = createReducer(transactionsHolder, {
  [transactionsActions.fetchTransactionsSuccess]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
  [transactionsActions.addTransactionsSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
});

const itemsByDate = createReducer([], {
  [transactionsActions.fetchTransactionsByDateSuccess]: (_, { payload }) =>
    payload,
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

// const loading = createReducer(false, {
//   [transactionsActions.fetchTransactionsRequest]: () => true,
//   [transactionsActions.fetchTransactionsSuccess]: () => false,
//   [transactionsActions.fetchTransactionsError]: () => false,
//   [transactionsActions.addTransactionRequest]: () => true,
//   [transactionsActions.addTransactionSuccess]: () => false,
//   [transactionsActions.addTransactionError]: () => false,
// });

const balance = createReducer(null, {
  [transactionsActions.fetchBalanceSuccess]: (_, { payload }) => payload,
});

const month = createReducer(monthNow, {
  [transactionsActions.changeMonth]: (_, { payload }) => payload,
});
const year = createReducer(yearNow, {
  [transactionsActions.changeYear]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  itemsByDate,
  error,
  // loading,
  month,
  year,
  balance,
});
