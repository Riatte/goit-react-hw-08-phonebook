import {
  StyledContacts,
  StyledButton,
  StyledName,
  StyledNumber,
} from './ContactTemplateStyled';
import { useDeleteContactMutation } from 'redux/services/contactApi';

export const ContactTemplate = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <StyledContacts>
      <StyledName>{name}: </StyledName>
      <StyledNumber>{number} </StyledNumber>
      <StyledButton
        onClick={() => {
          deleteContact({ id, name });
        }}
      >
        Delete
      </StyledButton>
    </StyledContacts>
  );
};
