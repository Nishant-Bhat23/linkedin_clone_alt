// LikeButton.js
import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';

function LikeButton({postId,userId})  {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState({});

useEffect(() => {
  handleLikeCount(postId,userId);
  console.log(likesCount)
},[liked]);
  async function handleLikeCount(post_id, user_id) {

     try {
       await axios.post("http://localhost:8080/like", {
         post_id: post_id,
         user_id: user_id,
       });
       const res = await axios.get(
         `http://localhost:8080/${post_id}/totalLikes`
       );
       setLikesCount((prevLikes) => ({
         ...prevLikes,
         [post_id]: res.data,
       }));
     } catch (error) {
       console.error(error);
     }
   }
   function handleLike(){
   setLiked(!liked);
   }
  return (
    <IconButton color={liked ? 'secondary' : 'default'} onClick={handleLike}>
      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
       <span>{likesCount[postId] || 0}</span>
    </IconButton>

  );
};

export default LikeButton;