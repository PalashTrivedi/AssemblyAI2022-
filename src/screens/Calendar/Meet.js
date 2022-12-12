import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";

const Meet = () => {
  return (
    <div className="antialiased bg-black w-full h-auto text-slate-300 relative py-4">
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <Sidebar />
        <div className="col-span-8 bg-slate-800 rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Meetings</h1>
            <Link to="https://assemblyai-2022-new.vercel.app/">
              <button className="bg-slate-700 text-slate-300 rounded-lg px-4 py-2 font-semibold">
                Create Meeting
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
