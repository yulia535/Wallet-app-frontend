import styles from './DiagramTab.module.css';
import StatisticMenu from './StatisticMenu';
import Chart from '../Chart';
import Table from '../Table';
const DiagramTab = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.wrapper_statistic}>
        <Chart />
        <div className={styles.wrapper_table}>
          <StatisticMenu />
          <Table className={styles.table} />
        </div>
      </div>
    </div>
  );
};

export default DiagramTab;
