import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactOperation';
import { selectorContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = form.elements;
    const isCurrentContactsBook = (name, contacts) => {
      return contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    };

    if (isCurrentContactsBook(name.value, contacts)) {
      alert(`${name.value} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: name.value, number: number.value }));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <p className={css.labelText}>Name</p>
        <input
          className={css.imputForm}
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          name="name"
          placeholder="Enter username: "
          required
        />
      </label>
      <label>
        <p className={css.labelText}>Number</p>
        <input
          className={css.imputForm}
          id="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          placeholder="Enter  number:"
          type="tel"
          name="number"
          required
        />
      </label>

      <button className={css.buttonForm} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
