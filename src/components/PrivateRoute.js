import React from "react";
import {Route, Redirect } from 'react-router-dom';
import {UserContext} from '../context/user';

export default function PrivateRoute({children, ...props}) {
  const {user} = React.useContext(UserContext); 
  return user.token? <Route > {children}</Route> : <Redirect to='/login'></Redirect>; //if logged in, return children; or redirect to login. 
 
}
