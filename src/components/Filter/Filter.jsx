import PropTypes from 'prop-types';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/phonebookReducer';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(setFilter(event.target.value));

  return (
    <FilterWrap>
      <FilterLabel>
        <FilterInput
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Type a name to search"
        />
      </FilterLabel>
    </FilterWrap>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
