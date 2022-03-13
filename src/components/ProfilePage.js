import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getProfile,logout} from '../actions/authAction'
import {Navigate} from 'react-router-dom'
const ProfilePage = () => {
    const user = useSelector(state => state.authReducer.user)
    const isauth = useSelector(state => state.authReducer.isauth)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getProfile())
    }, [])
    return (
        <div>
           { isauth ?  <div>   
           <h2>profile name</h2>
          {  user && <h2>hello {user.firstname}</h2>}
           <button onClick={()=>dispatch(logout())}>logout</button></div>: <Navigate to='/login/'/>}
        </div>
    )
}

export default ProfilePage
