// Tab.js
import { useState, useEffect } from 'react';
import JobCard from './JobCard';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('All'); // 'all' is the default tab
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch data from your server based on the active tab
    fetch(`https://kaj-khujo-server.vercel.app/api/v1/tabJobs?category=${activeTab}`)
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => {
        console.error(error);
      });
  }, [activeTab]); 

  const tabs = ['All', 'OnSite', 'Remote', 'Part-Time', 'Hybrid'];

  const tabButtonStyle = {
    padding: '20px',
    margin: '5px',
    backgroundColor: '#0074e4',
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
              backgroundColor: activeTab === tab ? '#0074e4' : '',
              color: activeTab === tab ? 'white' : '',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='my-5'>
        {jobs.map((job) => (
         <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Tab;
