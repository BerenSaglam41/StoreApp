import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductItem from '../compoments/ProductItem';
import Loading from '../compoments/Loading';
import requests from '../api/ApiClient';

const ProductDetails = () => {
  const {id} = useParams();
  const [loading,setLoading] = useState(true);
  const [product,setProduct] = useState(null);
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
  return (<ProductItem product={product} />)
}

export default ProductDetails
