import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './component/container/container';
import LeftSlider from './component/LeftSlider/LeftSlider';
import FlexScreen from './component/FlexScreen/FlexScreen';
import StartScreen from "./component/HomeScreen/startScreen/startScreen";
import  Phonepage from "./component/HomeScreen/phonepage/phonepage";
import  VerifyCode from "./component/HomeScreen/VerifyCode/VerifyCode";
import  InfoPage from "./component/HomeScreen/InfoPage/InfoPage";

const App = () => {
  return (
    <Router>
      <Container>
        <FlexScreen>
        <div className="rigth">
        <LeftSlider />
        </div>
        <div className="rightside">
            <Routes>
              <Route path="/" element={<StartScreen />} /> 
              <Route path="/Phonepage" element={<Phonepage />} /> 
              <Route path="/VerifyCode" element={<VerifyCode />} /> 
              <Route path="/InfoPage" element={<InfoPage />} /> 
            </Routes>
        </div>
        </FlexScreen>
      </Container>
    </Router>
  );
};

export default App;
