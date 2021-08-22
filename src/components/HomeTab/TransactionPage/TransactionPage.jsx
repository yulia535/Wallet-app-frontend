import TransactionHistory from '../TransactionHistory/TransactionHistory';
import OpenModalBtn from '../UI/openModalBtn';
import { useState, useEffect } from 'react';
import trans from '../TransactionHistory/transactions.json';
import { nanoid } from 'nanoid';
import styles from './transactionPage.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';
// import axios from 'axios';

const TransactionPage = () => {

  
    const [transactions, setTransactions] = useState(trans);
    // const [transactions, setTransactions] = useState([]);

    const [addFormData, setAddFormData] = useState({
        date: '',
        type: '',
        category: '',
        comment: '',
        amount: '',
        balancy: '',
    });

    const [modalActive, setModalActive] = useState(false);

//   useEffect(()=>{
//         axios.get('http://localhost:8000/transactions')
//         .then(response => setTransactions(response.data))
//     }, [])



    const handleAddForm = e => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
      
        // console.log(e)
    };

    // const reset = () => {
    //     setAddFormData({     date: '',
    //     type: '',
    //     category: '',
    //     comment: '',
    //     amount: '',
    //     balancy: '', });
    //   };

    const handleFormAddSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: nanoid(),
            date: addFormData.date,
            type: addFormData.type,
            category: addFormData.category,
            comment: addFormData.comment,
            amount: addFormData.amount,
            balancy: addFormData.balancy,
        };
        const newTransactions = [...transactions, newTransaction];
        setTransactions(newTransactions);
     
    };
    const handleFormCancel = e => {
        setAddFormData({
            date: '',
            type: '',
            category: '',
            comment: '',
            amount: '',
            balancy: '',
        });
        setModalActive(false)

    };

    const handleOpenModal=()=>{
        setModalActive(true)
    }

    return (
        <div className={styles.container}>
            <TransactionHistory items={transactions} />
            <OpenModalBtn onClick={handleOpenModal}>
                OPEN MODAL
            </OpenModalBtn>
            <ModalContainer active={modalActive} setActive={setModalActive}  onHandleChange={handleAddForm}
                onHandleSubmit={handleFormAddSubmit}
                handleFormCancel={handleFormCancel}/>
     
        </div>
    );
};

export default TransactionPage;
