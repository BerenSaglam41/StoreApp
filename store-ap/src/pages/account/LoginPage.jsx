import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from './accountSlice'

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.account);
  const { register,handleSubmit,formState: { errors,isValid } } = useForm({
    defaultValues : {
      username : "",
      password : ""
    }
  })

  function handleForm(data){
    dispatch(loginUser(data));
  }

  return (
    <div>
      <Container maxWidth='xs'>
          <Paper sx={{padding : 2}} elevation={3}>
            <Avatar sx={{mx:'auto',mb:2,color:'secondary.main'}}>
              <LockOutlined />
            </Avatar>
            <Typography component='h1' variant='h5' sx={{textAlign:'center',mb:2}}>
              Login
            </Typography>
            <Box component='form' onSubmit={handleSubmit(handleForm)} sx={{mb:2}} 
            >
              <TextField
                {...register("username",{
                  required : "Username Zorunlu Alan",
                  minLength :{
                    value : 3,
                    message : "Username minimum 3 karakter olmalıdır"
                  }
                })}
                label='Enter Username'
                size='small'
                fullWidth
                autoFocus
                sx={{mb:2}}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
              <TextField 
                {...register('password',{
                  required : "password Zorunlu Alan",
                  minLength :{
                    value : 6,
                    message : "Password minimum 6 karakter olmalıdır"
                  }
                })}
                type='password'
                label='Enter password'
                size='small'
                fullWidth
                sx={{mb:2}}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <Button 
                type='submit' 
                variant='contained' 
                fullWidth
                sx={{mt:2}}
                color='secondary'
                disabled={!isValid}
              >
                {
                  status === "pending" ?
                  <CircularProgress size={25}/>
                  :
                  "Submit"
                }
              </Button>
            </Box>
          </Paper>
      </Container>
    </div>
  )
}

export default LoginPage
