import React,{Component} from "react";
import {NumberTest} from '../../src/model/action/numberTestAction';
import {connect} from 'react-redux';

class Test1 extends Component {
  constructor(props){
    super(props);
    this.state ={
      numTest:1
    }    
  }

  insert(){
    this.props.NumberTest(this.props.numTest1==undefined?0:this.props.numTest1+1);
  }

  render(){
    const numTest = this.state.numTest;
    return(
      <div>
        <span style={{fontSize:"26px"}}>{numTest}</span>
        <span style={{fontSize:"26px"}}>{this.props.numTest1}</span>
        <button onClick={()=>{this.insert()}}>增加</button>
      </div>
    )
  }

}

const mapStateToProps = (state) =>{
  return {
    numTest1:state.testReducer.numberTest
  }
}

export default connect(mapStateToProps,{NumberTest})(Test1);
