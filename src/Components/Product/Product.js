import React from 'react';

const Product = ({product,add2cart}) => {
  // console.log(props.product);
  const {name,img,price,key,seller,shipping}=product
  return (
    // <div className="container-fluid p-2 mt-3">
    //   <div className="row">
        <div className="col-md-12 col-12 p-4" style={{display:"flex",borderBottom:'1px solid lightgrey',borderRight:'1px solid lightgrey'}}>
          <div className="col-md-4 col-4">
            <img src={img} alt="" style={{minWidth:"50%"}}/>
          </div>

          <div className="col-md-8 col-8 p-2">
          
            
            <h5><a href={`/product/${key}`}>{name}</a></h5>
            <h6>Price ${price}</h6>
            <h6>Seller Info: {seller}</h6>
            <h6>Shipping Cost $ {shipping}</h6>
            
            <button type="button" className="btn btn-outline-dark" onClick={() =>add2cart(product)}>
            <svg width="1.5em" height="2em" viewBox="0 0 18 20" className="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            Add to Cart</button>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default Product;