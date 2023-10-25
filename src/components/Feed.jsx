import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import CreateIcon from '@mui/icons-material/Create';
import CreatePostPage from './CreatePostPage'; // Import the CreatePostPage component
import '../styles/Feed.css';

function Feed() {
  const [posts, setPosts] = useState([]);

  const initialPost = {
    id: 1,
    picture: 'https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png',
    userName: 'Sharat Bhat',
    userDescription: 'Full-Stack Developer',
    content: '',
    description: 'This is an example post. #React #BlinkedIn #ALT',
    baseContent: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
  };
   const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
      setDialogOpen(true);
    };

    const closeDialog = () => {
      setDialogOpen(false);
    };

  useEffect(() => {
    // Fetch posts from the backend or add the initial post to the list of posts
    setPosts([initialPost]);
  }, []);



return (
  <div className="feed">
    <div className="feed__createPost">
    <CreatePostPage
          open={isDialogOpen}
          onClose={closeDialog}
          title="Sample Dialog"
          content="This is the content of the dialog."
    />
    </div>
    <div className="feed__createPost">
            <div className="feed__userAvatar">
              <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="User Profile" />
            </div>
            <div className="feed__inputContainer">
              <CreateIcon className="icon" />
              <label
                className="feed__input"
                onClick={openDialog}
               >
               Start a Post
              </label>

            </div>


    </div>
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}


  </div>
);

}

export default Feed;
