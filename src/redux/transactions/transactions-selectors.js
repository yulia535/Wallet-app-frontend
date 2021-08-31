const getAllTransactions = state => state.transactions.items;
const getTransactionsByDate = state => state.transactions.itemsByDate;
const getMonth = state => state.transactions.month;
const getYear = state => state.transactions.year;
const getBalance = state => state.transactions.balance;

const transactionsSelectors = {
  getAllTransactions,
  getTransactionsByDate,
  getMonth,
  getYear,
  getBalance,
};
export default transactionsSelectors;
