import FlexIndexpage from "./flexIndexpage/flexIndexpage";
import AboutScreen from "./aboutScreen/aboutScreen";
import DisplayfriendProject from "./displayfriend&project/displayfriendProject";
import Midelinformation from "./midelinformation/midelinformation";

const indexpage = () =>{
    return(
        <div className="">
               <FlexIndexpage>
                        <AboutScreen/>
                        <Midelinformation/>
                        <DisplayfriendProject/>
                    </FlexIndexpage>
        </div>
    )
}
export default indexpage ;