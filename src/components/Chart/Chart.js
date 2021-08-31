import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import formatCurrency from '../../utils/formatCurrency';
import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ arrChart, colors }) => {
  let balance = useSelector(transactionsSelectors.getBalance);
  if (balance) {
    balance = formatCurrency(balance);
  }
  if (arrChart.length === 0) {
    arrChart = [1];
  }
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: arrChart,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
        cutout: 100,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.balance}>&#8372; {balance || '0.00'}</p>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;
