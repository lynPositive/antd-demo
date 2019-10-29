import {createStore} from 'redux'; //创建仓库
import reducer from '../model/reducer';

const store = createStore(reducer);

export default store;
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

