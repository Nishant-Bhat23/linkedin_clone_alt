import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import CreateIcon from '@mui/icons-material/Create';
import '../styles/Feed.css'; // Make sure to import your CSS for styling

function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

  const initialPost = {
    id: 1,
    userAvatar: 'https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png',
    userName: 'Sharat Bhat',
    userDescription: 'Full-Stack Developer',
    postText: 'This is an example post. #React #BlinkedIn #ALT',
    postImage: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
  };

  useEffect(() => {
    // Fetch posts from the backend or add the initial post to the list of posts
    setPosts([initialPost]);
  }, []);

  const handlePostSubmit = () => {
    if (newPostText) {
      const newPost = {
        id: posts.length + 1,
        userAvatar: 'URL of the user avatar',
        userName: 'User Name',
        userDescription: 'User Description',
        postText: newPostText,
        postImage: 'URL of the post image (if any)',
      };

      // Update the posts state to include the new post
      setPosts([...posts, newPost]);

      // Clear the input field
      setNewPostText('');
    }
  };

  return (
    <div className="feed">
      <div className="feed__createPost">
        <div className="feed__userAvatar">
          <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="User Profile" />
        </div>
        <div className="feed__inputContainer">
          <CreateIcon className="icon" />
          <input
            type="text"
            placeholder="Start a post"
            className="feed__input"
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
        </div>
        <button className="feed__postButton" onClick={handlePostSubmit}>
          Post
        </button>
      </div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
