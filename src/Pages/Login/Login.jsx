import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Component/Button";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";


const Login = () => {

    const {loading, setUserName, setUserPhoto, user, signInUser, googleSignIn, setUser} = useContext(AuthContext) || {}

  const location = useLocation();
  const nevigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    console.log(user)
    signInUser(email, password)
    .then(res => {
      console.log(res.user)
          swal('Ovinondon', "Your Login Successful", "success")
      nevigate(location?.state ? location.state : '/')
    })
    .catch(err => {
      if(err){
        swal("Maf Chai", `${err.message}`, "error")
      }
    })
  }

  // handle google signin starts

  const handleGoogleSignIn = e => {
    e.preventDefault();
    googleSignIn()
    .then(res => {
      console.log(res.user)
      if(res.user){
        
        swal('Ovinondon', "Your Login Successful", "success")
        setUserName(res.user.displayName)
        setUserPhoto(res.user.photoURL)
        setUser(res.user)
        nevigate(location?.state ? location.state : '/')
      }
    })
    .catch(err => {
      if(err){
        swal("Sorry", `$(err.message)`, 'error')
      }
    })

  }  

  // handle google sing in end

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="">
          <div className=" w-full shadow-2xl bg-base-100">
            <form className="px-16 pt-8" onSubmit={handleLogin}>
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
             </div>
            </form>
            <div className="flex justify-center items-center gap-1 pb-3 cursor-pointer" onClick={handleGoogleSignIn}>
            <p>Login with</p>
            <div className="text-2xl">
            <FcGoogle></FcGoogle>
            </div>
            </div>
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
