import React from 'react'
import {useNavigate} from 'react-router-dom'
import './NftMarket.css'
const NftMarket = () => {

    const navigate = useNavigate()
  return (
    <div>
        <div className="nft-nav">
        <img src="/assets/black.medium.png" alt='' class="logo"/>
        <div className="btn-web">
            <button>Connect Wallet</button>
        </div>
    </div>

    <div className="main-nft">
        <div className="main-nft-content">
            <h1>Achieve your goals and get rewarded.</h1>
            <p>Mint your achievements as NFT's today.</p>
            <button className="a-btn">View Achievements</button>
             <button className="o-btn">Mint NFT</button>
        </div>
        <img src="/assets/prize.png" alt="image" className="prize"/>
    </div>
    <div className="foot">
        <img src="/assets/planA.png" alt="image" className="foot"/>
    </div>
    <div className='nft-back'>
        <button className='o-btn nft-bac' onClick={() => navigate('/')}>Back</button>
    </div>
    </div>
  )
}

export default NftMarket