import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const FormD = () => {

    const navigate = useNavigate()
  return (
    <div className='formNa'>
        <nav id="nav-f">
        <div>
         <a href="/"><img src="./assets/black.medium.png" alt="logo" className='logo'/></a>
        <FaTimes onClick={() => navigate('/')} className='bars'/>
        </div>
            <div className='btn-f'>
            <button class="btn t-btn " onClick={() => navigate('/Login')}>Login</button>
            <button class="btn t-btn"   onClick={() => navigate('/Signup')}>Sign up</button>
            </div>
    </nav>
    </div>
  )
}

export default FormD