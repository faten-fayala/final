import {LOGOUT,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILED,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILED,GET_PROFILE_REQUEST,GET_PROFILE_SUCCESS,GET_PROFILE_FAILED} from './authtypes'
import axios from 'axios'
import {setToken} from '../helpers/helpers'
// export const register=()=>dispatch=>{

// }
export const login=(info)=>async(dispatch)=>{
   dispatch({
       type:LOGIN_REQUEST
   })
   try{
       const res= await axios.post('http://localhost:5000/api/users/login',info)
       console.log(res.data)
       dispatch({
        type:LOGIN_SUCCESS,
        payload:res.data
       })
   }
  
catch(err){
    dispatch({
        type:LOGIN_FAILED,
      
        payload:err.message ? err.message : err.response.data.errors
       })
}
 

   
}
export const getProfile=()=>async(dispatch)=>{
    dispatch({
        type:GET_PROFILE_REQUEST
    })
    try{
        setToken()
        const res= await axios.get('http://localhost:5000/api/users/getprofile')
        dispatch({
            type:GET_PROFILE_SUCCESS,
            payload:res.data
           })
    }
    catch(err){
        dispatch({
            type:GET_PROFILE_FAILED,
          
            payload: err.response.data.errors
           })
}}
export const logout=()=>{
    return({
        type:LOGOUT
    })
}
export const register=(info)=>async(dispatch)=>{
    dispatch({
        type:REGISTER_REQUEST
    })
    try{
        const res= await axios.post('http://localhost:5000/api/users/register',info)
        console.log(res.data)
        dispatch({
         type:REGISTER_SUCCESS,
         payload:res.data
        })
    }
   
 catch(err){
     dispatch({
         type:REGISTER_FAILED,
       
         payload:err.message ? err.message : err.response.data.errors
        })
 }
  
 
    
 }