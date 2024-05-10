import React from 'react'
import './WebHome.css'
import {useNavigate} from 'react-router-dom'

const WebHome = () => {

  const navigate = useNavigate()
  return (
    <div className='web-h'>
        <div className="nav">
           <img src="../assets/black.medium.png" alt="logo" className="logo"/>
           <div className='nav-btn'>
                <button className='nav-btn3'onClick={() => navigate('MonthlyGoals')}>Monthly plans</button>
                <button className='nav-btn3' onClick={() => navigate('Weekly')}>Weekly plans</button>
                <button className='nav-btn3' onClick={() => navigate('DayView')}> Daily plans</button>
                <button className="nav-btn2 " onClick={() => navigate('NFTMarket')}>NFT Marketplace</button>
                <input type="date" className='dates' />
           </div>
        </div>
    <div className="main">
        <img src="../assets/aim.jpg" alt="aim-pic" className='aim-pic'/>
        <div className="main-content">
            <h1>GET REWARDED FOR YOUR EFFORTS AND GOALS</h1>
            <p>Keep track of your financial goals and activities with PLAN A today. Track activity progress and develop a productive and healthy life routine.</p>
        </div>
    </div>

    <footer>
        <hr/>
        <h4>Achievement follows decisions and actions. Get your PLAN A today.</h4>
    </footer>
    </div>
  )
}

export default WebHome