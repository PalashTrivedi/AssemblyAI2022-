import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div>
            <div className="antialiased bg-black w-full h-auto text-slate-300 relative py-4">
                <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                    <Sidebar /> 
                    <Home />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
