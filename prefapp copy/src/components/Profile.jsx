import React, { useState } from 'react';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'; // Import icons

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        <FaUserCircle size={24} className="text-gray-700 mr-2" />
        <span className="text-gray-700">Profile</span>
        <FaCaretDown size={20} className="text-gray-700 ml-2" />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-68 bg-white border rounded-lg shadow-lg p-4">
          <div className="text-center mb-4">
            <img
              src="src/assets/profile.png"
              alt="Profile"
              className="rounded-full mx-auto"
            />
          </div>
          <div className="mb-2">
            <strong>Name:</strong> Himanshu Yadav
          </div>
          <div className="mb-2">
            <strong>Email:</strong> Himanshu_01@fosteringlinux.com
          </div>
          <div className="mb-4">
            <strong>Birthday:</strong> 20 March
          </div>
          <button className="w-full bg-black text-white py-2 rounded">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;



// import React, { useState } from 'react';
// import { FaUserCircle, FaCaretDown } from 'react-icons/fa'; // Import icons

// const Profile = ({ user }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
//         <FaUserCircle size={24} className="text-gray-700 mr-2" />
//         <span className="text-gray-700">{user.name}</span> {/* Display user's name */}
//         <FaCaretDown size={20} className="text-gray-700 ml-2" />
//       </div>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4">
//           <div className="text-center mb-4">
//             <img
//               src="https://via.placeholder.com/80"
//               alt="Profile"
//               className="rounded-full mx-auto"
//             />
//           </div>
//           <div className="mb-2">
//             <strong>Name:</strong> {user.name}
//           </div>
//           <div className="mb-2">
//             <strong>Email:</strong> {user.email}
//           </div>
//           <div className="mb-4">
//             <strong>Birthday:</strong> {user.birthday}
//           </div>
//           <button className="w-full bg-black text-white py-2 rounded">
//             Sign out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
