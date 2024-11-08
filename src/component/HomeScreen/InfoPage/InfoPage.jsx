import React, { useState } from 'react';
import './InfoPage.css';
import HeaderScreen from "../../headerscreen/headerscreen";
import Passwordimg from '../../../assets/passwordimg.svg';

const InfoPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [subFlag1, setSubFlag1] = useState(false);  
    const [subFlag2, setSubFlag2] = useState(false);  
    const [subFlag3, setSubFlag3] = useState(false);  

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setSubFlag1(value.trim() !== '');
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setSubFlag2(value.includes('@') && value.includes('.')); // Simple email format check
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setSubFlag3(value.length >= 6); // Example of minimum length check
    };

    const isFormComplete = subFlag1 && subFlag2 && subFlag3;

    return (
        <div className="body information">
            <HeaderScreen pageNu="3" title="Enter Your Information" text="Please enter your personal information to complete the registration process." />
            <div className="optionInfoPage">
                <p>Name</p>
                <input 
                    placeholder="Enter your full name" 
                    type="text" 
                    className={subFlag1 ? 'active' : ''} 
                    value={name} 
                    onChange={handleNameChange}
                />
                <p>Email</p>
                <input 
                    placeholder="Enter your email address" 
                    type="email" 
                    className={subFlag2 ? 'active' : ''} 
                    value={email} 
                    onChange={handleEmailChange}
                />
                <p>Password</p>
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter Password"
                    className={subFlag3 ? 'active password-input' : 'password-input'}
                />
                <button type="button" onClick={togglePasswordVisibility} className="toggle-password-btn">
                    <img src={Passwordimg} alt="Toggle password visibility" />
                </button>
            </div>
            <div className="btn">
                {isFormComplete ? (
                    <a href="VerifyCode" className="activeurLink">Complete registration</a>
                ) : (
                    <span className="btnlink inactive">Complete registration</span>
                )}
            </div>
        </div>
    );
};

export default InfoPage;
