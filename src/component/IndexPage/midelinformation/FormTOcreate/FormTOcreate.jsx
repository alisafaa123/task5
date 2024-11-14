import './FormTOcreate.css';
import ButtonHideForm from '../../../../assets/buttonHideForm.svg';
import { useEffect } from 'react';

const FormTOcreate = ({ FlageForm, onClose }) => {
    useEffect(() => {
        console.log(`Form visibility changed: ${FlageForm}`);
    }, [FlageForm]);

    return (
        <div className="FormtocreateProject" style={{ display: FlageForm ? 'block' : 'none' }}>
            <div className="insertForm">
                <div className="title">
                    <h1>Create a project</h1>
                    <button onClick={onClose}>
                        <img src={ButtonHideForm} alt="Hide Form" />
                    </button>
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
