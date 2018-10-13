/**
 *  A component
 */

import React from 'react';
import LoginForm from '../../components/LoginForm';

const styles = {
  container: { 
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5%',
    
  },
};




class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }  render() {
    return(
      <div style={styles.container}>
      <LoginForm/>
      </div>
      

    );
  }
}

export default Login;
