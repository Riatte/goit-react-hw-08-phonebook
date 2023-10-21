import styled from 'styled-components';
export const StyledContacts = styled.li`
  padding-top: 5px;
  width: 785px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: #7ac7eb;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  border-radius: 8px;
  height: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px blue;
  }
`;

export const StyledName = styled.span`
  color: #000000;
`;

export const StyledNumber = styled.span`
  padding-left: 10px;
  color: #756060;
`;
