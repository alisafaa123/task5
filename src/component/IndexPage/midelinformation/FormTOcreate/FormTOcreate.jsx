import './FormTOcreate.css';
import ButtonHideForm from '../../../../assets/buttonHideForm.svg'
const FormTOcreate = () => { 
    return(
        <div className="FormtocreateProject">
                <div className="insertForm">
                        <div className="title">
                            <h1>Create a project</h1>
                            <button><img src={ButtonHideForm} alt="" /></button>
                        </div>
                        <div className="headerOfofrm">
                            <div className="tow"></div>
                            <div className="one"></div>
                        </div>
                </div>
        </div>
    );
}
export default FormTOcreate;

