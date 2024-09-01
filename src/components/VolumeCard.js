import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}°C`;
}


export default function OnlineCard(props) {
  const {handleVolumeChange, volumeLevel} = props

  return (
    <Card sx={{ width: '20vw', height: '25vh' }}>
      <CardContent sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>

        <Typography variant="h5" component="div">
          Master Volume
        </Typography>
        <Typography sx={{textAlign: 'left'}} variant="body2">
          Overides all other sound settings in this application.
        </Typography>
      </CardContent>
      <CardActions sx={{position: 'relative', display: 'flex', justifyContent: "center"}}>
        <Box sx={{ width: '80%', position: 'absolute', top: '4vh'}}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={10}
            marks
            min={0}
            max={100}
            value={volumeLevel}
            onChange={handleVolumeChange}
          />
        </Box>
      </CardActions>
    </Card>
  );
}