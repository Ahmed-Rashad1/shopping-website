import React, { useState, useEffect }from "react";
import Products from "./Products";

const Home = () => {
  const [size, setSize] = useState(true)
  const handleSize = () => {
    const windowSize = window.innerWidth
    if (windowSize <= 700) {
      setSize(false)
    }else {
      setSize(true)
    }
  }
  useEffect(() => {
    handleSize()
  
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleSize)

}, [size])
  return (
    <div className="hero">
        <img
          src={ size ? "/images/sale2.jpg" : "/images/sale3.jpg"}
          className="card-img"
          alt="Background"
          height="900px"
          width="900px"
        />
      <Products />
    </div>
  );
};

export default Home;
