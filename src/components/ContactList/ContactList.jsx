import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactItem,
  Contact,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookReducer';
import { toast } from 'react-toastify';
import { notifyOptions } from 'components/notifyOptions';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id, name) => {
    dispatch(deleteContact(id, name));
    toast.info(
      `Contact with with name ${name} has been deleted!`,
      notifyOptions
    );
  };

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <DeleteButton onClick={() => handleDeleteContact(id, name)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
