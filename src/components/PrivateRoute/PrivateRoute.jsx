import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  selectIsLoggedIn,
  selectIsFetchingCurrentUser,
} from 'redux/auth/selectors';

export default function PrivateRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetching = useSelector(selectIsFetchingCurrentUser);
  const shouldRedierct = !isLoggedIn && !isFetching;
  return shouldRedierct ? <Navigate to={redirectTo} /> : component;
}
