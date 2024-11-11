
import './midelinformation.css';
import Userinf from '../../../assets/userimg.svg';
import InsertProject from '../../../assets/insertProject.svg';
import Dotes from '../../../assets/dotes.svg';
import PostImg from '../../../assets/postImg.svg';
import MessageIcon from '../../../assets/messageIcon.svg';
import LIkeicon from '../../../assets/LIkeicon.svg';


const Midelinformation = () => {
    return(
            <div className="Midelinformation">
                    <div className="createproject">
                        <img src={Userinf} alt="" />
                        <input type="text" placeholder='Mustafa Let’s Create a Project !'/>
                        <div className="insertimg">
                                <img src={InsertProject} alt="" />
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
                                     <p>to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development...See more</p>
                                 </div>
                                 <img src={PostImg} alt="" />
                                 <div className="action">
                                        <div className="actionoption">
                                                <img src={LIkeicon} alt="" />
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
                                                <img src={LIkeicon} alt="" />
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
                                     <p>to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development...See more</p>
                                 </div>
                                 <img src={PostImg} alt="" />
                                 <div className="action">
                                        <div className="actionoption">
                                                <img src={LIkeicon} alt="" />
                                                <p>like</p>
                                        </div>
                                        <div className="actionoption">
                                                <img src={MessageIcon} alt="" />
                                                <p>comment</p>
                                        </div>
                                 </div>
                        </div>
                    </div>
            </div>
    );
}
export default Midelinformation;