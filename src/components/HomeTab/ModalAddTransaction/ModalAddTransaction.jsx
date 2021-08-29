import styles from './modalAddTransaction.module.css';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ToggleCustom from '../UI/ToggleCustom';
import { Formik, Form,  Field } from 'formik';
import * as Yup from 'yup';
// import DatePickers from '../UI/calendar'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { useState } from 'react';
import moment from 'moment';

import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import transactionsOperations from '../../../redux/transactions/transactions-operations';


const ModalAddTransactions = ({ setActive, handleFormCancel }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();

  const categoryData = [
    { name: 'Выберите категорию' },
    { value: 'main', name: 'Основной' },
    { value: 'food', name: 'Еда' },
    { value: 'car', name: 'Авто' },
    { value: 'development', name: 'Развитие' },
    { value: 'kids', name: 'Дети' },
    { value: 'home', name: 'Дом' },
    { value: 'education', name: 'Образование' },
    { value: 'rest', name: 'Остальные' },
  ];
  const yesterday = new Date(Date.now() -86400000);
  const tomorrow = new Date(Date.now() +43200000);
 

  const [type, setType] = useState(false);
const onTypeChange =(e)=>{
setType(e.target.checked)
// console.log(type)
}


  return (
    <>
            <button
                type="button"
                variant="outlined"
                className={styles.closeBtn}
                onClick={handleFormCancel}
              >
                
              </button>
      <h1 className={styles.titleModal}>Добавить транзакцию</h1>

      <Formik
        initialValues={{
          date: '',
          type: false,
          category: '',
          comment: '',
          amount: '',
        }}
        validationSchema={Yup.object().shape({
          date: Yup.date()
            .min(yesterday, 'Date cannot be in the past')
            .max(tomorrow, 'Date cannot be in the future')
            .required('Field Date is Required'),

          amount: Yup.number({ message: 'Is not in correct format' })
            .positive('Is not in correct format')
            .required('Field Sum is required'),

          category: Yup.string()
            .oneOf(
              [
                'main',
                'food',
                'car',
                'development',
                'kids',
                'home',
                'education',
                'rest',
              ],
              'Invalid Category',
            )
            .required('Field Category is Required'),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // async request
          alert(JSON.stringify(values, null, 2));
          dispatch(
            transactionsOperations.addTransaction(
              JSON.stringify(values, null, 2),
            ),
          );

          // const correctValue = {
          //   ...value,
          //   // date: moment(date).format(),
          //   date: selectedDate,

          // };
          resetForm();

          // console.log(values);
          console.log(JSON.stringify(values));
          // console.log(correctValue)
          setSubmitting(false);
          // setSelectedDate('')
        }}
      >
        {({ errors, touched }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form className={styles.form}>
              <ToggleCustom name="type" onChange={onTypeChange} />

                  { type===true ? (<Field
                as="select"
                className={styles.selectCategory}
                name="category"
              >
                {categoryData.map((e, key) => {
                  return (
                    <option key={key} value={e.value}>
                      {e.name}
                    </option>
                  );
                })}
              </Field>) : null}
              {type===true && touched.category && errors.category ? (
                <span className={styles.errorFieldInfo}>{errors.category}</span>
              ) : null} 
              
              <div className={styles.amountDate}>
                <div className={styles.amount}>
                  <Field
                    type="text"
                    className={styles.inputAmount}
                    name="amount"
                    required="required"
                    placeholder="0.00"
                  ></Field>
                  {touched.amount && errors.amount ? (
                    <span className={styles.errorFieldInfo}>
                      {errors.amount}
                    </span>
                  ) : null}
                </div>

                <div className={styles.date}>
                  <Field
                    type="date"
                    name="date"
                    className={styles.inputDate}
                    required="required"
                    placeholder="2019-07-07"
                    // value="2021-08-07"
                  ></Field>

                  {/* <KeyboardDatePicker name="date"
                margin="normal"
                format="dd.MM.yyyy"
                value={selectedDate}
                autoOk
                invalidDateMessage
                defaultValue="2017-05-24"
                required
                onChange={handleDateChange}
                disablePast
                className={styles.inputDate}
                variant="inline"
                disableToolbar

                classes={{
                  root: classes.root,
                }}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}

              /> */}

                  {touched.date && errors.date ? (
                    <span className={styles.errorFieldDate}>{errors.date}</span>
                  ) : null}
                </div>
              </div>
              <Field
                type="text"
                name="comment"
                placeholder="Комментарий"
                className={styles.commentField}
              ></Field>
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
            </Form>
          </MuiPickersUtilsProvider>
        )}
      </Formik>
    </>
  );
};

export default ModalAddTransactions;

//     return (
//         <>
//             <h1>Добавить транзакцию</h1>
//             <form onSubmit={onHandleSubmit} className={styles.form}>
//                 <ToggleCustom
//                     setType={setType}
//                     onHandleChange={onHandleChange}
//                 />

//                 <select
//                     className={styles.selectCategory}
//                     name="category"
//                     onChange={e => onHandleChange(e)}
//                 >
//                     {categoryData.map((e, key) => {
//                         return (
//                             <option key={key} value={e.value}>
//                                 {e.name}
//                             </option>
//                         );
//                     })}
//                 </select>

//                 <div className={styles.amountDate}>
//                     <input
//                         type="text"
//                         className={styles.inputAmount}
//                         name="amount"
//                         required="required"
//                         placeholder="0.00"
//                         onChange={e => onHandleChange(e)}
//                     ></input>

//                     <input
//                         type="date"
//                         name="date"
//                         className={styles.inputDate}
//                         required="required"
//                         // placeholder="date"
//                         value="2019-07-07"
//                         onChange={e => onHandleChange(e)}
//                     ></input>
//                 </div>

//                 <TextField
//                     type="text"
//                     name="comment"
//                     required="required"
//                     placeholder="Комментарий"
//                     className={styles.commentField}
//                     onChange={e => onHandleChange(e)}
//                 ></TextField>

//                 <div className={styles.btnsModal}>
//                     <button
//                         type="submit"
//                         variant="contained"
//                         className={styles.addBtn}
//                         onClick={() => setActive(false)}
//                     >
//                         Добавить
//                     </button>
//                     <button
//                         type="button"
//                         variant="outlined"
//                         className={styles.cancelBtn}
//                         onClick={handleFormCancel}
//                     >
//                         Отмена
//                     </button>
//                 </div>
//             </form>
//         </>
//     );
// };

// export default ModalAddTransactions;
