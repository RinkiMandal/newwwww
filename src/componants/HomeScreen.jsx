import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa";

const HomeScreen = () => {
  return (
    <div className="lg:ml-72 mt-16 font-Poppins">
      <span className="text-sm md:text-base  ml-24 lg:ml-0">My Space/<span className='text-orange-500'>Attendance</span></span>
      <div className='w-full md:w-auto h-auto flex flex-col md:flex-row justify-between md:items-center mt-3 py-4 px-3 rounded border-2 border-white '>

        <div className='mb-4 md:mb-0'>
          <h4 className='text-lg md:text-xl'>Attendance Status</h4>
          <span className='flex items-center gap-2 text-sm md:text-base'>Last Week <IoIosArrowDown /> </span>
          <div className='flex flex-col md:flex-row justify-between gap-2 md:gap-5 shadow shadow-slate-500 py-2 px-4 rounded mt-2 text-center '>
            <div className=''>
              <span className='flex items-center ml-14 lg:ml-0'> <MdOutlineWatchLater className='text-2xl' /> Avg hrs/Day</span>
              <span className='text-xs md:text-sm'> (6hrs 48m)</span>
            </div>

            <div>
              <span className='flex items-center  ml-14 lg:ml-0'> <FaStopwatch className='text-2xl text-green-400' /> On Time Arrival</span>
              <span className='text-xs md:text-sm'>95%</span>
            </div>
          </div>
        </div>

        <div className='mb-4 md:mb-0'>
          <h4 className='text-lg md:text-xl text-center'>Timings</h4>
          <div className='flex gap-2 ml-14 lg:ml-6 '>
            <div className='border text-xs md:text-sm p-1  rounded-full opacity-70 border-white'>M</div>
            <div className='border text-xs md:text-sm p-1 rounded-full opacity-70 border-white'>T</div>
            <div className='border text-xs md:text-sm p-1 rounded-full opacity-70 border-white text-orange-500'>W</div>
            <div className='border text-xs md:text-sm p-1 rounded-full opacity-70 border-white'>T</div>
            <div className='border text-xs md:text-sm p-1 rounded-full opacity-70 border-white'>F</div>
            <div className='border text-xs md:text-sm p-1 rounded-full opacity-70 border-white text-green-600'>S</div>
            <div className='border text-xs md:text-sm p-1 rounded-full opacity-70 border-white text-red-500'>S</div>
          </div>
          <div className=' shadow opacity-60 shadow-slate-500 py-2 px-4 rounded mt-2 text-center '>
            <h6 className='text-xs md:text-sm'> Today (09:30AM - 06:30PM)</h6>
            <h6 className='text-xs md:text-sm'>Duration: 9h 0m <span>Break: 0m</span> </h6>
          </div>
        </div>

        <div>
          <h4 className='text-lg md:text-xl text-center mb-2 md:mb-0'>Action</h4>
          <div className='flex justify-between flex-col gap-2 md:gap-4'>
            <div className=' shadow shadow-slate-500 py-2 px-4 rounded mt-2 text-center '>
              <h1 className='text-2xl md:text-3xl'>04:04:39 PM</h1>
              <span className='text-xs md:text-sm'>Wed 06, Dec 2023</span>
            </div>
            <div className='flex flex-col md:flex-row gap-2'>
              <button className='bg-orange-500 text-black px-4 py-2 rounded-xl'>Leave Request</button>
              <button className='bg-orange-500 text-black px-4 py-2 rounded-xl'>Work From Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
