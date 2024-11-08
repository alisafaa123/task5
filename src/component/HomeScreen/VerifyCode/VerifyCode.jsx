import React, { useState, useEffect } from 'react';
import './VerifyCode.css';
import HeaderScreen from "../../headerscreen/headerscreen";
import { OtpInput } from 'reactjs-otp-input';
import Clock from '../../../assets/clock.svg';

const VerifyCode = () => {
    const [otp, setOtp] = useState('');
    const [seconds, setSeconds] = useState(59);
    const [Flage, setFlage] = useState(false);
    const handleChange = (otp) => {
        setOtp(otp);
        if (otp.length === 6) {
            setFlage(true);
        } else {
            setFlage(false);
        }
    };    
    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            window.location.reload();
        }
    }, [seconds]);
    const formatTime = (secs) => {
        const minutes = String(Math.floor(secs / 60)).padStart(2, '0');
        const secsRemaining = String(secs % 60).padStart(2, '0');
        return `${minutes}:${secsRemaining}`;
    };

    return (
        <div className="body">
            <HeaderScreen 
                pageNu="2" 
                title="Enter Your Phone Number" 
                text="Enter your phone number to verify your identity and the validity of your number to safely activate your account on the platform." 
            />
            <div className="verifycodepart">
            <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                    separator={<span> </span>}
                    inputStyle="otp-input"
                    containerStyle="otp-container"
                />
                <div className="timer">
                    <h4>
                        <img src={Clock} alt="Clock Icon" /> {formatTime(seconds)}
                    </h4>
                    <p>Didn't receive a message? <a href="/VerifyCode">Resend</a></p>
                </div>
            </div>
             <div className="btn">
                {Flage ? (
                    <a href="VerifyCode" className="activeurLink">Verify</a>
                ) : (
                    <span className="btnlink inactive">Verify</span>
                )}
            </div>
        </div>
    );
};

export default VerifyCode;
