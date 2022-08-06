import React from "react";

const Contact = () => {
  return (
    <>
          <div className=" about fs-1 text-center fw-bold p-2 m-5">Contact Us</div>
      <div className="fs-1 p-2 my-5 bg-dark text-center m-auto text-light">
        <h2>phone number</h2>
        <h3>01095353364</h3>
      </div>
      <div className="fs-1 p-2 my-5 bg-dark text-center m-auto text-light">
        <h2>E-mail</h2> <a href="a7medra4aad3@gmail.com" className="text-center text-decoration-none fs-3">a7medra4aad3@gmail.com</a>
      </div>
      <div className="card text-center m-auto mt-5">
        <img src="images/big-sale.png" alt="" />
      </div>
    </>
  );
};

export default Contact;
