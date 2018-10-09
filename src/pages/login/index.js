/**
 *  A component
 */

import React from 'react';
import firebase from '../../firebase.js';
import { Button } from 'antd' ;

const styles = {
  container: {
  },
};

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
      This is our login page!
      </div>
    );
  }
}

export default Login;
