import { useContext,  useState } from "react";
import Button from "../../Component/Button";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

export default function MyModal({ visible, onClose, onSubmit, jobInfo}) {
  const {user} = useContext(AuthContext)
  
  // Convert the applicationDeadline to a Date object
  const applicationDeadline = new Date(jobInfo.applicationDeadline);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const resume = form.resumeLink.value;
    const id = jobInfo._id;
    // console.log(jobInfo)
    const applicantInfo = {name, email, resume, id}
    // console.log(applicantInfo)
    const currentDate = new Date();

    if(currentDate > applicationDeadline){
      swal("Sorry", 'You are late', "error");
      return;
    }

    if(user.displayName === jobInfo.userName){
      swal("Sorry", 'You cannot apply to your own job', "error");
      return;
    }
    
    onSubmit(applicantInfo);
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white p-4 rounded w-80">
        <h2 className="text-xl font-semibold mb-2">Modal Title</h2>
        <form   onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name='name'
            defaultValue={user.displayName}
                     placeholder="Enter your name"
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name='email'
                        defaultValue={user.email}
                 placeholder="Enter your email"
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Resume Link
          </label>
          <input
            type="text"
            name="resumeLink"          
            placeholder="Paste your resume link"
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="flex justify-center">
        <button
        
          className=""
        >
          <Button>Submit</Button>
        </button>
        </div>
        </form>
      </div>
    </div>
  );
}
