import bannerImage from '../assets/jobBanner.jpg';


const Banner = () => {
  return (
    <div
      className="relative h-[80vh]"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-5">
        <h1 className="text-3xl text-center lg:text-6xl font-bold">Explore Opportunities, Unlock Your Potential</h1>
        <p className="text-base lg:text-xl text-center">Discover a world of possibilities, connect with leading companies, and take the first step toward your professional success. </p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-3 rounded-l-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
