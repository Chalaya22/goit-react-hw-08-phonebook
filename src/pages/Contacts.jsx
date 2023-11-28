import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperation';
import { selectorContacts, selectorIsLoading } from 'redux/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/LoaderPhone/LoaderPhone';
import Filter from 'components/Filter/Filter';

export const Contacts = () => {
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className="styledSection">
      {isLoading && <Loader />}
      <h1 className="titlePhone">PHONEBOOKS </h1>
      <ContactForm />

      <h2 className="titleContact">CONTACTS</h2>
      {contacts.length > 1 && <Filter />}

      {<ContactList />}
    </section>
  );
};
export default Contacts;
