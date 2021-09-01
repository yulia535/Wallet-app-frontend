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
  const arrAllStatistic = arrConsumptions.reduce((acc, item) => {
    const arrCategory = arrConsumptions.filter(
      i => i.category === item.category,
    );
    const totalForCategory = arrCategory.reduce(
      (acc, item) => acc + item.amount,
      0,
    );

    const newItem = {
      amount: totalForCategory,
      category: item.category,
    };

    acc.push(newItem);
    return acc;
  }, []);

  const arrStat = arrAllStatistic.reduce((acc, item, index) => {
    const boubleCategory = acc.find(i => i.category === item.category);
    if (!boubleCategory) {
      acc.push(item);
    }
    return acc;
  }, []);
  const arrChart = arrStat.map(item => item.amount);
  const arrStatistic = arrStat.map((item, index) => {
    item.color = colors[index];
    item.amount = formatCurrency(item.amount);
    return item;
  });

  return {
    totalConsumption,
    totalIncome,
    arrStatistic,
    colors,
    arrChart,
  };
};
export default formatDataForStatistic;
