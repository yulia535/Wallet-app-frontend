import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import s from './Balance.module.css';
import formatCurrency from '../../utils/formatCurrency';

const Ballance = () => {
  let balance = useSelector(transactionsSelectors.getBalance);
  if (balance) {
    balance = formatCurrency(balance);
  }

  return (
    <div className={s.ballanceContainer}>
      <h2 className={s.ballanceTitle}>Ваш баланс</h2>
      <p className={s.ballance}>
        <span className={s.hryvnia}>&#8372; {balance || '0.00'}</span>
      </p>
    </div>
  );
};

export default Ballance;
