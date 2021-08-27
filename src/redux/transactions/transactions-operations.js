import axios from 'axios';
import transactionsActions from './transactions-actions';

const fetchTransactions = (month, year) => async dispatch => {
  dispatch(transactionsActions.fetchTransactionsRequest());
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6I…kZWZojP1c';
  try {
    const { data } = await axios.get(
      '/transactions',
      { month, year },
      // { headers: { Authorization: `Bearer ${token}` } },
    );
    dispatch(transactionsActions.fetchTransactionsSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
  }
};

const addTransaction =
  (amount, category, comment, date, type) => async (dispatch, getState) => {
    const transaction = { amount, category, comment, date, type };
    const state = getState();
    console.log(state);
    dispatch(transactionsActions.addTransactionRequest());
    try {
      const { data } = await axios.post('/transactions', transaction);
      dispatch(transactionsActions.addTransactionSuccess(data));
    } catch (error) {
      dispatch(transactionsActions.addTransactionError(error.message));
    }
  };
const transactionsOperations = { fetchTransactions, addTransaction };
export default transactionsOperations;
