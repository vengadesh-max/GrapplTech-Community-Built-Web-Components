// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Squash as Hamburger } from "hamburger-react";
// import resumePdf from "../../Asset/AkashThakur_Resume.pdf";

// const Header = () => {
//   const [isOpen, setOpen] = useState(false);

//   const downloadResume = () => {
//     const link = document.createElement("a");
//     link.href = resumePdf;
//     link.setAttribute("download", "Akash_Thakur_Resume.pdf");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     element.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <>
//       <div className="flex items-center justify-between p-2 bg-gray-950 text-white">
//         <div className="text-2xl font-bold">
//           <Link
//             to="/"
//             className="text-[#ab51e3]"
//             onClick={() => scrollToSection("home")}
//           >
//             Akash Thakur
//           </Link>
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li>
//               <Link
//                 to="/"
//                 className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
//                 onClick={() => scrollToSection("home")}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
//                 onClick={() => scrollToSection("aboutSection")}
//               >
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
//                 onClick={() => scrollToSection("myServices")}
//               >
//                 My Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/projects"
//                 className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
//                 onClick={() => scrollToSection("projects")}
//               >
//                 My Work
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Contact Me
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <button
//             className="text-white font-semibold py-2 px-4 rounded flex items-center"
//             style={{ backgroundColor: "#ab51e3", hover: "#ab51e3" }}
//             onClick={downloadResume}
//           >
//             <span className="mr-2">Resume</span>
//             <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 35 35"
//                 className="w-5 h-5"
//               >
//                 <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
//                 <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
//                 <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
//               </svg>
//             </span>
//           </button>
//         </div>
//         <div className="md:hidden">
//           <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 text-white p-4">
//           <ul className="space-y-4">
//             <li>
//               <Link
//                 to="/"
//                 className="block no-underline hover:text-[#ab51e3] font-semibold"
//                 onClick={() => scrollToSection("home")}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="block no-underline hover:text-[#ab51e3] font-semibold"
//                 onClick={() => scrollToSection("aboutSection")}
//               >
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 className="block no-underline hover:text-[#ab51e3] font-semibold"
//                 onClick={() => scrollToSection("myServices")}
//               >
//                 My Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/projects"
//                 className="block no-underline hover:text-[#ab51e3] font-semibold"
//                 onClick={() => scrollToSection("projects")}
//               >
//                 My Work
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block no-underline hover:text-[#ab51e3] font-semibold"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Contact Me
//               </Link>
//             </li>
//             <li>
//               <button
//                 className="text-white font-semibold py-2 px-4 rounded flex items-center w-full"
//                 style={{ backgroundColor: "#ab51e3", hover: "#ab51e3" }}
//                 onClick={downloadResume}
//               >
//                 <span className="mr-2">Resume</span>
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 35 35"
//                     className="w-5 h-5"
//                   >
//                     <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
//                     <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
//                     <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
//                   </svg>
//                 </span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import resumePdf from "../../Asset/AkashThakur_Resume.pdf";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.setAttribute("download", "Akash_Thakur_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="flex items-center justify-between p-2 bg-gray-950 text-white">
        <div className="text-2xl font-bold">
          <Link
            to="/"
            className="text-[#ab51e3]"
            onClick={() => scrollToSection("home")}
          >
            Akash Thakur
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
                onClick={() => scrollToSection("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
                onClick={() => scrollToSection("aboutSection")}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
                onClick={() => scrollToSection("myServices")}
              >
                My Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white no-underline font-bold hover:underline hover:text-[#ab51e3] transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Hide the Resume Button on large screens */}
        <div className="hidden md:block">
          <button
            className="text-white font-semibold py-2 px-4 rounded flex items-center"
            style={{ backgroundColor: "#ab51e3", hover: "#ab51e3" }}
            onClick={downloadResume}
          >
            <span className="mr-2 text-center">Resume</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                className="w-5 h-5"
              >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </span>
          </button>
        </div>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block no-underline hover:text-[#ab51e3] font-semibold"
                onClick={() => scrollToSection("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block no-underline hover:text-[#ab51e3] font-semibold"
                onClick={() => scrollToSection("aboutSection")}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block no-underline hover:text-[#ab51e3] font-semibold"
                onClick={() => scrollToSection("myServices")}
              >
                My Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block no-underline hover:text-[#ab51e3] font-semibold"
                onClick={() => scrollToSection("projects")}
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block no-underline hover:text-[#ab51e3] font-semibold"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Link>
            </li>
            {/* Show Resume Button only in hamburger menu */}
            <li>
              <button
                className="text-white font-semibold py-2 px-4 rounded flex items-center w-full"
                style={{ backgroundColor: "#ab51e3", hover: "#ab51e3" }}
                onClick={downloadResume}
              >
                <span className="mr-2">Resume</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    className="w-5 h-5"
                  >
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
