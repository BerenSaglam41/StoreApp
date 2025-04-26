import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import ProductItem from '../compoments/ProductItem';
import Loading from '../compoments/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './Cart/cartSlice';
import { fetchProductById, selectProductById } from './catalog/catalogSlice';

const ProductDetails = () => {
  const {id} = useParams();
  const { cart,status } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const product = useSelector(state => selectProductById(state,id));
  const { status: loading } = useSelector(state => state.catalog);

  const cartItem = cart?.cartItems.find(
    (i) => i.product.productId == product?.id
  );

  function handleAddItem (productId) {
    dispatch(addItemToCart({productId:productId}));
  }

  useEffect(()=>{
    if(!product && id) dispatch(fetchProductById(id));
  },[id])

  if(loading === "pendingFetchProductById"){
    return(<Loading message='Yükleniyor ...'/>)
  }
  if(!product) return (<h1>Ürün Bulunamadı</h1>)
  return (<ProductItem 
    product={product} 
    handleAddItem={handleAddItem} 
    cartItem={cartItem}
    isAdding={status=="pendingAddItem"+product.id}
    />)
}

export default ProductDetails
