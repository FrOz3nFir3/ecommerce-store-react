import React from 'react';
import {useDispatch} from "react-redux";
import {checkoutProduct} from "../slice/cartSlice";

function Checkout(props) {
  const [success, setSuccess] = React.useState(null);

  const {cart} = props;
  const dispatch = useDispatch();
  const checkoutItems = () =>{
    setSuccess("You have Successfully placed your order!")
    dispatch(checkoutProduct());
  }
  const total = cart.reduce((currentSum, product) => currentSum + product.price, 0);

  if(total == 0){
    return success && <p className="success">{success}</p>;
  }else{
    return (
      <div className="checkout">
        <h3>Checkout List</h3>
        <ul className="checkout-items">{cart.map(addItems)}</ul>

        <p><strong>Total</strong> <strong>${total}</strong></p>
        <button onClick={checkoutItems}>Checkout</button>
      </div>
    );
  }


  function addItems(product, index) {
    const{
      id,
      title,
      price
    } = product;
    return <li className="cart-items" key={id}><span>{index + 1}. <strong>{title}</strong></span> <span>${price}</span></li>
  }
}

export default Checkout;