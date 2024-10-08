import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function UpperAppBar(props) {
  const {loggedIn, toggleLogin} = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
          <Button color="inherit" onClick={toggleLogin}>{loggedIn ? "Log Out" : "Login"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}