import { createSelector } from '@reduxjs/toolkit';

const getAllTransactions = state => state.transactions.items;
const getMonth = state => state.transactions.month;
const getYear = state => state.transaction.year;
const getLoading = state => state.transaction.loading;

const getBalance = state => state.transactions.balance;

const getVisibleTransactions = createSelector(
  [getAllTransactions, getMonth, getYear],
  (items, month, year) => {
    console.log(items, month, year);
  },
);

const transactionsSelectors = {
  getAllTransactions,
  getMonth,
  getYear,
  getLoading,
  getVisibleTransactions,
  getBalance,
};
export default transactionsSelectors;
