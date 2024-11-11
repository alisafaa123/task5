
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
                                        <h1>Client Name</h1>
                                        <p>Posted 2 hours ago  </p>
                                </div>
                                <div className="otheroptionPost">
                                        <button>Available</button>
                                        <button>
                                                <img src={Dotes} alt="" />
                                        </button>
                                </div>
                        </div>
                    </div>
            </div>
    );
}
export default Midelinformation;