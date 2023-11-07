import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../Component/Button";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, setUserName, setUserPhoto, setUser } = useContext(AuthContext);
  const auth = getAuth(app);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    const user = { name: userName, email, password, photoURL };

    try {
      if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      } else if (!/[A-Z]/.test(password)) {
        throw new Error('Password must contain at least one capital letter');
      } else if (!/[!@#$%^&*()\-_=+\[\]{}|\\;:'"<>,.?/]/.test(password)) {
        throw new Error('Password must contain at least one special character');
      }

      const res = await createUser(email, password);
      if (res.user) {
        // Update user profile
        await updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: photoURL,
        });

        // Update user context
        setUserName(userName);
        setUserPhoto(photoURL);
        setUser(auth.currentUser);

        swal('Congratulations', 'Your registration is complete', 'success');
        navigate(location?.state ? location.state : '/');
      }
    } catch (err) {
      swal('Error', err.message, 'error');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="">
          <div className="w-full shadow-2xl bg-base-100">
            <form className="px-16 py-8" onSubmit={handleRegister}>
              <div className="">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered text-placeholderText" required />
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
                <input type="text" name="photo" placeholder="photoURL" className="input input-bordered text-placeholderText" required />
              </div>
              <div className=" text-center mt-6">
                <Button className="w-full">Register</Button>
              </div>
            </form>
            <p className="text-center pb-10">
              Already have an account{' '}
              <span className="text-[#0000ff] font-bold">
                <Link to={'/login'}>Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;



// import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import Button from "../../Component/Button";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import swal from "sweetalert";
// import { getAuth, updateProfile } from "firebase/auth";
// import app from "../../Firebase/firebase.config";


// const Register = () => {

//   const location = useLocation();
//   const nevigate = useNavigate();
//   const {createUser, setUserName, setUserPhoto, setUser, user} = useContext(AuthContext)
//   const auth = getAuth(app)
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const userName = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const photoURL = form.photo.value;
//     const user = {name: userName, email, password, photoURL}
//     console.log(user)
//     if(password.length < 8){
//       swal("Maf Chai Vai/Apu", 'Password 8 digit DEN please', "error")
//       return
//     }else if(!/[A-Z]/.test(password)){
//       swal("Maf Chai Vai/Apu", 'Ekta capital letter den atleast', "error")
//       return
//     }else if(!/[!@#$%^&*()\-_=+\[\]{}|\\;:'"<>,.?/]/.test(password)){
//       swal("Maf Chai Vai/Apu", 'Ekta special character den', "error")
//       return
//     }

//     const res = await createUser(email, password)
//     if (res.user) {
//       // Update user profile
//       await updateProfile(auth.currentUser, {
//         displayName: userName,
//         photoURL: photoURL,
//       });

//       // Update user context
//       setUserName(userName);
//       setUserPhoto(photoURL);
//       setUser(auth.currentUser);

//       swal('Congratulations', 'Your registration is complete', 'success');
//       navigate(location?.state ? location.state : '/');
//     }
//   } catch (err) {
//     swal('Error', err.message, 'error');
//   }
// };

//   //   .then(res => {
//   //     console.log(res.user)
//   //     if(res.user){
//   //       // setUser(res.user)
//   //       setUserName(userName)
//   //       setUserPhoto(photoURL)

//   //       updateProfile(auth.currentUser, {
//   //         displayName: userName,
//   //         photoURL:photoURL

//   //       })
//   //       .then(() => {
//   //         swal('Ovinondon', "Your registration is complete", "success");
//   //         nevigate(location?.state ? location.state : '/')
//   //       })
        
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     const errorCode = err.code;
//   //     const errorMessage = err.message
//   //     if(err){
//   //       swal("Sorry", `${errorCode} ${errorMessage}`, "error")
//   //     }
//   //   })

//   // }
//   return (
//     <>
//      <div className="flex justify-center items-center">
//   <div className="">
   
//     <div className=" w-full shadow-2xl bg-base-100">
//     <form className="px-16 py-8" onSubmit={handleRegister}>
//         <div className="">
//           <label className="label">
//             <span className="label-text text-black">Name</span>
//           </label>
//           <input type="text" name='name' placeholder="Name" className="input input-bordered text-placeholderText" required />
//         </div>
//         <div className="">
//           <label className="label">
//             <span className="label-text text-black">Email</span>
//           </label>
//           <input type="email" name="email" placeholder="Email" className="input input-bordered text-placeholderText" required />
//         </div>
//         <div className="">
//           <label className="label">
//             <span className="label-text text-black">Password</span>
//           </label>
//           <input type="password" name="password" placeholder="Password" className="input input-bordered text-placeholderText" required />
          
//         </div>
//         <div className="">
//           <label className="label">
//             <span className="label-text text-black">Photo</span>
//           </label>
//           <input type="text" name="photo" placeholder="photoURL" className="input input-bordered text-placeholderText" required />
          
//         </div>
//         <div className=" text-center mt-6">
//           <Button className='w-full'>Register</Button>
//         </div>
//       </form>
//       <p className="text-center pb-10">Already have account <span className="text-[#0000ff] font-bold"><Link to={'/login'}>Login</Link></span></p>
//     </div>
//   </div>
// </div>
//      </>
//   );
// };

// export default Register;