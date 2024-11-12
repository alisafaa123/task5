import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './component/container/container';
import LeftSlider from './component/LeftSlider/LeftSlider';
import FlexScreen from './component/FlexScreen/FlexScreen';
import StartScreen from "./component/HomeScreen/startScreen/startScreen";
import Phonepage from "./component/HomeScreen/phonepage/phonepage";
import VerifyCode from "./component/HomeScreen/VerifyCode/VerifyCode";
import InfoPage from "./component/HomeScreen/InfoPage/InfoPage";
import Headerscreen from "./component/IndexPage/headerScreen/headerScreen";
import BagroundColor from "./component/IndexPage/bagroundColor/bagroundColor";
import FlexIndexpage from "./component/IndexPage/flexIndexpage/flexIndexpage";
import AboutScreen from "./component/IndexPage/aboutScreen/aboutScreen";
import DisplayfriendProject from "./component/IndexPage/displayfriend&project/displayfriendProject";
import Midelinformation from "./component/IndexPage/midelinformation/midelinformation";


const App = () => {
  const currentPath = window.location.pathname;

  const isMainRoute = (
    currentPath === '/' ||
    currentPath === '/Phonepage' ||
    currentPath === '/VerifyCode' ||
    currentPath === '/InfoPage'
  );

  return (
    <div>
      {isMainRoute ? (
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
      ) : (
        <div className='bodyOfindexpage'>
           <BagroundColor>
            <Container>
              <Headerscreen />
                  <FlexIndexpage>
                      <AboutScreen/>
                      <Midelinformation/>
                      <DisplayfriendProject/>
                  </FlexIndexpage>
            </Container>
          </BagroundColor>
        </div>
      )}
    </div>
  );
};

export default App;
