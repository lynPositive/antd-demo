import React,{Component} from 'react';

class Controlled extends Component{

  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
  
  handleSubmit=(e)=>{
    alert('提交的名字'+this.state.value);
  }

  handleChange=(e)=>{
    this.setState({value:e.target.value})
  }

  render() {
    return(
     <div>
       <form onSubmit={this.handleSubmit}>
         <label>
           名字:
           <input type="text" 
             value={this.state.value}  
             onChange={this.handleChange}
           >
           </input>
           <input type="submit" value="提交" />
         </label>
       </form>

       {/* <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form> */}
     </div>
    )
  }

}

export default Controlled;