import './headerscreen.css';

const HeaderScreen = ({ title, text }) => {
    return (
       <div className='fullHeader'>
         <div className="header">
            <div className="lable1 lines"></div>
            <div className="lable2 lines"></div>
            <div className="lable3 lines"></div>
           
        </div>
         <div className="text">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
       </div>
    );
};

export default HeaderScreen;
