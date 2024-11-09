"use client";
import Heading from '@/components/UI/Heading1';
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import Sidebar from '@/components/UI/Sidebar';
export default function Page() {
  const [activeTab, setActiveTab] = useState("About");
  const [toggleNav, setToggleNav] = useState(false);
  const tabs = ["About", "Building Maps", "Completion Certificates", "Area Details"];

  return (
    <>
      <div className=' fixed top-20 left-2 cursor-pointer p-2 rounded-md'>
        <CiMenuFries size={25} onClick={() => setToggleNav(true)} />
      </div>

      <Heading content="Infrastructure" className={`${toggleNav ? "blur-md" : "blur-0"}`} />

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
        tabs={tabs}
      />

      {activeTab === "About" && (
        <section className='mt-5'>
          <p className='tracking-wider'>
            The college was established in 1996. Since then, the adequate availability of physical infrastructure was duly identified and has been planned and constructed accordingly. Every department is provided with built-up space as per the requirements of AICTE in the form of classrooms, laboratories, tutorial and seminar rooms, staff rooms, and departmental library. In addition, there are central facilities in the form of a library, computing facilities, and student recreational facilities. Allied areas in the form of hostels and a mess cater to the needs of students. The campus also provides appropriate parking facilities for two-wheeler and four-wheeler vehicles.
          </p>
        </section>
      )}
      {activeTab === "Building Maps" && (
        <section className='mt-5'>
          <div className="w-full overflow-x-scroll">
            <table className='my-3 min-w-full border-collapse border border-gray-300 rounded-lg shadow-lg'>
              <thead>
                <tr className='bg-blue-600 text-white'>
                  <th className='border-r border-blue-700 px-6 py-4 text-left font-bold'>Sr. No.</th>
                  <th className='border-r border-blue-700 px-6 py-4 text-left font-bold'>Title</th>
                  <th className='border-r border-blue-700 px-6 py-4 text-left font-bold'>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white hover:bg-blue-50">
                  <td className='border-r border-gray-300 px-6 py-4'>1</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Main Building Map</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Download</td>
                </tr>
                <tr class="bg-white hover:bg-blue-50">
                  <td className='border-r border-gray-300 px-6 py-4'>2</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Library Map</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Download</td>
                </tr>
                <tr class="bg-white hover:bg-blue-50">
                  <td className='border-r border-gray-300 px-6 py-4'>3</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Workshop Building</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Download</td>
                </tr>
                <tr class="bg-white hover:bg-blue-50">
                  <td className='border-r border-gray-300 px-6 py-4'>4</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Hostel Map</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Download</td>
                </tr>
                <tr class="bg-white hover:bg-blue-50">
                  <td className='border-r border-gray-300 px-6 py-4'>5</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Girl's Hostel</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Download</td>
                </tr>
                <tr class="bg-white hover:bg-blue-50">
                <td className='border-r border-gray-300 px-6 py-4'>6</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Professor Quarters</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Download</td>
                </tr>
                <tr class="bg-white hover:bg-blue-50">
                <td className='border-r border-gray-300 px-6 py-4'>7</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Class IV Quarters</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Download</td>
                </tr>
                <tr class="bg-white hover:bg-blue-50">
                <td className='border-r border-gray-300 px-6 py-4'>8</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Principal Quarter</td>
                  <td className='border-r border-gray-300 px-6 py-4'>Download</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
      {activeTab === "Completion Certificates" && (
        <section className='mt-5'>
          <p className='tracking-wider'>
            The college was established in 1996. Since then, the adequate availability of physical infrastructure was duly identified and has been planned and constructed accordingly. Every department is provided with built-up space as per the requirements of AICTE in the form of classrooms, laboratories, tutorial and seminar rooms, staff rooms, and departmental library. In addition, there are central facilities in the form of a library, computing facilities, and student recreational facilities. Allied areas in the form of hostels and a mess cater to the needs of students. The campus also provides appropriate parking facilities for two-wheeler and four-wheeler vehicles.
          </p>
        </section>
      )}
      {activeTab === "Area Details" && (
        <section className='mt-5'>
          <p className='tracking-wider'>
            The college was established in 1996. Since then, the adequate availability of physical infrastructure was duly identified and has been planned and constructed accordingly. Every department is provided with built-up space as per the requirements of AICTE in the form of classrooms, laboratories, tutorial and seminar rooms, staff rooms, and departmental library. In addition, there are central facilities in the form of a library, computing facilities, and student recreational facilities. Allied areas in the form of hostels and a mess cater to the needs of students. The campus also provides appropriate parking facilities for two-wheeler and four-wheeler vehicles.
          </p>
        </section>
      )}
    </>
  );
}
