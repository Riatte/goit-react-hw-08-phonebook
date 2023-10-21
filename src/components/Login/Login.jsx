import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledLoginForm, StyledLoginLabel } from './LoginStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLoginLabel>
        Email
        <input type="email" name="email" />
      </StyledLoginLabel>
      <StyledLoginLabel>
        Password
        <input type="password" name="password" />
      </StyledLoginLabel>
      <button type="submit">Log In</button>
    </StyledLoginForm>
  );
};
