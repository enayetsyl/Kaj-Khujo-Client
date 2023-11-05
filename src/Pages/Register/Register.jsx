import { Link } from "react-router-dom";
import Button from "../../Component/Button";

const Register = () => {
  return (
    <>
     <div className="flex justify-center items-center">
  <div className="">
   
    <div className=" w-full shadow-2xl bg-base-100">
    <form className="px-16 py-8">
        <div className="">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered text-placeholderText" required />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered text-placeholderText" required />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered text-placeholderText" required />
          
        </div>
        <div className="">
          <label className="label">
            <span className="label-text text-black">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered text-placeholderText" required />
          
        </div>
        <div className=" text-center mt-6">
          <Button className='w-full'>Register</Button>
        </div>
      </form>
      <p className="text-center pb-10">Already have account <span className="text-[#0000ff] font-bold"><Link to={'/login'}>Login</Link></span></p>
    </div>
  </div>
</div>
     </>
  );
};

export default Register;