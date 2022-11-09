import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <button
          className={css.button}
          type="button"
          onClick={() => handleDeleteContact(id)}
        >
          X
        </button>
      </td>
    </>
  );
}

ContactItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
