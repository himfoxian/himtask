// src/components/ReportCards.jsx
import React from 'react';

const ReportCards = () => {
  const reports = [
    { title: 'Total Tickets', count: 30 },
    { title: 'On Time closed', count: 20 },
    { title: 'Delay Closed', count: 10 },
    { title: 'Leave Tickets', count: 4 },
    { title: 'Open Tickets', count: 8 },
    { title: 'WHF Tickets', count: 2 },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {reports.map((report, index) => (
        <div key={index} className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl">{report.title}</h3>
          <p className="text-2xl font-bold">{report.count}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportCards;
