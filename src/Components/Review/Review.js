import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Reviewproduct from '../Reviewproduct/Reviewproduct';
import Cart from '../Cart/Cart';


const Review = () => {
  const [cart, setCart]=useState([])

  // ***********without useEffect from me********************
  //   const saveCart=getDatabaseCart()
  
  //   const proKey=Object.keys(saveCart)
  //   const cartPro=proKey.map(key=> {
  //   const product=fakeData.find(pd=>pd.key===key)
  //   product.quantity=saveCart[key]
  //   return product
    
  // })


  //*****************P-Hero code *****************
  useEffect(()=>{
    const saveCart=getDatabaseCart()
  
    const proKey=Object.keys(saveCart)
    const cartPro=proKey.map(key=> {
      const product=fakeData.find(pd=>pd.key===key)
      product.quantity=saveCart[key]
      return product;
    })
  setCart(cartPro)

  },[])
  
const removePro=(proKey)=>{
  const proDel=cart.filter(pd=>pd.key!==proKey)
  setCart(proDel)
  removeFromDatabaseCart(proKey)
}
 
const placeOrder=()=>{
  setCart([])
  processOrder(cart)
  
}



  
  return (
    
      

     <div className="container pt-5">
      <div className="row">
       <div className="col-md-10">
        {/* MY CODE******************** */}
            {/* {cart.map(pd=><Product product={pd} count={true}/>)} */}

      
        {/* P-HERO CODE*********************************** */}
        {
          cart.map(pd=><Reviewproduct product={pd}
            handle={removePro}
          />)
        }
      </div>

        <div className="col-md-2">
          <Cart cart={cart}>
          <button type="button" className="btn btn-outline-dark" onClick={placeOrder}>Place Order</button>
          </Cart>
        </div>
      </div>
     </div>
    
  );
};

export default Review;