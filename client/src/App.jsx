import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
<<<<<<< HEAD
import Success from "./pages/Success";
import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/products/" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route
          exact
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />

        <Route
          exact
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />

        <Route exact path="/pay" element={<Pay />} />

        <Route exact path="/success" element={<Success />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
=======
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <ProductList />
      <Register />
      <Login />
      <Cart />
      <Pay />
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
    </BrowserRouter>
  );
};

export default App;
