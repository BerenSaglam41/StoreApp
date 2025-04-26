import React from 'react'
import { Button, CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { currenyTRY } from '../../utils/formats';
import { Delete } from '@mui/icons-material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, deleteItemToCart } from './cartSlice.js';

const CartPage = () => {

  const {cart , status } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subTotal = cart?.cartItems.reduce(
    (toplam, item) => toplam + item.product.price * item.product.quantity,
    0
  ) || 0;
  
  const tax = subTotal * 0.2;
  const total = subTotal + tax;

  if(!cart || cart.cartItems.length === 0 ) return <Typography component='h4'>Sepetinizde Ürün Yok !</Typography>
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth:650}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{width:100}}></TableCell>
            <TableCell >Ürün</TableCell>
            <TableCell sx={{width:120}}>Fiyat</TableCell>
            <TableCell sx={{width:170}}>Adet</TableCell>
            <TableCell sx={{width:120}}>Toplam</TableCell>
            <TableCell sx={{width:50}}>Fiyat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems.map(item =>(
            <TableRow key={item.productId}>
              <TableCell>
                <img src={`http://localhost:5000/images/${item.product.image}`} 
                alt="Resim" style={{width:"100%"}}/>
              </TableCell>
              <TableCell>{item.product.title}</TableCell>
              <TableCell>{currenyTRY.format(item.product.price)}</TableCell>
              <TableCell>
                  <Button 
                    onClick={()=> 
                      dispatch(addItemToCart({productId : item.product.productId}))
                      } 
                  >
                  { status === "pendingAddItem" + item.product.productId ? (
                    <CircularProgress size={20}/>
                   )  : (
                     <AddCircleOutlineIcon/>
                   )}
                  </Button>
                  
                  {item.product.quantity}

                  <Button 
                    onClick={()=>
                      dispatch(deleteItemToCart({
                        productId : item.product.productId ,
                        quantity : 1,
                        key : "single"
                      }))
                      } 
                  >
                  { status == "pendingDeleteItem" + item.product.productId + "single"? 
                  <CircularProgress size={20}/> :
                    <RemoveCircleOutlineIcon/>
                  }
                  </Button>            
              </TableCell>
              <TableCell>
                {currenyTRY.format(item.product.price * item.product.quantity)}
              </TableCell>
              <TableCell>
                <Button 
                  onClick={()=>
                    dispatch(deleteItemToCart({
                      productId : item.product.productId ,
                      quantity : item.product.quantity,
                      key : "all"
                    }))
                  } 
                  color='error'
                >
                  {
                    status == "pendingDeleteItem" + item.product.productId + "all" ? (
                      <CircularProgress size="20px" />
                    ) : (
                      <Delete />
                    )
                  }
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="right" colspan={5} >
              Ara Toplam
            </TableCell>
            <TableCell align="right" colspan={5} >
              {currenyTRY.format(subTotal)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" colspan={5} >
              Vergi
            </TableCell>
            <TableCell align="right" colspan={5} >
              {currenyTRY.format(tax)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" colspan={5} >
              Genel Toplam
            </TableCell>
            <TableCell align="right" colspan={5} >
              {currenyTRY.format(total)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartPage
