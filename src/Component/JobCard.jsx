import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const JobCard = ({job}) => {
  const {user } = useContext(AuthContext)
  // console.log(user)



  return (
    <div>
       <div 
          className="border border-buttonBorder p-10 space-y-4 my-5"
           >
            <div className="lg:flex justify-between items-center font-bold text-xl space-y-4">
            <p>Employer: {job.userName}</p>
            <p>Job Title: {job.jobTitle}</p>
            </div>
            <div className="lg:flex justify-between items-center font-bold text-xl space-y-4">
              <p>Posting Date: {job.postingDate}</p>
            <p>Application Deadline: {job.applicationDeadline}</p>
            </div>
            <p className="font-bold text-xl pb-5">Applicants Number: {job.applicants}</p>
          
          
            <span className="text-center">
          {user ? (
            <Link to={`/jobDetails/${job._id}`}>
              <Button>View Details</Button>
            </Link>
          ) : (
            <span  onClick={() => {
              swal("Sorry", "You have to log in to see job details", "error");
            }}>
              <Button >
              View Details
            </Button>
            </span>
          )}
        </span>

       
          </div>
    </div>
  );
};

export default JobCard;