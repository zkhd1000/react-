import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/actions";
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Button} from "antd-mobile";
import Logo from '../../components/logo/logo'

class Login extends Component {
    //初始化状态
    state={
        username:'',
        password:'',
    }
    toRegister =() =>{
        this.props.history.replace('/register')
    }
    login= () =>{
        this.props.login(this.state)
        console.log(this.state);
        
    }
    handleChange= (name,val) =>{
        this.setState({
            [name]:val
        })
    }

  render() {
    // const{type} =this.state
    const{msg,redirectTo}=this.props.user
    if(redirectTo){
        return <Redirect to={redirectTo}/>//在render()中实现自动跳转指定路由
    }
    return (
      <div>
        <NavBar>用户登录</NavBar>
        <Logo/>
        <WingBlank>
            <List>
            <p>{msg}</p>
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
export default connect(
    state =>({user:state.user}), //向 UI 组件login中传入一般属性
    {login} //向 UI  组件传入函数属性
                //传给UI组件不是异步action函数本身,而是包含分发异action的一个新的函数 
)(Login)