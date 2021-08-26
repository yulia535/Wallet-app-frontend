import PropTypes from 'prop-types';
import styles from './transaction.module.css';

// const TransactionHistory = ({ items, headingColumns, breakOn = 'medium' }) => {
// let tableClass = 'table-container';
// if (breakOn==='small'){
//     tableClass+="table-container__break-sm"
// }else if(breakOn==='medium'){
//     tableClass+='table-container__break-md'
// }else if(breakOn==='large'){
//     tableClass+='table-container__break-lg'
// }
const TransactionHistory = ( {items} ) => {
    console.log(items)
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.titleBlock}>
                <tr className={styles.titleItems}>
                    <th className={styles.titleItem}>Дата</th>
                    <th className={styles.titleItem}>Тип</th>
                    <th className={styles.titleItem}>Категория</th>
                    <th className={styles.titleItem}>Комментарий</th>
                    <th className={styles.titleItem}>Сумма</th>
                    <th className={styles.titleItem}>Баланс</th>
                </tr>
            </thead>

            <tbody>
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
                        <tr key={item.id} className={trStyle}>
                            <td className={styles.item} datelabel="Дата">
                                {item.date}
                            </td>
                            <td className={styles.item} datelabel="Тип">
                                {item.type === false ? '+' : '-'}
                            </td>
                            <td className={styles.item} datelabel="Категория">
                                {item.category}
                            </td>
                            <td className={styles.item} datelabel="Комментарий">
                                {item.comment}
                            </td>
                            <td className={status} datelabel="Сумма">
                                {item.amount}
                            </td>
                            <td className={styles.item} datelabel="Баланс">
                                {item.balancy}
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
