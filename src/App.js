import { Form, Icon, Input, Button, Checkbox, Alert, message, Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';
import { login } from './model/action/loginAction';
import storage from './model/storage';
import HomeContent from '../src/homeConent';
// import InformationList from '../src/informationList';
import BoxInfo from '../src/inputBox';
import Test from '../src/test';
import Mianshi from '../src/mianshi';
import {HashRouter as Router,Link,Route} from 'react-router-dom';
import Test1 from '../src/testRedux/test1';
import Test2 from '../src/testRedux/test2';
import Tables from '../src/test/table';

// react--context
export const {Provider,Consumer} = React.createContext("defaultValue");

class NormalLoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectKey: 1,
      num:0,
      grandpa:10,
    }
  }
  // 点击登录
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('http://47.96.91.107:8080/tms_v2/auth/login', {
          method: "post",
          body: JSON.stringify({
            "login": values.username,
            "password": values.password,
            "project": "tms"
          })
        }).then(res => res.json()).then(data => {
          if (data.code != "0") {
            message.error(data.message);
          } else {
            this.props.login(data.result);
          }
        }).catch(e => console.log(e));
      } else {
        console.log(err);
      }
    });
  };
  //点击菜单时
  menuSelect = (select) => {
    this.setState({
      selectKey: select.key
    });
  }
  //
  handleClick(a){
    console.log(a);
  }
  //增加减少
  reduceInsert(newNum){
    this.setState({
      num:newNum
    });
  }
  render() {
    const { Header, Content, Footer } = Layout;
    const { getFieldDecorator } = this.props.form;  
    const grandpa = this.state.grandpa;  
    // return(
    //   <Provider value={grandpa}>
    //     <BoxInfo  num={this.state.num} reduceInsert={this.reduceInsert.bind(this)}></BoxInfo>
    //     <Test1></Test1>
    //     <Test2></Test2>
    //     {/* <Router>
    //       <Link to="/test1">test1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
    //       <Link to="/test2">test2</Link>
    //       <Route path="/test1" exact component={Test1}></Route>
    //       <Route path="/test2" component={Test2}></Route>
    //     </Router> */}
    //   </Provider>)
    if (this.props.user != null) {
      return (
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
              onClick={this.menuSelect}
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">装车单</Menu.Item>
              <Menu.Item key="3">我的</Menu.Item>
              <Menu.Item key="4">练习</Menu.Item>
              {/* <Menu.Item key="4">[{this.props.user.user.phone}/{this.props.user.user.name}]</Menu.Item> */}
              <Menu.Item key="5">退出</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '20px 0px' }}>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <Provider value={grandpa}>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              {
                this.state.selectKey==1?
                <BoxInfo {...this.state.grandpa} num={this.state.num} reduceInsert={this.reduceInsert.bind(this)}></BoxInfo>
                 :
                 this.state.selectKey==2?
                //  <HomeContent token={this.props.user.token} a={1} clickDemo={this.handleClick.bind(this)}/>     
                //
                <Mianshi ></Mianshi>  
                :   
                this.state.selectKey==4?
                <Tables></Tables>
                :
                <Test></Test>  // 高阶组件的练习   
                
              }
            </div>
            </Provider>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      );
    } else {
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })}
           */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
}

export default Form.create()(NormalLoginForm);
