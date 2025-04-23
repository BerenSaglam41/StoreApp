import { Alert, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router'

const ServerError = () => {
  const { state } = useLocation();
  return (
    <Paper sx={{ p : 3 , }}>
        {state?.error? (
           <>
            <Typography variant='h4' gutterBottom>
                {state.error.message} - {state.status}
            </Typography>
            <Alert severity='error'>
                {state.error.details || "Bilinmeyen bir hata oluştu . "}
            </Alert>
           </> 
        ) : (
            <>
            <Typography variant='h4'>
                Server error
            </Typography> 
            <Alert security='error'>
                Bilinmeyen Bir Hata oluştu
            </Alert>
            </>
        )}
        <Button component={Link} to='/' variant='contained' color='secondary'>AnaSayfa</Button>
    </Paper>
  )
}

export default ServerError
