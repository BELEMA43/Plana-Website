import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
  return (
    <div className="body-form">
        <div class="wrapper wrapper-l">
        <img src="./assets/black.medium.png" alt="" className='logo'/>
        <h1>Login</h1>
        <form action="">
            <div className="signup-link">
                <p>Don't have an account?<a href="#">Signup</a></p>
            </div> 
            <div className="input-box">
                <input type="text" placeholder="USERNAME" required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="PASSOWRD" required/>
            </div>
            <div className="remember-forgot">
                <label for=""><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn-1" onClick={() => navigate('/WebHome')}>Login</button>

        </form>
    </div>
    </div>
  )
}

export default Login