import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MonthlyGoals.css'
const MonthlyGoals = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="goals-nav">
        <div className='goals-img'>
          <img src="/assets/logo-pic-black.png" alt="logo" className='logo' />
        </div> 
        <div className='goals-h1'>
          <h1>MY GOALS FOR THE MONTH</h1>
        </div>
        <input type="month" className='date'/>
      </div>
      <div className='goals'>
      <div>
        <button><p>Finance</p></button>
          <ul>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
          </ul>
      </div>
      <div>
        <button>Rent</button>
          <ul>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li>
          </ul>
      </div>
      </div>
      <div className='week-foot nav-btn'>
            <button>Save</button>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    </div>
  )
}

export default MonthlyGoals