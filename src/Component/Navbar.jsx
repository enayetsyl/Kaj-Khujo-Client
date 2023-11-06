import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, userName, logOut } = useContext(AuthContext);

  const fullNavItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/alljob"}>All Jobs</Link>
      </li>
      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>
      <li>
        <Link to={"/appliedjob"}>Applied Jobs</Link>
      </li>
      <li>
        <Link to={"/myjob"}>My Job</Link>
      </li>
      <li>
        <Link to={"/addjob"}>Add a Job</Link>
      </li>
    </>
  );
  const shortNavItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/alljob"}>All Jobs</Link>
      </li>
      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="w-11/12 mx-auto">
            <div className="flex-none lg:hidden ">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <Logo></Logo>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {user ? fullNavItems : shortNavItems}
              </ul>
            </div>
            {user ? (
              <div onClick={logOut}>
                <Button>Log Out</Button>
              </div>
            ) : (
              <div>
                <Link to={"/login"}>
                  <Button>Login</Button>
                </Link>
              </div>
            )}
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {user ? fullNavItems : shortNavItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
