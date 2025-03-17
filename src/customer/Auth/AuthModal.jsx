import { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '90%', // Added for better mobile responsiveness
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 2, // Added rounded corners for better aesthetics
};

function AuthModal() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ color: 'black', marginTop: "5px" }} 
      >
        Sign in
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {/* Pass handleClose as onClose to both forms */}
          {location.pathname === '/login' 
            ? <LoginForm onClose={handleClose} /> 
            : <RegisterForm onClose={handleClose} />}
        </Box>
      </Modal>
    </div>
  );
}

export default AuthModal;
