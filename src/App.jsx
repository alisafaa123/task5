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
import GrupeIndexpage from "./component/IndexPage/grupeIndexpage";
import Userinfopage from "./component/IndexPage/Userinfopage/Userinfopage";


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
        <div >
         <Router>
            <BagroundColor>
              <Container>
                <Headerscreen />
                <Routes>
                  <Route path="/Home" element={<GrupeIndexpage />} />
                  <Route path="/Userinfo" element={<Userinfopage />} />
                </Routes> 
              </Container>
            </BagroundColor>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
