import React from "react";
import Sidebar from "./Sidebar";
import TicketsItems from "./TicketsItems";

const Tickets = () => {
  return (
    <div>
      <div className="antialiased bg-black w-full h-auto text-slate-300 relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <Sidebar />
          <TicketsItems />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
