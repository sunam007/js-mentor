import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

const NotFound = () => {
  return (
    <div className="container px-4 py-5">
      <PageTitle title="404 Page not found"></PageTitle>

      <div className="alert alert-danger">
        Error 404 !!! Page Not Found. Go back to{" "}
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
