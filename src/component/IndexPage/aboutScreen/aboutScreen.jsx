import Usering from '../../../assets/userimg.svg';
import Star from '../../../assets/Star.svg';
import Editiimg from '../../../assets/editiimg.svg';
import Adding from '../../../assets/adding.svg';
import Sideline from '../../../assets/sideline.svg';


import './aboutScreen.css';

const AboutScreen = () => {
    return(
            <div className="AboutScreen">
                    <div className="userInfo">
                        <div className="photo">
                            <img src={Usering} alt="" />
                        </div>
                        <h1>Mustafa Emad</h1>
                        <div className="rate">
                            <img src={Star} alt="" />
                            <p>5.0</p>    
                        </div>
                        <button>Edit Profile</button>
                    </div>
                    <div className="aboutuser">
                        <div className="titleabout">
                            <h1>About</h1>
                            <img src={Editiimg} alt="" />
                        </div>
                        <div className="description">
                            <p>
                            GreenTech Solutions Inc. <br /> Renewable Energy & Technology San Francisco, California, with operations in North America and Europe
                            </p>
                        </div>
                    </div>
                    <div className="projectHistory">
                        <div className="titleabout">
                                <h1>Projects History</h1>
                                <div className="imges">
                                    <img src={Adding} alt="" />
                                    <img src={Editiimg} alt="" />
                                </div>
                        </div>
                        <div className="project">
                            <div className="slide">
                                <img src={Sideline} alt="" />
                            </div>
                            <div className="text">
                                <h1>project Name</h1>
                                <h4>22 Jan 2024 - 11 May  2024. </h4>
                                <p>Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. </p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="slide">
                                <img src={Sideline} alt="" />
                            </div>
                            <div className="text">
                                <h1>project Name</h1>
                                <h4>22 Jan 2024 - 11 May  2024. </h4>
                                <p>Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. </p>
                            </div>
                        </div>
                    </div>
            </div>
    );
}
export default AboutScreen;