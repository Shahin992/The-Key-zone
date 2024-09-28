import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/the-key-zone-logo.jpg";
import "./navber.css";
import { useAppSelector } from "@/Redux/hooks";
import { selectTotalQuantity } from "@/Redux/features/products/cardSlice";

const Navber = () => {
  const cards = useAppSelector(selectTotalQuantity);

  const nav = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/products"> Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 border-b">
      <div className=" w-11/12 mx-auto navbar ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm active dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-2xl shadow"
            >
              {nav}
            </ul>
          </div>
          <div>
            <Link to="/" className="flex justify-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
                <img className="h-full w-full object-cover" src={logo} alt="" />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">
                The Key Zone
              </h2>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/cards">
            <div className="badge ">
              <FaShoppingCart className="text-[#5c53fe] text-2xl" />
              <span className="mb-5 "> {cards}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
