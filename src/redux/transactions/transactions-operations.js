import axios from 'axios';
import transactionsActions from './transactions-actions';

axios.defaults.baseURL = 'http://localhost:3001';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmI5ZmE2MzE2NzgxMzNjY2M4OWNjNyIsImlhdCI6MTYzMDMyNzg5MX0.JULfcldUUMVYlvJM8W_6FWy1oc2xcR9q0OliONKDEE4";
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const fetchTransactions = (month, year) => async dispatch => {
  dispatch(transactionsActions.fetchTransactionsRequest());
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6I…kZWZojP1c';
  try {
    const response = await axios.get(
      'api/transactions',
      { month, year }, config
      // { headers: { Authorization: `Bearer ${token}` } },
    );
    dispatch(transactionsActions.fetchTransactionsSuccess(response.data.result));
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
  }
};

const addTransaction =
  // (amount, category, comment, date, type) => async (dispatch, getState) => {
    (values) => async (dispatch, getState) => {

    // const transaction = { amount, category, comment, date, type };
    const state = getState();
    console.log(state);
    console.log(values);
    dispatch(transactionsActions.addTransactionRequest());
    try {
      // const { data } = await axios.post('/transactions', transaction);
      const { data } = await axios.post('api/transactions', values, config
        );

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
  addTransaction,
  fetchBalance,
};
export default transactionsOperations;
