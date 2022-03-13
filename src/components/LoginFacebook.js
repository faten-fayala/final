import React from 'react'
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log(response);
}
const componentClicked = (data) => {
    console.log(data);
  }
const LoginFacebook = () => {
    return (
        <div>
         <FacebookLogin
    appId="268691211959988"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
        </div>
    )
}

export default LoginFacebook
