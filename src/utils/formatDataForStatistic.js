import formatCurrency from './formatCurrency';
const formatDataForStatistic = items => {
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

  const arrConsumptions = items.filter(item => item.type);
  const totalConsumption = formatCurrency(
    arrConsumptions.reduce((acc, item) => {
      return acc + item.amount;
    }, 0),
  );
  const arrIncome = items.filter(item => !item.type);
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
};
export default formatDataForStatistic;
