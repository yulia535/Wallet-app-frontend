import TransactionHistory from '../TransactionHistory/TransactionHistory';
import OpenModalBtn from '../UI/openModalBtn';
import { useState, useEffect } from 'react';
import trans from '../TransactionHistory/transactions.json';
import styles from './transactionPage.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../customMuiTheme';
// import axios from 'axios';
import transactionsOperations from '../../../redux/transactions/transactions-operations';
import { getIsAuthenticated } from '../../../redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';

const TransactionPage = () => {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState(trans);
  // const [transactions, setTransactions] = useState([]);
  const [addFormData, setAddFormData] = useState({
    date: '',
    type: false,
    category: '',
    comment: '',
    amount: '',
    // balancy: '',
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

// const TransactionPage = () => {

//     const [transactions, setTransactions] = useState(trans);
//     // const [transactions, setTransactions] = useState([]);
//     const [type, setType] = useState(false);
//     // console.log(type)
//     const [addFormData, setAddFormData] = useState({
//         date: '',
//         type: '',
//         category: '',
//         comment: '',
//         amount: '',
//         balancy: '',
//     });

//     const [modalActive, setModalActive] = useState(false);
//     // const [category, setCategory] = useState(false);

// //   useEffect(()=>{
// //         axios.get('http://localhost:8000/transactions')
// //         .then(response => setTransactions(response.data))
// //     }, [])

// console.log(addFormData)

//     const  handleAddForm = e => {
//         e.preventDefault();
//         let fieldValue;
//         const fieldName = e.target.getAttribute('name');
//         // if(fieldName==="type"){
//         //     fieldValue = e.target.checked;
//         // }
//         fieldName==="type" ? (fieldValue = type) : fieldValue = e.target.value;

//         const newFormData = { ...addFormData };
//         newFormData[fieldName] = fieldValue;
//         setAddFormData(newFormData);
//         console.log(fieldValue)

//         // console.log(e)
//     };
//     // const reset = () => {
//     //     setAddFormData({     date: '',
//     //     type: '',
//     //     category: '',
//     //     comment: '',
//     //     amount: '',
//     //     balancy: '', });
//     //   };

//     const handleFormAddSubmit = e => {
//         e.preventDefault();
//         const newTransaction = {
//             id: nanoid(),
//             date: addFormData.date,
//             type: addFormData.type,
//             category: addFormData.category,
//             comment: addFormData.comment,
//             amount: addFormData.amount,
//             balancy: addFormData.balancy,
//         };
//         const newTransactions = [...transactions, newTransaction];
//         setTransactions(newTransactions);

//     };
//     const handleFormCancel = e => {
//         setAddFormData({
//             date: '',
//             type: '',
//             category: '',
//             comment: '',
//             amount: '',
//             balancy: '',
//         });
//         setModalActive(false)

//     };

//     const handleOpenModal=()=>{
//         setModalActive(true)
//     }

//     return (<ThemeProvider theme={theme}>
//         <div className={styles.container}>
//             <TransactionHistory items={transactions} />
//             <OpenModalBtn onClick={handleOpenModal}>

//             </OpenModalBtn>
//             <ModalContainer active={modalActive} setActive={setModalActive}  onHandleChange={handleAddForm}
//                 onHandleSubmit={handleFormAddSubmit}
//                 handleFormCancel={handleFormCancel}
//                 setType={setType}
//                 />

//         </div>
//         </ThemeProvider>
//     );
// };

// export default TransactionPage;
