import React, { useEffect, useState } from 'react'
import ProductList from '../compoments/ProductList';
import Loading from '../compoments/Loading';
import requests from '../api/ApiClient';

const Products = () => {
  const [loadedProducts,setLoadedProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    async function fetchProducts() {
      try{
        const data = await requests.products.list();
        setLoadedProducts(data);        
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false)
      }
    }
    fetchProducts();
  },[]);
  if(loading) return <Loading/>;

  return (
    <ProductList products={loadedProducts}/>
  )
}

export default Products


