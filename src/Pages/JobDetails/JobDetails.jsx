import { useLoaderData } from "react-router-dom";
import banner from "../../assets/jobBanner.jpg";
import Button from "../../Component/Button";
import Modal from "./Modal";
import { useState } from "react";

const JobDetails = () => {
  const jobInfo = useLoaderData();
  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)
    console.log(jobInfo);
  return (
    <div>
      <div className="flex justify-center items-center gap-5">
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
      <div className="flex justify-between items-center border border-buttonBorder py-20">
        <div className="w-3/4">
          <p>{jobInfo.jobDescription}</p>
        </div>
        <div className="w-1/4">
          <p>
            <span className="font-bold">Salary Range:</span>{" "}
            {jobInfo.salaryRange}
          </p>
          <p>
            {" "}
            <span className="font-bold">People Applied for this job:</span>{" "}
            {jobInfo.applicants}
          </p>
        </div>
       
      </div>
      <div className="flex justify-center py-20">
     <button onClick={() => setShowModal(true)}><Button >Apply Now</Button></button> 
      </div>
     <Modal 
     onClose={handleOnClose}
     visible={showModal}></Modal>
    </div>
  );
};

export default JobDetails;
