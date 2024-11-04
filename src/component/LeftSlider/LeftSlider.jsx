import React from 'react';
import './LeftSlider.css';
import line1 from '../../assets/line1.svg';
import line2 from '../../assets/line2.svg';

const LeftSlider = () => {
    return (
        <div className="leftside">
            <div className="text">
                <h1>Welcome to Your <br /> Freelancing Hub!</h1>
                <p>We're thrilled to have you here! Whether you're a client searching for skilled freelancers to bring your projects to life or a freelancer eager to find exciting opportunities, this is the place where connections are made, and ideas come to reality. Let's start building something amazing together!</p>
            </div>
            <div className="photo">
                <img src={line1} alt="decorative line" className='line1' />
                <img src={line2} alt="decorative line" className='line2' />
            </div>
        </div>
    );
};

export default LeftSlider;
