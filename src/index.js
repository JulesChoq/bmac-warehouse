import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from './../src/components/LoginForm';
import LoginPage from './../src/login.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginPage/>, document.getElementById('root'));
registerServiceWorker();
