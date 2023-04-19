import React from 'react'
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

/* ---------- CSS Styling for Nav buttons --------- */
const ButtonStyles = {
  fontSize: "1.05rem",
  color: "#F0F0F0",
  fontWeight: "400",
  textTransform: "none",
};

const NavLinks = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Link to="/">
          <Button style={ButtonStyles}>Home</Button>
        </Link>
        <Link to="About">
          <Button style={ButtonStyles}>About</Button>
        </Link>
        <Link to="Projects">
          <Button style={ButtonStyles}>Projects</Button>
        </Link>
      </Box>
    </>
  );
}

export default NavLinks