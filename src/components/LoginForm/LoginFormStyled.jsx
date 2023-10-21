import styled from 'styled-components';

export const StyledLoginFForm = styled.form`
  width: 320px;
`;

export const StyledLoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StyledLoginFormButton = styled.button`
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

export const StyledLoginFormInput = styled.input`
  width: 150px;
  margin-left: 20px;
  border-radius: 4px;
  border: solid 2px #7ac7eb;

  &:hover,
  &:focus {
    box-shadow: 0 0 5px blue;
  }
`;

export const StyledLoginFormItems = styled.div`
  background-color: #7ac7eb;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  height: 35px;
  width: 90px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;
