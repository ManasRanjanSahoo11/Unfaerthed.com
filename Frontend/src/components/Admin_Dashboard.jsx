

import React from "react";

const Admin_Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-700 text-white p-4 rounded-md">
          <h3 className="font-semibold text-lg">Total Users</h3>
          <p className="text-2xl">1500</p>
        </div>
        <div className="bg-gray-700 text-white p-4 rounded-md">
          <h3 className="font-semibold text-lg">Active Sessions</h3>
          <p className="text-2xl">120</p>
        </div>
        <div className="bg-gray-700 text-white p-4 rounded-md">
          <h3 className="font-semibold text-lg">Pending Requests</h3>
          <p className="text-2xl">25</p>
        </div>
      </div>
    </div>
  );
};

export default Admin_Dashboard;
