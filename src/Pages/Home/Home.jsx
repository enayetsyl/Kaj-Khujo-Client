import Banner from "../../Component/Banner";
import Number from "../../Component/Number";
import Review from "../../Component/Review";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner></Banner>
     <Review></Review>
     <Number></Number>
    </div>
  );
};

export default Home;