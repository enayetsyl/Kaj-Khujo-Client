import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";
import swal from "sweetalert";

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

  const handleDelete = (_id) =>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this job!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/api/v1/jobs/delete/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            swal("Poof! Your job has been deleted!", {
              icon: "success",
            });
            const remaining = jobs.filter(job => job._id !== _id);
            setJobs(remaining)
          }
        })
        
      } else {
        swal("Your job is safe!");
      }
    });
  }

  return (
    <div >
      {loading ? (
        <p>Loading...</p> // Display a loading message or spinner
      ) : (
        <>
          <h1 className="text-headingText text-5xl font-bold pb-5 text-center">{name} your Posted Job</h1>
          {/* Display the fetched jobs */}
        

      <div className="flex justify-center items-center">
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
              <td className="border border-solid border-buttonBorder px-5">{new Date(item.postingDate).toDateString()}</td>
              <td className="border border-solid border-buttonBorder px-5">{new Date(item.applicationDeadline).toDateString()}</td>
              <td className="border border-solid border-buttonBorder px-5">{item.salaryRange}</td>
              <td className="border border-solid border-buttonBorder px-5"><Link to={`/updatejob/${item._id}`} ><Button>Update</Button></Link></td>
              <td className="border border-solid border-buttonBorder px-5">
               <span onClick={() => handleDelete(item._id)}><Button>Delete</Button></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        </>
      )}
    </div>
  );
};

export default MyJob;
