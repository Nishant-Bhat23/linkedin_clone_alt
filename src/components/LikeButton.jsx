// LikeButton.js
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function LikeButton({postId,userId})  {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState({});

  async function handleLike(post_id, user_id) {
     setLiked(!liked);
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

   async function handleTotalLikes(post_id) {
       try {
         const res = await axios.get(
           "http://localhost:8080/" + post_id + "/totalLikes"
         );
         setLikesCount((prevLikes) => ({
           ...prevLikes,
           [post_id]: res.data,
         }));
       } catch (error) {
         console.error(error);
       }
     }

  return (
    <IconButton color={liked ? 'secondary' : 'default'} onClick={handleLike(postId,userId)}>
      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
    <span>{likesCount[postId] || 0}</span>
  );
};

export default LikeButton;