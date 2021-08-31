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
  try {
    const response = await axios.get('api/transactions/all');
    const reversed = response.data.data.result.reverse();
    dispatch(transactionsActions.fetchTransactionsSuccess(reversed));
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
  }
};

const fetchTransactionsByDate = (year, month) => async dispatch => {
  dispatch(transactionsActions.fetchTransactionsByDateRequest());
  try {
    const response = await axios.get(
      `/api/transactions?year=${year}&month=${month}`,
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
  correctValue => async (dispatch, getState) => {
    // const transaction = { amount, category, comment, date, type };
    const state = getState();
    console.log(state);
    console.log(correctValue);
    // console.log(transaction)
    dispatch(transactionsActions.addTransactionRequest());
    try {
      // const { data } = await axios.post('/transactions', transaction);
      const response = await axios.post('api/transactions', correctValue);

      dispatch(
        transactionsActions.addTransactionSuccess(response.data.data.result),
        // transactionsActions.addTransactionSuccess(response.data),
      );
    } catch (error) {
      dispatch(transactionsActions.addTransactionError(error.message));
    }
  };

const transactionsOperations = {
  fetchTransactions,
  fetchTransactionsByDate,
  addTransaction,
};
export default transactionsOperations;
