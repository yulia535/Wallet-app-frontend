import styles from './Table.module.css';
import TableItem from './TableItem';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';

const Table = () => {
  const { arrConsumptions, totalConsumption, totalIncome, arrStatistic } =
    useSelector(transactionsSelectors.getVisibleTransactions);

  console.log(
    'transactions',
    arrConsumptions,
    totalConsumption,
    totalIncome,
    arrStatistic,
  );

  return (
    <div className={styles.table}>
      <p className={styles.header_table}>
        <span>Категория</span>
        <span>Сумма</span>
      </p>
      <ul className={styles.table_list}>
        {arrStatistic.map(({ color, category, amount }) => (
          <TableItem
            color={color}
            category={category}
            amount={amount}
            key={color}
          />
        ))}
      </ul>
      <p className={styles.final_statistic}>
        <span className={styles.statistic_name}>Расходы:</span>
        <span className={styles.statistic_consumption}>{totalConsumption}</span>
      </p>
      <p className={styles.final_statistic}>
        <span className={styles.statistic_name}>Доходы:</span>
        <span className={styles.statistic_income}>{totalIncome}</span>
      </p>
    </div>
  );
};
export default Table;
