import { getRedirectPath } from "../utils/index";
import {combineReducers} from 'redux'
import { AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER } from "./action-types";//有几个type就会有几个同步action
const initUser={
  username:'',
  type:'',
  msg:'',
  redirectTo:'',
}
function user(state=initUser,action) {
  switch(action.type){
    case AUTH_SUCCESS: // 认证成功
    const redirectTo = getRedirectPath(action.data.type, action.data.header)
    return {...action.data, redirectTo}
  
    case ERROR_MSG:
    const msg=action.data 
    return{...state,msg}
    
    case RECEIVE_USER:
    return action.data

    case RESET_USER:
    return {...initUser,msg:action.data}

    default:
    return state
  }
}



export default combineReducers({
 user
})
/*
1. 向外暴露是一个整合后的reducer函数: function (state, action)
2. state的结构为: {xxx: xxx(), yyy: yyy()}
 */