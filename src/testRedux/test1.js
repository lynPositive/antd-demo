import React,{Component} from "react";
import {connect} from 'react-redux';

class Test1 extends Component {
  constructor(props){
    super(props);
    this.state={
      number:0,
      test:1
    }
    console.log('1-------constructor');
    
  }
   
  handleClick(value){    
    let length = value.target.value.length;
    this.setState({
      number:length
    })
  }

  componentWillMount(){
    console.log('2----------componentWillMount');
  }

  componentDidMount(){
    console.log('4------------componentDidMount');
    // setTimeout(()=>{
    //   this.setState({
    //     test:1
    //   })
    // },100);
    // setTimeout(()=>{
    //   this.setState({
    //     test:2
    //   })
    // },100);
    this.setState({
      test:1
    });
    this.setState({
      test:2
    })
    
  }

  componentWillUnmount(){
    console.log('--------------componentWillUnmount');
  }

  componentWillReceiveProps(nextProps){
    console.log('--------------componentWillReceiveProps');
  }
  // getDerivedStateFromProps(nextProps, prevState){
  //   //在最近一次渲染输出(提交到DOM节点)之前调用。它使得组件能在发生更改之前从DOM中获取一些信息例如滚动位置）。
  //   // 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
  //   console.log('--------------getDerivedStateFromProps');
  // }
  

  shouldComponentUpdate(nextProps,nextState){
    console.log('--------------shouldComponentUpdate');
    return true;
  }
  
  componentWillUpdate (nextProps,nextState){
    console.log('--------------componentWillUpdate');
  }
  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('--------------getSnapshotBeforeUpdate');
  // }

  componentDidUpdate(prevProps, prevState){
    console.log('--------------componentDidUpdate');
  }

  
  // handleClickChange =(e)=>{
  //   console.log(e.target.value);
  // }

  render(){
    console.log(this.state.number);
    console.log('3--------------render');
    return(
      <div clss="content">
        <input  
           onChange = {(value)=>{console.log('=========',this);this.handleClick(value)}}
          // onChange={this.handleClickChange}
        />
        <span>{this.state.number}</span>
        ===={this.state.test}
      </div>
    )
  }
}



export default Test1;
