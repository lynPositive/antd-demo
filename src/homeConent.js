
import React,{ Component } from "react";


export default class HomeContent extends Component {

  constructor(props){
    super(props);
  }
  
  // 在渲染前调用，在客户端也在服务端
  componentWillMount (){
    console.log('componentWillMount',this);
   // this.getData();
   function mapStateToProps(state) {
      return {
        isAuthenticated: state
      }
    } 
    console.log('()()()()()()()()()',this.props.isAuthenticated)
  }

  

  getData(){
    // fetch('http://192.168.0.212:8080/tms_v2/cartask/appList',{
    //   method:"get",
    //   query:{"limit":100, "offset": 10}, 
    //   headers:{"Authorization": _token},
    // }).then(res=>res.json()).then(data=>{
    //     if(data.code!=0){
    //     }else {
    //     }
    // }).catch(e=>console.log(e));
  }
  // 在第一次渲染后调用,只在客户端。之后组件已经形成对应的DOM结构,可以通过this.getDOMNode()来进行访问
  componentDidMount (){
    console.log('componentDidMount',this);
  }
  
  //在组件接受一个新的prop时被调用。这个方法在初始化render时不会被调用
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  
  // 返回一个布尔值。在接受新的prop或者state时被调用。在初始化时或者使用froceUpdate时不被调用
  // 可以在你不需要重新更新组件时使用
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
  }
  
  // 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  
  // 在组件完成更新后立即调用。在初始化时不会被调用
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  // 在组件从DOM中移除的立刻被调用
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render() {
    console.log('-----HomeContent----props-------',this);

    return (
      <div>HomeContent</div>
    );
  }
}

/*
使用react redux 库的connect() 方法来生成来生成容器组件前，
需要先定义mapStateToProps这个函数来指定如何把当前redux store state 映射到展示组件的props
*/
