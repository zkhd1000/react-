import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar,Button,InputItem,TextareaItem } from "antd-mobile";
import { Redirect } from "react-router-dom";

import HeaderSelector from '../../components/header-selector/header-selector';
import { updateUser } from "../../redux/actions";


class LaobanInfo extends Component {

    state ={
        header:'',
        info:'',
        post:'',
        company:'',
        salary:''
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
            return <Redirect to='/laoban'/>
        }
        return (
            <div>
                <NavBar>老板完善信息</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem onChange={val =>this.handlerChange('post',val)}>招聘职位</InputItem>
                <InputItem onChange={val =>this.handlerChange('company',val)}>公司名称</InputItem>
                <InputItem onChange={val =>this.handlerChange('salary',val)}>职位薪资</InputItem>
                <TextareaItem 
                title='职位要求'
                rows={3}
                onChange={val =>this.handlerChange('info',val)}
                />
                <Button type='primary' onClick={ () =>this.props.updateUser(this.state)}>保存</Button>
            </div>
        );
    }
}

export default connect(
 state => ({user: state.user}) 
    ,
    {updateUser}
)(LaobanInfo);