import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './component/container/container';
import LeftSlider from './component/LeftSlider/LeftSlider';
import FlexScreen from './component/FlexScreen/FlexScreen';
import HomeScreen from './component/HomeScreen/HomeScreen';


const App = () => {
  return (
    <Router>
      <Container>
        <FlexScreen>
        <LeftSlider />
          <Routes>
          <Route path="/" element={ <HomeScreen/>} />
          </Routes>
        </FlexScreen>
      </Container>
    </Router>
  );
};

export default App;
