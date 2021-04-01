import React from "react";

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <div>Not Found</div>;
};

export default NotFound;
