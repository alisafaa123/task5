import './FormTOcreate.css';
import ButtonHideForm from '../../../../assets/buttonHideForm.svg';
import { useEffect } from 'react';

const FormTOcreate = ({ FlageForm, onClose }) => {
    useEffect(() => {
        console.log(`Form visibility changed: ${FlageForm}`);
    }, [FlageForm]);

    return (
        <div className="FormtocreateProject" style={{ display: FlageForm ? 'block' : 'none' }}>
                <div className="FullFom">
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
                        <div className="firstinsertForm">
                            <p>Select Required Qualifications</p>
                            <select name="" id=""  className="custom-select">
                                <option className='placeholderOfselecter' disabled selected hidden>
                                    Please select an option
                                </option>

                                <option value="">UIUX Designer</option>
                                <option value="">Back-end</option>
                                <option value="">Front-end</option>
                                <option value="">Mobile app</option>
                            </select>
                            <p>Description</p>
                            <textarea name="" id="" placeholder="Enter Description for the project"></textarea>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default FormTOcreate;
