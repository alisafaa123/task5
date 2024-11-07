import React, { useState } from 'react';
import './InfoPage.css';
import HeaderScreen from "../../headerscreen/headerscreen";
import Passwordimg from '../../../assets/passwordimg.svg';


const InfoPage = () => {
    const [value, setValue] = useState(''); 
    const [showPassword, setShowPassword] = useState(false); 

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState); 
    };

    return (
        <div className="body">
            <HeaderScreen pageNu="3" title="Enter Your Information" text="Please enter your personal information to complete the registration process." />
            <div className="optionInfoPage">
                    <p>Name</p>
                    <input placeholder='enter your Full name'/>
                    <p>Email</p>
                    <input placeholder='Enter your Email Address'/>
                    <p>Password</p>
                    <input
                        type={showPassword ? "text" : "password"} 
                        value={value}
                        onChange={(e) => setValue(e.target.value)} 
                        placeholder="Enter Password"
                        className="password-input"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="toggle-password-btn">
                       <img src={Passwordimg} alt="" />
                    </button>
            </div>
            <div className="btn">
                <a href="VerifyCode" className="activeurLink">Complete registration</a>
            </div>
        </div>
    );
};

export default InfoPage;
