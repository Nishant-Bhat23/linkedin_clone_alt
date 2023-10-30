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
    content:null,
    descr: '',
    imageLink: '',
    postdate:new Date()
  });

  const handlePost =async() => {
       const formData = new FormData();
        formData.append("content", postData.content);
        formData.append("post_date",postData.postdate );
        formData.append("descr", postData.descr);
        formData.append("imageLink", postData.imageLink);
    let user = localStorage.getItem("sessionToken");
        try {
          await axios.post(
            "http://localhost:8080/post/" + user + "/postupload",formData
          );
          navigate('/home/MyProfile')
        } catch (error) {
          console.log("Failed     " + error);
        }
    console.log(postData)
    setPostData({
      content:null,
      descr: '',
      imageLink: '',
      postdate:'',

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
           <input
                       type="file"
                       accept="image/*"  // Specify the accepted file types, e.g., images
                       onChange={(e) => handleChange('content', e.target.files[0])}
           />
          </div>
          <div className="create-post-description">
            <DescriptionIcon className="description-icon" />
            <TextField
              label="Add a description..."
              fullWidth
              variant="outlined"
              value={postData.descr}
              onChange={(e) => handleChange('descr', e.target.value)}
            />
          </div>
          <div className="create-post-base-content">
            <ImageIcon className="image-icon" />
            <TextField
              label="Share your article, photo, or idea."
              fullWidth
              multiline
              variant="outlined"
              value={postData.base64Content}
              onChange={(e) => handleChange('base64Content', e.target.value)}
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
