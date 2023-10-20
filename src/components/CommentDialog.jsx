import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const CommentDialog = ({ comments }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <p key={index}>{comment}</p>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleClose}>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
