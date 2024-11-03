"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from "next/font/google"
import { RiMenuFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Nav() {
    const [isNavOpen, setNavOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // State for tracking the open dropdown

    function toggleNav() {
        setNavOpen(!isNavOpen);
    }

    function closeNav() {
        setNavOpen(false);
    }

    // Function to handle dropdown toggling
    function handleDropdown(id) {
        setOpenDropdown(openDropdown === id ? null : id); // Toggle the dropdown
    }

    return (
        <nav className={`flex ${isNavOpen ? "active" : ""} shadow-lg bg-blue-600 h-16 px-2 justify-between w-full items-center`}>
            <div className='flex py-3 lg:py-0 md:py-0 logo justify-between items-center w-full'>
                <Link href={"/"} onClick={closeNav}>
                    <div className='flex space-x-3 justify-center items-center'>
                        <Image src={"/gcoej-logo.png"} width={30} height={30} alt="Logo" />
                        <div className='hidden lg:block md:hidden'>
                            <p className={`font-serif text-lg font-bold text-white`}>Government College of Engineering, Jalgaon</p>
                            <p className={`${roboto.className} text-sm font-semibold text-slate-300`}>( An Autonomous Institute of Maharashtra )</p>
                        </div>
                    </div>
                </Link>
                <div className='flex justify-center items-center space-x-5'>
                    <div className='cursor-pointer'>
                        <CiSearch size={30} color='white' />
                    </div>
                    <div className='lg:hidden md:hidden' onClick={toggleNav}>
                        <RiMenuFill size={30} color='white' />
                    </div>
                </div>
            </div>
            <ul className={`lg:flex md:flex hidden text-white rounded-lg justify-between space-x-2 items-center`}>
                {/* About Us Dropdown */}
                <li 
                    onMouseEnter={() => setOpenDropdown('about')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className='text-center relative hover:bg-blue-800 rounded-md px-2 py-1'
                >
                    <button>About Us</button>
                    {openDropdown === 'about' && (
                        <div className={`lg:absolute md:absolute bg-white border border-gray-400 text-black left-0 p-2 rounded-md`}>
                            <ul className='space-y-2'>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Homepage</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>About us</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Vision & mission</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Infrastructure</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Future planning</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Contact us</Link></li>
                            </ul>
                        </div>
                    )}
                </li>
                <li 
                    onMouseEnter={() => setOpenDropdown('administration')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className='text-center relative hover:bg-blue-800 rounded-md px-2 py-1'
                >
                    <button>Administration</button>
                    {openDropdown === 'administration' && (
                        <div className={`lg:absolute md:absolute bg-white border border-gray-400 text-black left-0 p-2 rounded-md`}>
                            <ul className='space-y-2'>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Board of society</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Board of governers</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Priciple/ Director</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Academic Council</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Examination Committee</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Finance Committee</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Deans/Registrar</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Office Administration</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Office Commities</Link></li>
                            </ul>
                        </div>
                    )}
                </li>
                {/* Another Dropdown (e.g., Academics) */}
                <li 
                    onMouseEnter={() => setOpenDropdown('academics')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className='text-center relative hover:bg-blue-800 rounded-md px-2 py-1'
                >
                    <button>Academics</button>
                    {openDropdown === 'academics' && (
                        <div className={`lg:absolute md:absolute bg-white border border-gray-400 text-black left-0 p-2 rounded-md`}>
                            <ul className='space-y-2'>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Programs (UG/PG)</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Syllabus</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Autonomy Rules</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Examination Rules</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Academic Calender</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Admission</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Fees Information</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Exam Timetables</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Results</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Research and Development Cell</Link></li>
                            </ul>
                        </div>
                    )}
                </li>

                {/* Other navigation links */}
                <li 
                    onMouseEnter={() => setOpenDropdown('departments')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className='text-center relative hover:bg-blue-800 rounded-md px-2 py-1'
                >
                    <button>Departments</button>
                    {openDropdown === 'departments' && (
                        <div className={`lg:absolute md:absolute bg-white border border-gray-400 text-black left-0 p-2 rounded-md`}>
                            <ul className='space-y-2'>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Computer Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Mechanical Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Civil Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Instrumentation Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Electrical Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>E&Tc Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Science & Humanities</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Workshop</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Academic and Examination Cell</Link></li>
                            </ul>
                        </div>
                    )}
                </li>
            
                <li 
                    onMouseEnter={() => setOpenDropdown('central')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className='text-center relative hover:bg-blue-800 rounded-md px-2 py-1'
                >
                    <button>Central Facilllities</button>
                    {openDropdown === 'central' && (
                        <div className={`lg:absolute md:absolute bg-white border border-gray-400 text-black left-0 p-2 rounded-md`}>
                            <ul className='space-y-2'>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Central Library</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Computer Center</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Data Center</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Gymkhana</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Hostel</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Guest House</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Canteen</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Dispensary</Link></li>
                            </ul>
                        </div>
                    )}
                </li>
                <li 
                    onMouseEnter={() => setOpenDropdown('students')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className='text-center relative hover:bg-blue-800 rounded-md px-2 py-1'
                >
                    <button>Student Corner</button>
                    {openDropdown === 'students' && (
                        <div className={`lg:absolute md:absolute bg-white border border-gray-400 text-black right-0 p-2 rounded-md`}>
                            <ul className='space-y-2'>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Computer Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Mechanical Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Civil Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Instrumentation Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Electrical Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>E&Tc Engineering</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Science & Humanities</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Workshop</Link></li>
                                <li className='hover:bg-slate-600 rounded-md hover:text-white'><Link href={"/"}>Academic and Examination Cell</Link></li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    )
}
