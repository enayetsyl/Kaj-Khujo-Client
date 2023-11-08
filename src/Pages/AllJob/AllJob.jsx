
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../Component/Button";

const AllJob = () => {
  const allJobs = useLoaderData();
  console.log(allJobs)
  // const [allJobs, setAllJobs] = useState([]);

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   fetch('https://kaj-khujo-server.vercel.app/api/v1/jobs', {
  //     credentials: 'include', // Include credentials if necessary
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setAllJobs(data); // Update state with the fetched data
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  const [searchJobTitle, setSearchJobTitle] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(allJobs); 

  

  const handleSearchChange = (e) => {
    setSearchJobTitle(e.target.value);
  };
  
  const handleSearch = () => {
    const filtered = allJobs.filter((job) => {
      const jobTitle = job.jobTitle || ""; // Ensure jobTitle is not null or undefined
      const jobTitleLower = jobTitle.toLowerCase(); // Extract toLowerCase
      if (searchJobTitle && searchJobTitle.trim() !== "") {
        return jobTitleLower.includes(searchJobTitle.toLowerCase());
      }
      // If searchCategory is empty, show all jobs
      return true;
    });
    setFilteredJobs(filtered);
  };
  
  


  return (
    <div className="lg:ml-10 flex flex-col items-center">
      <h1 className="text-headingText text-5xl font-bold pb-5">All Jobs</h1>
      <div className="mb-3 w-1/2 flex justify-center gap-5">
        <input
          type="text"
          placeholder="Search category only type (part-time/onsite/hybrid/remote)"
          value={searchJobTitle}
          onChange={handleSearchChange}
          className="border border-solid border-buttonBorder p-2 w-3/4"
        />
             <span onClick={handleSearch}> <Button >Search</Button></span>
      </div>
      <div className="">
      <table>
        <thead>
          <tr className="border-2 lg:border-4 border-solid border-buttonBorder text-sm lg:text-2xl">
            <th className="border border-solid border-buttonBorder py-2 lg:px-10">Job Title</th>
            <th className="border border-solid border-buttonBorder py-2">Posting Date</th>
            <th className="border border-solid border-buttonBorder py-2">Deadline</th>
            <th className="border border-solid border-buttonBorder py-2">Salary Range</th>
            <th className="border border-solid border-buttonBorder py-2">Posted By</th>
            <th className="border border-solid border-buttonBorder py-5">Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-solid border-buttonBorder lg:px-5">{item.jobTitle}</td>
              <td className="border border-solid border-buttonBorder">{new Date (item.postingDate).toDateString()}</td>
              <td className="border border-solid border-buttonBorder">{new Date (item.applicationDeadline).toDateString()}</td>
              <td className="border border-solid border-buttonBorder">{item.salaryRange}</td>
              <td className="border border-solid border-buttonBorder">{item.userName}</td>
              <td className="border border-solid border-buttonBorder ">
               <Link to={`/jobDetails/${item._id}`}><button className="m-1 text-xs px-1 py-3 lg:text-base lg:px-5 lg:py-3  bg-blue-600 text-white">Details</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>
  );
};

export default AllJob;


