import { useDispatch, useSelector } from 'react-redux';

import { selectUsername, selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import {
  StyledUserButton,
  StyledUserWrapper,
  StyledUsername,
} from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <StyledUserWrapper>
          <StyledUsername>Welcome, {username}</StyledUsername>
          <StyledUserButton type="button" onClick={() => dispatch(logOut())}>
            Logout
          </StyledUserButton>
        </StyledUserWrapper>
      ) : (
        <div></div>
      )}
    </div>
  );
};
