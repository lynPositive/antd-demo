import React,{Component} from 'react';

class atest extends Component{

  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('测试测试，测试');
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