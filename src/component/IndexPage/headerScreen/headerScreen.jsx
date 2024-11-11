import './headerScreen.css';
import Logoimg from '../../../assets/Logoimg.svg';
import Notifications from '../../../assets/notifications.svg';
import Search from '../../../assets/search.svg';

const HeaderScreenOfhomePage = () => {
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
                    <button>
                        <img src={Notifications} alt="" />
                    </button>
                </div>
            </div>
           </div>
      </div>
    );
};

export default HeaderScreenOfhomePage;
