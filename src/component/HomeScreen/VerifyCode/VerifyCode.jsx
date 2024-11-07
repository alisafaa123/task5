import React, { useState } from 'react';
import './VerifyCode.css';
import HeaderScreen from "../../headerscreen/headerscreen";

const VerifyCode = () => {
    return (
        <div className="body">
            <HeaderScreen pageNu="2" title="Enter Your Phone Number" text="Enter your phone number to verify your identity and the validity of your number to safely activate your account on the platform." />
          
            {/* <div className="btn">
                {flag ? (
                    <a href="VerifyCode" className="activeurLink">Verify</a>
                ) : (
                    <span className="btnlink inactive">Verify</span>
                )}
            </div> */}
             <a href="InfoPage" className="activeurLink">Verify</a>
        </div>
    );
};
export default VerifyCode;
