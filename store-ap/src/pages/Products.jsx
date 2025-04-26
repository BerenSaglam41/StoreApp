import React, { useEffect } from 'react'
import ProductList from '../compoments/ProductList';
import Loading from '../compoments/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from './catalog/catalogSlice';

const Products = () => {
  const dispatch = useDispatch()
  const loadedProducts = useSelector(selectAllProducts);
  const { status , isLoaded } = useSelector((state)=> state.catalog)

  useEffect(()=>{
    if(!isLoaded) dispatch(fetchProducts());
  },[isLoaded]);

  if(status === "pendingFetchProducts") return <Loading/>;

  return (
    <ProductList products={loadedProducts}/>
  )
}

export default Products


