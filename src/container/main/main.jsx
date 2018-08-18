import React, { Component } from 'react'
import { Switch, Route ,Redirect} from "react-router-dom";
import Cookies from 'js-cookie';
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Laoban from '../laoban/laoban'
import Dashen from '../dashen/dashen'
import Message from '../message/message';
import Personal from '../personal/personal'
import NotFound from '../../components/not-found/not-found';
import NavFooter from '../../components/nav-footer/nav-footer/nav-footer';

import { getUser } from "../../redux/actions";
import {getRedirectPath} from '../../utils'
class Main extends Component {
  navList= [
    {
      path:'/laoban',
      component:Laoban,
      title:'大神列表',
      icon:'dashen',
      text:'大神'
    },
    {
      path:'/dashen',
      component:Dashen,
      title:'老板列表',
      icon:'laoban',
      text:'老板'
    },
    {
      path:'/message',
      component:Message,
      title:'消息列表',
      text:'消息'
    },
    {
      path:'/personal',
      component:Personal,
      title:'个人中心',
      text:'个人'
    }
  ]
  componentDidMount = () => {
    const userid = Cookies.get('userid')
    const {user} = this.props
    if(userid && !user._id) {
      this.props.getUser()
    }
  }
  
  render() {
    const pathname =this.props.location.pathname
    const userid = Cookies.get('userid')
    if (!userid) {
      this.props.history.replace('/login')
      return null
    }
    const {user} =this.props
    if(!user._id){
      return null
    }else {
      if(pathname ==='/'){
        const path=getRedirectPath(user.type,user.header)
        return <Redirect to={path}/>
      }
      if(user.type ==='laoban'){
        this.navList[1].hide=true
      }else{
        this.navList[0].hide=true
      }
    }
    const currentNav =this.navList.find(nav => nav.path ===pathname)
    return (
      <div>
        {currentNav?<NavBar className='stick-top'>{currentNav.title}</NavBar>:null}
        <Switch>
          <Route path='/laobaninfo' component={LaobanInfo}/>
          <Route path='/dasheninfo' component={DashenInfo}/>
          <Route path='/dashen' component={Dashen}/>
          <Route path='/laoban' component={Laoban}/>
          <Route path='/message' component={Message}/>
          <Route path='/personal' component={Personal}/>
          <Route component={NotFound}/>          
        </Switch>

        {currentNav?<NavFooter unReadCount={this.props.unReadCount}
        navList={this.navList}/>:null}
      </div>
    )
  }
}
export default connect(
  state =>({user:state.user}),
  {getUser}
)(Main)