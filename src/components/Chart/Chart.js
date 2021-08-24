import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
  const arrColors = [
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
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 5, 8, 9],
        backgroundColor: arrColors,
        borderColor: arrColors,
        borderWidth: 1,
        cutout: 90,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  return (
    <div className={styles.wrapper}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;
