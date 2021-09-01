import styles from './modalAddTransaction.module.css';
import './../UI/stylestoggle.css';
import React from 'react';
import ToggleCustom from '../UI/ToggleCustom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import transactionsOperations from '../../../redux/transactions/transactions-operations';

const ModalAddTransactions = ({ setActive, handleFormCancel }) => {
  const dispatch = useDispatch();

  const categoryDataWithdrow = [
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

  const categoryDataDeposit = [
    { name: 'Выберите категорию' },
    { value: 'mainIncome', name: 'Регулярный доход' },
    { value: 'restIncome', name: 'Нерегулярный доход' },
  ];

  const yesterday = new Date(Date.now() - 86400000);
  const tomorrow = new Date(Date.now() + 43200000);

  const [chooseType, setType] = useState(false);
  const [correctType, setCorrectType] = useState(false);

  const onTypeChange = async e => {
    setType(e.target.checked);
    setCorrectType(e.target.checked ? 'true' : 'false');
  };

  return (
    <>
      <button
        type="button"
        variant="outlined"
        className={styles.closeBtn}
        onClick={handleFormCancel}
      ></button>
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

          category: chooseType
            ? Yup.string()
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
                .required('Field Category is Required')
            : Yup.string()
                .oneOf(['mainIncome', 'restIncome'], 'Invalid Category')
                .required('Field Category is Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const correctValue = {
            type: correctType,
            date: values.date,
            category: values.category,
            comment: values.comment,
            amount: values.amount,
          };
        
          dispatch(transactionsOperations.addTransaction(correctValue));
          resetForm();

          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, dirty }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form className={styles.form}>
              <div className="toggleContainer">
                <div className="chooseTypeToggle">
                  <label htmlFor="toggle-input" className="toggle">
                    <span
                      style={{
                        color: chooseType === true ? 'black' : '#24CCA7',
                      }}
                    >
                      Доход
                    </span>
                    <ToggleCustom
                      name="type"
                      onChange={onTypeChange}
                      value={values.type}
                    />

                    <span
                      className="outcome"
                      style={{
                        color: chooseType === true ? '#FF6596' : 'black',
                      }}
                    >
                      Расход
                    </span>
                  </label>
                </div>
              </div>

              {chooseType ? (
                <Field
                  as="select"
                  className={styles.selectCategory}
                  name="category"
                >
                  {categoryDataWithdrow.map((e, key) => {
                    return (
                      <option key={key} value={e.value}>
                        {e.name}
                      </option>
                    );
                  })}
                </Field>
              ) : (
                <Field
                  as="select"
                  className={styles.selectCategory}
                  name="category"
                >
                  {categoryDataDeposit.map((e, key) => {
                    return (
                      <option key={key} value={e.value}>
                        {e.name}
                      </option>
                    );
                  })}
                </Field>
              )}
              {chooseType && touched.category && errors.category ? (
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
                  ></Field>
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
