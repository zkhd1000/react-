import React, { Component } from 'react'
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Button} from "antd-mobile";
import Logo from '../../components/logo/logo'

export default class Register extends Component {
    //初始化状态
    state={
        username:'',
        password:'',
    }
    toRegister =() =>{
        this.props.history.replace('/register')
    }
    login= () =>{
        console.log(this.state);
        
    }
    handleChange= (name,val) =>{
        this.setState({
            [name]:val
        })
    }

  render() {
    return (
      <div>
        <NavBar>用户登录</NavBar>
        <Logo/>
        <WingBlank>
            <List>
            <InputItem type='username' placeholder='请输入用户名'
                        onChange={(val) =>{this.handleChange('username',val)}}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码'
                        onChange={(val)=>{this.handleChange('password',val)}}>密码:</InputItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;录</Button>
            <Button  onClick={this.toRegister}>没有账户</Button>
            <WhiteSpace/>
            </List>
        </WingBlank>
      </div>
    )
  }
}
