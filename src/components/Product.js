import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, removeProduct, selectCurrentCart} from "../slice/cartSlice";

function Product(props) {
  const cart = useSelector(selectCurrentCart);
  const dispatch = useDispatch();
  const addToCart = (product)=>{
    dispatch(addProduct(product))
  }
  const removeFromCart = (product)=>{
    dispatch(removeProduct(product))
  }

  const {items} = props;
  return (
    <ul className="products">{items.map(addItems)}</ul>
  );
   // hoisting
  function addItems(product) {
    const {
      id,
      images,
      title,
      price,
      thumbnail
    } = product;

    const alreadyIncludes = cart.find((product)=>product.id == id)

    return <li key={id}>
      <img src={images[0]} alt={title}/>
      <p>Title: <strong>{title}</strong></p>
      <p>Price: <strong>${price}</strong></p>
      {alreadyIncludes ?
        <button onClick={removeFromCart.bind(null, product)}>Remove from Cart</button>
        : <button onClick={addToCart.bind(null, product)}>Add To Cart</button>}

    </li>
  }

}

export default Product;