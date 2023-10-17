import React from "react";
import MutatingDots from "./../../node_modules/react-loader-spinner/dist/esm/loader/MutatingDots";

const LoaderComponent = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ marginTop: "15%" }}
    >
      <MutatingDots
        height="100"
        width="100"
        color="purple"
        secondaryColor="purple"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderComponent;
