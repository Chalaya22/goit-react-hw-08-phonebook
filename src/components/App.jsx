// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { fetchContacts } from 'redux/contactOperation';
// import {
//   selectorContacts,
//   selectorIsLoading,
//   selectorError,
// } from 'redux/selectors';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Loader from './LoaderPhone/LoaderPhone';
// import Filter from './Filter';

// export const App = () => {
//   const contacts = useSelector(selectorContacts);
//   const isLoading = useSelector(selectorIsLoading);
//   const error = useSelector(selectorError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   useEffect(() => {
//     if (error === 'ERR_BAD_REQUEST') {
//       toast.error('Sorry! There are some problems! Try again later.');
//       return;
//     }
//     if (error) {
//       toast.error(error);
//     }
//   }, [error]);

//   return (
//     <section className="styledSection">
//       {error !== null && <p> Ooops... {error}</p>}
//       {isLoading && <Loader />}
//       <h1 className="titlePhone">Phonebook ❤️</h1>
//       <ContactForm />

//       <h2 className="titleContact">Contacts</h2>
//       {contacts.length > 1 && <Filter />}

//       {contacts.length !== 0 && <ContactList />}
//     </section>
//   );
// };

// ___________________________________________________________________________
import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { current } from 'redux/auth/authOperatioms';
import { useAuth } from 'hooks';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('pages/register/Register'));
const Login = lazy(() => import('pages/login/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isCurrent } = useAuth();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
//_____________________________________________________________________________
