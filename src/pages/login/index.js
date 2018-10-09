/**
 *  A component
 */

import React from 'react';
import firebase from '../../firebase.js';
import { Button } from 'antd' ;

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languagecode = 'us';
var user = firebase.auth().currentUser;
var name, email, photoURL, uid, emailVerified;

 if(user!=null) {
      name = user.displayName;
      email = user.email;
    }
const styles = {
  container: {
  },
};


firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.

  var user = firebase.auth().currentUser;
  

  var user = result.user;  
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

firebase.auth().signOut().then(function() {
}).catch(function(error) {
});

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  render() {
    return(
      <div style={styles.container}>
      <Button onClick={()=>{firebase.auth().signInWithRedirect(provider);}} type="primary">Login</Button>
      {/*<Button onClick={()=>{firebase.auth().signOut(provider)}} type="danger">Logout</Button>*/}
      {user?user.email:"Not logged in"}
      </div>

    );
  }
}

export default Login;
