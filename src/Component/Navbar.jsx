
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, userName } = useContext(AuthContext) || {}
  // console.log(user.displayName)
  const photoURL = user ? user.photoURL : null;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  // useEffect(() => {
  //   // Simulate fetching user data from Firebase
  //   // Replace this with your actual data fetching logic
  //   setTimeout(() => {
  //     setIsLoading(false); // Once data is loaded, set isLoading to false
  //   }, 2000); // Simulating a 2-second delay
  // }, []);


  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

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
    <nav className="bg-[#e0e0e0] relative z-10">
      <div className="w-11/12 mx-auto flex items-center justify-between py-3">
        <div className="lg:hidden">
          <button
            onClick={toggleDrawer}
            className="cursor-pointer flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <Logo />

        {/* <ul className="hidden lg:flex space-x-4">
          {fullNavItems}
        </ul> */}

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <ul className="hidden lg:flex space-x-4">
                {fullNavItems}
              </ul>
              <span onClick={logOut}><Button >Log Out</Button></span>
              {photoURL && (
               <div className="relative">
               <img
                 src={photoURL}
                 alt="User Profile"
                //  title="Hello" // Set the text to display on hover
                title={user.displayName ? user.displayName : ""}
                 className="h-16 w-16 rounded-full"
                 style={{ position: 'relative' }} // Add inline styles
               />
               <div
                 className="tooltip-text"
                 style={{
                   position: 'absolute',
                   backgroundColor: 'rgba(0, 0, 0, 0.7',
                   color: 'white',
                   padding: '5px',
                   borderRadius: '5px',
                   visibility: 'hidden',
                   opacity: '0',
                   transition: 'opacity 0.3s',
                   bottom: '125%',
                   left: '50%',
                   transform: 'translateX(-50%)',
                 }}
               >
                 Hello
               </div>
             </div>
              )}
            </>
          ) : (
            <div className="flex justify-between items-center gap-10">
              <ul className="hidden lg:flex space-x-4">
                {shortNavItems}
              </ul>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            </div>
          )}
        </div>
      </div>

      {isDrawerOpen && (
        <div className="lg:hidden absolute top-18 right-0 z-20 w-64 bg-[#e0e0e0] p-4">
          <ul className="space-y-2 cursor-pointer">
            
            {user ? (
              <>
                {fullNavItems}
              </>
            ):
            (
              <>{shortNavItems}</>
            )
          }
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


