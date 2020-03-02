import React,{Component} from 'react';

class atest extends Component{

  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps,nextState){
    return false;
  }

  render() {
    return (
      <div>
        aaaaaa
      </div>
    );
    
  }

}

export default atest;