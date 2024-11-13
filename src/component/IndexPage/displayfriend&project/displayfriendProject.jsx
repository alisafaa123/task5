import React, { useState } from 'react';
import Projectimg from '../../../assets/projectimg.svg';
import ButtonShow from '../../../assets/buttonShow.svg';
import Buttonhide from '../../../assets/buttonhide.svg';
import Star from '../../../assets/Star.svg';
import User1 from '../../../assets/user1.svg';
import User2 from '../../../assets/user2.svg';
import User3 from '../../../assets/user3.svg';
import User4 from '../../../assets/user4.svg';
import User5 from '../../../assets/user5.svg';

import './displayfriendProject.css';

const DisplayFriendProject = () => {
  const [divContent, setDivContent] = useState([
    {
      title: "Web Design Project",
      price: "10$/Hour",
      imgofproject: Projectimg,
      imgSHow: ButtonShow,
      imghide: Buttonhide,
      body: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      flage: true,
    },
    {
      title: "Web Design Project",
      price: "10$/Hour",
      imgofproject: Projectimg,
      imgSHow: ButtonShow,
      imghide: Buttonhide,
      body: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      flage: false,
    },
    {
      title: "Web Design Project",
      price: "10$/Hour",
      imgofproject: Projectimg,
      imgSHow: ButtonShow,
      imghide: Buttonhide,
      body: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      flage: false,
    },
    {
      title: "Web Design Project",
      price: "10$/Hour",
      imgofproject: Projectimg,
      imgSHow: ButtonShow,
      imghide: Buttonhide,
      body: "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
      flage: false,
    },
  ]);
  const showOrHide = (index) => {
    const updatedContent = divContent.map((item, idx) => {
      if (idx === index) {
        return { ...item, flage: !item.flage };
      }
      return item;
    });
    setDivContent(updatedContent);
  };

  return (
    <div className="displayfriendProject">
      <div className="projetsName">
        <div className="headOFproject">
          <h1>Web Design Project</h1>
          <a href="">See all projects</a>
        </div>

        {divContent.map((info, index) => (
          <div key={index} className="projectslist">
            <div className="item">
              <div className="infoproj">
                <img src={info.imgofproject} alt="" />
                <div className="text">
                  <h1>{info.title}</h1>
                  <p>{info.price}</p>
                </div>
              </div>
              <button onClick={() => showOrHide(index)}>
                <img src={info.flage ? info.imgSHow : info.imghide} alt="" />
              </button>
            </div>
            <div className="hideText" style={{ display: info.flage ? 'block' : 'none' }}>
              <p>{info.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="projetsName">
        <div className="headOFproject">
          <h1>Freelancers You Worked With</h1>
          <a href="">See All</a>
        </div>

        {[User1, User2, User3, User4, User5].map((user, idx) => (
          <div key={idx} className="userslist">
            <div className="userinfo">
              <div className="userdetails">
                <img src={user} alt="" />
                <div className="text">
                  <h1>User {idx + 1}</h1>
                  <p>{idx + 1} months ago</p>
                </div>
              </div>
              <div className="rate">
                <img src={Star} alt="" />
                <p>{7 + idx}.0</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayFriendProject;
