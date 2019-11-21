
import {createStore,applyMiddleware} from 'redux';
import loginReducer from '../reducers/loginReducer';
import thunk from 'redux-thunk'; // npm i --save redux-thunk
import {persistReducer,persistStore} from 'redux-persist'; // npm i redux-persist --save
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key:'a1',
  storage,
}

const persisteReducer = persistReducer(persistConfig,loginReducer);

export default()=>{
	// createStore 可以接受整个应用的初始状态作为参数
	// applyMiddleware 中间件有次序要求,使用前查下文档;比如logger就一定要放到最后,否则输出结果就不正确
	// applyMiddleware 是redux的原生方法,作用是将所有中间组件组成一个数组,依次执行
	let store = createStore(persisteReducer,applyMiddleware(thunk));
	// persistor 持久性 
	let persistor = persistStore(store);
	return {store,persistor}
}

// 直接将thunk中间件引入,放在applyMiddleware方法之中，传入createStore方法,
// const store = createStore(loginReducer,applyMiddleware(thunk));
// export default store; 
