
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ReportCards from './ReportCards';
import TicketsActivity from './TicketsActivity';
import Performance from './Performance';
import UpcomingEvent from './UpcomingEvent';
import TicketStatus from './TicketStatus';
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Header />
        <ReportCards />
        <TicketsActivity />
        <Performance />
        <UpcomingEvent />
        <TicketStatus />
      </div>
    </div>
  );
};

export default Dashboard;

