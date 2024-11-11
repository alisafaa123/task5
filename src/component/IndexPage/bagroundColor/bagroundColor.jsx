import './bagroundColor.css';

const BagroundColor = (props) => {
    return (
      <div className="BagroundColor">
           {props.children}
      </div>
    );
};

export default BagroundColor;
