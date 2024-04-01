import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="text-center">
      <h1>Your cart is empty</h1>
      <Link to={"/"} className="btn btn-warning">
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
