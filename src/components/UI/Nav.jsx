"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from "next/font/google"
import { RiMenuFill } from "react-icons/ri";
import { useState } from 'react';

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900",]
})
export default function Nav() {

    const [isNavOpen, setNavOpen] = useState(false)
    function openNav() {
        if (isNavOpen) {
            setNavOpen(!isNavOpen)
        }
        else{
            setNavOpen(!isNavOpen)
        }
    }
    function closeNav() {
        if (isNavOpen) {
            setNavOpen(false)
        }
    }
    return (
        <nav className={`flex ${isNavOpen ? "active" : ""} shadow-lg bg-blue-600 h-16 px-2 justify-between w-full items-center`}>
            <div className='flex logo justify-between items-center w-full'>
                <div className='flex space-x-3 justify-center items-center'>
                    <Image src={"/gcoej-logo.png"} width={30} height={30}></Image>
                    <div className='hidden lg:block md:hidden'>
                    <p className={`font-serif text-xl font-bold text-white`}>Goverment College of Engineering, Jalgaon</p>
                    <p className={`${roboto.className} text-sm font-semibold text-slate-300`}>( An Autonomus Institute of Maharastra )</p>
                    </div>
                </div>
                <div className='lg:hidden md:hidden' onClick={openNav}><RiMenuFill size={30} color='white'/></div>
            </div>
            <ul className={`lg:flex md:flex hidden text-white rounded-lg justify-between space-x-3 items-center`}>
                <li className='text-center hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"} >About Us</Link></li>
                <li className='text-center hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Administration</Link></li>
                <li className='text-center hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Academics</Link></li>
                <li className='text-center hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Departments</Link></li>
                <li className='text-center hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Central Facillities</Link></li>
                <li className='text-center hover:bg-blue-800 rounded-md px-2 py-1'><Link href={"/"}>Student Corner</Link></li>
                <button></button>
            </ul>
        </nav>
    )
}
