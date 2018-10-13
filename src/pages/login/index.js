/**
 *  A component
 */

import React from 'react';
import LoginForm from '../../components/LoginForm';

const styles = {
  container: { 
    display: 'flex',
    justifyContent: 'center',
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
      <div>
      <br/><br/><br/>
      <img src="http://cap60.com/images/BMAC.png"/>
      <div style={styles.container}>
      <LoginForm/>
      </div>
      </div>
      

    );
  }
}

export default Login;
