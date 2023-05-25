import React from "react";
import "../styles/loading.css";

const Loading = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-200 to-purple-200 md:h-[80vh] max-sm:h-[20vh] max-sm:pb-[100px] md:pb-[50px] flex justify-center items-center align-middle">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
