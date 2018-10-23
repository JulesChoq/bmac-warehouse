/**
 *  A component
 */
import firebase from '../../firebase';
import React from 'react';
import {Button} from 'antd';

const styles = {
  container: {
  },
};




class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }



  checkUser = () => {
if (firebase.auth().currentUser) {
  alert("User connected:    "+firebase.auth().currentUser.email)
} else {
  // No user is signed in.
  alert("No user signed in")
}
}
  
  
  
  render() {
    return(
      <div style={styles.container}>
      This is the home page.<br/>
      {firebase.auth().currentUser?firebase.auth().currentUser.email:"No user"}
      <Button onClick={this.checkUser}>Check For User</Button> 
      </div>
    );
  }
}

export default Home;
