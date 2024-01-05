import React from 'react'
import { TiVideo } from "react-icons/ti";
import { FaStopwatch } from "react-icons/fa";
import { TbBounceRightFilled } from "react-icons/tb";
import { FaRegDotCircle } from "react-icons/fa";
import { LuSmile } from "react-icons/lu";
import { AiOutlineRightCircle } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { MdSendTimeExtension } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";

const MainPart = () => {
return (
<div  className="md:ml-72 mt-6 font-Poppins">
<div className=''>
<h1 className=' ml-24 lg:ml-0'>Logs & Requests</h1>
<div className=' border-white border rounded-md mt-3 py-2 w-80 lg:w-96'>
<span className='bg-orange-500 lg:px-5 py-2 '>Attendance Log</span>
    <span className=' lg:px-5 py-2 '>Attendance Requests</span>
</div>
</div>

<div className='w-full h-auto flex flex-col justify-between md:items-center mt-3 py-4 px-3 rounded border-2 border-white mb-12'>
{/* 1st part */}
<div className='flex items-center justify-between lg:gap-36'>
<div className='l'><span>December, 2023</span></div>
<div className='m border-white border rounded-md py-2'>
    <span className='bg-orange-500 px-3 py-2 '>30 days</span>
    <span className=' px-5 py-2 w-full border-r border-white my-2 '>Nov</span>
    <span className=' px-5 py-2 w-full border-r border-white my-2  '>Oct</span>
    <span className=' px-5 py-2 w-full border-r border-white my-2 '>Sep</span>
    <span className=' px-5 py-2 w-full border-r border-white my-2  '>Aug</span>
    <span className=' px-5 py-2 w-full border-r border-white my-2  '>Jul</span>
    <span className=' px-5 py-2 w-full border-r border-white my-2  '>Jun</span>
</div>
<div className='r text-2xl text-white border border-white flex'>
<GiHamburgerMenu className='bg-orange-500 p-1' />
<CiCalendar />
</div>
</div>

{/* 2nd part  */}
    <div className="w-full border-t border-white my-3"></div>
    <div className='flex gap-20 px-2 text-sm'>
    <h1>Date</h1>
    <h1>Attendance Visual</h1>
    <h1>Effective Hours</h1>
    <h1>Gross Hours</h1>
    <h1>Extra Hours</h1>
    <h1>Arrival</h1>
    <h1>Log</h1>
    </div>

    {/* 3rd part  */}
    <div className="w-full border-t border-white my-2"></div>
    <div className='flex gap-24 px-2 text-sm'>
        <span>Dec 04, Mon</span>
        <span><TiVideo className='text-4xl text-green-400' /></span>
        <span className='flex'><FaStopwatch className='text-2xl text-green-400' /> 9h 15m</span>
        <span>9h 59m</span>
        <span>0h 59m</span>
        <span className='flex'><TbBounceRightFilled className='text-2xl' /> On Time</span>
        <span><FaRegDotCircle className='text-2xl text-orange-600' /></span>
    </div>


    {/* 4th part  */}

    <div className="w-full border-t border-white my-2"></div>
    <div>
<div className='flex gap-56'>
<span className=''>Dec 03, Sun </span>
<button className='bg-orange-400 rounded text-xs'>W-OFF</button>
<h1>Full Day Weekly-Off</h1>
</div>
    </div>

    {/* 5th part  */}

<div className="w-full border-t border-white my-2"></div>
<div className='flex gap-24 px-2 text-sm'>
    <span>Dec 02, Sat</span>
    <span><TiVideo className='text-4xl text-green-400' /></span>
    <span className='flex'><FaStopwatch className='text-2xl text-green-400' /> 8h 59m</span>
    <span>9h 59m</span>
    <span>0h 30m</span>
    <span><LuSmile className='text-2xl text-orange-600' /></span>
    <AiOutlineRightCircle className='text-2xl text-green-500' />
</div>
{/* 6 th part  */}
<div className="w-full border-t border-white my-2"></div>
<div className='flex gap-24 px-2 text-sm    '>
    <span>Dec 01, Fri</span>
    <span><TiVideo className='text-4xl text-green-400' /></span>
    <span className='flex'><FaStopwatch className='text-2xl text-green-400' /> 8h 59m</span>
    <span>9h 59m</span>
    <span>1h 30m</span>
    <span className='flex'><MdSendTimeExtension className='text-2xl text-white' />0h 30m late</span>
    <GiSandsOfTime  className='text-2xl text-red-600' />
</div>
{/* last part  */}
<div className="w-full bg-red-900 border-t border-white my-2"></div>
<div className='flex gap-56 '>
<span className=''>Nov 30, Thu </span>
<button className='bg-pink-700 p-1 rounded text-xs'>Leave</button>
<h1>Sick Leave</h1>
</div>
</div>
</div>
)
}

export default MainPart






































