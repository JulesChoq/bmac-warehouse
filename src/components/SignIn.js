import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import firebase from '../firebase';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onClick = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        this.setState({ ...INITIAL_STATE });
        console.log(firebase.auth().currentUser)
        history.push(routes.HOME);
        
      })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message)
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <Input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <Button disabled={isInvalid} onClick={this.onClick} type="primary">
          Sign In
        </Button>

        { error && <p>{error.message}</p> }
      </Form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};