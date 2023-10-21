import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser } from 'redux/auth/selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const getIsFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !getIsFetchingCurrentUser && (
      <section>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    component={<RegisterPage />}
                    redirectTo="/contacts"
                  ></RestrictedRoute>
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  ></RestrictedRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  ></PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </div>
      </section>
    )
  );
};
