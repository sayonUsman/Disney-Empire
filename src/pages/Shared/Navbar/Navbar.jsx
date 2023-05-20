import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthContextProviders";

const Navbar = () => {
  const { user, logOut, loggedInUser } = useContext(AuthContext);
  const userDetails = loggedInUser();

  const handleLogOut = () => {
    logOut()
      .than(() => {})
      .catch(() => {});
  };

  const navContent = (
    <>
      <li>
        <NavLink to="/" className="mb-1 lg:mb-1 lg:mr-1">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all_toy" className="mb-1 lg:mb-1 lg:mr-1">
          All Toy
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/my_toys" className="mb-1 lg:mb-1 lg:mr-1">
              My Toys
            </NavLink>
          </li>

          <li>
            <NavLink to="/add_toy" className="mb-1 lg:mb-1 lg:mr-1">
              Add A Toy
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/blog" className="mb-1 lg:mb-1 lg:mr-1">
          Blog
        </NavLink>
      </li>

      {user ? (
        <li>
          <NavLink to="/login" onClick={handleLogOut}>
            Log Out
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className=" bg-gradient-to-t  from-white to-[#bdedfa]">
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

          <a className="btn btn-ghost normal-case text-xl ml-1">
            Disney Empire
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navContent}</ul>
        </div>

        {user ? (
          <div className="navbar-end">
            <div className="dropdown dropdown-end mr-3 md:mr-4">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar online"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      userDetails[2]
                        ? userDetails[2]
                        : "https://img.freepik.com/free-vector/hand-drawn-princess-background_23-2148161047.jpg?w=826&t=st=1684492757~exp=1684493357~hmac=6f6524a0abeeb14c13b35f760417bb4579fd49d41ce0bb30900ed4f17f461e3b"
                    }
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#daf5fa] rounded-md w-52"
              >
                <li>
                  <NavLink
                    to="/profile"
                    className="justify-between btn-ghost mb-1 pr-1"
                  >
                    {userDetails[0] ? userDetails[0] : userDetails[1]}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/settings" className="btn-ghost mb-1">
                    Settings
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/login"
                    onClick={handleLogOut}
                    className="btn-ghost"
                  >
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end"></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
