import s from './Balance.module.css';

const Ballance = () => {
  return (
    <div className={s.ballanceContainer}>
      <h2 className={s.ballanceTitle}>Ваш баланс</h2>
      <p className={s.ballance}>
        <span className={s.hryvnia}>&#8372;</span>
      </p>
    </div>
  );
};

export default Ballance;
