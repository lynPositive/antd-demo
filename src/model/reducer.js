// 纯函数的原则: 输入和输出是一致的
// reducer 状态和修改状态
// action 派发

// 用户--> 视图层
// 用户--> 视图层；action 派发；store 仓库；provider 提供者；reducer 状态和修改状态；
// 组件1.视图组件 2.容器组件
import {increase} from './action';

let counter = 0;

function reducer(state={counter:0},action){
  console.log("reducer",action);
  switch(action.type){
    case 'INCREASE':
			return {counter:state.counter+1};
		default:
			return state;
  }
}

export default reducer;
