import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  console.log(props.cart);
  const [carting]=[props.cart]
  // const[price,shipping]=cart
  

  const tPrice=carting.reduce((total, pr)=>total+pr.price*pr.quantity,0)
  let sPrice=carting.reduce((total, sPri)=>total+sPri.shipping,0)
  // const dPrice=Number(tPrice.toFixed(2))
  // console.log( typeof(dPrice))
  
  
  if(tPrice>100){
      sPrice=0
  }else if(tPrice>50){
      sPrice=10
  }else if(tPrice>0){
    sPrice=carting.reduce((total, sPri)=>total+sPri.shipping,0)
  }
  // const formatsPrice=Number(sPrice)
  const totalPrice=tPrice+sPrice
  const tax=totalPrice/10
  // const vTax=Number(totPri/10)
  const formatPrice=(number)=>{
      const value=number.toFixed(2)
      return Number(value)
  }

  
  return (
    <div>
     <h6 className="text-center pb-5">Order Summery : {carting.length}</h6>
     <p>Price : {formatPrice(tPrice)}</p>
     <p>Shipping : {formatPrice(sPrice)}</p>
     <p>Vat/TAX :{formatPrice(tax)}</p>
     <p>Total Cost :{formatPrice(totalPrice+tax)}</p>
      {
        props.children
      }
     
     
    </div>
  );
};

export default Cart;