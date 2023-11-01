import React from "react";

const Layout3 = () => {
  return (
    <div className="w-full flex h-[90vh] border-2 border-white">
      <div className="w-2/5">
        <div className="h-1/2 border-2 border-white"></div>
        <div className="h-1/2 border-2 border-white"></div>
      </div>

      <div className="w-3/5 border-2 border-white">
        <div className="h-2/6 border-2 border-white"></div>
        <div className="h-4/6 border-2 border-white"></div>
      </div>
    </div>
  );
};

export default Layout3;
