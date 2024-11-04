import './headerscreen.css';
const headerscreen = ({title},{text}) => {
    return(
        <div className="header">
            <div className="lable1 lines"></div>
            <div className="lable2 lines"></div>
            <div className="lable3 lines"></div>
            <div className="text">
              <h1>{title.children}</h1>
              <p>{text.children}</p>
            </div>
        </div>
    )
}
export default headerscreen;