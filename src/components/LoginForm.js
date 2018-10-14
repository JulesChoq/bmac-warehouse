import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import './LoginForm.css';
import firebase from '../firebase.js'

const FormItem = Form.Item;


//START COMPONENT
class LoginForm extends React.Component {
  
//Login Logic
/* Need to do this > check if username is in db. 
If yes, signin, if no createUser. (Maybe a create user page
    or is jeff going to manually make accounts at the start
    and let volunteers use anonymouse signUP? */


 handleSubmit = (e) => {
      e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {    
            this.signIn(values.userName,values.password);
            console.log('Received values of form: ', values);
          } 
        }
        );
      }

//FIREBASE FUNCTIONS



 createUser=(email,password)=>{firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ...
  });}
  signIn =(email,password)=> {firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    }
    
    // ...
  );
}
  signOut=()=>{firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });}


  //RENDER 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);