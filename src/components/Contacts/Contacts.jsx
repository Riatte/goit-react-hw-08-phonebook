import { StyledContactList, StyledContactWraper } from './ContactsStyled';
import { useSelector } from 'react-redux';
import { getFilter, getIsLoading } from '../../redux/auth/selectors';
import ContentLoader from '../ContentLoader/ContentLoader';
import { useFetchContactsQuery } from 'redux/services/contactApi';
import { ContactTemplate } from 'components/ContactTemplate/ContactTemplate';

export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const { data = [] } = useFetchContactsQuery();

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );
  return (
    <StyledContactWraper>
      <StyledContactList>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactTemplate key={id} name={name} number={number} id={id} />
        ))}

        {isLoading && <ContentLoader />}
      </StyledContactList>
    </StyledContactWraper>
  );
};
