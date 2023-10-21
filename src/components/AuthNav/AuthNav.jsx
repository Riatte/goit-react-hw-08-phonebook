import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './AuthNav.module.css';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <span role="img" aria-label="Greeting icon">
            📞
          </span>
        </div>
      ) : (
        <div>
          <NavLink className={css.link} to="/register">
            <div className={css.items}>Register</div>
          </NavLink>

          <NavLink className={css.link} to="/login">
            <div className={css.items}>Log In</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};
