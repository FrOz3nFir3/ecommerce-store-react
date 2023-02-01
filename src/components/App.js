import React, {useState} from "react";
import "./App.css";
import {NavLink, Outlet} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {initializeProducts} from "../slice/productSlice";
function App() {
 const[error, setError] = useState(null);
 const dispatch = useDispatch()

 React.useEffect(()=>{
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>{
     if(data.message){
      setError(data.message)
     }else{
      dispatch(initializeProducts(data.products))
     }
    })
 },[])


  return(<>
   <header>
    <span>Shopping cart</span>
    <nav>
     <ul className="navigation">
      <NavLink to="home">Home Page</NavLink>
      <NavLink to="cart">Cart Page</NavLink>
     </ul>
    </nav>
   </header>
   {error && <p className="error">{error}</p>}
   <Outlet/>
  </>)
}

export default App;
