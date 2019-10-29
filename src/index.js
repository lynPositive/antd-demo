import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './model/store';
import { connect } from 'react-redux';
import {increase} from './model/action';

const mapStateToprops = (state) =>{
  return {
	  counter: state.counter
  }
}
const CounterComponent = connect(mapStateToprops,{increase})(App);

ReactDOM.render(
  //Provider 提供了状态 
  <Provider store={store}> 
    <CounterComponent /> 
  </Provider>, 
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
