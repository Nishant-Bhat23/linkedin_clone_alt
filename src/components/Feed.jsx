import React from 'react';
import  "../styles/Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';


function Feed() {


  return (
    <div className="feed">
          <div className="feed__createPost">
            <div className="feed__userAvatar">
              <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg " alt="User Profile" />
            </div>
            <div className="feed__inputContainer">
              <CreateIcon className="icon"/>
              <input
                type="text"
                placeholder="Start a post"
                className="feed__input"
              />

            </div>
            <button className="feed__postButton"> Post </button>

          </div>

          {/* Post items */}
          <div className="feed__postItem">
            <div className="feed__postUser">
              <img src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png " alt="User Profile" />
              <div>
                <p className="feed__postUserName">John Doe</p>
                <p className="feed__postUserDescription">Front-End Developer</p>
              </div>
            </div>
            <p className="feed__postText">
              This is an example post. #React #BlinkedIn
            </p>
            <img
              className="feed__postImage"
              src=" https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png"
              alt="Post Image"
            />
            <div className="feed__postActions">
              <button className="feed__likeButton">Like</button>
              <button className="feed__commentButton">Comment</button>
            </div>
          </div>


    </div>
  );
}

export default Feed;