import PropTypes from 'prop-types';
import styles from './transaction.module.css';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../../redux/transactions/transactions-selectors';

const TransactionHistory = () => {
  const items = useSelector(transactionsSelectors.getAllTransactions);

  return (
    <div className={styles.blockTable}>
    <table className={`${styles.transactionHistory} ${styles.table}`}>
      <thead className={`${styles.titleBlock} ${styles.thead}`}>
        <tr className={`${styles.titleItems} ${styles.tr}`}>
          <th className={`${styles.titleItem} ${styles.th}`}>Дата</th>
          <th className={`${styles.titleItem} ${styles.th}`}>Тип</th>
          <th className={`${styles.titleItem} ${styles.th}`}>Категория</th>
          <th className={`${styles.titleItem} ${styles.th}`}>Комментарий</th>
          <th className={`${styles.titleItem} ${styles.th}`}>Сумма</th>
          <th className={`${styles.titleItem} ${styles.th}`}>Баланс</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map((item, ind) => {
          const GetFormattedDate = date => {
            const dt = new Date(date);
            const month = String(dt.getMonth() + 1).padStart(2, '0');
            const day = dt.getDate();
            const year = String(dt.getFullYear()).slice(2);
            return day + '.' + month + '.' + year;
          };

          //     const status = (item.type==='+') ? (styles.incomeItem): (styles.outcomeItem);
          //  const trStyle = (item.type==='+') ? (styles.income): (styles.outcome)
          let status;
          let trStyle;

          if (!item.type) {
            status = styles.incomeItem;
            trStyle = styles.income;
          } else {
            status = styles.outcomeItem;
            trStyle = styles.outcome;
          }

          return (
            <tr key={item._id} className={`${trStyle} ${styles.tr}`}>
              <td className={`${styles.item} ${styles.td}`} datelabel="Дата">
                {GetFormattedDate(item.date)}
              </td>
              <td className={`${styles.item} ${styles.td}`} datelabel="Тип">
                {!item.type ? '+' : '-'}
              </td>
              <td
                className={`${styles.item} ${styles.td}`}
                datelabel="Категория"
              >
                {item.category}
              </td>
              <td
                className={`${styles.item} ${styles.td}`}
                datelabel="Комментарий"
              >
                {item.comment}
              </td>
              <td className={`${status} ${styles.td}`} datelabel="Сумма">
                {item.amount}
              </td>
              <td className={`${styles.item} ${styles.td}`} datelabel="Баланс">
                {item.balanceAfter}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      // type: PropTypes.symbol.isRequired,
      category: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      // amount: PropTypes.number.isRequired,
      // balancy: PropTypes.number.isRequired,
    }),
  ).isRequired,
  // headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  // breakOn: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default TransactionHistory;
