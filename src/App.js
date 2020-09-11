//******** */ Sync state in multiple route, calculate total price in review page......38.5*******

import React from 'react';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Product from './Components/Product/Product';





function App() {
  return (
  <div>
   <Header/>


    <Router>
      <Switch>
        <Route path="/home">
          <Shop/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/inventory">
          <Inventory/>
        </Route>
        <Route path="/product/:proCode">
          <ProductDetails/>
        </Route>
        <Route exact path="/">
          <Shop/>
        </Route>
        
        <Route path="*">
          <h1 style={{color:"red",textAlign:"center",marginTop:"10%"}}>404 NOT FOUND</h1>
        </Route>
      </Switch>
    </Router>

  </div>
  );
}

export default App;
