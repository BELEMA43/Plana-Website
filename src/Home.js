import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css'
import { FaFacebookF,FaWhatsapp } from "react-icons/fa";
import { FaBars } from 'react-icons/fa6';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="main-h">
        <div>
            <div className='s-nav'>
            <img src="./assets/black.medium.png" alt="logo" className='logo'/>
            <FaBars className='bars' onClick={() => navigate('FormD')}/>
            </div>
        <nav id="nav">
        <div>
        <img src="./assets/black.medium.png" alt="logo" className='logo'/>
        </div>
    <div>
        <ul className='nav-links'>
        <li><a href="#HOME">Home</a></li>
        <li><a href="#ABOUT">About</a></li>
        <li><a href="#AIM">Aim</a></li>
        <li><a href="#CONNECT">Connect with us</a></li>
        </ul>
    </div>
            <button class="btn-L" onClick={() => navigate('/Login')}>Login</button>
            <button class="btn"   onClick={() => navigate('/Signup')}>Sign up</button>
    </nav>
        <section id="HOME">
            <div className="home-content">
                <img src="./assets/Welcome-img.jpg" alt="picture" className='think-img' />
                <div className="Welcome-text" >
                    <h1>How do you feel?</h1>
                    <p>When you plan and cannot keep a prompt track of your goals and achievements.</p>
                </div>
            </div>
        </section>
        <section id="ABOUT">
            <h1>ABOUT US</h1>
                <div className="abt-content">
                    <p>
                        PLAN A is a tracking tool for reflection, planning and improvement. it helps in starting your day and rounding it off. keep track of your goals and activities with PLAN A , track activity progress, build a healthy routine and lts more...
                    </p>
                </div>
            <button className="btn-L">Read more </button>
            <div className="testimonies">
                <h2>TESTIMONIES</h2>
            </div>

        </section>
        <section id="AIM">
            <div className="news-content">
                <b>START TODAY AND GET THE CHANCE TO ACHIEVE THAT GOAL WITH THE HELP OF AMAZING TRACKERS</b>
                <img src="./assets/handsTogether.jpg" alt="" />
            </div>
        </section>

        <div id="CONNECT">
            <div className="con-content">
                <p>Get to be that champion TODAY with PLAN A</p>
                <button className="btn con-btn" >Explore guide </button>
                 <div className="news-end">
                    <p>Subscribe to our Newsletter today and get weekly remainders about goals, options and rewards.</p>
                 </div>
                 <button className="btn-L con-btn">Subcribe Now</button>
            </div>
            <footer>
                <p className="connect">CONNECT WITH US</p>
                <p>Telephone N0: (+234)91XXX23029</p>
                <p>Address : GRA Phase 3,Port Harcourt.</p>
                <p>Website: MyPlana.shop</p>
                <div className='icon'>
                   <a href="*"><FaWhatsapp />@What'sApp</a>
                   <a href="*"><FaFacebookF />@Facebook</a>
                </div>
            </footer>
        </div>

    </div>
    </div>
  )
}

export default Home