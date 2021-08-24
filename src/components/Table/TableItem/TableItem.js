import styles from './TableItem.module.css';
const TableItem = ({ color, type, quantity }) => (
  <li className={styles.table_item}>
    <div
      className={styles.marker_color}
      style={{ backgroundColor: color }}
    ></div>
    <p className={styles.description_consumption}>
      <span className={styles.name_consumption}>{type}</span>
      <span className={styles.quantity_consumption}>{quantity}</span>
    </p>
  </li>
);

export default TableItem;
