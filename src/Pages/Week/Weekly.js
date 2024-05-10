import React from 'react'
import './Weekly.css'
import { useNavigate } from 'react-router-dom'
const Weekly = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className='week-nav'>
            <img src="/assets/logo-pic-black.png" alt="" className='logo'/>
            <h1>MY WEEKLY PLANA</h1>
            <input type="week" className='date'/>
        </div>
        <div className='week-main'>
            <div className='week-main-t'>
               <h2>Weekly Goals</h2>
               <h4>Achieved</h4>
            </div>
            <div className='week-ol'>
            <ol>
                <li><input type='text'/></li>
                <li><input type='text'/></li>
                <li><input type='text'/></li>
                <li><input type='text'/></li>
                <li><input type='text'/></li>
                <li><input type='text'/></li>
                <li><input type='text'/></li>
            </ol>
            <ul>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
            </ul>
            </div>
        </div>
        <div className='remember'>
            <h2>Days to Remember</h2>
            <ul>
                <li><input type="checkbox" /><input type="text" /></li>
                <li><input type="checkbox" /><input type="text" /></li>
                <li><input type="checkbox" /><input type="text" /></li>
                <li><input type="checkbox" /><input type="text" /></li>
            </ul>
        </div>
        <div className='week-foot nav-btn'>
            <button>Save</button>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    </div>
  )
}

export default Weekly