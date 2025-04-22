import { Grid } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid item key={p.id} size={{xs:6,md:4,lg:3}} >
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
