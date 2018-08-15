/**
 * 包含n个action的模块(本质是创建action的action creator)
 * 1.同步action
 * 2.异步action
 */
import {reqRegister,reqLogin,reqUpdateUser,reqUser} from '../api/index'
import { AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER } from "./action-types";//有几个type就会有几个同步action
//注册或者登录的成功同步action
const authSuccess =(user) =>({type:AUTH_SUCCESS,data:user})
//显示失败的同步action
const errorMsg =(msg) =>({type:ERROR_MSG,data:msg})
//
const receiveUser =(user)=>({type:RECEIVE_USER,data:user})
//
const resetUser =(msg) =>({type:RESET_USER,data:msg})
/**
 * 注册的异步action
 */

 export function register({username,password,password2,type}) {
    if(!username){
        return errorMsg('用户名不能为空')
    }
     if(!password){
        return errorMsg('密码不能为空')
    }
     if(!type){
        return errorMsg('请选择类型')
    }
    if(password !== password2){
        return errorMsg('两次密码输入不一致')
    }
    return async dispatch =>{
        const response= await reqRegister({username,password,type})
        const result=response.data
        if(result.code ===0){
            dispatch(authSuccess(result.data))
        }else {
            dispatch(errorMsg(result.msg))
        }
    }
  
 }
/**
 * 登录的异步action
 */
export function login({username,password}) {
    
    return async dispatch =>{
        if(!username) {
            return dispatch(errorMsg('用户名必须指定'))
          } else if(!password) {
            return dispatch(errorMsg('密码必须指定'))
          }
        //执行异步代码(发送Ajax请求)
        const response=await reqLogin({username,password})
        console.log('___',response);
        
        const result = response.data//{code:0,data:user} ||{code:1,msg:'xxx}
        console.log('=====',result);
        if(result.code===0){
            //分发同步action(成功)
            const user=result.data
            dispatch(authSuccess(user))
        }else{
            //分布同步action
            const msg=result.msg
            dispatch(errorMsg(msg))
        }
        
    }
}
export const updateUser =(user) =>{
    return async dispatch =>{
        const response= await reqUpdateUser(user)
        const result=response.data
        if(result.code===0){
            dispatch(receiveUser(result.data))
        }else{
            dispatch(resetUser(result.msg))
        }
    }
}
export const getUser =() =>{
    return async dispatch =>{
        const response =await reqUser()
        const result=response.data
        if(result.code===0){
            dispatch(receiveUser(result.data))
        }else{
            dispatch(resetUser(result.msg))
        }
    }
}