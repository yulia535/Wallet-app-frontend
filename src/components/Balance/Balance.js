import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import s from './Balance.module.css';

const Ballance = () => {
  const total = useSelector(transactionsSelectors.getBalance);
  return (
    <div className={s.ballanceContainer}>
      <h2 className={s.ballanceTitle}>Ваш баланс</h2>
      <p className={s.ballance}>
        <span className={s.hryvnia}>&#8372;{total}</span>
      </p>
    </div>
  );
};

export default Ballance;
