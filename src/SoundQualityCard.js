import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





export default function soundQualityCard(props) {
  const {handleQualityChange, soundQuality} = props

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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Quality</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={soundQuality}
              label="Age"
              onChange={handleQualityChange}
            >
              <MenuItem value={'low'}>Low</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'high'}>High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CardActions>
    </Card>
  );
}