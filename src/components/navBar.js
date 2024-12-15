import React, { useState, useEffect } from "react";
import "../assets/css/portfolio.css";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const NavBar = ({ activeSection,setActiveSection, theme, setTheme }) => {

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  
  return (
    <div className="nav_bar" id="navbarNav">
      <div>
        <ul className="nav_list">
          <li className={`item ${activeSection === 'profile' ? 'active' : ''}`} onClick={() => setActiveSection('profile')}>
            <p>
              Profile
            </p>
          </li>
          <li className={`item ${activeSection === 'tools' ? 'active' : ''}`} onClick={() => setActiveSection('tools')}>
            <p>
              Tools
            </p>
          </li>
          <li className={`item ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => setActiveSection('experience')}>
            <p>
              Experience
            </p>
          </li>
          <li className={`item ${activeSection === 'work' ? 'active' : ''}`} onClick={() => setActiveSection('work')}>
            <p>
              Work
            </p>
          </li>
        </ul>
      </div>
      <div>

        <ul className="nav_list theme" onClick={toggleTheme}>
          <li className="item">
            <p>
              {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
            </p>
          </li>
          <span className="glider"></span>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
// const NavBar = ({ activeSection }) => {
//   return (
//     <div className="nav_bar" id="navbarNav">
//       <ul className="nav_list">
//         <li className={`item ${activeSection === 'profile' ? 'active' : ''}`}>
//           <p onClick={() => document.getElementById('profile').scrollIntoView({ behavior: 'smooth' })}>
//             Profile
//           </p>
//         </li>
//         <li className={`item ${activeSection === 'tools' ? 'active' : ''}`}>
//           <p onClick={() => document.getElementById('tools').scrollIntoView({ behavior: 'smooth' })}>
//             Tools
//           </p>
//         </li>
//         <li className={`item ${activeSection === 'work' ? 'active' : ''}`}>
//           <p onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>
//             Work
//           </p>
//         </li>
//         <span className="glider"></span>
//       </ul>
//     </div>
//   );
// };

