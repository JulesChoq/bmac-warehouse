import Firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from './../src/components/LoginForm';

const styles = {
  container: { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
  },
};

var user = Firebase.auth().currentUser;

class LoginPage extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  handleLogin = (val) => {
    this.setState({loggedIn: val})
    console.log(this.state.loggedIn)
  }

  render() {
    return(
      <div style={styles.container}>
        {this.state.loggedIn ? <App/> : 
              <div> 
              {console.log(this.state.loggedIn)}
              <img src="http://cap60.com/images/BMAC.png"/>
               <LoginForm handler = {this.handleLogin} /> 
              </div>
            }
        
      </div>
    );
  }
}

export default LoginPage;