import React from 'react';
import { FiX } from 'react-icons/fi';
import { Menu, Dropdown } from 'antd';
import '../index.css';
import { CiHome } from "react-icons/ci";
import { RiArrowUpDownFill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";

const Sidebar = ({ isOpen, closeSidebar }) => {
const mySpaceMenu = (
  <Menu style={{ padding: '35px', background: 'transparent', marginTop: '-40px' }}>
    <Menu.Item style={{ color: 'white' }} key="1">Leave</Menu.Item>
    <Menu.Item style={{ color: 'orange' }} key="2">Attendance</Menu.Item>
    <Menu.Item style={{ color: 'white' }} key="3">Performance</Menu.Item>
    <Menu.Item style={{ color: 'white' }} key="4">Expenses & Travel</Menu.Item>
    <Menu.Item style={{ color: 'white' }} key="5">Help Desk</Menu.Item>
  </Menu>
);

return (
  <div className={`font-Poppins text-white w-full md:w-1/4 lg:w-1/5 h-full fixed top-0 left-0 overflow-y-auto shadow-lg shadow-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full' } transition-transform duration-300 ease-in-out`}>
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <img src='/images/logo.jpg' className="w-36 mt-16 mx-8" alt="Logo" />
        {isOpen && (
          <button className="mr-5" onClick={closeSidebar}>
            <FiX size={20} />
          </button>
        )}
      </div>
      <span className='text-xs mx-9 opacity-50 tracking-tight '>Interest & Achievement</span>

      <hr className='bg-white h-0.5 mt-6'></hr>

      <div className="mt-6 text-sm">
        <ul>
          <li className='flex mb-3 hover:text-orange-600 text-lg hover:bg-white rounded-full w-48 p-1'><CiHome className='text-2xl font-bold ml-5' /> Home</li>
          <li className="mb-3 flex">
            <Dropdown overlay={mySpaceMenu} placement="bottomLeft" arrow>
              <a href="#" className="hover:text-white flex text-lg hover:bg-orange-600 rounded-full w-48 p-1"><RiArrowUpDownFill className='text-2xl text-white ml-5' /> My Space</a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
}


export default Sidebar;




































