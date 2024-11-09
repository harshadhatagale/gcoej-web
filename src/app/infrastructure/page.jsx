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
        </>
    );
}
