import React from "react";

const PageTracker = ({ page }) => {
  return (
    <div className="relative flex h-1/2 w-full items-center justify-center ">
      <div className="flex h-1/2 w-1/6 items-center justify-between ">
        <div className="text-subtitle-description flex w-1/4 items-center justify-center">
          {page}
        </div>
        <div className="flex h-[10%] w-1/4 items-center justify-center bg-white"></div>
        <div className="text-subtitle-description flex w-1/4 items-center justify-center">
          5
        </div>
      </div>
    </div>
  );
};

export default PageTracker;
