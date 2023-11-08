import { useContext } from "react";
import Button from "./Button";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const JobCard = ({job}) => {
  const {user } = useContext(AuthContext) || {}
  
  return (
    <div>
       <div 
          className="border border-buttonBorder p-10 space-y-4 my-5 bg-[#e0e0e0]"
           >
            <div className="lg:flex justify-between items-center font-bold text-xl space-y-4">
            <p>Employer: {job.userName}</p>
            <p>Job Title: {job.jobTitle}</p>
            </div>
            <div className="lg:flex justify-between items-center font-bold text-xl space-y-4">
              <p>Posting Date: {job.postingDate}</p>
            <p>Application Deadline: {job.applicationDeadline}</p>
            </div>
            <div className="lg:flex justify-between items-center font-bold text-xl space-y-4 pb-5">
            <p className="font-bold text-xl ">Applicants Number: {job.applicants}</p>
            <p className="font-bold text-xl ">Salary Range: {job.salaryRange}</p>
            </div>
          
          
            <span className="text-center">
          {user ? (
            <Link to={`/jobDetails/${job._id}`}>
              <Button>View Details</Button>
            </Link>
          ) : (
            <span  onClick={() => {
              swal("Sorry", "You have to log in to see job details", "error");
             
            }}>
              <Link to="/login">
                <Button>View Details</Button>
              </Link>
            </span>
          )}
        </span>

       
          </div>
    </div>
  );
};

export default JobCard;