import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactOperation';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(' ');
  const [number, setNumber] = useState(' ');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const reset = () => {
    setName(' ');
    setNumber(' ');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      Notiflix.Notify.warning(' Please fill in all fields!');
    }
    const newObject = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newObject));
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <p className={css.labelText}>Name</p>
        <input
          className={css.imputForm}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="username: "
          required
        />
      </label>
      <label>
        <p className={css.labelText}>Number</p>
        <input
          className={css.imputForm}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          placeholder="Enter number tel:"
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
