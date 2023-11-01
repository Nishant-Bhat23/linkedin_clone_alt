import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PostItem.css';
import LikeButton from './LikeButton';
import CommentDialog from './CommentDialog';

const PostItem = ({ post }) => {
  const [currentUser, setCurrentUser] = useState([]);
  const [comments, setComments] = useState([]);
  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`http://localhost:8080/users/${post.user_id}/getUser`);
        setCurrentUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    if (post.user_id) {
      fetchUser();
    }
  }, [post.user_id]);



  const handleContentLoad = () => {
    // This function is called when the content (e.g., image) is loaded
    setContentLoaded(true);
  };

  return (
    <div className="feed__postItem">
      <div className="feed__postUser">
        <img src={currentUser.picture} alt="User Profile" />
        <div>
          <p className="feed__postUserName">{currentUser.username}</p>
          <p className="feed__postUserDescription">Developer</p>
        </div>
      </div>
      <p className="feed__postText">{post.descr}</p>
      {post.content && (
        <img
          className={`feed__postImage ${isContentLoaded ? 'loaded' : ''}`}
          src={`data:image/png;base64,${post.base64Content}`}
          alt="Post Image"
          onLoad={handleContentLoad}
          onError={() => console.log('Image loading error')}
        />
      )}
      <div className="feed__postActions">
        <LikeButton className="likebutton" postId={post.post_id} userId={post.user_id} />
        <CommentDialog  postId={post.post_id} userId={post.user_id} />
      </div>
    </div>
  );
};

export default PostItem;
