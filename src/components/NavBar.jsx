import { Link } from "react-router-dom";
import { items } from "./Data";

const NavBar = ({ setItem }) => {
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setItem(element);
  };

  const filterByPrice = (price1, price2) => {
    const element1 = items.filter((product) => product.price >= price1);
    console.log(element1);
    const element2 = items.filter((product) => product.price <= price2);
    console.log(element2);
    const filteredItems = element1.filter((item) => element2.includes(item));
    console.log(filteredItems);
    setItem(filteredItems);
  };
  return (
    <>
      <div>
        <header
          className=" navbar text-center"
          style={{ justifyContent: "space-around" }}
        >
          <ul className="nav nav-pills navitems">
            <li className="nav-item ">
              <Link
                to={"/"}
                className="nav-link"
                aria-current="page"
                onClick={() => setItem(items)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <a
                href="#"
                className="nav-link"
                onClick={() => filterByCategory("laptops")}
              >
                Laptotps
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => filterByCategory("mobiles")}
              >
                Mobiles
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => filterByCategory("tablets")}
              >
                Tablets
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => filterByPrice(15000, 45000)}
              >
                15k-45k
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => filterByPrice(45000, 60000)}
              >
                45k-60k
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => filterByPrice(60000, 90000)}
              >
                60k-90k
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default NavBar;
