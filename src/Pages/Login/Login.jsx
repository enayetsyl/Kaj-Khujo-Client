import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Component/Button";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const location = useLocation();
  const nevigate = useNavigate();
  const {createUser, setUserName, setUserPhoto, setUser} = useContext(AuthContext)

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="">
          <div className=" w-full shadow-2xl bg-base-100">
            <form className="px-16 py-8">
              <div className="">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered text-placeholderText"
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered text-placeholderText"
                  required
                />
              </div>
              <div className=" text-center mt-6">
                <Button className="w-full">Login</Button>
             </div>
             <div>
              <hr className="mt-5" />
            <p className="text-center py-2">Or</p>
            <div className="flex justify-center items-center gap-1">
            <p>Login with</p>
            <div className="text-2xl">
            <FcGoogle></FcGoogle>
            </div>
            </div>
             </div>
            </form>
            <p className="text-center pb-10">
              Do not have account
              <span className="text-[#0000ff] font-bold">
                <Link to={"/register"}> Register</Link>
              </span>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
