import image1 from '../assets/review-image-1.jpg'
import image2 from '../assets/review-image-2.jpg'
import image3 from '../assets/review-image-3.jpg'

const Review = () => {
  return (
   <>
  <div className="grid grid-cols-1 lg:grid-cols-3">
    {/* first card */}
    <div className="w-96 h-96 bg-gray-200 relative">
    <p className="text-center text-7xl font-black opacity-20">Feedback</p>
    <div className="bg-orange-500 mx-8 h-52 rounded-3xl w-10/12 absolute top-32">
      <div className="w-28 h-28 bg-white rounded-full absolute -top-16 left-24">
        <img src={image1} alt="" className='rounded-full w-24 h-24 absolute left-2 top-2' />
      </div>
      <div className="w-16 h-16 bg-orange-500 rotate-45 absolute -bottom-8 left-32"></div>
      <p className="pt-16 px-5 text-white font-bold"><span className="text-black font-black text-4xl">"</span>This is one of the best job site i ever encounter.<span className="text-black font-black text-4xl">"</span> </p>
      <p className="uppercase text-black font-black text-center">Jhon <span className="text-white">Bolt</span></p>
    </div>
   </div>
  {/* second card */}
  <div className="w-96 h-96 bg-gray-200 relative">
    <p className="text-center text-7xl font-black opacity-20">Feedback</p>
    <div className="bg-orange-500 mx-8 h-52 rounded-3xl w-10/12 absolute top-32">
      <div className="w-28 h-28 bg-white rounded-full absolute -top-16 left-24">
      <img src={image2} alt="" className='rounded-full w-24 h-24 absolute left-2 top-2' />
      </div>
      <div className="w-16 h-16 bg-orange-500 rotate-45 absolute -bottom-8 left-32"></div>
      <p className="pt-16 px-5 text-white font-bold"><span className="text-black font-black text-4xl">"</span>Very useful job Portal for me to find job.<span className="text-black font-black text-4xl">"</span> </p>
      <p className="uppercase text-black font-black text-center">Umar <span className="text-white">Khattab</span></p>
    </div>
   </div>
     {/* third card */}
     <div className="w-96 h-96 bg-gray-200 relative">
    <p className="text-center text-7xl font-black opacity-20">Feedback</p>
    <div className="bg-orange-500 mx-8 h-52 rounded-3xl w-10/12 absolute top-32">
      <div className="w-28 h-28 bg-white rounded-full absolute -top-16 left-24">
      <img src={image3} alt="" className='rounded-full w-24 h-24 absolute left-2 top-2' />
      </div>
      <div className="w-16 h-16 bg-orange-500 rotate-45 absolute -bottom-8 left-32"></div>
      <p className="pt-16 px-5 text-white font-bold"><span className="text-black font-black text-4xl">"</span>The layout of the website is good<span className="text-black font-black text-4xl">"</span> </p>
      <p className="uppercase text-black font-black text-center">Usman <span className="text-white">Affan</span></p>
    </div>
   </div>
  </div>
   </>
  );
};

export default Review;
