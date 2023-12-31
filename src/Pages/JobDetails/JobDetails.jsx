import { useLoaderData } from "react-router-dom";
import banner from "../../assets/jobBanner.jpg";
import Button from "../../Component/Button";
import Modal from "./Modal";
import { useState } from "react";
import swal from "sweetalert";
import emailjs from 'emailjs-com';

const JobDetails = () => {
  const jobInfo = useLoaderData();
  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)

  const handleFormSubmit = (applicantInfo) => {
    // Handle the form data here (e.g., send it to the server)
    console.log("Form submitted with inputs:", applicantInfo);
    fetch('https://kaj-khujo-server.vercel.app/api/v1/appliedJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicantInfo),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server, e.g., show a success message
        console.log('Response from server:', data);
        swal('success', `${data.message}`, 'success')
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
  };

    // console.log(jobInfo);
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <img src={banner} alt="" className=" h-[50vh]" />
        <h1 className="text-headingText font-bold text-5xl">
          WE are HIRING from =>{" "}
        </h1>
        <img src={jobInfo.jobBanner} alt="" />
      </div>
      <h1 className="text-headingText font-bold text-3xl text-center py-5">
        <span className="text-black">Job Title: </span>
        {jobInfo.jobTitle}
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center border border-buttonBorder py-20 px-2 lg:px-5 gap-8">
        <div className="lg:w-3/4">
          <h1 className="text-xl font-bold text-black pb-3 text-justify">Job Description</h1>
          <p>{jobInfo.jobDescription}</p>
        </div>
        <div className="lg:w-1/4">
          <p>
            <span className="font-bold">Salary Range:</span>{" "}
            {jobInfo.salaryRange}
          </p>
          <p>
            <span className="font-bold">People Applied for this job:</span>
            {parseInt(jobInfo.applicants)}
          </p>
        </div>
       
      </div>
      <div className="flex justify-center py-20">
     <span onClick={() => setShowModal(true)}><Button >Apply Now</Button></span> 
      </div>
     <Modal 
     onClose={handleOnClose}
     onSubmit={handleFormSubmit}
     visible={showModal}
     jobInfo={jobInfo}
     ></Modal>
    </div>
  );
};

export default JobDetails;
