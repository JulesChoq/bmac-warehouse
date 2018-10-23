import React from 'react';

import firebase from '../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            alert("Sign out success");
          }).catch(function(error) {
            // An error happened.
            alert("error");
          })
    }
  >
    Sign Out
  </button>

export default SignOutButton;