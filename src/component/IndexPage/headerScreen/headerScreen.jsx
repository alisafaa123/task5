import React, { useState } from 'react';
import './headerScreen.css';
import Logoimg from '../../../assets/Logoimg.svg';
import Notifications from '../../../assets/notifications.svg';
import Search from '../../../assets/search.svg';
import Notifications2 from '../../../assets/notifications2.svg';
import NotificationScreen from "../notificationScreen/notificationScreen";


const HeaderScreenOfhomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleOpenNotification = () => {
        setIsVisible(!isVisible);
    };

    return (
      <div className="headerHomepage">
           <div className="content">
           <div className="logo">
                <img src={Logoimg} alt="" />
            </div>
            <div className="optionheader">
                <a href="" className='activeoption'>Home</a>
                <a href="">Dashboard</a>
                <a href="">Settings</a>
            </div>
            <div className="other">
               <div className="searchINput">
                <img src={Search} alt="" />
                 <input type="text" placeholder='search'/>
               </div>
                <div className="notifiaction">
                    <button onClick={handleOpenNotification}>
                        <img src={Notifications} alt="" style={{display: isVisible === false ? 'block' : 'none'}}/>
                        <img src={Notifications2} alt="" style={{display: isVisible ? 'block' : 'none'}}/>
                    </button>
                </div>
            </div>
           </div>
           <NotificationScreen isVisible={isVisible} />
        </div>
    );
};

export default HeaderScreenOfhomePage;
