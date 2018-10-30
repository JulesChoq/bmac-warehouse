/**
 *  A component
 */

import React from 'react';

function sessionCheck() 
{
    if (firebase.auth().currentUser) {
    } else {
      <Redirect to="./SignIn"/>
  }
}

class SessionHandle extends React.Component {  
  componentDidMount(){sessionCheck()}
  render() {
    return(
      <div></div>
    );
  }
}

export default SessionHandle;