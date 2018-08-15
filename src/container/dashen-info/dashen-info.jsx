import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar,Button,InputItem,TextareaItem } from "antd-mobile";
import { Redirect } from "react-router-dom";

import HeaderSelector from '../../components/header-selector/header-selector';
import { updateUser } from "../../redux/actions";

class DashenInfo extends Component {
    state ={
        header:'',
        info:'',
        post:''
    }
    handlerChange =(name,val) =>{
        this.setState({[name]:val})
    }

    setHeader =(header) =>{
        this.setState({header})
    }

  render() {
    const {user} =this.props
    if(user.header){
        return <Redirect to='/dashen'/>
    }
    return (
      <div>
        <NavBar>大神完善信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem onChange={val =>this.handlerChange('post',val)}>应聘职位</InputItem>
                <TextareaItem 
                title='个人介绍'
                rows={3}
                onChange={val =>this.handlerChange('info',val)}
                />
                <Button type='primary' onClick={ () =>this.props.updateUser(this.state)}>保存</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user:state.user
})

const mapDispatchToProps = {
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DashenInfo)

