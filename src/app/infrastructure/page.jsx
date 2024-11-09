"use client"
import Heading from '@/components/UI/Heading1'
import React, { act, useState } from 'react'
import { CiMenuFries } from "react-icons/ci";

export default function page() {
  const [activeTab, setActiveTab] = useState("About");
  const [toggleNav, setToggleNav] = useState(false)
  const tabs = ["About", "Building Maps", "Completion Certificates", "Area Details"]
  return (
    <>
      <div className='bg-white fixed top-20 left-4 cursor-pointer p-2 rounded-md'>
        <CiMenuFries className='' size={25} onClick={() => { setToggleNav(true) }} />
      </div>
      <Heading content={"Infrastructure"} className={`${toggleNav ? "blur-md" : "blur-0"}`} />
      <aside className={`fixed sidenav top-16 select-none h-full left-0 bg-white lg:w-52 md:w-full w-full py-5 px-4 ${toggleNav ? "translate-x-0" : "-translate-x-full"}`}>
        <CiMenuFries className='mb-3 ml-4 cursor-pointer' size={25} onClick={() => { setToggleNav(false) }} />
        <ul>
          {tabs.map((tab) => {
            return <li onClick={() => { setToggleNav(false); setActiveTab(tab) }} className='hover:bg-blue-600 flex flex-col space-y-7 justify-center items-start px-2 py-2 rounded-md cursor-pointer hover:text-white'>{tab}</li>
          })}
        </ul>
      </aside>
      {activeTab === "About" &&
        <section className='mt-5'>
          <p className='tracking-wider'>
            The college was established in 1996. Since then the adequate availability of physical infrastructure was duly identified and has been planned and constructed accordingly. Every department are provided with built up space as per the requirements of AICTE in form of class rooms, laboratories, tutorial and seminar rooms, staff rooms and departmental library. In addition to this there are central facilities in the form of library, computing facility and student recreational facilities. Allied areas in form of hostels, and mess cater the need of students. The campus also provides appropriate parking facility for two wheeler and four wheeler vehicles.
          </p>
        </section>
      }
    </>
  )
}
