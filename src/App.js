import { Form, Icon, Input, Button, Checkbox,Alert ,message} from 'antd';
import React,{Component} from 'react';
import {ReactDOM} from 'react-dom';
import './App.css';
import {increase} from './model/action';

class App extends Component {
  render(){
    console.log(1,this.props);
    const {counter,increase} = this.props;
    return (
      <div  onClick ={increase} className="poi">
        请点击counter:{counter}
      </div>
    )
  }
}
export default App;

// class NormalLoginForm extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('values of form: ', values);
//         fetch('http://192.168.0.212:8080/tms_v2/auth/login',{
//           method:"post",
//           body:JSON.stringify({
//             "login":values.username,
//             "password":values.password,
//             "project":"tms"
//           })
//         }).then(res=>res.json()).then(data => {
//           if(data.code!="0"){
//             message.error(data.message);
//           }else {
//             console.log("data,data,data",data);
//             message.success('登录成功');
//           }
//         }).catch(e=>console.log(e));
//       }else {
//         console.log(err);
//       } 
//     });
//   };

//   render() {
//     console.log(this.props);
//     // const persistConfig = {
//     //   key:'root',
//     //   storage:storage,
//     //   stateReconciler:autoMergeLevel2 //
//     // };
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <Form.Item>
//           {getFieldDecorator('username', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Username"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input
//               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               type="password"
//               placeholder="Password"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(<Checkbox>Remember me</Checkbox>)}
//           <a className="login-form-forgot" href="">
//             Forgot password
//           </a>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// export default Form.create()(NormalLoginForm);



