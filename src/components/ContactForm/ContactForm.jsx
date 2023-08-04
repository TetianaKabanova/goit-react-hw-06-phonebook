import PropTypes from 'prop-types';
import {
  Form,
  Label,
  Input,
  SubmitButton,
  Wrapper,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setNumber } from 'redux/phonebookReducer';

export const ContactForm = ({ onSubmit }) => {
  const name = useSelector(state => state.phonebook.name);
  const number = useSelector(state => state.phonebook.number);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        dispatch(setName(value));
        break;
      case 'number':
        dispatch(setNumber(value));
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    dispatch(setName(''));
    dispatch(setNumber(''));

    reset(name, number);
  };

  const reset = () => {
    dispatch(setName(''));
    dispatch(setNumber(''));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Wrapper>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
