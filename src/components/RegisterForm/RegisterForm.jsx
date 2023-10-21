import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  StyledRegisterButton,
  StyledRegisterForm,
  StyledRegisterInput,
  StyledRegisterItems,
  StyledRegisterLabel,
} from './RegisterFormStyled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit} autoComplete="off">
      <StyledRegisterLabel>
        <StyledRegisterItems>Username</StyledRegisterItems>
        <StyledRegisterInput type="text" name="name" />
      </StyledRegisterLabel>
      <StyledRegisterLabel>
        <StyledRegisterItems>Email</StyledRegisterItems>
        <StyledRegisterInput type="email" name="email" />
      </StyledRegisterLabel>
      <StyledRegisterLabel>
        <StyledRegisterItems>Password</StyledRegisterItems>
        <StyledRegisterInput type="password" name="password" />
      </StyledRegisterLabel>
      <StyledRegisterButton type="submit">Register</StyledRegisterButton>
    </StyledRegisterForm>
  );
};
