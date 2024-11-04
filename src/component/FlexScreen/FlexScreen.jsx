import React from 'react';
import './FlexScreen.css';

const FlexScreen = (props) => {
    return (
        <div className="FlexScreen">
            {props.children}
        </div>
    );
};

export default FlexScreen;
