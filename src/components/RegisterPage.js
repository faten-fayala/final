import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {register} from '../actions/authAction'
import {useNavigate} from 'react-router-dom'
import CalculateBmi from './CalculateBmioriginal'
const RegisterPage = () => {
    const [info,setInfo]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })
     const auth = useSelector(state => state.authReducer.isauth)
    // const load = useSelector(state => state.authReducer.loading)
    const dispatch=useDispatch() 
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(register(info))
  }
  const navigate = useNavigate()
  useEffect(() => {
     if (auth) 
     navigate('/profile')
  }, [auth])
    return (
        <div>
         
           <h1> register</h1>
           <form onSubmit={handleSubmit}>
           <input placeholder='firstname' onChange={(e)=>setInfo({...info,firstname:e.target.value})}/>
           <input placeholder='lastname' onChange={(e)=>setInfo({...info,lastname:e.target.value})}/>
           <input placeholder='email' onChange={(e)=>setInfo({...info,email:e.target.value})}/>
           <input placeholder='password' onChange={(e)=>setInfo({...info,password:e.target.value})}/>
           <button >submit</button>
           </form>
           <CalculateBmi/>
        </div>
    )
}

export default RegisterPage
