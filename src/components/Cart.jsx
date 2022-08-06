import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {addCart} from "../redux/action";
import {delCart} from "../redux/action";
import "../App.css"

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const delProduct = (product) => {
    dispatch(delCart(product));
  };
  return state.length === 0 ? (
    <div className="cart-text fs-1 text-center fw-bold p-2"> Your Cart Is Empty </div>
  ) : (
    state.map((product) => (
      <div className="m-auto p-3 bg-secondary mt-5 cart">
        <div className="row justify-content-around mb-2 bg-light text-dark p-4 cart-items">
          <div className="col-md-3 mb-4">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4 mt-4">
            <h3 className="fs-4">{product.title}</h3>
            <p className="lead fw-bold fs-5 text-nowrap">
              {product.qty} X ${product.price} = ${product.qty * product.price}
            </p>
          <button className="btn px-3 btn-primary me-4" onClick={()=> addProduct(product)}>+</button>
          <button className="btn px-3 btn-primary" onClick={()=> delProduct(product)}>-</button>
          </div>
        </div>
      </div>
    ))
  );
};

export default Cart;
