import { useNavigate } from "react-router-dom";
import React from "react";

const Admin__Topbar = () => {

    const navigate = useNavigate()

  return (
    <div className="w-full  bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div className="flex items-center">
        <button 
        className="bg-gray-700 hover:bg-gray-600 text-black px-4 py-2 rounded-md"
        onClick={()=>navigate('/')}
        >Logout</button>
      </div>
    </div>
  );
};

export default Admin__Topbar;
