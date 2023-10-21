import { StyledFilter } from './ContactFilterStyled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/auth/selectors';
import { SelectFilter } from 'redux/filter/filterSlice';

export const ContactFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(SelectFilter(target.value));
  };

  return (
    <>
      <StyledFilter>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={filter}
        />
      </StyledFilter>
    </>
  );
};
