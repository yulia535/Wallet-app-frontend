import styles from './modalAddTransaction.module.css';
// import TextField from '@material-ui/core/TextField';
import React from 'react';

import ToggleCustom from '../UI/ToggleCustom'

import { Formik, Form, ErrorMessage, Field } from 'formik';
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
                validationSchema={Yup.object({
                  date: Yup.date().default(function () {
                    return new Date();
                  })
                    .required('Required'),
                 
                    amount: Yup.number('Enter your sum').required('Sum is required'),


                    category: Yup.string()
                    .oneOf(
                      ['main', 'food', 'car', 'development', 'kids', 'home', 'education', 'rest'],
                      'Invalid Category'
                    )
                    .required('Required'),
                })}

                onSubmit={async (value, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    // async request
                    resetForm();
                    console.log(value);
                    setSubmitting(false);
                }}

        
            >
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
                        
                    </Field>  <ErrorMessage name="select" />

                    <div className={styles.amountDate}>
                        <Field
                            type="text"
                            className={styles.inputAmount}
                            name="amount"
                            required="required"
                            placeholder="0.00"
                        ></Field>

                        <Field
                            type="date"
                            name="date"
                            className={styles.inputDate}
                            required="required"
                            // placeholder="2019-07-07"
                            value="2019-07-07"
                        ></Field>
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
