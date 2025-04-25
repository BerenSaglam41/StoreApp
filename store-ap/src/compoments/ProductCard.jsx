import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router'
import { currenyTRY } from '../utils/formats';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../pages/Cart/cartSlice';
const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const { status } = useSelector(state => state.cart);

  return (
    <div>
      <Card>
        <CardActionArea component={Link} to={"/products/"+product.id}>
            <CardMedia 
                sx={{height:160 , backgroundSize:"container"}} 
                image={`http://localhost:5000/images/${product.image}`} 
            />
            <CardContent>
                <Typography 
                    gutterBottom 
                    variant='h6' 
                    component="h2" 
                    color='primary.dark' 
                >
                    {product.title}
                </Typography>
                <Typography 
                    variant='body1' 
                    color='secondary.dark' 
                >
                    {currenyTRY.format(product.price)}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions sx={{display:'flex',justifyContent:"space-between"}}>
            <IconButton>
                {/* <FavoriteIcon/> */}
                <FavoriteBorderIcon/>
            </IconButton>
            <Button 
                onClick={()=> dispatch(addItemToCart({productId : product.id}))}
            >
                {status === "pendingAddItem"+product.id ? 
                <CircularProgress size="20px"/>
                :
                "Sepete Ekle"
                }
            </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ProductCard
