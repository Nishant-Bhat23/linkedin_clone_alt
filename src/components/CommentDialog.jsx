import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentDialog = ({ postId, userId }) => {
  const [open, setOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [deletedCommentIndex, setDeletedCommentIndex] = useState(null);
  const [comments, setComments] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
       const newCommentObject = {
         // Generate a unique comment ID
          post_id:postId, // Replace with the actual post ID
          comment_text: newComment,
        };
      async function handle(){
      // Fetch posts from the backend or add the initial post to the list of posts
               try {
                    await axios.post('http://localhost:8080/post/'+userId+'/postComment',newCommentObject)

               } catch (error) {
                   console.log("error")
               }
    }

 console.log(comments);
    handle();
    console.log('New Comment:', newComment);

    // Clear the input field
    setNewComment('');
  };

   useEffect(() => {
     async function fetchComments() {
       try {
         const response = await axios.get(`http://localhost:8080/post/getComments`);
         setComments(response.data);
       } catch (error) {
         console.error("Error fetching comments:", error);
       }
     }

     if (postId) {
       fetchComments();
     }
   }, [postId]);

  const handleDeleteComment = (index) => {
    // Add your logic here to delete the comment from the server.
    // After successfully deleting the comment, update the UI by removing it.
    // For demonstration, I'll set the deleted comment's index.
    setDeletedCommentIndex(index);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <ChatBubbleOutlineIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Comments</DialogTitle>
        <DialogContent>
          {comments && comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.comment_text}</p>
                <IconButton onClick={() => handleDeleteComment(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
          <TextField
            label="Add a Comment"
            variant="outlined"
            fullWidth
            value={newComment}
            onChange={handleCommentChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCommentSubmit} color="primary" variant="contained">
            Submit Comment
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
