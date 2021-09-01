import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions';
import formatDataForStatistic from '../../utils/formatDataForStatistic';
import styles from './DiagramTab.module.css';
import StatisticMenu from './StatisticMenu';
import Chart from '../Chart';
import Table from '../Table';

const DiagramTab = () => {
  const dispatch = useDispatch();

  // const monthNow = new Date().getMonth();
  // const yearNow = new Date().getFullYear();

  // useEffect(() => {
  //   dispatch(
  //     transactionsOperations.fetchTransactionsByDate(yearNow, monthNow + 1),
  //   );
  // }, [dispatch]);

  const month = useSelector(transactionsSelectors.getMonth);
  const year = useSelector(transactionsSelectors.getYear);

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactionsByDate(year, month + 1));
  }, [dispatch, month, year]);

  const transactionsByDate = useSelector(
    transactionsSelectors.getTransactionsByDate,
  );

  const { totalConsumption, totalIncome, arrStatistic, arrChart, colors } =
    formatDataForStatistic(transactionsByDate);

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
