import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const UserAuthRoute = ({ isLoggedIn, ...props }) => {
  return isLoggedIn ? <Route {...props} /> : <Navigate to="/login" />;
};

export default UserAuthRoute;
