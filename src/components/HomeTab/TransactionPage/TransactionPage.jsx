import TransactionHistory from '../TransactionHistory/TransactionHistory';
import OpenModalBtn from '../UI/openModalBtn';
import { useState, useEffect } from 'react';
import trans from '../TransactionHistory/transactions.json';
import styles from './transactionPage.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../customMuiTheme';
import transactionsOperations from '../../../redux/transactions/transactions-operations';
import { getIsAuthenticated } from '../../../redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';

const TransactionPage = () => {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState(trans);
  const [addFormData, setAddFormData] = useState({
    date: '',
    type: false,
    category: '',
    comment: '',
    amount: '',
  });

  const [modalActive, setModalActive] = useState(false);

  const isAuth = useSelector(getIsAuthenticated);

  useEffect(() => {
    if (isAuth) {
      dispatch(transactionsOperations.fetchTransactions());
    }
  }, [dispatch]);

 

  console.log(addFormData);

  const handleFormCancel = e => {
    setAddFormData({
      date: '',
      type: '',
      category: '',
      comment: '',
      amount: '',
      balancy: '',
    });
    setModalActive(false);
  };

  const handleOpenModal = () => {
    setModalActive(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <TransactionHistory items={transactions} />
        <OpenModalBtn onClick={handleOpenModal} />

        <ModalContainer
          active={modalActive}
          setActive={setModalActive}
          handleFormCancel={handleFormCancel}
        />
      </div>
    </ThemeProvider>
  );
};

export default TransactionPage;
