import { Form, Icon, Input, Button, Checkbox, Alert, message, Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';
import { login } from './model/action/loginAction';
import storage from './model/storage';
import HomeContent from '../src/homeConent';

class NormalLoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectKey: 1,
    }
    console.log('=============>',this);
  }
  // 点击登录
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('http://192.168.0.212:8080/tms_v2/auth/login', {
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
    console.log(select);
    this.setState({
      selectKey: select.key
    });
  }
  render() {
    const { Header, Content, Footer } = Layout;
    const { getFieldDecorator } = this.props.form;
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
              <Menu.Item key="4">[{this.props.user.user.phone}/{this.props.user.user.name}]</Menu.Item>
              <Menu.Item key="5">退出</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '20px 0px' }}>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              {/* {this.state.selectKey} */}
              {
                this.state.selectKey==1?
                <HomeContent/>
                 :
                123
              }
            </div>
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
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      );
    }
  }
}

export default Form.create()(NormalLoginForm);