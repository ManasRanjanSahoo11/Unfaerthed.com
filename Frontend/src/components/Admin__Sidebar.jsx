
import React from "react";
import { Link } from "react-router-dom";

const Admin__Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-gray-300 hover:text-white">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/users" className="text-gray-300 hover:text-white">Users</Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="text-gray-300 hover:text-white">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Admin__Sidebar;
