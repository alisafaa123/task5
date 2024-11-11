
import './midelinformation.css';
import Userinf from '../../../assets/userimg.svg';
import InsertProject from '../../../assets/insertProject.svg';
import Dotes from '../../../assets/dotes.svg';

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
                        </div>
                    </div>
                   
            </div>
    );
}
export default Midelinformation;