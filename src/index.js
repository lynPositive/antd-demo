import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NormalLoginForm from './App';
import * as serviceWorker from './serviceWorker';

import {Provider,connect} from 'react-redux';
import configureStore from './model/store/store';
import {login} from './model/action/loginAction';

const mapStateToprops = (state) =>{
  return {
    user: state.user
  }
}
const CounterComponent = connect(mapStateToprops,{login})(NormalLoginForm);

const store = configureStore().store;

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
//用来处理离线缓存，消息推送，后台自动更新等新任务
//registerServiceWorker就是为react项目注册了一个service worker，用来做资源的缓存，这样你下次访问时，
//就可以更快的获取资源。而且因为资源被缓存，所以即使在离线的情况下也可以访问应用（此时使用的资源是之前缓存的资源）。
serviceWorker.unregister(); 
