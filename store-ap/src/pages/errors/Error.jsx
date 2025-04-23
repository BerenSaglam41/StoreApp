import React, { useState } from 'react'
import {Alert, AlertTitle, Box, Button, List, ListItem, ListItemText} from '@mui/material'
import requests from '../../api/ApiClient'
const ErrorPages = () => {
    const [validationError,setValidationError] = useState({});
    function getValidationErrors(){
        requests.errors.get403Error().catch(data => {
            setValidationError(data);
        })
    }    
  return (
    <Box>
        {
            validationError && validationError.errors && (
                <Alert sx={{ mb: 2 }} severity='error'>
                    <AlertTitle>{validationError.message}</AlertTitle>
                    <List>
                        {validationError.errors.map((err, index) => (
                            <ListItem key={index}>
                                <ListItemText>{err}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            )
        }
        <Button 
        sx={{mr:2}} 
        variant='outlined' 
        color='error' 
        onClick={()=> requests.errors.get400Error()}
        >
            Bad Request
        </Button>
        <Button 
        sx={{mr:2}} 
        variant='outlined' 
        color='error' 
        onClick={()=> requests.errors.get401Error()}
        >
            UnAuthorized
        </Button>
        <Button 
        sx={{mr:2}} 
        variant='outlined' 
        color='error' 
        onClick={getValidationErrors}
        >
            Validation - Error
        </Button>
        <Button 
        sx={{mr:2}} 
        variant='outlined' 
        color='error' 
        onClick={()=> requests.errors.get404Error()}
        >
            Not Found
        </Button>
        <Button 
        sx={{mr:2}} 
        variant='outlined' 
        color='error' 
        onClick={()=> requests.errors.get500Error()}
        >
            Server - Error
        </Button>
    </Box>
  )
}

export default ErrorPages
