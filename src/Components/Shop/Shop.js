import React, { useEffect } from 'react';

import fakeData from '../../fakeData'
import Product from '../Product/Product';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from "../../utilities/databaseManager"
import { Link } from 'react-router-dom';

const Shop = () => {

const [cart, setCart]=useState([])


// const [revBtn, setrevBtn]=useState({display:"none"})
// console.log( cart)
  // console.log(fakeData.slice(0,10));
  const items10=fakeData.slice(0,10)

  useEffect(()=>{
    const savedData= getDatabaseCart()
// console.log(savedData);
    const pdKey=Object.keys(savedData)
// console.log(pdKey);
    const cartProduct= pdKey.map(pdkey=>{
  const product=fakeData.find(pd=>pd.key===pdkey)
  product.quantity=savedData[pdkey]
  return product
})
console.log( cartProduct)
setCart(cartProduct)
  },[])
// console.log( items10)
  const add2cart=(product)=>{
    
    const samePro=cart.find(pd=>pd.key===product.key)
    let newCart;
    let count=1;
    // console.log( samePro)
    if(samePro){
      count=samePro.quantity+1
      samePro.quantity=count
     const others= cart.filter(pd=>pd.key!==samePro.key)
    //  const others= cart.filter(pd=>pd.key!==product.key)  p-hero code ASTAGFIRULLAH
      newCart=[...others,samePro]
      console.log(others);
    
    }else{
      product.quantity=1
      newCart=[...cart,product]
     
    }
    // console.log( count)
    // console.log(samePro.quantity)
      // console.log(cart);
    // console.log( product.key)

    // const newCart=[...cart, product] 
      setCart(newCart);    
    //   setrevBtn({display:"block"});

    //  const sameProduct= newCart.filter(pd=>pd.key===product.key) 

    //   console.log(sameProduct.length)
      addToDatabaseCart(product.key, count)
      

      // TRY


  
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-10">
        {
        items10.map(eachProduct=><Product 
        key={eachProduct.key}
        product={eachProduct}
        add2cart={add2cart} 
        
        />)
      }
        </div>

        <div className="col-md-2">
          <Cart cart={cart}>
            <Link to="/review" className="text-decoration-none">
              <button type="button" className="btn btn-outline-dark">Review Order</button>
            </Link>

                        
          </Cart>
        </div>
      </div>  
    </div>
  );
};

export default Shop;