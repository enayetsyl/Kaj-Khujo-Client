import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div className="space-y-7">
      <Navbar></Navbar>      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;