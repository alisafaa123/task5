import './leftside.css';
import Usering from '../../../../assets/userimg.svg';
import Editiimg from '../../../../assets/editiimg.svg';
// import Adding from '../../../assets/adding.svg';
// import Sideline from '../../../assets/sideline.svg';


const Leftside = () => {
  return (
    
    <div className='LeftsideCode'>
        <div className="userTitle">
              <div className="user">
                   <img src={Usering} alt="" />
                   <div className="text">
                      <h1>Mustafa Emad</h1>
                      <p>Business scope</p>
                   </div>
              </div>
              <button><img src={Editiimg} alt="" /></button>
        </div>
        <div className="aboutsectionprof">
              <div>
                  <h1></h1>
              </div>
        </div>
    </div>
  );
};

export default Leftside;
