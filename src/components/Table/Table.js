import styles from './Table.module.css';
import TableItem from './TableItem';
const Table = () => {
  const arrConsumption = [
    { color: '#FED057', type: 'Основныe расходы', quantity: '8 700.00' },
    { color: '#FFD8D0', type: 'Продукты', quantity: '3 800.74' },
    { color: '#FD9498', type: 'Машина', quantity: '1 500,00' },
    { color: '#C5BAFF', type: 'Забота о себе', quantity: '8.00' },
    { color: '#6E78E8', type: 'Забота о детях', quantity: '2 208.50' },
    { color: '#4A56E2', type: 'Товары для дома', quantity: '300.00' },
    { color: '#81E1FF', type: 'Образование', quantity: '3 400.00' },
    { color: '#24CCA7', type: 'Досуг', quantity: '1 230.00' },
    { color: '#00AD84', type: 'Другие расходы', quantity: '610.00' },
  ];
  return (
    <div className={styles.table}>
      <p className={styles.header_table}>
        <span>Категория</span>
        <span>Сумма</span>
      </p>
      <ul className={styles.table_list}>
        {arrConsumption.map(({ color, type, quantity }) => (
          <TableItem
            color={color}
            type={type}
            quantity={quantity}
            key={color}
          />
        ))}
      </ul>
      <p className={styles.final_statistic}>
        <span className={styles.statistic_name}>Расходы:</span>
        <span className={styles.statistic_consumption}>22 549.24</span>
      </p>
      <p className={styles.final_statistic}>
        <span className={styles.statistic_name}>Доходы:</span>
        <span className={styles.statistic_income}>27 350.00</span>
      </p>
    </div>
  );
};
export default Table;
