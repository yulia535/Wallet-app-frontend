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
 

  const [chooseType, setType] = useState(false);
  const [correctType, setCorrectType]= useState(false);
  // let correctType;
const onTypeChange =async (e)=>{
await setType(e.target.checked)
console.log(chooseType)
// correctType = (chooseType===true) ? "true" : "false";
setCorrectType((chooseType===true) ? "true" : "false")

console.log(correctType)
}
// console.log(correctType)

// let correctValue={
//   type: correctType,
// }

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
          type: true,
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

             category: (chooseType===true) ? (Yup.string()
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
            .required('Field Category is Required')) : null
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);


          // correctValue =   {  
          //   // type: correctType ? correctType : 'false',
          //   type: chooseType,
          //   date: values.date,
          // category: values.category,
          // comment: values.comment,
          // amount: values.amount}


         const correctValue =   {  
            date: values.date,
          category: values.category,
          comment: values.comment,
          amount: values.amount,
            type: correctType,
           }

console.log(values)
console.log(correctType)
console.log(correctValue)
// alert(JSON.stringify(correctValue, null, 2));
alert(correctValue);


// dispatch(
//   transactionsOperations.addTransaction(
//     (JSON.stringify(correctValue, null, 2))
//   ),
// );

// dispatch(
//   transactionsOperations.addTransaction(
//     correctValue
//   ),
// );

     
          resetForm();


          setSubmitting(false);
   
        }}
      >
        {({ values, errors, touched, dirty }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form className={styles.form}>
              <ToggleCustom name="type" onChange={onTypeChange} value={values.type}/>
              {/* <ToggleCustom name="type" /> */}

                  { chooseType===true ? (<Field
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
              {chooseType===true && touched.category && errors.category ? (
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
                    value={values.amount}
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
                    value={values.date}
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
                value={values.comment}
              ></Field>
              <div className={styles.btnsModal}>
                <button
                  type="submit"
                  variant="contained"
                  className={styles.addBtn}
                  onClick={() => setActive(false)}
                  disabled={!dirty}
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
