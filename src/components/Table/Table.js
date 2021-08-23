import styles from './Table.module.css';
const Table = () => (
  <div>
    <p className={styles.header_table}>
      <span>Категория</span>
      <span>Сумма</span>
    </p>
    <ul className={styles.table_list}>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Основный расходы</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Продукты</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Машина</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Забота о себе</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Забота о детях</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Товары для дома</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Образование</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Досуг</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
      <li className={styles.table_item}>
        <div className={styles.marker_color}></div>
        <p className={styles.description_consumption}>
          <span className={styles.name_consumption}>Другие расходы</span>
          <span className={styles.quantity_consumption}>8 700.00</span>
        </p>
      </li>
    </ul>
  </div>
);
export default Table;
