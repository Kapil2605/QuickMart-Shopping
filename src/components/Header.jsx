import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ cart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <div>
      <header className="py-3 border-bottom headerbar">
        <div
          className="container-fluid d-grid gap-3 align-items-center  "
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <Link to={"/"} className="dropdown title">
            QuickMart
          </Link>
          <div className="d-flex align-items-center inputbar">
            <form
              onSubmit={handleInputChange}
              className="w-100 me-3"
              role="search"
            >
              <input
                type="search"
                className="form-control "
                placeholder="Search Products here..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            <Link to={"/cart"} className="cart">
              <button
                type="button"
                className="btn btn-primary position-relative"
              >
                <FaCartPlus size={23} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
