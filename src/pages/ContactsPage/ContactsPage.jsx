import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';

import { StyledContac, StyledTitel } from './ContactsPageStyled';
import { useSelector } from 'react-redux';
import { selectUsername, selectIsLoggedIn } from 'redux/auth/selectors';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

export default function ContactsPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUsername);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <StyledTitel>{username} phonebook: </StyledTitel>
          <ContactForm />
          <StyledContac>Contacts</StyledContac>
          <ContactFilter />
          <Contacts />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
