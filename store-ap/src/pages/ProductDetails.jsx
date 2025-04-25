import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductItem from '../compoments/ProductItem';
import Loading from '../compoments/Loading';
import requests from '../api/ApiClient';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './Cart/cartSlice';

const ProductDetails = () => {
  const {id} = useParams();
  const [loading,setLoading] = useState(true);
  const [isAdding,setIsAdding] = useState(false);
  const [product,setProduct] = useState(null);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const cartItem = cart?.cartItems.find(
    (i) => i.product.productId == product?.id
  );

  function handleAddItem (productId) {
    setIsAdding(true);
    requests.cart.addItem(productId)
      .then(cart => dispatch(setCart(cart)))
      .catch(err => console.log(err))
      .finally(()=>setIsAdding(false));
  }

  useEffect(()=>{
    async function fetchProductDetails () {
      try{
        const data = await requests.products.details(id)
        setProduct(data);
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchProductDetails();
  },[id])
  if(loading){
    return(<Loading message='Yükleniyor ...'/>)
  }
  if(!product) return (<h1>Ürün Bulunamadı</h1>)
  return (<ProductItem 
    product={product} 
    handleAddItem={handleAddItem} 
    cartItem={cartItem}
    isAdding={isAdding}
    />)
}

export default ProductDetails
