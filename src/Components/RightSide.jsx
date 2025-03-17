import React from "react";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="rightSideHome">
      <div className="topProfileRight">
        <div className="leftRightProfile">
          <div className="imageDivRightSide">
            <img
              className="imageRightSideProfile"
              src="src/assets/Myprofile.jpg"
              alt=""
            />
          </div>
          <div className="usernameBlock">
            <div className="usernameRightSide">__abhiGhuge</div>
            <div className="userFullName">Abhshek Laxman Ghuge</div>
          </div>
        </div>
        <div className="switchBtn">Switch</div>
      </div>
      <div className="bottomRightSide">
        <div className="suggestedBlock">
          <div className="suggestedForYou">Suggested for you</div>
          <div className="seeAll">See All</div>
        </div>
        <div className="folloBlockRightSide">
          <div className="topProfileRightBottam">
            <div className="leftRightProfile">
              <div className="imageDivRightSide">
                <img
                  className="imageRightSideProfile"
                  src="src/assets/img1.jpg"
                  alt=""
                />
              </div>
              <div className="usernameBlock">
                <div className="usernameRightSide">__shettiye_sir</div>
                <div className="userFullName">New to Instagram</div>
              </div>
            </div>
            <div className="switchBtn">Follow</div>
          </div>
          <div className="topProfileRightBottam">
            <div className="leftRightProfile">
              <div className="imageDivRightSide">
                <img
                  className="imageRightSideProfile"
                  src="src/assets/img2.jpg"
                  alt=""
                />
              </div>
              <div className="usernameBlock">
                <div className="usernameRightSide">__ambekar_sir</div>
                <div className="userFullName">New to Instagram</div>
              </div>
            </div>
            <div className="switchBtn">Follow</div>
          </div>
          <div className="topProfileRightBottam">
            <div className="leftRightProfile">
              <div className="imageDivRightSide">
                <img
                  className="imageRightSideProfile"
                  src="src/assets/img3.jpg"
                  alt=""
                />
              </div>
              <div className="usernameBlock">
                <div className="usernameRightSide">__dambare_sir</div>
                <div className="userFullName">New to Instagram</div>
              </div>
            </div>
            <div className="switchBtn">Follow</div>
          </div>
          <div className="topProfileRightBottam">
            <div className="leftRightProfile">
              <div className="imageDivRightSide">
                <img
                  className="imageRightSideProfile"
                  src="src/assets/img4.jpg"
                  alt=""
                />
              </div>
              <div className="usernameBlock">
                <div className="usernameRightSide">__gukesh</div>
                <div className="userFullName">New to Instagram</div>
              </div>
            </div>
            <div className="switchBtn">Follow</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
