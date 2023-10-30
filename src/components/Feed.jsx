import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import CreateIcon from '@mui/icons-material/Create';
import CreatePostPage from './CreatePostPage'; // Import the CreatePostPage component
import '../styles/Feed.css';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);


   const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
      setDialogOpen(true);
    };

    const closeDialog = () => {
      setDialogOpen(false);
    };

  useEffect(() => {
    // Fetch posts from the backend or add the initial post to the list of posts
    async function fetchData(){
     try {
                 const response = await axios.get('http://localhost:8080/post/getPosts')
                 setPosts(response.data)

             } catch (error) {
                 console.log('Error fetching posts:', error);
             }
     }
     fetchData();

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
      <PostItem key={post.post_id} post={post} />
    ))}

  </div>
);

}

export default Feed;
