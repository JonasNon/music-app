import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function OnlineCard(props) {
  const {setIsOffline} = props

  return (
    <Card sx={{ width: '20vw', height: '25vh' }}>
      <CardContent sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>

        <Typography variant="h5" component="div">
          Online Mode
        </Typography>
        <Typography sx={{textAlign: 'left'}} variant="body2">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions sx={{position: 'relative'}}>
        <PinkSwitch  sx={{margin: '5vh',position: 'absolute', left: '-2vw', top: '-2vh'}} defaultChecked />
      </CardActions>
    </Card>
  );
}