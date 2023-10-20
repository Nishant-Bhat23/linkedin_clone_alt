import React from 'react';
import '../styles/PostItem.css';
import LikeButton from './LikeButton';
import CommentDialog from './CommentDialog';

const PostItem = ({ post }) => {
  return (
    <div className="feed__postItem">
      <div className="feed__postUser">
        <img src={post.userAvatar} alt="User Profile" />
        <div>
          <p className="feed__postUserName">{post.userName}</p>
          <p className="feed__postUserDescription">{post.userDescription}</p>
        </div>
      </div>
      <p className="feed__postText">{post.postText}</p>
      {post.postImage && (
        <img className="feed__postImage" src={post.postImage} alt="Post Image" />
      )}
      <div className="feed__postActions">
        <LikeButton  className="likebutton"/>
        <CommentDialog comments={post.comments} />
      </div>
    </div>
  );
};

export default PostItem;