import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { StyledHeader } from './AppBarStyled';

export const AppBar = () => {
  return (
    <StyledHeader>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </StyledHeader>
  );
};
