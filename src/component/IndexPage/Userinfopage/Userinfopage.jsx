import React from 'react';
import './Userinfopage.css'
import Leftside from './leftside/leftside';
import Rightside from './rightside/rightside';

const Userinfopage = () => {
  return (
    <div className='UserinfopageCode'>
        <Leftside />
        <Rightside />
    </div>
  );
};

export default Userinfopage;
