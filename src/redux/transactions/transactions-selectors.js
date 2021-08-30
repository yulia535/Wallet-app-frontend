// import { createSelector } from '@reduxjs/toolkit';

const getAllTransactions = state => state.transactions.items;
const getTransactionsByDate = state => state.transactions.itemsByDate;
const getMonth = state => state.transactions.month;
const getYear = state => state.transactions.year;
const getLoading = state => state.transactions.loading;

const getBalance = state => state.transactions.balance;

// const getVisibleTransactions = createSelector(
//   [getAllTransactions, getMonth, getYear],
//   (items, month, year) => {
//     console.log(items, month, year);
//   },
// );

const transactionsSelectors = {
  getAllTransactions,
  getTransactionsByDate,
  getMonth,
  getYear,
  getLoading,
  // getVisibleTransactions,
  getBalance,
};
export default transactionsSelectors;
