import styles from './DiagramTab.module.css';
import Chart from '../Chart';
import Table from '../Table';
const DiagramTab = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Статистика</h2>
      <Chart />
      <Table />
    </div>
  );
};

export default DiagramTab;
