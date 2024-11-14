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
        const [FlageForm , setFlageForm] = useState(false);
        const [Flage , setFlage] = useState(false);
        const [Flage1 , setFlage1] = useState(false);
        const [Flage2 , setFlage2] = useState(false);
        const Title1 = "to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development...";
        const Title2 = "to build a responsive, user-focused web application. Must be skilled in both front-end to build a responsive, user-focused web application. Must be skilled in both front-end and back-end developm to build a responsive, user-focused web application. Must be skilled in both front-end and back-end developm and back-end development...";
        const ChangeFlage =() =>{
                setFlage(!Flage)
        };
        const ChangeFlage1 =() =>{
                setFlage1(!Flage1)
        };
        const ChangeFlage2 =() =>{
                setFlage2(!Flage2)
        };
        const ChangeFlageForm =() =>{
                setFlageForm(!FlageForm)
        };
        return(
            <div className="Midelinformation">
                    <div className="createproject">
                        <img src={Userinf} alt="" />
                        <button onClick={ChangeFlageForm}>
                                  Mustafa Let’s Create a Project !
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
                                                  <p>Posted 2 hours ago  </p>
                                              </div>
                                 </div>
                                 <div className="otheroptionPost">
                                                <button className='Available'>Available</button>
                                                <button className='Dotes'>
                                                        <img src={Dotes} alt="" />
                                                </button>
                                </div>
                        </div>
                        <div className="postDetails">
                                 <div className="title">
                                     <h1>Looking for Full-Sack Developer <br /> with experience +2 years</h1>
                                     <p style={{display: Flage ? 'none' : 'block'}}>{Title1}<button onClick={ChangeFlage}>See more</button></p>
                                     <p style={{display: Flage ? 'block' : 'none'}}>{Title2}<button onClick={ChangeFlage}>See less</button></p>
                                 </div>
                                 <img src={PostImg} alt="" />
                                 <div className="action">
                                        <div className="actionoption" >
                                               <button onClick={ChangeFlage1}>
                                                 <img style={{display: Flage1 ? 'none' : 'block'}} src={LIkeicon} alt="" />
                                                 <img style={{display: Flage1 ? 'block' : 'none'}} src={LIkeiconred} alt="" />
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
                    <div className="postsharing">
                        <div className="sender">
                                <div className="info">
                                        <div className="imgsender"></div>
                                              <div className="textuser">
                                                  <h1>Client Name</h1>
                                                  <p>Posted 2 hours ago  </p>
                                              </div>
                                 </div>
                                 <div className="otheroptionPost">
                                                <button className='Available'>Available</button>
                                                <button className='Dotes'>
                                                        <img src={Dotes} alt="" />
                                                </button>
                                </div>
                        </div>
                        <div className="postDetails">
                                 <div className="title">
                                     <h1>Looking for Full-Sack Developer <br /> with experience +2 years</h1>
                                     <p>to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development</p>
                                 </div>
                                 <div className="title">
                                     <h1>Duration of project</h1>
                                     <p>4 Months</p>
                                 </div>
                                 <div className="title">
                                     <h1>Pricing</h1>
                                     <p>Hourly  $ 50</p>
                                 </div>
                                 <div className="action">
                                        <div className="actionoption">
                                                <button onClick={ChangeFlage2}>
                                                        <img style={{display: Flage2 ? 'none' : 'block'}} src={LIkeicon} alt="" />
                                                        <img style={{display: Flage2 ? 'block' : 'none'}} src={LIkeiconred} alt="" />
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
                    {/* <CreateForm  style={{display: FlageForm ? 'none' : 'block'}}/> */}
                    <CreateForm />
            </div>
    );
}
export default Midelinformation;