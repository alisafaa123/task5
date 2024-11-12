import Projectimg from '../../../assets/projectimg.svg';
import ButtonShow from '../../../assets/buttonShow.svg';
import Buttonhide from '../../../assets/buttonhide.svg';
import Star from '../../../assets/Star.svg';
import User1 from '../../../assets/user1.svg';
import User2 from '../../../assets/user2.svg';
import User3 from '../../../assets/user3.svg';
import User4 from '../../../assets/user4.svg';
import User5 from '../../../assets/user5.svg';


import './displayfriendProject.css';

const AisplayfriendProject = () => {
    return(
            <div className="displayfriendProject">
                   <div className="projetsName">
                        <div className="headOFproject">
                                <h1>Web Design Project</h1>
                                <a href="">see all projects</a>
                        </div>
                        <div className="projectslist">
                                <div className="item">
                                        <div className="infoproj">
                                                <img src={Projectimg} alt="" />
                                                <div className="text">
                                                        <h1>Web Design Project</h1>
                                                        <p>10$/Hour</p>
                                                </div>
                                        </div>
                                        <button>
                                        <img src={ButtonShow} alt="" />
                                        </button> 
                                </div>
                                <div className="hideText">
                                                <p>This Project Involves implementing both frontend and back-end functionalities ,as well as integrating with third-party Apls.</p>
                                </div>
                        </div>
                        <div className="projectslist">
                                <div className="item">
                                        <div className="infoproj">
                                                <img src={Projectimg} alt="" />
                                                <div className="text">
                                                        <h1>Web Design Project</h1>
                                                        <p>10$/Hour</p>
                                                </div>
                                        </div>
                                        <button>
                                        <img src={Buttonhide} alt="" />
                                        </button> 
                                </div>
                        </div>
                        <div className="projectslist">
                                <div className="item">
                                        <div className="infoproj">
                                                <img src={Projectimg} alt="" />
                                                <div className="text">
                                                        <h1>Web Design Project</h1>
                                                        <p>10$/Hour</p>
                                                </div>
                                        </div>
                                        <button>
                                        <img src={Buttonhide} alt="" />
                                        </button> 
                                </div>
                        </div>
                        <div className="projectslist">
                                <div className="item">
                                        <div className="infoproj">
                                                <img src={Projectimg} alt="" />
                                                <div className="text">
                                                        <h1>Web Design Project</h1>
                                                        <p>10$/Hour</p>
                                                </div>
                                        </div>
                                        <button>
                                        <img src={Buttonhide} alt="" />
                                        </button> 
                                </div>
                        </div>
                   </div>
                   <div className="projetsName">
                        <div className="headOFproject">
                                <h1>Freelancers You Worked With</h1>
                                <a href="">See All</a>
                        </div>
                        <div className="userslist">
                                <div className="userinfo">
                                        <div className="userdetails">
                                                <img src={User1} alt="" />
                                               <div className="text">
                                                        <h1>Zena saad</h1>
                                                        <p>2 months ago</p>
                                               </div>
                                        </div>
                                        <div className="rate">
                                                <img src={Star} alt="" />
                                                <p>8.0</p>
                                        </div>
                                </div>
                        </div>
                        <div className="userslist">
                                <div className="userinfo">
                                        <div className="userdetails">
                                                <img src={User2} alt="" />
                                               <div className="text">
                                                        <h1>Ghoufran saad</h1>
                                                        <p>3 months ago</p>
                                               </div>
                                        </div>
                                        <div className="rate">
                                                <img src={Star} alt="" />
                                                <p>7.0</p>
                                        </div>
                                </div>
                        </div>
                        <div className="userslist">
                                <div className="userinfo">
                                        <div className="userdetails">
                                                <img src={User3} alt="" />
                                               <div className="text">
                                                        <h1>Huda salih</h1>
                                                        <p>7 months ago</p>
                                               </div>
                                        </div>
                                        <div className="rate">
                                                <img src={Star} alt="" />
                                                <p>6.0</p>
                                        </div>
                                </div>
                        </div>
                        <div className="userslist">
                                <div className="userinfo">
                                        <div className="userdetails">
                                                <img src={User4} alt="" />
                                               <div className="text">
                                                        <h1>Ali saad</h1>
                                                        <p>1 year ago</p>
                                               </div>
                                        </div>
                                        <div className="rate">
                                                <img src={Star} alt="" />
                                                <p>7.0</p>
                                        </div>
                                </div>
                        </div>
                          <div className="userslist">
                                <div className="userinfo">
                                        <div className="userdetails">
                                                <img src={User5} alt="" />
                                               <div className="text">
                                                        <h1>Ahmed Khaled</h1>
                                                        <p>2 years ago</p>
                                               </div>
                                        </div>
                                        <div className="rate">
                                                <img src={Star} alt="" />
                                                <p>8.0</p>
                                        </div>
                                </div>
                        </div>
                   </div>
            </div>
    );
}
export default AisplayfriendProject;