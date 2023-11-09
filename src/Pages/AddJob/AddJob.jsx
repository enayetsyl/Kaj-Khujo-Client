import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../../Component/Button';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import axios from 'axios';

function AddJob() {

  const [jobPostingDate, setJobPostingDate] = useState(null);
  const [applicationDeadline, setApplicationDeadline] = useState(null);
  const {user} = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    const jobData = {
      jobTitle: e.target.jobTitle.value,
      jobBanner: e.target.jobBannerURL.value,
      userName: e.target.loggedInUserName.value,
      salaryRange: e.target.salaryRange.value,
      jobDescription: e.target.jobDescription.value,
      postingDate: jobPostingDate,
      applicationDeadline: applicationDeadline,
      applicants: parseInt(e.target.jobApplicantsNumber.value, 10),
      category: e.target.jobCategory.value,
      email: user.email,
    };
    
  

axios.post('http://localhost:5000/api/v1/addjob', jobData, {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Include credentials
})
.then(response => {
  console.log(response.data);
  if (response.data.message === 'Job Added Successfully') {
    swal('Congratulations', 'Your Job Added Successfully', 'success');
  } else {
    swal('Something Wrong', 'Try again', 'error');
  }
})
.catch(error => {
  console.error(error);
});

  }

  return (
    <div>
      <h2 className="text-headingText text-5xl font-bold pb-5 text-center">Add a Job</h2>
      <form onSubmit={handleSubmit}> 
        <div className='w-full flex justify-center items-center gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Job Title:</label>
          <input type="text" name="jobTitle" className='w-3/4 p-4' required/>
        </div>

        <div className='w-full flex justify-center items-center gap-5 py-5'>
          <label  className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Picture URL of Job Banner:</label>
          <input type="text" name="jobBannerURL" className='w-3/4 p-4' required/>
        </div>

        <div className='w-full flex justify-center items-center gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Logged In User Name:</label>
          <input type="text" name="loggedInUserName" 
          defaultValue={user.displayName}
          className='w-3/4 p-4' required/>
        </div>

        <div className='w-full flex justify-center items-center gap-5 py-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Salary Range:</label>
          <input type="text" name="salaryRange" className='w-3/4 p-4' required/>
        </div>

        <div className='w-full flex justify-center items-center gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Job Detail:</label>
          <textarea name="jobDescription" className='w-3/4 p-4' required></textarea >
        </div>

        <div className='w-full flex justify-start items-center gap-5 py-5'> 
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Job Posting Date:</label>
          <DatePicker selected={jobPostingDate}
          onChange={(date) => setJobPostingDate(date)}
          name='jobPostingDate'
          className='w-3/4 p-4'
          minDate={new Date()}
          ></DatePicker>
        </div>

        <div className='w-full flex justify-start items-center gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Submit Deadline:</label>
         <DatePicker
         selected={applicationDeadline}
         onChange={(date) => setApplicationDeadline(date)}
         name='applicationDeadline'
         className='w-3/4 p-4'
         />
        </div>

        <div className='w-full flex justify-center items-center gap-5 py-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>People Applied:</label>
          <input type="number" name="jobApplicantsNumber" 
          defaultValue={0}
          className='w-3/4 p-4' required/>
        </div>

        <div className='w-full flex justify-start items-center gap-5'>
          <label className='w-1/4 border border-buttonBorder p-1 lg:p-4 text-black text-xl font-bold'>Job Category:</label>
          <select name="jobCategory" className='w-3/4 p-4'>
            <option value="OnSite" className='p-4'>OnSite</option>
            <option value="Remote" className='p-4'>Remote</option>
            <option value="Part-Time" className='p-4'>Part-Time</option>
            <option value="Hybrid" className='p-4'>Hybrid</option>
          </select>
        </div>

        <div className='w-full flex justify-center items-center gap-5 pt-10'>
          <span type="submit"><Button>Submit</Button></span>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
