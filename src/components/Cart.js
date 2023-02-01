import React from 'react';
import {useSelector} from "react-redux";
import {selectCurrentCart} from "../slice/cartSlice";
import Product from "./Product";
import Checkout from "./Checkout";

export function Cart(props) {
  const cart = useSelector(selectCurrentCart);

  return <div className="cart">
     <div>
       <h2>My Cart</h2>
       <Product items={cart}/>
     </div>
     <Checkout cart={cart}/>
   </div>
}

