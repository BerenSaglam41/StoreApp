import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../compoments/NavBar'
import { Container } from '@mui/material'
import { ToastContainer } from 'react-toastify'
const MainLayout = () => {
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar theme='light' />
      <NavBar />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default MainLayout
