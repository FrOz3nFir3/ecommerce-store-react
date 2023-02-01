import React from 'react';
import Product from "./Product";
import {useSelector} from "react-redux";
import {selectCurrentProducts} from "../slice/productSlice";


export function Home(props) {
  const products = useSelector(selectCurrentProducts)

  return (
    <div className="home">
      <h2>All Items</h2>
      <Product items={products}/>
    </div>
  );

}

