import React, { useState } from 'react';
import './startScreen.css';
import imgleft from '../../../assets/leftimg.svg';
import imgright from '../../../assets/rightimg.svg';
import HeaderScreen from "../../headerscreen/headerscreen";

const StartScreen = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="body">
                        <HeaderScreen title="Let’s Get started!" text="How do you plan to use this platform" />
            <div className="option">
                <button 
                    className={activeButton === 'freelancer' ? 'active' : ''} 
                    onClick={() => handleClick('freelancer')}
                >
                    <img src={imgleft} alt="" />
                    <div className="text">
                        <h1>Freelancer</h1>
                        <p>I’m a freelancer ready to work for <br /> projects</p>
                    </div>
                </button>
                <button 
                    className={activeButton === 'client' ? 'active' : ''} 
                    onClick={() => handleClick('client')}
                >
                    <img src={imgright} alt="" />
                    <div className="text">
                        <h1>Client</h1>
                        <p>I’m a client searching for talented freelancers</p>
                    </div>
                </button>
            </div>
            <div className="btn">
  {activeButton === 'client' || activeButton === 'freelancer' ? (
    <a href="Phonepage" className="activeurLink">Next &gt;</a>
  ) : (
    <span className="btnlink inactive">Next &gt;</span>
  )}
</div>
        </div>
    );
};

export default StartScreen;
