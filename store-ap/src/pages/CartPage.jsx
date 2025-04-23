import React, { useState } from 'react'
import { useEffect } from 'react'
import requests from '../api/ApiClient';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { currenyTRY } from '../utils/formats';
import { Delete } from '@mui/icons-material'
import Loading from '../compoments/Loading';

const CartPage = () => {
  const [cart,setCart] = useState(null)
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
    requests.cart.get()
    .then(cart=>setCart(cart))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  },[])

  if(loading) return <Loading message='Yükleniyor ...'/>

  if(!cart) return <Typography component='h4'>Sepetinizde Ürün Yok !</Typography>

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth:650}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{width:100}}></TableCell>
            <TableCell >Ürün</TableCell>
            <TableCell sx={{width:120}}>Fiyat</TableCell>
            <TableCell sx={{width:120}}>Adet</TableCell>
            <TableCell sx={{width:120}}>Toplam</TableCell>
            <TableCell sx={{width:50}}>Fiyat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems.map(item =>(
            <TableRow key={item.id}>
              <TableCell>
                <img src={`http://localhost:5000/images/${item.product.image}`} 
                alt="Resim" style={{width:"100%"}}/>
              </TableCell>
              <TableCell>{item.product.title}</TableCell>
              <TableCell>{currenyTRY.format(item.product.price)}</TableCell>
              <TableCell>{item.product.quantity}</TableCell>
              <TableCell>
                {currenyTRY.format(item.product.price * item.product.quantity)}
              </TableCell>
              <TableCell>
                <IconButton color='error'>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartPage
