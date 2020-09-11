import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
const ProductDetails = () => {
  const {proCode}=useParams()
  const keyProduct=fakeData.find(keySearch=>keySearch.key===proCode)
  // const {name,img,price,key,seller,shipping}=keyProduct
  return (
    <div>
      <Product product={keyProduct}/>
    </div>
  );
};

export default ProductDetails;