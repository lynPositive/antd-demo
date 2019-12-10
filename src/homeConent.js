import React,{ Component } from "react";
import { Button } from 'antd';
import { Alert } from 'antd';
import  './style/homeContent.css';
import { format } from "path";
import {LoginReducer } from './model/reducers/loginReducer';
import ProfilePage from './wzt';
import CommentListWithSubscription from './gj';
import Welcome from './test';



 // 有状态组件
 class HomeContent extends Component {

  constructor(props){
    super(props);
    this.state ={
      list:[],
      test:1
    }
  }

  // 在渲染前调用，在客户端也在服务端
  componentWillMount (){
  //  console.log('componentWillMount',this);
   this.getData();
  }

  componentWillReceiveProps(nextProps){
    console.log('nextPropsnextPropsnextPropsnextProps',nextProps);
  }

  componentWillUpdate() {
    this.state.test = 2;
  }

  getData(){
    // fetch('http://192.168.0.04:8080/tms_v2/cartask/appList',{
    //   method:"get",
    //   query:{"limit":100, "offset": 10}, 
    //   headers:{"Authorization": this.props.token},
    // }).then(res=>res.json()).then(data=>{
    //   if(data.code==0){
    //     this.setState({list:data.result!=null?data.result:[]});
    //   }else {
    //    // <Alert message="获取数据失败" type="error" />
    //   }
    // }).catch(e=>console.log('eeeee',e));
  }
  
  render() {
    var listRender = [];
    if(this.state.list.length!=0){
      let lists = this.state.list["items"];
      for(var i=0;i<lists.length;i++){
      //  console.log(lists[i]);
        var carCusInfo = lists[i]["car_cus_info"];
        listRender.push(
          <div key={i}>
            <div className="homeFirst">
              <span className="distance">🚗</span>
              <span className="distances">{lists[i]["plate_number"]}</span>
              <Button type="danger" ghost>申请调整</Button>
            </div>
            <div>
              {
                carCusInfo.is_transport ==1?
                <div >仓库</div>
                :
                <div>客户</div>
              }
            </div>
          </div>
        )
      }
    }
    // 高阶函数：接受一个函数为参数，或者返回结果为函数的函数，就是一个高阶函数
    // const greaterThan = (n) => {
    //   return (m) => m > n;
    // }
    // let greaterThan10 = greaterThan(10); 
    // let isGreaterThan = greaterThan10(11); 
    // console.log(greaterThan10);// (m) => m > n
    // console.log(isGreaterThan);// true
    
    // 无状态组件
    // var Header = (props) =(
    //   <div>
    //     无状态组件
    //   </div>
    // );
    
   // return <div>{listRender}</div>
    return (
      <div>
        {/* {Header(1)} */}
        {/* {listRender} */}
        {/* {withSubscription} */}
        {/* <ProfilePage Function user={1}></ProfilePage> */}
        {/* {CommentListWithSubscription} */}
        <Welcome></Welcome>
      </div>
    );
  }
}




export default HomeContent

/*
使用react redux 库的connect() 方法来生成来生成容器组件前，
需要先定义mapStateToProps这个函数来指定如何把当前redux store state 映射到展示组件的props
*/

/*
浏览器端口：51835；服务器端口：8080
三次握手:
1.浏览器说: 服务器我想访问你的资源

*/
