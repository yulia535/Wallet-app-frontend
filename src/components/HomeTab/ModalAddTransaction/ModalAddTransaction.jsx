import styles from './modalAddTransaction.module.css';
// import TextField from '@material-ui/core/TextField';
import React from 'react';

import ToggleCustom from '../UI/ToggleCustom';

import { Formik, Form,  Field } from 'formik';
import * as Yup from 'yup';
import { date } from 'yup/lib/locale';

const ModalAddTransactions = ({ setActive, handleFormCancel }) => {
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

  return (
    <>
      <h1>Добавить транзакцию</h1>

      <Formik
        initialValues={{
          date: '',
          type: false,
          category: '',
          comment: '',
          amount: '',
          balancy: '',
        }}
        validationSchema={Yup.object().shape({
          // date: Yup.date().default(function () {
          //   return new Date();
          // }).required('Field Date is Required'),
          date: Yup.date().min(yesterday, "Date cannot be in the past").max(tomorrow, "Date cannot be in the future").required('Field Date is Required'),

          amount: Yup.number({message: 'Is not in correct format'}).positive('Is not in correct format').required('Field Sum is required'),

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
        onSubmit={async (value, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // async request
          resetForm();
          console.log(value);
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <ToggleCustom name="type" />
            <Field
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
            </Field>{' '}
            {touched.category && errors.category ? (
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
                  <span className={styles.errorFieldInfo}>{errors.amount}</span>
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
                {errors.date ? (
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
