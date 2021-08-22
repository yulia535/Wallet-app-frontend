import styles from './modalAddTransaction.module.css';
import TextField from '@material-ui/core/TextField';

const ModalAddTransactions = ({
    setActive,
    onHandleChange,
    onHandleSubmit,
    handleFormCancel,
}) => {
    const categoryData = [
        { value: 'Основной', name: 'Основной' },
        { value: 'Еда', name: 'Еда' },
        { value: 'Авто', name: 'Авто' },
        { value: 'Развитие', name: 'Развитие' },
        { value: 'Дети', name: 'Дети' },
        { value: 'Дом', name: 'Дом' },
        { value: 'Образование', name: 'Образование' },
        { value: 'Остальные', name: 'Остальные' },
    ];

    return (
        <>
            <h1>Добавить транзакцию</h1>
            <form onSubmit={onHandleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="type"
                    required="required"
                    placeholder="type"
                    onChange={e => onHandleChange(e)}
                ></input>

                <select name="category" onChange={e => onHandleChange(e)}>
                    {categoryData.map((e, key) => {
                        return (
                            <option key={key} value={e.value}>
                                {e.name}
                            </option>
                        );
                    })}
                </select>
                <input
                    type="text"
                    name="amount"
                    required="required"
                    placeholder="amount"
                    onChange={e => onHandleChange(e)}
                ></input>
                <input
                    type="date"
                    name="date"
                    required="required"
                    placeholder="date"
                    onChange={e => onHandleChange(e)}
                ></input>

                <TextField
                    type="text"
                    name="comment"
                    required="required"
                    placeholder="Комментарий"
                    
                    className={styles.commentField}
                    onChange={e => onHandleChange(e)}
                ></TextField>

                <input
                    type="text"
                    name="balancy"
                    required="required"
                    placeholder="balancy"
                    onChange={e => onHandleChange(e)}
                ></input>
                <button type="submit"  variant="contained" className={styles.addBtn} onClick={() => setActive(false)}>
                    Добавить
                </button>
                <button type="button"  variant="outlined" className={styles.cancelBtn} onClick={handleFormCancel}>
                    Отмена
                </button>
            </form>
        </>
    );
};

export default ModalAddTransactions;
