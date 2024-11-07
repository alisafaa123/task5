import './headerscreen.css';

const HeaderScreen = ({pageNu, title, text }) => {
    return (
       <div className='fullHeader'>
         <div className="header">
            <div className="active lines"></div>
            <div className="lines">
                        <div className={pageNu >= 1 ? 'active1 lines' : 'lines' }></div>
                        <div className={pageNu >= 2 ? 'active2 lines' : 'lines' }></div>
            </div>
            <div className={pageNu >= 3 ? 'active lines' : 'lines' }></div>
           
        </div>
         <div className="text">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
       </div>
    );
};

export default HeaderScreen;
