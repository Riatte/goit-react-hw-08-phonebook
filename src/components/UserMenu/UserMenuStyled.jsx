import styled from 'styled-components';

export const StyledUserButton = styled.button`
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

export const StyledUsername = styled.p`
  font-weight: 700;
  color: #7ac7eb;
`;

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
