import React, { useState } from 'react';
import './midelinformation.css';
import Userinf from '../../../assets/userimg.svg';
import InsertProject from '../../../assets/insertProject.svg';
import Dotes from '../../../assets/dotes.svg';
import PostImg from '../../../assets/postImg.svg';
import MessageIcon from '../../../assets/messageIcon.svg';
import LIkeicon from '../../../assets/LIkeicon.svg';
import LIkeiconred from '../../../assets/LIkeiconred.svg';
import CreateForm from './FormTOcreate/FormTOcreate';

const Midelinformation = () => {
    const [FlageForm, setFlageForm] = useState(false);
    const [Flage, setFlage] = useState(false);
    const [Flage1, setFlage1] = useState(false);
    const [Flage2, setFlage2] = useState(false);

    const Title1 = "to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development...";
    const Title2 = "to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development and have good experience in modern frameworks.";

    const toggleFlage = () => setFlage(!Flage);
    const toggleFlage1 = () => setFlage1(!Flage1);
    const toggleFlage2 = () => setFlage2(!Flage2);
    const toggleFlageForm = () => setFlageForm(!FlageForm);

    return (
        <div className="Midelinformation">
            <div className="createproject">
                <img src={Userinf} alt="" />
                <button onClick={toggleFlageForm}>
                    Mustafa Let’s Create a Project!
                    <div className="insertimg">
                        <img src={InsertProject} alt="" />
                    </div>
                </button>
            </div>

            <div className="postsharing">
                <div className="sender">
                    <div className="info">
                        <div className="imgsender"></div>
                        <div className="textuser">
                            <h1>Client Name</h1>
                            <p>Posted 2 hours ago</p>
                        </div>
                    </div>
                    <div className="otheroptionPost">
                        <button className="Available">Available</button>
                        <button className="Dotes">
                            <img src={Dotes} alt="" />
                        </button>
                    </div>
                </div>

                <div className="postDetails">
                    <div className="title">
                        <h1>Looking for Full-Stack Developer <br /> with experience +2 years</h1>
                        <p style={{ display: Flage ? 'none' : 'block' }}>
                            {Title1} <button onClick={toggleFlage}>See more</button>
                        </p>
                        <p style={{ display: Flage ? 'block' : 'none' }}>
                            {Title2} <button onClick={toggleFlage}>See less</button>
                        </p>
                    </div>
                    <img src={PostImg} alt="" />
                    <div className="action">
                        <div className="actionoption">
                            <button onClick={toggleFlage1}>
                                <img style={{ display: Flage1 ? 'none' : 'block' }} src={LIkeicon} alt="" />
                                <img style={{ display: Flage1 ? 'block' : 'none' }} src={LIkeiconred} alt="" />
                            </button>
                            <p>like</p>
                        </div>
                        <div className="actionoption">
                            <img src={MessageIcon} alt="" />
                            <p>comment</p>
                        </div>
                    </div>
                </div>
            </div>

            <CreateForm FlageForm={FlageForm} onClose={toggleFlageForm} />
        </div>
    );
}

export default Midelinformation;
