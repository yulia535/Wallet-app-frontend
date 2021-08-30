import PropTypes from 'prop-types';
import styles from './transaction.module.css';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../../redux/transactions/transactions-selectors';

// const TransactionHistory = ({ items, headingColumns, breakOn = 'medium' }) => {
// let tableClass = 'table-container';
// if (breakOn==='small'){
//     tableClass+="table-container__break-sm"
// }else if(breakOn==='medium'){
//     tableClass+='table-container__break-md'
// }else if(breakOn==='large'){
//     tableClass+='table-container__break-lg'
// }
// const TransactionHistory = ( {items} ) => {
const TransactionHistory = () => {
  const items = useSelector(transactionsSelectors.getAllTransactions);
  console.log(items);
  return (
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
        {items.map(item => {
          //     const status = (item.type==='+') ? (styles.incomeItem): (styles.outcomeItem);
          //  const trStyle = (item.type==='+') ? (styles.income): (styles.outcome)
          let status;
          let trStyle;

          if (item.type === '+') {
            status = styles.incomeItem;
            trStyle = styles.income;
          } else {
            status = styles.outcomeItem;
            trStyle = styles.outcome;
          }

          return (
            <tr key={item.id} className={`${trStyle} ${styles.tr}`}>
              <td className={`${styles.item} ${styles.td} `} datelabel="Дата">
                {item.date}
              </td>
              <td className={`${styles.item} ${styles.td}`} datelabel="Тип">
                {item.type === false ? '+' : '-'}
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
