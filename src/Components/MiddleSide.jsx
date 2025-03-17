import "./MiddleSide.css";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import story from "../story.json";
import InstaLogo from "../assets/images/instagram-1.svg";

const MiddleSide = () => {
  const storys = story.story;
  return (
    <div className="middleHomeSide">
      <div className="mobileTopBar">
        <div className="instaLogo">
          <img className="instaLogoMobile" src={InstaLogo} alt="" />
        </div>
      </div>
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
      <div className="PostSection">
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P1.jpg" alt="" />
            <div className="postInfousername">Ankit sir</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P1.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P2.jpg" alt="" />
            <div className="postInfousername">Atharv sir</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P2.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>

        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P3.jpg" alt="" />
            <div className="postInfousername">Parth sir</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P3.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P11.jpg" alt="" />
            <div className="postInfousername">Asmita</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P11.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P4.jpg" alt="" />
            <div className="postInfousername">Vishal</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P4.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P5.jpg" alt="" />
            <div className="postInfousername">Sandip</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P5.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P6.jpg" alt="" />
            <div className="postInfousername">Sejal Tai</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P6.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P7.jpg" alt="" />
            <div className="postInfousername">Prachi</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P7.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P8.jpg" alt="" />
            <div className="postInfousername">Sakshi</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P8.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P9.jpg" alt="" />
            <div className="postInfousername">Nitesh Bhau</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P9.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src="src/assets/P10.jpg" alt="" />
            <div className="postInfousername">Nayan Bhau</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img className="PostImage" src="src/assets/P10.jpg" alt="" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
              <SendOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
            <div className="rightIcon">
              <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className="likeImg" src="src/assets/Myprofile.jpg" alt="" />
              <img className="likeImg2" src="src/assets/P8.jpg" alt="" />
            </div>
            <div className="numberOfLikes">424,123 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Hostedminds</div>
            <div className="infoComment">
              Happy teachers day to my favorite teacher <span>more</span>{" "}
            </div>
          </div>
          <div className="noOfComment">View all 467 Comments</div>
          <div className="addAComment">Add a Comment...</div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSide;
