/**
 *  A component
 */

import React from 'react';
import { Route, Redirect } from 'react-router'
import firebase from '../firebase';

function sessionCheck() 
{
    if (firebase.auth().currentUser) {
        return true;
    } else {
      <Redirect to="./SignIn"/>
      console.log("NotSign");
      return false;
  }
}

class AuthenticationProtect extends React.Component {  
  componentDidMount(){sessionCheck()}
  render() {
    return(
        <div>
        {!sessionCheck() ? <Redirect to='/SignIn'  /> : null }        
        </div>
    );
  }
}

export default AuthenticationProtect;