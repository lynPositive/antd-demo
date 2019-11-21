/*
1.必须先有数据仓库store
2.仓库中必须有货品，货品其实就是状态而已 reducer
3.把reducer放到仓库中
4.应该有一个组件，而这个组件中希望显示仓库中的数据内容
5.仓库与组件是否能建立链接
6.mapStateToprops   状态转属性,因为状态是不可传递的,而属性传递属于组件化开发最简单的部分
7.组件与属性之间没有任何的联系,需要将它们进行链接操作,所以可以通过 connect 进行连接
8.当前的组件和store还没有任何关系，所以需要一个Provider提供store给组件                                                        
 */

// const mapDispatchToprops ={
// 	increase:()=>{
// 		return {
// 			type:"increase"
// 		}
// 	}
// }

// const mapStateToprops = (state) =>{
// 	return {
// 		counter: state.counter
// 	}
// }

// const CounterComponent  = connect(mapStateToprops)(Counter); // 状态转属性并和组件链接在一起


// const persistConfig = {
//   key: 'root',
//   storage:storage,
//   stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
// };

// const myPersistReducer = persistReducer(persistConfig,reducers);

// const store = createStore(myPersistReducer)

// export const persistor = persistStore(store)

// export default store

// =============================================================
// import {persistStore,persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

//比如登录信息，管理系统的权限，菜单列表等,还是选择存localstorage/localsession吧。在每次请求到数据后都去调用一次
//localstorage.set()感觉也挺麻烦的,最后的就是redux里有了数据直接自动放入localstorage里，于是用redux-persist

// 用来持久化---start
// const persistConfig = {
// 	key:'root', //必须有的
// 	storage: storage, // 
// 	stateReconciler:autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
// };

// const myPersistReducer = persistReducer(persistConfig,reducer);
// const store = createStore(myPersistReducer);

// export const persistor = persistStore(store);
//用来持久化---end



/********reducres*********/
// 纯函数的原则: 输入和输出是一致的
// reducer 状态和修改状态
// action 派发

// 用户--> 视图层
// 用户--> 视图层；action 派发；store 仓库；provider 提供者；reducer 状态和修改状态；
// 组件1.视图组件 2.容器组件
// import {increase} from './action';

// let counter = 0;

// function reducer(state={counter:0},action){
//   console.log("reducer",action);
//   switch(action.type){
//     case 'INCREASE':
//       return {counter:state.counter+1};      
// 		default:
// 			return state;
//   }
// }

// export default reducer;