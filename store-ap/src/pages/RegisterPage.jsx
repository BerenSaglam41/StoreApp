import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <Container maxWidth='xs'>
          <Paper sx={{padding : 2}} elevation={3}>
            <Avatar sx={{mx:'auto',mb:2,color:'secondary.main'}}>
              <LockOutlined />
            </Avatar>
            <Typography component='h1' variant='h5' sx={{textAlign:'center',mb:2}}>
              Register
            </Typography>
            <Box component='form' sx={{mb:2}}>
              <TextField
                name='username'
                label='Enter Username'
                size='small'
                fullWidth
                required
                autoFocus
                sx={{mb:2}}
              />
              <TextField
                name='email'
                label='Enter email'
                size='small'
                fullWidth
                required
                autoFocus
                sx={{mb:2}}
              />
              <TextField 
                name='password'
                type='password'
                label='Enter password'
                size='small'
                fullWidth
                required
                sx={{mb:2}}
              />
              <Button
                type='submit' 
                variant='contained' 
                fullWidth
                sx={{mt:2}}
                color='secondary'
              >
                Submit
              </Button>
            </Box>
          </Paper>
      </Container>
    </div>
  )
}

export default RegisterPage
