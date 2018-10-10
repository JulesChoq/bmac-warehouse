/**
 *  A component
 */

import React from 'react';
import firebase from '../../firebase.js';
import { Button } from 'antd' ;

const styles = {
  container: { 
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5%',
    
  },
};

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languagecode = 'us';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  signIn = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
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
}
  
  signOut = () => {firebase.auth().signOut().then(function() {
  }).catch(function(error) {
  });
}

  getUser = () => {firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      alert("User is signed in.")
    } else {
       alert("User is not signed in.")
    }
  })
  }

  render() {
    return(
      <div style={styles.container}>
      <Button  onClick={this.signIn} type="primary">Login</Button>
      <Button onClick={this.getUser} type ="outline">Check User</Button>
      <Button  onClick={this.signOut} type="danger">Logout</Button>
      </div>

    );
  }
}

export default Login;
