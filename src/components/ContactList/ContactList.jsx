import ContactItem from './ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map(({ id, name, phone }) => {
          return (
            <tr key={id}>
              <ContactItem id={id} name={name} phone={phone} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
