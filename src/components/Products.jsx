import React, { useState, useEffect } from "react";
import "../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("ALL Category");
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);



  const Loading = () => {
    return (
      <>
        <div className="col-md-3 text-center">
          <Skeleton height={450} width={300} />
        </div>
        <div className="col-md-3 text-center">
          <Skeleton height={450} width={300} />
        </div>
        <div className="col-md-3 text-center">
          <Skeleton height={450} width={300} />
        </div>
        <div className="col-md-3 text-center">
          <Skeleton height={450} width={300} />
        </div>
      </>
    );
  };


  
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
    setCategory(cat)
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 w-100">
                <NavLink
                  to={`/products/${product.id}`}
                  className="text-decoration-none text-dark"
                >
                  <div
                    className="card bg-light h-100 text-center p-4 "
                    key={product.id}
                  >
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt={product.title}
                      height="300px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}. . .
                      </h5>
                      <p className="card-text lead fw-bold">${product.price}</p>
                      <NavLink
                        to={`/products/${product.id}`}
                        className="btn btn-success"
                      >
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </NavLink>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="buttons d-flex justify-content-center my-5 pb-5">
        <button
          className="btnn btn-outline-dark me-2"
          onClick={() => {setFilter(data) 
            setCategory("ALL Category")}}
        >
          All
        </button>
        <button
          className="btnn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btnn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btnn btn-outline-dark me-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btnn btn-outline-dark me-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      <h1 className="display-6 fw-bolder text-center mb-5">{category.toUpperCase()}</h1>
      <div className="products">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
