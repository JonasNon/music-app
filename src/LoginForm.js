import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function LoginForm(props) {
  const {toggleLogin, handleUsernameInput, username} = props

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch', position: 'absolute', left: "45vw", top:'30vh'} }}
      noValidate
      autoComplete="off"
    >
      <div sx={{display: 'flex', flexDirection: 'column', width: "20vw", justifyContent: 'centered', alignItems: "centered"}}>
        <TextField id="standard-basic" label="Username" variant="standard" onChange={handleUsernameInput} value={username} />
        <TextField  id="standard-basic" label="Password" variant="standard" />
        <Button sx={{margin: '3vh'}} onClick={toggleLogin} variant="outlined">Log In</Button>
      </div>  

    </Box>
  );
}