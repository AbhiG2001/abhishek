import React from "react";
import "./App.css";
import LeftSide from "./Components/LeftSide";
import MiddleSide from "./Components/MiddleSide";
import RightSide from "./Components/RightSide";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import { WidthFull } from "@mui/icons-material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const App = () => {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>
      <div className="middleSide">
        <div className="up">
          <MiddleSide />
        </div>
        <div className="bottam">
        <HomeIcon sx={{fontSize:"60px",margin:"0 20px 0 0"}}/>
        <SearchIcon sx={{fontSize:"60px",margin:"0 20px 0 0"}}/>
        <AddBoxOutlinedIcon sx={{fontSize:"60px",margin:"0 20px 0 0"}}/>
        <MusicVideoIcon sx={{fontSize:"60px",margin:"0 20px 0 0"}}/>
        <img className="MiddlebottamProfile" src="src\assets\Myprofile.jpg" alt="" />
        </div>
      </div>
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  );
};

export default App;
