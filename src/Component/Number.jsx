

const Number = () => {
  return (
    <div>
      <div className='bg-slate-200 py-16 px-10'>
        <h1 className="text-headingText text-5xl font-bold pb-8 text-center">Our Numbers</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center'>
          <div className='bg-slate-400 py-10 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-xl text-black'>No of Jobs</h1>
            <h2 className='font-bold text-6xl text-white '>18000</h2>
          </div>
          <div className='bg-slate-400 py-10 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-xl text-black'>No of Employer</h1>
            <h2 className='font-bold text-6xl text-white '>4000</h2>
          </div>
          <div className='bg-slate-400 py-10 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-xl text-black'>No of Applicant</h1>
            <h2 className='font-bold text-6xl text-white '>25000</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Number;
