import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import styles from './DiagramTab.module.css';
import StatisticMenu from './StatisticMenu';
import Chart from '../Chart';
import Table from '../Table';

const DiagramTab = () => {
  const { totalConsumption, totalIncome, arrStatistic, arrChart, colors } =
    useSelector(transactionsSelectors.getVisibleTransactions);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.wrapper_statistic}>
        <Chart arrChart={arrChart} colors={colors} />
        <div className={styles.wrapper_table}>
          <StatisticMenu />
          <Table
            totalConsumption={totalConsumption}
            totalIncome={totalIncome}
            arrStatistic={arrStatistic}
            className={styles.table}
          />
        </div>
      </div>
    </div>
  );
};

export default DiagramTab;
