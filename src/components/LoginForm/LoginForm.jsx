import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  StyledLoginFForm,
  StyledLoginFormButton,
  StyledLoginFormInput,
  StyledLoginFormItems,
  StyledLoginLabel,
} from './LoginFormStyled';

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
    <StyledLoginFForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLoginLabel>
        <StyledLoginFormItems>Email</StyledLoginFormItems>
        <StyledLoginFormInput type="email" name="email" />
      </StyledLoginLabel>
      <StyledLoginLabel>
        <StyledLoginFormItems>Password</StyledLoginFormItems>
        <StyledLoginFormInput type="password" name="password" />
      </StyledLoginLabel>
      <StyledLoginFormButton type="submit">Log In</StyledLoginFormButton>
    </StyledLoginFForm>
  );
};
