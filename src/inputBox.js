import React,{ Component } from "react";
import { InputNumber,Button, Form } from 'antd';
import  {demof} from '../src/model/functionC';
import { setNumber } from '../src/model/action/numberAction';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import Grandson from '../src/Grandson';
import CustomTextInput from '../src/CustomTextInput';


// function CustomTextInput(props) {
//   return (
//     <div>
//       <input ref={props.inputRef} />
//     </div>
//   );
// }

class BoxInfo extends Component{
 
  constructor(props){
    super(props);
    this.state={
      number:1
    }
    this.myRef = React.createRef();
    this.myRefs = React.createRef();
   // this.inputElement = React.createRef();

  }
  // 减少
  reduce(){
    if(this.props.num>0){
      this.props.reduceInsert(this.props.num-1);
    }
  }
  // 增加
  insert(){
    this.props.reduceInsert(this.props.num+1);
    this.props.setNumber(10);
  }
  //
  newNum(value){    
    this.props.reduceInsert(value);
  }
  //更新过程“1”
  //当props发生改变执行时,初始化render时不执行，在这个回调函数里面,你可以根据属性的变化，
  //通过调用this.setSate()来更新,新的组件，旧的属性还是可以通过this.props来获取，这里调用更新状态时是安全的
  //并不会触发额外的render
  componentWillReceiveProps (nextProps){
    // console.log('componentWillReceiveProps');
    if(nextProps.num!==this.props.num){
      this.setState({
        number:this.state.number+1
      })
    }
  }
   // 优化 更新过程“2”
   shouldComponentUpdate(nextProps,nextState){
    // console.log('shouldComponentUpdate,inputBox');
    if(nextProps==this.props) return false;
    return true;
    
   }
  //更新过程“3”
  //在组件接收到新的props或者state但还没有render时被调用，初始化时不会被调用
  //此生命周期,不可以写setState
  componentWillUpdate (nextProps,nextState){
    
  }
  // 更新过程“5”
  // 这个方法在render之后调用,用它当成操作DOM或者执行更多异步请求的机会
  componentDidUpdate(prevProps,prevState){
    // console.log('componentDidUpdate');
    // prevProps  旧的属性
    // prevState 旧的状态
    // console.log('1componentDidUpdate',prevProps);
    // console.log('2componentDidUpdate',prevState);
  }

  componentDidMount(){
    this.myRef.current.innerHTML = "练习";
  }

  // 更新过程“4”
  render() {    
    const { numberList } = this.props;    
    const node = this.myRef.current;

    return (
      <div>
        <div ref={this.myRef}></div>
          <CustomTextInput  a={1} ref={this.myRefs}/>
        <div>
        <p>印言优品></p>
        <div style={{display:"flex"}}>
          <div style={{width:"100px",height:"100px",border:"1px solid red"}}></div>
          <div>
            <div>小尖刀牛仔裤~穿出你的小蛮腰</div>
            <div>深蓝色L码</div>
            <div style={{display:"flex"}}>
              <div><Button onClick={()=>{this.reduce()}}>-</Button></div>
              <div style={{width:"100px"}}>
                <InputNumber placeholder={this.props.num}
                  onChange ={(value)=>{this.newNum(value)}}
                  />
              </div>
              <div><Button type="primary" onClick={()=>{this.insert()}}>+</Button></div>
            </div>
            <span>{this.state.number}</span>
            <div>{numberList}</div>
            
          </div>
        </div>
        </div>
        <Grandson></Grandson>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  // console.log('list,list,list',state);
  // numberLists 对应reducer里面的numberLists
  return  {
    numberList: state.numberReducer.numberLists
  }

}

export default connect(mapStateToProps,{setNumber})(BoxInfo);
// export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(BoxInfo))