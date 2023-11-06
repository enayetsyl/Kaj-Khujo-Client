import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const name = user.displayName;
  console.log(name)
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  console.log(jobs)

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/jobs?userName=${name}`);

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
  }, [name]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Display a loading message or spinner
      ) : (
        <>
          <h1>Jobs for {name}</h1>
          {/* Display the fetched jobs */}
        

          <table>
        <thead>
          <tr className="border-4 border-solid border-buttonBorder text-2xl">
            <th className="border border-solid border-buttonBorder py-2 px-10">Job Title</th>
            <th className="border border-solid border-buttonBorder p-2">Posting Date</th>
            <th className="border border-solid border-buttonBorder p-2">Deadline</th>
            <th className="border border-solid border-buttonBorder p-2">Salary Range</th>
            <th className="border border-solid border-buttonBorder p-2">Update</th>
            <th className="border border-solid border-buttonBorder p-5">Delete</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-solid border-buttonBorder px-5">{item.jobTitle}</td>
              <td className="border border-solid border-buttonBorder">{item.postingDate}</td>
              <td className="border border-solid border-buttonBorder">{item.applicationDeadline}</td>
              <td className="border border-solid border-buttonBorder">{item.salaryRange}</td>
              <td className="border border-solid border-buttonBorder"><Link to={`/updatejob/${item._id}`} ><Button>Update</Button></Link></td>
              <td className="border border-solid border-buttonBorder">
               <Link to={`/jobDetails/${item._id}`}><Button>Delete</Button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
      )}
    </div>
  );
};

export default MyJob;
