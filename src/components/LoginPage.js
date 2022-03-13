import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../actions/authAction'
import { useNavigate } from "react-router-dom";
import LoginFacebook from './LoginFacebook';
import GoogleeLogin from './GoogleeLogin';
import ContactForm from './ContactForm';
import CalculateBmi from './CalculateBmioriginal';
const LoginPage = () => {
    const [info,setInfo]=useState({
        email:"",
        password:""
    })
    const auth = useSelector(state => state.authReducer.isauth)
    const load = useSelector(state => state.authReducer.loading)
    const dispatch=useDispatch() 
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(login(info))
  }
 const navigate = useNavigate()
  useEffect(() => {
     if (auth) 
     navigate('/profile')
  }, [auth])
    return (
        <div>
          {load && <h1>loading</h1>}
           <h1> login</h1>

           <form onSubmit={handleSubmit}>
           <input placeholder='email' onChange={(e)=>setInfo({...info,email:e.target.value})}/>
           <input placeholder='password' onChange={(e)=>setInfo({...info,password:e.target.value})}/>
           <button >submit</button>
           <LoginFacebook/>
           <GoogleeLogin/>
           <ContactForm/>
          
           </form>
        </div>
    )
}

export default LoginPage
