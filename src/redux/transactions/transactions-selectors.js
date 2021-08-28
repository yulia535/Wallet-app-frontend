import { createSelector } from '@reduxjs/toolkit';
import formatCurrency from '../../utils';

const getAllTransactions = state => state.transactions.items;
const getMonth = state => state.transactions.month;
const getYear = state => state.transaction.year;
const getLoading = state => state.transaction.loading;


const getBalance = state => state.transactions.balance;

// const getVisibleTransactions = createSelector(
//   [getAllTransactions, getMonth, getYear],
//   (items, month, year) => {
//     console.log(items, month, year);
//   },
// );

const getVisibleTransactions = createSelector([getAllTransactions], items => {
  const colors = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];

  const arrConsumptions = items.filter(item => !item.type);
  const totalConsumption = formatCurrency(
    arrConsumptions.reduce((acc, item) => {
      return acc + item.amount;
    }, 0),
  );
  const arrIncome = items.filter(item => item.type);
  const totalIncome = formatCurrency(
    arrIncome.reduce((acc, item) => {
      return acc + item.amount;
    }, 0),
  );
  const arrStatistic = arrConsumptions.map((item, index) => {
    const newItem = {
      amount: formatCurrency(item.amount),
      category: item.category,
    };
    newItem.color = colors[index];
    return newItem;
  });

  const arrChart = arrConsumptions.map(item => item.amount);

  return {
    totalConsumption,
    totalIncome,
    arrStatistic,
    colors,
    arrChart,
  };
});


const transactionsSelectors = {
  getAllTransactions,
  getMonth,
  getYear,
  getLoading,
  getVisibleTransactions,
  getBalance,
};
export default transactionsSelectors;
