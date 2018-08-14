/**
 * 包含n个action的模块(本质是创建action的action creator)
 * 1.同步action
 * 2.异步action
 */
import {reqRegister,reqLogin} from '../api/index'
import { AUTH_SUCCESS,ERROR_MSG } from "./action-types";//有几个type就会有几个同步action
//注册或者登录的成功同步action
const authSuccess =(user) =>({type:AUTH_SUCCESS,data:user})
//显示失败的同步action
const errorMsg =(msg) =>({type:ERROR_MSG,data:msg})
/**
 * 注册的异步action
 */

 export function register({username,password,type}) {
     return dispatch =>{
         //执行异步代码(发送Ajax请求)
         reqRegister({username,password,type}).then(response =>{
             const result = response.data//{code:0,data:user} ||{code:1,msg:'xxx}
             console.log('------',result);             
            if(result.code===0){
                //分发同步action(成功)
                const user=result.data
                dispatch(authSuccess(user))
            }else{
                //分布同步action
                const msg=result.msg
                dispatch(errorMsg(msg))
            }
        })
         //异步得到结果,分发同步action
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