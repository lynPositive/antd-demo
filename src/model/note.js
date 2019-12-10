// // 在第一次渲染后调用,只在客户端。之后组件已经形成对应的DOM结构,可以通过this.getDOMNode()来进行访问
// componentDidMount (){
//   // console.log('componentDidMount',this);
//  }
 
//  //在组件接受一个新的prop时被调用。这个方法在初始化render时不会被调用
//  componentWillReceiveProps(){
//   // console.log('componentWillReceiveProps');
//  }
 
//  // 返回一个布尔值。在接受新的prop或者state时被调用。在初始化时或者使用froceUpdate时不被调用
//  // 可以在你不需要重新更新组件时使用
//  shouldComponentUpdate(){
//   // console.log('shouldComponentUpdate');
//  }
 
//  // 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用
//  componentWillUpdate(){
//    //console.log('componentWillUpdate');
//  }
 
//  // 在组件完成更新后立即调用。在初始化时不会被调用
//  componentDidUpdate(){
//   // console.log('componentDidUpdate');
//  }

//  // 在组件从DOM中移除的立刻被调用
//  componentWillUnmount(){
//   // console.log('componentWillUnmount');
//  }

/*
map方法有返回值，返回值用变量接收
例一：
var num = [1,2,3];
var newNum = num.map((ele,index)=>{
   return ele+3
})
console.log(newNum);// 4,5,6
 */



 