import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProductList = ({ product, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log(cart);
  };

  return (
    <>
      <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
        <div className="card" style={{ width: "18rem" }}>
          <Link to={`/product/${product.id}`}>
            <img src={product.imgSrc} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary mx-3">₹ {product.price}</button>
            <Link
              to={"/cart"}
              className="btn btn-warning"
              onClick={() =>
                addToCart(
                  product.id,
                  product.price,
                  product.title,
                  product.description,
                  product.imgSrc
                )
              }
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
