import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.link} to="/">
        <div className={css.items}>Home</div>
      </NavLink>
      <NavLink className={css.link} to="/contacts">
        <div className={css.items}>Contacts</div>
      </NavLink>
    </nav>
  );
};
