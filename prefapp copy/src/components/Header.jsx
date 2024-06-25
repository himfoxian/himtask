

import React from 'react';
import Profile from './Profile'; // Import the Profile component

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Reports</h2>
      <div className="flex items-center">
        <Profile /> {/* Add the Profile component here */}
      </div>
    </div>
  );
};

export default Header;

// import React from 'react';
// import Profile from './Profile'; // Import the Profile component

// const Header = ({ user }) => {
//   return (
//     <div className="flex justify-between items-center mb-6">
//       <h2 className="text-3xl font-bold">Reports</h2>
//       <div className="flex items-center">
//         <Profile user={user} /> {/* Pass the user prop to the Profile component */}
//       </div>
//     </div>
//   );
// };

// export default Header;
