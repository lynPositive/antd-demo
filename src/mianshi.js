import React,{Component} from 'react';
import Controlled from '../src/test/Controlled';
import Fcontrolled from '../src/test/fContriiled';
import Table from '../src/test/table';

class Mianshi extends Component {
  constructor(props){
    super(props);
    this.state ={
      list:['li','sa','sds','cv','lla','l'],
      lists:['li','sa','sds','cv','lla','l']
    }
  }

  handleClick (value){
    let values = value.target.value;    
    let a=this.state.lists.filter(function(current,index,arr){
      let l=arr.indexOf(values);
      return current.indexOf(values)!=-1;
    });
    this.setState({
      list:a
    }) 
  }

  render() {
    var listRender = [];
    if(this.state.list.length!=0){
      this.state.list.map((value,i,array)=>{
        listRender.push(
          <div key={i}>
            <li style={{lineHeight:"30px"}}>{this.state.list[i]}</li>
          </div>
        )
      });
    }
		return (
			<div>
        <input 
          placeholder="请输入选择"
          onChange = {(value)=>this.handleClick(value)}
        ></input>
         {listRender}
         {/* 受控组件练习 */}
         <Controlled></Controlled>
         <div style={{height:"20px"}}></div>
         {/* 非受控组件 */}
         <Fcontrolled></Fcontrolled>
         {/* table表格练习 */}

      </div>
		)
	}
}

export default Mianshi;
