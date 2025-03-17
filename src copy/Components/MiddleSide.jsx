import "./MiddleSide.css";
import React from "react";
// import P1 from "../assets/P1.jpg";
import story from '../story.json'
const MiddleSide = () => {
  const storys = story.story;
  return (
    <div className="middleHomeSide">
      <div className="storyBlock">
        {storys?.map((item, index) => {
          return (
            <div className="story">
              <div className="imageDiv">
                <img className="statusImg" src={item.img} alt="" />
              </div>
              <div className="profileName">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiddleSide;
