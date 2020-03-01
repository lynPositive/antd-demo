import React,{Component} from 'react';

class btest extends Component{

  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps,nextState){
    return false;
  }

  render() {
    console.log('btestrender,renderrender');
    return (
      <div>
        bbbbbb
      </div>
    );
    
  }

}

export default btest;