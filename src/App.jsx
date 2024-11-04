import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './component/container/container';
import LeftSlider from './component/LeftSlider/LeftSlider';
import FlexScreen from './component/FlexScreen/FlexScreen';
import HomeScreen from './component/HomeScreen/HomeScreen';
import HeaderScreen from "./component/headerscreen/headerscreen";


const App = () => {
  return (
    <Router>
      <Container>
        <FlexScreen>
        <div className="rigth">
        <LeftSlider />
        </div>
        <div className="rightside">
            <HeaderScreen title="Let’s Get started!" text="How do you plan to use this platform" />
            <Routes>
              <Route path="/" element={ <HomeScreen/>} />
            </Routes>
        </div>
        </FlexScreen>
      </Container>
    </Router>
  );
};

export default App;
