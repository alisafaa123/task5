import React, { useState } from 'react';
import './phonepage.css';
import HeaderScreen from "../../headerscreen/headerscreen";
import Flage from '../../../assets/flage.svg';

const Phonepage = () => {
    const [flag, setFlag] = useState(false);  
    const [phoneNumber, setPhoneNumber] = useState('');
    const [SubFlage, setSubFlage] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setPhoneNumber(value);
            setSubFlage(value.length > 0); 
            setError('');
            if (value.length === 10) { 
                setFlag(true); 
            } else {
                setFlag(false); 
            }
        } else {
            setError('Please enter only numbers');
            setSubFlage(false);
        }
    };

    return (
        <div className="body">
            <HeaderScreen pageNu="1" title="Enter Your Phone Number" text="Enter your phone number to verify your identity and the validity of your number to safely activate your account on the platform." />
            <div className="optionPhonepage">
                <div className="input">
                    <div className="text">
                        <img src={Flage} alt="" />
                        <select name="" className={SubFlage ? 'active' : ''}>
                            <option value="">
                                <p>+964</p>
                            </option>
                        </select>
                    </div>
                    <input className={SubFlage ? 'active' : ''}
                        type="text"
                        placeholder="Enter Your Phone Number"
                        value={phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
            </div>
            <div className="btn">
                {flag ? (
                    <a href="VerifyCode" className="activeurLink">Send verification code</a>
                ) : (
                    <span className="btnlink inactive">Send verification code</span>
                )}
            </div>
        </div>
    );
};

export default Phonepage;
