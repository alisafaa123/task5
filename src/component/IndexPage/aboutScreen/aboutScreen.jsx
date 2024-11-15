import React, { useState } from 'react';
import Star from '../../../assets/Star.svg';
import Usering from '../../../assets/userimg.svg';
import Editiimg from '../../../assets/editiimg.svg';
import Adding from '../../../assets/adding.svg';
import Sideline from '../../../assets/sideline.svg';


import './aboutScreen.css';

const AboutScreen = () => {
    const [Flage, setFlage] = useState(false);
    const [UpdateAvout, setUpdateAvout] = useState("GreenTech Solutions Inc. Renewable Energy & Technology San Francisco, California, with operations in North America and Europe");
    const [Listpfuserinfo , setListpfuserinfo] = useState(["Mustafa Emad","5.0"]);

    const UpdateAbout = () =>{
        setFlage(!Flage);
    }
    const SaveUpdateAbout = () =>{
        setFlage(!Flage);
    }
    return(
            <div className="AboutScreen">
                    <div className="userInfo">
                        <div className="photo">
                            <img src={Usering} alt="" />
                        </div>
                        <h1 >{Listpfuserinfo[0]}</h1>
                        <div className="rate">
                            <img src={Star} alt="" />
                            <p >{Listpfuserinfo[1]}</p>  
                        </div>
                        <a href='Userinfo'>Edit Profile</a>
                    </div>
                    <div className="aboutuser">
                        <div className="titleabout">
                            <h1>About</h1>
                            <button onClick={SaveUpdateAbout} style={{display : Flage ? 'block' : 'none'}}>save</button>
                            <button onClick={UpdateAbout} style={{display : Flage === false ? 'block' : 'none'}}> <img src={Editiimg} alt="" /> </button>
                        </div>
                        <div className="description">
                            <p style={{display : Flage === false ? 'block' : 'none'}}>{UpdateAvout}</p>
                            <textarea rows={5} cols={35} name="" id=""style={{display : Flage ? 'block' : 'none'}}
                            value={UpdateAvout}
                            onChange={(e) => setUpdateAvout(e.target.value)}>
                            {UpdateAvout}</textarea>
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