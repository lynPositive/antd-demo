import React,{Component} from 'react';
import {Consumer} from '../src/App';

class Grandson extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Consumer>
        {(grandpa)=>
          <div>11111{grandpa}</div>
        }
        {/* {grandpa} */}
      </Consumer>
    )
  }
  
}

export default Grandson;