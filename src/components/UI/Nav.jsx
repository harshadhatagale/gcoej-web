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
    const [dropdown, setDropdown] = useState(false);

    function toggleNav() {
        setNavOpen(!isNavOpen);
    }

    function closeNav() {
        setNavOpen(false);
    }

    return (
        <nav className={`flex ${isNavOpen ? "active" : ""} shadow-lg bg-blue-600 h-16 px-2 justify-between w-full items-center`}>
            <div className='flex py-3 lg:py-0 md:py-0 logo justify-between items-center w-full'>
                <Link href={"/"} onClick={closeNav}>
                    <div className='flex space-x-3 justify-center items-center'>
                        <Image src={"/gcoej-logo.png"} width={30} height={30} alt="Logo" />
                        <div className='hidden lg:block md:hidden'>
                            <p className={`font-serif text-xl font-bold text-white`}>Government College of Engineering, Jalgaon</p>
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
            <ul className={`lg:flex md:flex hidden text-white rounded-lg justify-between space-x-3 items-center`}>
                <li 
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    className='text-center relative w-full hover:bg-blue-800 rounded-md px-2 py-1'
                >
                    <button>About Us</button>
                    {dropdown && (
                        <div className={`lg:absolute bg-white border border-gray-400 text-black top-[60px] left-0 p-2 rounded-md`}>
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
                <li onClick={closeNav} className='text-center w-full hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Administration</Link></li>
                <li onClick={closeNav} className='text-center w-full hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Academics</Link></li>
                <li onClick={closeNav} className='text-center w-full hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Departments</Link></li>
                <li onClick={closeNav} className='text-center w-full hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Central Facilities</Link></li>
                <li onClick={closeNav} className='text-center w-full hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Student Corner</Link></li>
            </ul>
        </nav>
    )
}
