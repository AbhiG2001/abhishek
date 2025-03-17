import './LeftSide.css'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import Messages from '@mui/icons-material/MailOutline';
import Notification from '@mui/icons-material/FavoriteBorderRounded';
import Create from '@mui/icons-material/AddBoxOutlined';
import ExploreIcon from '@mui/icons-material/ExploreOutlined';;
import ProfileImg from '../assets/Myprofile.jpg'
import Thread from '@mui/icons-material/Gesture';
import More from '@mui/icons-material/Menu';
import InstagramLogo from '../assets/images/instagram-1.svg'
const LeftSide = () => {
  return (
    <div className='leftSidePart'>
        <div className="logoPart">
            <img className='logoimg' src={InstagramLogo} alt="instagram" />
        </div>
        <div className="navLinkPart">
            <div className="navLink">
            <HomeIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">Home</div>
            </div>
            <div className="navLink">
            <SearchIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">Search</div>
            </div>
            <div className="navLink">
            <ExploreIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">Explore</div>
            </div>
            <div className="navLink">
            <MusicVideoIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">Reel</div>
            </div>
            <div className="navLink">
            <Messages sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">Messages</div>
            </div>
            <div className="navLink">
            <Notification sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">Notification</div>
            </div>
            <div className="navLink">
            <Create sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">Create</div>
            </div>
            <div className="navLink">
              <img className='profileImg' src={ProfileImg} alt="Profile" />
            <div className="naveName">Profile</div>
            </div>
            <div className="navLink">
            <Thread sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">Thread</div>
            </div>
            <div className="navLink">
            <More sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
            <div className="naveName">More</div>
            </div>

        </div>
      
    </div>
  )
}

export default LeftSide
