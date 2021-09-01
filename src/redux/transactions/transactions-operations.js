import axios from 'axios';
import transactionsActions from './transactions-actions';

axios.defaults.baseURL = 'https://wallet-app-backend.herokuapp.com/';

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

const addTransaction = correctValue => async (dispatch, getState) => {
  const state = getState();

  dispatch(transactionsActions.addTransactionRequest());
  try {
    const response = await axios.post('api/transactions', correctValue);

    dispatch(
      transactionsActions.addTransactionSuccess(response.data.data.result),
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
