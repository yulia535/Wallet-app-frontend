import registerImg from '../../../img/register-img.png';
import RegistrationForm from '../RegistrationFormTest';
import styles from './registerpage.module.css';

export default function RegistrationPage() {
  //   const dispatch = useDispatch();
  //   const contacts = useSelector(getFilteredContacts);

  //   // const onDeleteContact = (contactId) => {
  //   //   dispatch(phonebookOperations.deleteContact(contactId));
  //   // };

  //   const onDeleteContact = useCallback(
  //     contactId => {
  //       dispatch(phonebookOperations.deleteContact(contactId));
  //     },
  //     [dispatch],
  //   );

  return (
    <section className={styles.register}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          {/* <div className="sidebar-wrapper"> */}
          <img
            src={registerImg}
            alt="registreation-page-img"
            className={styles.img}
          />
          <h1 className={styles.title}>Finance App</h1>
          {/* </div> */}
        </div>

        <RegistrationForm />
      </div>
    </section>
  );
}
