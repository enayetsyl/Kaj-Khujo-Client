import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

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
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>{job.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MyJob;
