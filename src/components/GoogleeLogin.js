import React from 'react'
import GoogleLogin from 'react-google-login'
import {FcGoogle} from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
const GoogleeLogin = () => {
    return (
        <div>
            <div>
                <video src={shareVideo} type="video/mp4" loop controls={false} autoPlay muted />
            </div>
        </div>
    )
}

export default GoogleeLogin

