import styles from './TableItem.module.css';
const TableItem = ({ color, amount, category }) => (
  <li className={styles.table_item}>
    <div
      className={styles.marker_color}
      style={{ backgroundColor: color }}
    ></div>
    <p className={styles.description_consumption}>
      <span className={styles.name_consumption}>{category}</span>
      <span className={styles.quantity_consumption}>{amount}</span>
    </p>
  </li>
);

export default TableItem;
