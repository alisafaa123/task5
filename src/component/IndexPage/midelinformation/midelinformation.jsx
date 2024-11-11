
import './midelinformation.css';
import Userinf from '../../../assets/userimg.svg';

const Midelinformation = () => {
    return(
            <div className="Midelinformation">
                    <div className="createproject">
                        <img src={Userinf} alt="" />
                        <input type="text" placeholder='Mustafa Let’s Create a Project !'/>
                        <div className="insertimg">
                                <img src="" alt="" />
                        </div>
                    </div>
            </div>
    );
}
export default Midelinformation;