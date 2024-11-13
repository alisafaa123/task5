import './notificationScreen.css';
import Usernotification1 from '../../../assets/usernotification1.svg';
import Usernotification2 from '../../../assets/usernotification2.svg';
import Usernotification3 from '../../../assets/usernotification3.svg';
import User1 from '../../../assets/user1.svg';
import User2 from '../../../assets/user2.svg';
import User3 from '../../../assets/user3.svg';
import User4 from '../../../assets/user4.svg';



const NotificationScreen = ({ isVisible }) => {
    return (
        <div className="notificationPageCode" style={{ display: isVisible ? 'block' : 'none' }}>
            <h1>Notifications</h1>
            <p>You Have 3 <a href="">Notification</a> Today !</p>
            <div className="Today">
                <h1>Today</h1>
                <div className="item">
                    <img src={Usernotification1} alt="" />
                    <div className="text"><p><a href="">Zainab Saad</a> comment on your project  <span>2h</span></p></div>
                </div>
                <div className="item">
                    <img src={Usernotification2} alt="" />
                    <div className="text"><p><a href="">Ali Saad</a> Apply your project <span>2h</span></p></div>
                </div>
                <div className="item">
                    <img src={Usernotification3} alt="" />
                    <div className="text"><p><a href="">Karar Emad</a> Liked your project <span>2h</span></p></div>
                </div>
            </div>
            <div className="ThisWeek">
                <h1>This Week</h1>
                <div className="item">
                    <img src={User1} alt="" />
                    <div className="text"><p><a href="">Zainab Saad</a> comment on your project  <span>1h</span></p></div>
                </div>
                <div className="item">
                    <img src={User2} alt="" />
                    <div className="text"><p><a href="">ghoufran saad</a> comment on your project <span>2h</span></p></div>
                </div>
                <div className="item">
                    <img src={User3} alt="" />
                    <div className="text"><p><a href="">Huda salih</a> comment on your project <span>3h</span></p></div>
                </div>
                <div className="item">
                    <img src={User4} alt="" />
                    <div className="text"><p><a href="">Mohammed Saad</a> comment on your project <span>1w</span></p></div>
                </div>
            </div>

        </div>
    );
};

export default NotificationScreen;
