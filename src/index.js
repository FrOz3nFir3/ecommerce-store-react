import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route, BrowserRouter} from "react-router-dom";

import App from "./components/App";
import {Home} from "./components/Home";
import {Cart} from "./components/Cart";
import store from "./configureStore";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <Routes>
        <Route path="/ecommerce-store-react" element={<App/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
