import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Toggle = () => {
  const navigate = useNavigate()
  return (
      <div className="sidebar">
           <img src="/assets/black.medium.png" alt="logo" className="logo"/>
           <FaTimes onClick={() => navigate('/Signup/WebHome')} className='bars'/>
           <div className='nav-side-b'>
                <button className='nav-s-b'onClick={() => navigate('/MonthlyGoals')}>Monthly plans</button>
                <button className='nav-s-b' onClick={() => navigate('/Weekly')}>Weekly plans</button>
                <button className='nav-s-b' onClick={() => navigate('/DayView')}> Daily plans</button>
                <button className="nav-s-b " onClick={() => navigate('/NFTMarket')}>NFT Marketplace</button>
                <input type="date" className='datees' />
           </div>
        </div>

  )
}

export default Toggle