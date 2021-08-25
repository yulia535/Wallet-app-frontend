import styles from './DiagramTab.module.css';
import StatisticMenu from './StatisticMenu';
import Chart from '../Chart';
import Table from '../Table';
const DiagramTab = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Статистика</h2>
      <Chart />
      <StatisticMenu />
      <Table />
    </div>
  );
};

export default DiagramTab;
