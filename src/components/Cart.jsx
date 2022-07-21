import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {addCart} from "../redux/action";
import {delCart} from "../redux/action";

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
    <div> Your Cart is Empty </div>
  ) : (
    state.map((product) => (
      <div className="container p-5 bg-secondary">
        <div className="row justify-content-center mb-2 bg-light text-dark p-4">
          <div className="col-md-3">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} X ${product.price} = ${product.qty * product.price}
            </p>
          <button className="btn py-2 mb-2 bg-primary text-white me-4 fs-3" onClick={()=> addProduct(product)}>+</button>
          <button className="btn py-2 mb-2 bg-primary text-white fs-3" onClick={()=> delProduct(product)}>-</button>
          </div>
        </div>
      </div>
    ))
  );
};

export default Cart;
