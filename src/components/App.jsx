import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactFrom/ContactForm';
import ContactList from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import Filter from './Filter/Filter';

import { fetchContacts } from '../redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <ContactForm />
      <Filter />

      {contacts.length > 0 && <ContactList />}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  );
};
