
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Button from "../../Component/Button";

const AllJob = () => {
  const allJobs = useLoaderData();
  console.log(allJobs)
  const [searchCategory, setSearchCategory] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(allJobs); 

  const handleSearchChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleSearch = () => {
    const filtered = allJobs.filter((job) =>
      job.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="ml-10 flex flex-col items-center">
      <h1 className="text-headingText text-5xl font-bold pb-5">All Jobs</h1>
      <div className="mb-3 w-1/2 flex justify-center gap-5">
        <input
          type="text"
          placeholder="Search category only type (part-time/onsite/hybrid/remote)"
          value={searchCategory}
          onChange={handleSearchChange}
          className="border border-solid border-buttonBorder p-2 w-3/4"
        />
              <Button onClick={handleSearch}>Search</Button>
      </div>
      <table>
        <thead>
          <tr className="border-4 border-solid border-buttonBorder text-2xl">
            <th className="border border-solid border-buttonBorder py-2 px-10">Job Title</th>
            <th className="border border-solid border-buttonBorder p-2">Posting Date</th>
            <th className="border border-solid border-buttonBorder p-2">Deadline</th>
            <th className="border border-solid border-buttonBorder p-2">Salary Range</th>
            <th className="border border-solid border-buttonBorder p-2">Posted By</th>
            <th className="border border-solid border-buttonBorder p-5">Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-solid border-buttonBorder px-5">{item.jobTitle}</td>
              <td className="border border-solid border-buttonBorder">{item.postingDate}</td>
              <td className="border border-solid border-buttonBorder">{item.applicationDeadline}</td>
              <td className="border border-solid border-buttonBorder">{item.salaryRange}</td>
              <td className="border border-solid border-buttonBorder">{item.userName}</td>
              <td className="border border-solid border-buttonBorder">
                <Button>Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllJob;























// import { useLoaderData } from "react-router-dom";
// import Button from "../../Component/Button";


// const AllJob = () => {
//   const allJobs = useLoaderData()
//   return (
//     <div className="ml-10 flex flex-col items-center">
//       <h1 className="text-headingText text-5xl font-bold pb-5">All Jobs</h1>
//       <table>
//         <thead>
//           <tr className="border-4 border-solid border-buttonBorder text-2xl">
//             <th className="border border-solid border-buttonBorder py-2 px-10">Job Title</th>
//             <th className="border border-solid border-buttonBorder p-2">Posting Date</th>
//             <th className="border border-solid border-buttonBorder p-2">Deadline</th>
//             <th className="border border-solid border-buttonBorder p-2">Salary Range</th>
//             <th className="border border-solid border-buttonBorder p-2">Posted By</th>
//             <th className="border border-solid border-buttonBorder p-5">Details</th>
        
//           </tr>
//         </thead>
//         <tbody>
//           {allJobs.map((item, index) => (
//             <tr key={index} className="text-center">
//               <td className="border border-solid border-buttonBorder px-5">{item.jobTitle}</td>
//               <td className="border border-solid border-buttonBorder">{item.postingDate}</td>
//               <td className="border border-solid border-buttonBorder">{item.applicationDeadline}</td>
//               <td className="border border-solid border-buttonBorder">{item.salaryRange}</td>
//               <td className="border border-solid border-buttonBorder">{item.userName}</td>
//               <td className="border border-solid border-buttonBorder "><Button>Details</Button></td>
              
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllJob;


