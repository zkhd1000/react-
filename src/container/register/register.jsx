import React, { Component } from 'react'
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Radio,Button} from "antd-mobile";
import Logo from '../../components/logo/logo'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../redux/actions";

 class Register extends Component {
    //初始化状态
     state={
        username:'',
        password:'',
        password2:'',
        type:'dashen'
    }
    toLogin =() =>{
        this.props.history.replace('/login')
    }
    Register= () =>{
        console.log(this.state);
        this.props.register(this.state)
    }
    handleChange= (name,val) =>{
        this.setState({
            [name]:val
        })
    }

  render() {
    const{type} =this.state
    const{msg,redirectTo}=this.props.user
    if(redirectTo){
        return <Redirect to={redirectTo}/>//在render()中实现自动跳转指定路由
    }
    return (
      <div>
        <NavBar>用户注册</NavBar>
        <Logo/>
        <WingBlank>
            <List>
            <p className='error-msg'>{msg}</p>
            <InputItem type='username' placeholder='请输入用户名'
                        onChange={(val) =>{this.handleChange('username',val)}}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码'
                        onChange={(val)=>{this.handleChange('password',val)}}>密码:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请再次输入密码'
                        onChange={(val) =>{this.handleChange('password2',val)}}>确认密密码:</InputItem>
            <WhiteSpace/>
            <List.Item>
                <span>用户类型</span>&nbsp;&nbsp;&nbsp;
                <Radio checked={type==='laoban'} onChange={() =>{this.handleChange('type','laoban')}}>老板</Radio>&nbsp;&nbsp;&nbsp;
                <Radio checked={type==='dashen'} onChange={() =>{this.handleChange('type','dashen')}}>大神</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary' onClick={this.Register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>登&nbsp;&nbsp;录</Button>
            </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
    state =>({user:state.user}), //向 UI 组件register中传入一般属性
    {register} //向 UI  组件传入函数属性
                //传给UI组件不是异步action函数本身,而是包含分发异action的一个新的函数 
)(Register)
/**
 * 函数属性:
 * function(user){
 *  dispatch(register(user))
 * }
 */