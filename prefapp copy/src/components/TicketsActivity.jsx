// // src/components/TicketsActivity.jsx
// import React from 'react';

// const TicketsActivity = () => {
//   return (
//     <div className="bg-white p-4 shadow rounded-lg mb-6">
//       <h3 className="text-xl font-bold mb-4">Tickets Activity</h3>
//       {/* Placeholder for graph */}
//       <div className="h-40 bg-gray-200 rounded"></div>
//     </div>
//   );
// };

// export default TicketsActivity;
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TicketsActivity = () => {
  const data = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Red',
        data: [1, 2, 0, 1, 2, 0, 3, 4, 0, 2, 1, 0, 2, 5, 0, 3, 1, 0, 2, 4, 1, 0, 3, 2, 1, 4, 3, 2, 1, 3, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Blue',
        data: [2, 1, 3, 2, 1, 3, 2, 1, 4, 1, 3, 2, 1, 3, 4, 1, 2, 3, 4, 1, 3, 2, 1, 4, 2, 3, 1, 4, 2, 1, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Green',
        data: [3, 2, 1, 4, 3, 2, 1, 3, 2, 1, 4, 3, 2, 1, 3, 2, 4, 3, 2, 1, 4, 3, 2, 1, 3, 4, 2, 1, 3, 2, 4],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Yellow',
        data: [4, 3, 2, 1, 3, 4, 2, 1, 3, 4, 2, 1, 3, 2, 4, 3, 1, 2, 4, 3, 2, 1, 3, 2, 4, 1, 3, 2, 1, 4, 3],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-6">
      <h3 className="text-xl font-bold mb-4">Tickets Activity</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TicketsActivity;
