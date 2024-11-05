import React, { useState } from 'react';
import './startScreen.css';
import imgleft from '../../../assets/leftimg.svg';
import imgright from '../../../assets/rightimg.svg';

const StartScreen = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="body">
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
            <div className="btn"><a href="" className={activeButton === 'client' ? 'activeurLink' : 'btnlink'} >Next    &gt; </a></div>
        </div>
    );
};

export default StartScreen;
