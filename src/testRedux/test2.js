import React,{Component} from "react";
import {connect} from 'react-redux';


class Test2 extends Component{
  constructor(props){
    super(props);
    this.state={
      asynchronous:0
    }
  }

  increase(){
    this.setState((state)=>{
      return {asynchronous:state.asynchronous+1}
    })
  }

  Asynchronous(){
    this.increase();
    this.increase();
    this.increase();
  }

  render(){
    return(
      <div>
        {this.props.numTest1}
        <div onClick={()=>{this.Asynchronous()}}>异步{this.state.asynchronous}</div>
      </div>
    )
  }
}

const mapStateToprops = (state) =>{
  return {
    numTest1:state.testReducer.numberTest
  }
}

export default connect(mapStateToprops)(Test2);