import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
            <Toolbar>
                <Typography variant='h3' >Blog App </Typography>
                <Link to='/add'>
                <Button variant='contained'>ADD</Button>
               </Link> 
               <br></br>
               <Link to='/home'>
                <Button variant='contained'>Home</Button>
               </Link>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar