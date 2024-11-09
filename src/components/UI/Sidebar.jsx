// components/Sidebar.js
"use client"
import React from 'react';
import { CiMenuFries } from "react-icons/ci";

export default function Sidebar({ activeTab, setActiveTab, toggleNav, setToggleNav, tabs }) {
    return (
        <aside className={`fixed sidenav top-16 select-none h-full left-0 bg-white lg:w-52 md:w-full w-full py-5 px-4 ${toggleNav ? "translate-x-0" : "-translate-x-full"}`}>
            <CiMenuFries className='mb-3 ml-2 cursor-pointer' size={25} onClick={() => setToggleNav(false)} />
            <ul>
                {tabs.map((tab) => (
                    <li
                        key={tab}
                        onClick={() => {
                            setToggleNav(false);
                            setActiveTab(tab);
                        }}
                        className={`hover:bg-blue-600 flex flex-col space-y-7 justify-center items-start px-2 py-2 rounded-md cursor-pointer hover:text-white ${activeTab === tab ? "bg-blue-600 text-white" : ""}`}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
