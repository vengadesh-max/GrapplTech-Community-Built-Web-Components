// import React from 'react';
// import profileImg from '../Asset/myphoto.jpg';
// import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

// function Profile() {
//   return (
//     <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="bg-blue-500 h-24 flex items-center justify-center">
//         <h1 className="text-white text-2xl font-bold">Profile Card</h1>
//       </div>
//       <div className="bg-gray-200 p-4">
//         <img
//           src={profileImg} // Replace with your profile photo URL
//           alt="Profile"
//           className="w-32 h-32 rounded-full mx-auto border-4 border-white"
//         />
//         <h2 className="mt-4 text-xl font-semibold text-center">Akash Thakur</h2>
//         <p className="mt-2 text-gray-600 text-center">
//           Passionate about coding and web development. Always eager to learn and take on new challenges.
//         </p>
//         <div className="flex justify-center mt-4 space-x-4">
//           <a href="https://www.instagram.com/akash.thakur09__/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={32} className="text-blue-600 hover:text-blue-800 transition-colors" />
//           </a>
//           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//             <FaFacebook size={32} className="text-blue-600 hover:text-blue-800 transition-colors" />
//           </a>
//           <a href="https://www.linkedin.com/in/thakur-aakash" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={32} className="text-blue-600 hover:text-blue-800 transition-colors" />
//           </a>
//           <a href="https://t.me/a_akash_thakur" target="_blank" rel="noopener noreferrer">
//             <FaTelegram size={32} className="text-blue-600 hover:text-blue-800 transition-colors" />
//           </a>
//           <a href="https://github.com/akashthakur09" target="_blank" rel="noopener noreferrer">
//             <FaGithub size={32} className="text-blue-600 hover:text-blue-800 transition-colors" />
//           </a>
//         </div>
//         <div className="mt-6">
//           <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Hire Me
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';
import profileImg from '../Asset/myphoto.jpg';

function Profile() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-md">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-32"></div>
      {/* Profile Image */}
      <div className="relative -mt-16">
        <img
          className="w-32 h-32 rounded-full mx-auto border-4 border-white"
          src={profileImg}
          alt="Profile"
        />
      </div>
      {/* Content */}
      <div className="p-6">
        <h2 className="text-center text-2xl font-semibold text-gray-800">Akash Thakur</h2>
        <p className="text-center text-gray-600 mt-2">
          Web Developer | Full Stack Enthusiast
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.instagram.com/akash.thakur09__/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} className="text-pink-600 hover:text-pink-500" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} className="text-blue-600 hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/thakur-aakash" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} className="text-blue-700 hover:text-blue-600" />
          </a>
          <a href="https://t.me/a_akash_thakur" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={32} className="text-blue-400 hover:text-blue-300" />
          </a>
          <a href="https://github.com/akashthakur09" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} className="text-gray-800 hover:text-gray-600" />
          </a>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-500">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
