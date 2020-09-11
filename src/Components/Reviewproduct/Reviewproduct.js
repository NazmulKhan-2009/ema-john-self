import React from 'react';

const Reviewproduct = ({product,handle}) => {
  const {name,img,price,key,seller,shipping,quantity}=product
  return (
    <div>
      <div className="col-md-12 col-12 p-4" style={{display:"flex",borderBottom:'1px solid lightgrey',borderRight:'1px solid lightgrey'}}>
          <div className="col-md-4 col-4">
            <img src={img} alt="" style={{minWidth:"50%"}}/>
          </div>

          <div className="col-md-8 col-8 p-2">
          
            <h5 style={{color:"red"}}>Quantity : {quantity}</h5>
            <h5><a href={`/product/${key}`}>{name}</a></h5>
            <h6>Price ${price}</h6>
            
            <h6>Shipping Cost $ {shipping}</h6>
            
            <button onClick={()=>handle(key)} type="button" className="btn btn-outline-dark" >
            <svg width="1.2em" height="1em" viewBox="1 1.2 20 16" class="bi bi-shield-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/>
            <path fill-rule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"/>
          </svg>
            Remove</button>
          </div>
        </div>
    </div>
  );
};

export default Reviewproduct;