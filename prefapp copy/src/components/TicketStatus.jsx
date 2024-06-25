import React from 'react';

const TicketStatus = () => {
  const tickets = [
    { label: 'On Time Closed', percentage: 72, color: 'bg-green-500', icon: '🎟️' },
    { label: 'Delay Closed', percentage: 15, color: 'bg-red-500', icon: '🎫' },
    { label: 'Open', percentage: 10, color: 'bg-yellow-500', icon: '🎟️' },
    { label: 'No Ticket', percentage: 3, color: 'bg-blue-500', icon: '🎟️' },
  ];
                                                                                                                      
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-xl font-bold mb-4">Tickets</h3>
      {tickets.map((ticket, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center text-2xl mr-4">{ticket.icon}</div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700">{ticket.label}</span>
              <span className="text-gray-500">{ticket.percentage}% Correct</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className={`${ticket.color} h-2.5 rounded-full`} style={{ width: `${ticket.percentage}%` }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketStatus;
