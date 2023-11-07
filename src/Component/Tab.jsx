// Tab.js
import { useState, useEffect } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('All'); // 'all' is the default tab
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch data from your server based on the active tab
    fetch(`http://localhost:5000/api/v1/tabJobs?category=${activeTab}`)
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => {
        console.error(error);
      });
  }, [activeTab]); 

  const tabs = ['All', 'OnSite', 'Remote', 'Part-Time', 'Hybrid'];

  const tabButtonStyle = {
    padding: '10px',
    margin: '5px',
    backgroundColor: '#3498db',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...tabButtonStyle,
              backgroundColor: activeTab === tab ? '#3498db' : '',
              color: activeTab === tab ? 'white' : '',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {jobs.map((job) => (
          <div 
          className="border border-buttonBorder p-10"
          key={job._id} >
            <p>User: {job.userName}</p>
            <p>Job Title: {job.jobTitle}</p>
            <p>Posting Date: {job.postingDate}</p>
            <p>Application Deadline: {job.applicationDeadline}</p>
            <p>Applicants Number: {job.applicants}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
