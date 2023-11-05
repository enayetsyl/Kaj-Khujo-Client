import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyJob from "../Pages/Myjob/MyJob";
import AllJob from "../Pages/AllJob/AllJob";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import Blogs from "../Pages/Blogs/Blogs";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/addjob',
        element:<AddJob></AddJob>
      },
      {
        path: '/updatejob',
        element:<UpdateJob></UpdateJob>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/myjob',
        element:<MyJob></MyJob>
      },
      {
        path: '/alljob',
        element:<AllJob></AllJob>
      },
      {
        path: '/appliedjob',
        element:<AppliedJob></AppliedJob>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

export default router;