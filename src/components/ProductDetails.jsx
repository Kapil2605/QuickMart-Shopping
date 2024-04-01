import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import { LiaFastBackwardSolid } from "react-icons/lia";
import Products from "./Products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  return (
    <>
      <Link to={"/"} className="btn btn-outline-secondary ">
        <LiaFastBackwardSolid />
      </Link>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">₹ {product.price}</button>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
      <h5
        style={{
          marginLeft: "80px",
          marginTop: "80px",
          fontWeight: "700",
        }}
      >
        Related Products-
      </h5>
      <Products items={relatedProducts} />
    </>
  );
};

export default ProductDetails;
