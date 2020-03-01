import React,{Component} from 'react';


class Mianshi extends Component {
  constructor(props){
    super(props);
    this.state ={
      list:['li','sa','sds','cv']
    }
  }

  handleClick (value){
    console.log(value.target.value);
    let values = value;
    // this.state.list.filter(function(current,index,arr),values)
    // var r = this.state.list.filter(function(s){
    //   return  this.state.list.
    // })
    
  }

  render() {

    var listRender = [];
    if(this.state.list.length!=0){
      for(let i=0;i<this.state.list.length;i++){
        listRender.push(
          <div key={i}>
            <ul>
              <li>{this.state.list[i]}</li>
            </ul>
          </div>
        )
      }
    }

		return (
			<div>
        <input 
          placeholder="请输入选择"
          // onChange = {(value)=>this.handleClick(value)}
          onChange = {(value)=>this.handleClick(value)}
        ></input>
         {listRender}
      </div>
		)
	}
}

export default Mianshi;
