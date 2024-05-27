import React from "react";

const PageTracker = ({ page }) => {
  return (
    <div className="relative flex h-1/2 items-center justify-center max-md:w-[5rem] md:w-[20rem]">
      <div className="flex h-1/2 w-1/6 items-center justify-center gap-5 ">
        <div className="text-subtitle-description flex w-1/4 items-center justify-center">
          {page}
        </div>
        <div className="flex min-h-1 min-w-10 items-center justify-center bg-white"></div>
        <div className="text-subtitle-description flex w-1/4 items-center justify-center">
          5
        </div>
      </div>
    </div>
  );
};

export default PageTracker;
