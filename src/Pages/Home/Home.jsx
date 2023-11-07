import Banner from "../../Component/Banner";
import Number from "../../Component/Number";
import Review from "../../Component/Review";
import Tab from "../../Component/Tab";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <Tab></Tab>
     <Review></Review>
     <Number></Number>
    </div>
  );
};

export default Home;