import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import DatePicker from 'react-datepicker';
import Button from "../../Component/Button";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const UpdateJob = () => {
  const jobInfo = useLoaderData();
  console.log(jobInfo)
  const [postingDate, setPostingDate] = useState(jobInfo.postingDate ? new Date(jobInfo.postingDate) : null);
const [applicationDeadline, setApplicationDeadline] = useState(jobInfo.applicationDeadline ? new Date(jobInfo.applicationDeadline) : null);

  const {user} = useContext(AuthContext)
console.log(user)
  const handleUpdate = e => {
    e.preventDefault()
    const updatedPostingDate = postingDate;
    const updatedData = {
      jobTitle: e.target.jobTitle.value,
      jobBanner: e.target.jobBannerURL.value,
      userName: user.displayName,
      salaryRange: e.target.salaryRange.value,
      jobDescription: e.target.jobDescription.value,
      postingDate: updatedPostingDate,
      applicationDeadline: applicationDeadline,
      applicants: e.target.jobApplicantsNumber.value,
      category: e.target.jobCategory.value,
      email: user.email,
    };

    console.log(updatedData)
    
    if(postingDate === null || applicationDeadline === null){
      swal("Sorry", "Please select valid date", 'error')
      return;
    }


    axios.put(`https://kaj-khujo-server.vercel.app/api/v1/updatejob/${jobInfo._id}`, updatedData, {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include credentials
})
  .then((response) => {
    console.log(response.data);
    if (response.data.modifiedCount > 0) {
      swal('Congratulation', 'Your Job Updated Successfully', 'success');
    } else {
      swal('Something Wrong', 'Try again', 'error');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

    // fetch(`https://kaj-khujo-server.vercel.app/api/v1/updatejob/${jobInfo._id}`, {
    //   method:'PUT',
    //   headers:{
    //     'content-type':'application/json'
    //   },
    //   body: JSON.stringify(updatedData)
    // })
    // .then(res => res.json())
    // .then (data => {
    //   console.log(data)
    //   if(data.modifiedCount > 0){
    //     swal('Congratulation', "Your Job Updated Successfully", "success")
    //   }else{
    //     swal('Something Wrong', "Try again", "error")
    //   }
    // })

  }

  return (
    <div>
      <h2 className="text-center text-5xl text-headingText font-bold py-10">Update Job</h2>
      <form onSubmit={handleUpdate}> 
        <div className='w-full flex justify-center items-center gap-2 lg:gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Job Title:</label>
          <input type="text" name="jobTitle" className='w-3/4 p-4' defaultValue={jobInfo.jobTitle} required/>
        </div>

        <div className='w-full flex justify-center items-center gap-2 lg:gap-5 py-5'>
          <label  className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Picture URL of Job Banner:</label>
          <input type="text" name="jobBannerURL" className='w-3/4 p-4' required value={jobInfo.jobBanner}/>
        </div>

        <div className='w-full flex justify-center items-center gap-2 lg:gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Logged In User Name:</label>
          <input type="text" name="loggedInUserName" 
          defaultValue={user.displayName}
          className='w-3/4 p-4' required/>
        </div>

        <div className='w-full flex justify-center items-center gap-2 lg:gap-5 py-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Salary Range:</label>
          <input type="text" name="salaryRange" className='w-3/4 p-4' required defaultValue={jobInfo.salaryRange}/>
        </div>

        <div className='w-full flex justify-center items-center gap-2 lg:gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Job Detail:</label>
          <textarea name="jobDescription" className='w-3/4 p-4' required defaultValue={jobInfo.jobDescription}></textarea >
        </div>

        <div className='w-full flex justify-start items-center gap-2 lg:gap-5 py-5'> 
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Job Posting Date:</label>
          <DatePicker  selected={postingDate || new Date()}
          onChange={(date) => setPostingDate(date)}
          name='postingDate'
          className='w-3/4 p-4'
          minDate={new Date()}
          defaultValue={jobInfo.postingDate}
          ></DatePicker>
        </div>

        <div className='w-full flex justify-start items-center gap-2 lg:gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Submit Deadline:</label>
         <DatePicker
         selected={applicationDeadline || new Date()}
         onChange={(date) => setApplicationDeadline(date)}
         name='applicationDeadline'
         className='w-3/4 p-4'
         defaultValue={jobInfo.applicationDeadline}
         />
        </div>

        <div className='w-full flex justify-center items-center gap-2 lg:gap-5 py-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>People Applied:</label>
          <input type="number" name="jobApplicantsNumber" 
          defaultValue={0}
          className='w-3/4 p-4' required/>
        </div>

        <div className='w-full flex justify-start items-center gap-2 lg:gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Job Category:</label>
          <select name="jobCategory" className='w-3/4 p-4' value={jobInfo.jobCategory}>
            <option value="onSite" className='p-4'>OnSite</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time" className='p-4'>Part-Time</option>
            <option value="Hybrid" className='p-4'>Hybrid</option>
          </select>
        </div>

        <div className='w-full flex justify-center items-center gap-5 pt-10'>
          <span type="submit"><Button>Update</Button></span>
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;