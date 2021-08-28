import axios from 'axios';
import transactionsActions from './transactions-actions';

const fetchTransactions = () => async dispatch => {
  dispatch(transactionsActions.fetchTransactionsRequest());
  try {
    const { data } = await axios.get('/transactions');
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
