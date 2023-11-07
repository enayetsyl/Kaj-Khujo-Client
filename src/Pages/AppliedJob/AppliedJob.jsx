import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AppliedJob = () => {
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  console.log(userName)
  const [jobs, setJobs] = useState([]);
  console.log(jobs)
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/myappliedjobs?userName=${userName}`);

        if (response.ok) {
          const data = await response.json();
          setJobs(data); // Update the jobs state with the fetched data
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error while fetching data: ", error);
      } finally {
        setLoading(false); // Data fetching is complete
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [userName]);

  // Function to filter jobs based on the selected category
  const filteredJobs = jobs.filter((job) => {
    if (!selectedCategory) {
      // If no category is selected, show all jobs
      return true;
    }
    return job.job.category === selectedCategory;
  });

  return (
    <div>
      <h1 className="text-headingText text-5xl font-bold pb-5 text-center">Your Applied job</h1>
     
      <div>
      <div className="py-5 border border-buttonBorder mb-5 text-center">
      <label className="font-bold text-xl text-black pr-5 ">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='p-4 space-y-2'
        >
          <option value="" className='p-4'>All Categories</option>
          <option value="OnSite" className='p-4'>OnSite</option>
          <option value="Remote" className='p-4'>Remote</option>
          <option value="Part-Time" className='p-4'>Part-Time</option>
          <option value="Hybrid" className='p-4'>Hybrid</option>
       
        </select>
      </div>

      {loading ? (
        <p>Loading...</p> 
      ) : 
      (
        <table>
        <thead>
          <tr className="border-4 border-solid border-buttonBorder text-2xl">
            <th className="border border-solid border-buttonBorder py-2 px-10">Job Title</th>
            <th className="border border-solid border-buttonBorder py-2 px-10">Category</th>
            <th className="border border-solid border-buttonBorder py-2 px-10">Job Description</th>
            <th className="border border-solid border-buttonBorder p-2">Posting Date</th>
            <th className="border border-solid border-buttonBorder p-2">Deadline</th>
            <th className="border border-solid border-buttonBorder p-2">Salary Range</th>
            <th className="border border-solid border-buttonBorder p-2">Posted By</th>
            <th className="border border-solid border-buttonBorder p-5">People Applied for the Job</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job) => (
            <tr key={job.job._id} className="text-center">
              <td className="border border-solid border-buttonBorder px-5">{job.job.jobTitle}</td>
              <td className="border border-solid border-buttonBorder px-5">{job.job.category}</td>
              <td className="border border-solid border-buttonBorder">{job.job.jobDescription}</td>
              <td className="border border-solid border-buttonBorder">{new Date(job.job.postingDate).toDateString()}</td>
              <td className="border border-solid border-buttonBorder">{new Date(job.job.applicationDeadline).toDateString()}</td>
              <td className="border border-solid border-buttonBorder">{job.job.salaryRange}</td>
              <td className="border border-solid border-buttonBorder">{job.job.userName}</td>
              <td className="border border-solid border-buttonBorder">
               <p>{job.job.applicants}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )
      }

      

    </div>
    </div>
  );
};

export default AppliedJob;
