import ProductList from "./ProductList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ items, cart, setCart }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => (
            <ProductList
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
