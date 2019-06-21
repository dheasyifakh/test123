import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dropzone from './dropzone';
import * as serviceWorker from './serviceWorker';
import DropzoneTest from './dropzone';
import LoginForm from './Component/LoginForm';
import  { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><LoginForm/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
