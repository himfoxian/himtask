import React from 'react'
import { Outlet } from 'react-router-dom'
  
const App = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   // Sample user data, you can replace it with actual user data from your login logic
//   const [user, setUser] = useState({
//     name: 'Himanshu Yadav',
//     email: 'Himanshu_01@fosteringlinux.com',
//     birthday: '20 March',
//   });

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard user={user} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
