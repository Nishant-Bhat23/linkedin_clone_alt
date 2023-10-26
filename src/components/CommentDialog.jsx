import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentDialog = ({ comments,post }) => {
  const [open, setOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [deletedCommentIndex, setDeletedCommentIndex] = useState(null);

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
          postId: 'your_post_id', // Replace with the actual post ID
          text: newComment,
        };
    // Add your logic here to submit the new comment to the server
    // After successfully submitting the comment, update the UI with the new comment.
    // For demonstration, I'll simply log the new comment to the console.
    console.log('New Comment:', newComment);

    // Clear the input field
    setNewComment('');
  };

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
                <p>{comment}</p>
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
