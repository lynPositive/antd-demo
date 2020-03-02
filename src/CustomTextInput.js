import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      customerInfo:1
    }
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
  }

  render() {
    return (
      <div>
        {this.state.customerInfo}
        {/* {this} */}
        <input/>
      </div>
    );
  }
}

export default CustomTextInput;