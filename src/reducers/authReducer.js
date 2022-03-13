import React from 'react'
import {LOGOUT,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILED,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILED,GET_PROFILE_REQUEST,GET_PROFILE_SUCCESS,GET_PROFILE_FAILED} from '../actions/authtypes'
const initialState={
    isauth:Boolean(localStorage.getItem('isauth')),
    token:localStorage.getItem('token'),
    loading:false,
    user:JSON.parse(localStorage.getItem('user')),
   
    errors:null
    }

const userReducer = (state=initialState,{type,payload}) => {
  switch(type){
    case REGISTER_REQUEST:
      case LOGIN_REQUEST: return {...state,loading:true}
      case REGISTER_SUCCESS: 
      localStorage.setItem('token',payload.token)
      return  {...state,loading:false,isauth:true,token:payload.token,errors:null}
      case REGISTER_FAILED: 
      localStorage.removeItem('token')
      return {...state,token:null,errors:payload}
      case LOGIN_SUCCESS: 
      localStorage.setItem('token',payload.token)
      localStorage.setItem('isauth',true)
      return  {...state,loading:false,isauth:true,token:payload.token,errors:null}
      case GET_PROFILE_REQUEST: return {...state,loading:true}
      case GET_PROFILE_SUCCESS: 
      localStorage.getItem('user',JSON.stringify(payload))
      return {...state,user:payload}
      case GET_PROFILE_FAILED:
      case LOGIN_FAILED: return {...state,loading:false,isauth:false,token:null,errors:payload}
      case LOGOUT: localStorage.clear()
      return {...state,loading:false,isauth:false,token:null,errors:payload,user:null}
      default:return state
  }
}

export default userReducer
 