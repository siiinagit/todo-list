import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ backgroundColor: '#777eaa', textAlign: 'center'}}>
      <Typography variant='overline' sx={{fontSize:'32px', color: '#aaeeea'}} >Todo list</Typography>
    </Box>
  )
}

export default Header