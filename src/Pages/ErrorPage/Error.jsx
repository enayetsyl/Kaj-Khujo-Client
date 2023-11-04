import { Link, useRouteError } from "react-router-dom";
import page from '../../assets/404.gif'
import Button from "../../Component/Button";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="flex flex-col justify-center items-center h-screen space-y-10 bg-green-600">
      <Link to={'/'}><Button>Go Home</Button></Link>
      <img src={page} alt=""  />

    </div>
  );
};

export default Error;
