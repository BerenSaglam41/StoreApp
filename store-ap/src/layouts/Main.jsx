import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../compoments/NavBar'
import { Container } from '@mui/material'

const MainLayout = () => {
  return (
    <>
      <NavBar/>
      <Container sx={{mt:3}}>
        <Outlet/>
      </Container>
    </>
  )
}

export default MainLayout
