import { createSelector } from '@reduxjs/toolkit';

const getAllTransactions = state => state.transactions.items;
const getMonth = state => state.transactions.month;
const getYear = state => state.transaction.year;
const getLoading = state => state.transaction.loading;

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
  const formatCurrency = currency => {
    const point = currency.toFixed(2);
    const arr = point.split('');
    if (arr.length > 6) {
      arr.splice(arr.length - 6, 0, ' ');
      if (arr.length > 10) {
        arr.splice(arr.length - 10, 0, ' ');
      }
    }
    return arr.join('');
  };

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

  return { arrConsumptions, totalConsumption, totalIncome, arrStatistic };
});

const transactionsSelectors = {
  getAllTransactions,
  getMonth,
  getYear,
  getLoading,
  getVisibleTransactions,
};
export default transactionsSelectors;
