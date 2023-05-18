import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const navContent = (
    <>
      <li>
        <NavLink to="/" className="mb-1 lg:mb-1 lg:mr-1">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all_toys" className="mb-1 lg:mb-1 lg:mr-1">
          All Toys
        </NavLink>
      </li>

      <li>
        <NavLink to="/my_toys" className="mb-1 lg:mb-1 lg:mr-1">
          My Toys
        </NavLink>
      </li>

      <li>
        <NavLink to="/add_a_toy" className="mb-1 lg:mb-1 lg:mr-1">
          Add A Toy
        </NavLink>
      </li>

      <li>
        <NavLink to="/blog" className="mb-1 lg:mb-1 lg:mr-1">
          Blog
        </NavLink>
      </li>

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#daf5fa]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#daf5fa] rounded-lg w-52"
            >
              {navContent}
            </ul>
          </div>

          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <a className="btn btn-ghost normal-case text-xl">Disney Empire</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navContent}</ul>
        </div>

        <div className="navbar-end">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
