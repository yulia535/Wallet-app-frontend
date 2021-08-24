import styles from './modalAddTransaction.module.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ModalAddTransactions = ({
    setActive,
    onHandleChange,
    onHandleSubmit,
    handleFormCancel,
}) => {
    const categoryData = [
        {  name:'Выберите категорию'  },
        { value: 'Основной', name: 'Основной' },
        { value: 'Еда', name: 'Еда' },
        { value: 'Авто', name: 'Авто' },
        { value: 'Развитие', name: 'Развитие' },
        { value: 'Дети', name: 'Дети' },
        { value: 'Дом', name: 'Дом' },
        { value: 'Образование', name: 'Образование' },
        { value: 'Остальные', name: 'Остальные' },
    ];

    const AntSwitch = withStyles((theme) => ({
        root: {
          width: 80,
          height: 40,
          padding: 0,
          display: 'flex',
        },
        switchBase: {
          padding: 1,
          color: theme.palette.primary.main ,
          '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
              opacity: 1,
              backgroundColor: theme.palette.common.white,
              color:'#FF6596',
              borderColor: '#e0e0e0',
              borderRadius: 30,
            },
          },
        },
        thumb: {
          width: 44,
          height: 44,
          boxShadow: 'none',
        },
        track: {
          border: `1px solid #e0e0e0`,
          borderRadius: 30 ,
          width: 80,
          height: 40,
          opacity: 1,
          backgroundColor: theme.palette.common.white,
        },
        checked: {},
      }))(Switch);


    return (
      <>
        <h1>Добавить транзакцию</h1>
        <form onSubmit={onHandleSubmit} className={styles.form}>
          {/* <input
            type="text"
            name="type"
            required="required"
            placeholder="type"
            onChange={e => onHandleChange(e)}
          ></input> */}
<div className={styles.chooseTypeToggle}>

              <span>Доход</span>  <AntSwitch name="checkedC" /> <span>Расход</span>
</div>



          <select className={styles.selectCategory} name="category" onChange={e => onHandleChange(e)}>
            {categoryData.map((e, key) => {
              return (
                <option key={key} value={e.value}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <div className={styles.amountDate}>
            <input
              type="text"
              className={styles.inputAmount}
              name="amount"
              required="required"
              placeholder="0.00"
              onChange={e => onHandleChange(e)}
            ></input>
            <input
              type="date"
              name="date"
              className={styles.inputDate}
              required="required"
              // placeholder="date"
              value="2019-07-07"
              onChange={e => onHandleChange(e)}
            ></input>
          </div>
          <TextField
            type="text"
            name="comment"
            required="required"
            placeholder="Комментарий"
            className={styles.commentField}
            onChange={e => onHandleChange(e)}
          ></TextField>

          {/* <input
            type="text"
            name="balancy"
            required="required"
            placeholder="balancy"
            onChange={e => onHandleChange(e)}
          ></input> */}
          <div className={styles.btnsModal}>
            <button
              type="submit"
              variant="contained"
              className={styles.addBtn}
              onClick={() => setActive(false)}
            >
              Добавить
            </button>
            <button
              type="button"
              variant="outlined"
              className={styles.cancelBtn}
              onClick={handleFormCancel}
            >
              Отмена
            </button>
          </div>
        </form>
      </>
    );
};

export default ModalAddTransactions;
