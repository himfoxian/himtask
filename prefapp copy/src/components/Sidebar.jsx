// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">KeenAble</h1>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <Link to="/" className="text-blue-500">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/leave-tickets" className="text-blue-500">Leave Tickets</Link>
          </li>
          <li className="mb-4">
            <Link to="/project" className="text-blue-500">Project</Link>
          </li>
          <li className="mb-4">
            <Link to="/wbs" className="text-blue-500">WBS</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        {/* <h2 className="text-gray-600">Support</h2> */}
        {/* <Link to="/support" className="text-blue-500">support</Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
