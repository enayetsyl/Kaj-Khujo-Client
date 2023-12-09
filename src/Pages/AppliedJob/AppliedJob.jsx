
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { usePDF } from 'react-to-pdf';
import loadingImage from '../../assets/loading.gif'
import Button from "../../Component/Button";

const AppliedJob = () => {
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  console.log(userName)
  const [jobs, setJobs] = useState([]);
  console.log(jobs)
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(`https://kaj-khujo-server.vercel.app/api/v1/myappliedjobs?userName=${userName}`);

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

  function truncateText(text, wordLimit) {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    const truncatedText = words.slice(0, wordLimit).join(' ');
    return `${truncatedText}...`;
  }
  



  return (
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
  <div className="flex justify-center items-center">
    <img src={loadingImage} alt="" className="h-screen" />
  </div>
) : (
  <div className="overflow-y-auto h-auto">
    <table ref={targetRef} className="min-w-full border-collapse border border-gray-300">
    <thead className="">
      <tr className="bg-white">
        <th className="border border-gray-300 px-4 py-2">Job Title</th>
        <th className="border border-gray-300 px-4 py-2">Category</th>
        <th className="border border-gray-300 px-4 py-2">Job Description</th>
        <th className="border border-gray-300 px-4 py-2">Posting Date</th>
        <th className="border border-gray-300 px-4 py-2">Deadline</th>
        <th className="border border-gray-300 px-4 py-2">Salary Range</th>
        <th className="border border-gray-300 px-4 py-2">Posted By</th>
        <th className="border border-gray-300 px-4 py-2">People Applied for the Job</th>
      </tr>
    </thead>
    <tbody>
      {filteredJobs.map((job) => (
        <tr key={job.job._id} className="text-center">
          <td className="border border-gray-300 px-4 py-2">{job.job.jobTitle}</td>
          <td className="border border-gray-300 px-4 py-2">{job.job.category}</td>
          <td className="border border-gray-300 px-4 py-2">{truncateText(job.job.jobDescription, 10)}</td>
          <td className="border border-gray-300 px-4 py-2">{new Date(job.job.postingDate).toDateString()}</td>
          <td className="border border-gray-300 px-4 py-2">{new Date(job.job.applicationDeadline).toDateString()}</td>
          <td className="border border-gray-300 px-4 py-2">{job.job.salaryRange}</td>
          <td className="border border-gray-300 px-4 py-2">{job.job.userName}</td>
          <td className="border border-gray-300 px-4 py-2">
            <p>{job.job.applicants}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
)}
  <div className="flex justify-center items-center py-10">
 <span onClick={() => toPDF()}>
 <Button>Generate PDF</Button>
 </span>
</div>
   </div>
  );
};

export default AppliedJob;







