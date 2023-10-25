import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Container } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import '../styles/CreatePostPage.css';

function CreatePostPage(props) {
  const navigate = useNavigate();
  const { open, onClose, title, content } = props;
  const [postData, setPostData] = useState({
    content: '',
    description: '',
    baseContent: '',
    imageLink: '',
    postdate:'',
  });

  const handlePost =async() => {
    // Handle posting the content to the server or perform any desired action
    // You can also reset the form fields after posting.
    let user = localStorage.getItem("sessionToken");
        try {
          await axios.post(
            "http://localhost:8080/post/" + user + "/postupload",
            postData
          );
          navigate('/home/myprofile')
        } catch (error) {
          console.log("Failed     " + error);
        }
    console.log(postData)
    setPostData({
      content: '',
      description: '',
      baseContent: '',
      imageLink: '',
    });
  };

  const handleChange = (field, value) => {
    setPostData({ ...postData, [field]: value });

  };

  return open?(
    <Container maxWidth="sm" className="create-post-container">
     <div className="create-post">
          <div className="create-post-header">
            <CreateIcon fontSize="large" className="create-icon" />
            <span className="create-post-title">Create a Post</span>
            <button onClick={onClose} className="close-button">Close</button>
          </div>
          <div className="create-post-content">
            <TextField
              label="What's on your mind?"
              fullWidth
              multiline
              variant="outlined"
              value={postData.content}
              onChange={(e) => handleChange('content', e.target.value)}
            />
          </div>
          <div className="create-post-description">
            <DescriptionIcon className="description-icon" />
            <TextField
              label="Add a description..."
              fullWidth
              variant="outlined"
              value={postData.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </div>
          <div className="create-post-base-content">
            <ImageIcon className="image-icon" />
            <TextField
              label="Share your article, photo, or idea."
              fullWidth
              multiline
              variant="outlined"
              value={postData.baseContent}
              onChange={(e) => handleChange('baseContent', e.target.value)}
            />
          </div>
          <div className="create-post-image-link">
            <ImageIcon className="image-icon" />
            <TextField
              label="Image Link (URL)"
              fullWidth
              variant="outlined"
              value={postData.imageLink}
              onChange={(e) => handleChange('imageLink', e.target.value)}
            />
          </div>

          <div className="create-post-button">
            <Button variant="contained" color="primary" onClick={handlePost}>
              Post
            </Button>
          </div>
     </div>
    </Container>
  ):null;
}

export default CreatePostPage;
