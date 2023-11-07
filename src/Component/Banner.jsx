import bannerImage from '../assets/jobBanner.jpg';


const Banner = () => {
  return (
    <div
      className="relative h-96"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">Heading Title</h1>
        <p className="text-lg">Short Description</p>
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
