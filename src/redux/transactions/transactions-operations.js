import axios from 'axios';
import transactionsActions from './transactions-actions';

axios.defaults.baseURL = 'http://localhost:3001';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmI5ZmE2MzE2NzgxMzNjY2M4OWNjNyIsImlhdCI6MTYzMDMyNzg5MX0.JULfcldUUMVYlvJM8W_6FWy1oc2xcR9q0OliONKDEE4';
// // const token =
// //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmM4NDQ1ODNlOGQzMjAzOGRmOTg4MCIsImlhdCI6MTYzMDMxNzMxMn0.1n6Hkj-flMQjyDRTg3P8qtLpua-KKkEqI4g_mV9DVsA';
// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

const fetchTransactions = () => async dispatch => {
  dispatch(transactionsActions.fetchTransactionsRequest());
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6I…kZWZojP1c';

  try {
    const response = await axios.get('api/transactions/all', {

    // const response = await axios.get('api/transactions/all', config, {
      // headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(
      transactionsActions.fetchTransactionsSuccess(response.data.data.result),
    );
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
  }
};







const fetchTransactionsByDate = (year, month) => async dispatch => {
  dispatch(transactionsActions.fetchTransactionsByDateRequest());
  try {
    const response = await axios.get(
      `/api/transactions?year=${year}&month=${month}`,
      // config,
      // {
      //   headers: { Authorization: `Bearer ${token}` },
      // },
    );
    dispatch(
      transactionsActions.fetchTransactionsByDateSuccess(
        response.data.data.result,
      ),
    );
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsByDateError(error.message));
  }
};

const addTransaction =
  // (amount, category, comment, date, type) => async (dispatch, getState) => {
    (correctValue )=> async (dispatch, getState) => {
    // const transaction = { amount, category, comment, date, type };
    const state = getState();
    console.log(state);
    console.log(correctValue);
    // console.log(transaction)
    dispatch(transactionsActions.addTransactionRequest());
    try {
      // const { data } = await axios.post('/transactions', transaction);
      const { data } = await axios.post('api/transactions', correctValue);

      dispatch(transactionsActions.addTransactionSuccess(data));
    } catch (error) {
      dispatch(transactionsActions.addTransactionError(error.message));
    }
  };

const fetchBalance = () => async dispatch => {
  dispatch(transactionsActions.fetchBalanceRequest());

  try {
    const {
      data: {
        response: { totalBalance },
      },
    } = await axios.get('/transactions');

    dispatch(transactionsActions.fetchBalanceSuccess(totalBalance));
  } catch (e) {
    dispatch(transactionsActions.fetchBalanceError(e.message));
  }
};

const transactionsOperations = {
  fetchTransactions,
  fetchTransactionsByDate,
  addTransaction,
  fetchBalance,
};
export default transactionsOperations;
