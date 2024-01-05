import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOffCircle } from "react-icons/io5"
import { SiGooglemessages } from "react-icons/si";
import { FaToggleOn } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = ({ toggleSidebar }) => {
return (
  <nav className=" p-2 flex justify-between items-center">
    <button className="text-white" onClick={toggleSidebar}>
    <GiHamburgerMenu className='' />
    </button>
    <div className="flex items-center">
      {/* SearchBar component */}
      <div className="flex items-center justify-between  md:gap-16 font-Poppins md:px-56">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 bg-transparent shadow-white shadow w-32 md:w-64 rounded-md "
        />
        <div className='flex md:gap-16 gap-3 text-xl md:text-3xl text-white p-2'>
        <IoNotificationsOffCircle />
        <SiGooglemessages />
        <FaToggleOn />
        <FaUserLarge />
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;








