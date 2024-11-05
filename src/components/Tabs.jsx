"use client"
import React from 'react'
import { useState } from 'react'
import { Roboto } from 'next/font/google'

const roboto=Roboto({
    subsets:["latin"],
    weight:["100" , "300" , "400" , "500" , "700" , "900"]
})
export default function Tabs() {
    const [ActiveTab, setActiveTab] = useState(0)
    const tabs = [
        { label: 'News', content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at vitae officiis molestiae rem maiores accusamus dicta? Repudiandae beatae unde, explicabo iure doloribus quo numquam dolorum placeat sequi id non qui rem perferendis, dolore nisi tenetur alias illum, earum consequuntur omnis animi necessitatibus totam quod. Corporis doloremque tempore minima ullam, rerum inventore vero possimus laudantium corrupti exercitationem nulla natus iusto ratione ea tenetur laboriosam." },
        { label: 'Notices', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at vitae officiis molestiae rem maiores accusamus dicta? Repudiandae beatae unde, explicabo iure doloribus quo numquam dolorum placeat sequi id non qui rem perferendis, dolore nisi tenetur alias illum, earum consequuntur omnis animi necessitatibus totam quod. Corporis doloremque tempore minima ullam, rerum inventore vero possimus laudantium corrupti exercitationem nulla natus iusto ratione ea tenetur laboriosam.' },
        { label: 'Tenders', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at vitae officiis molestiae rem maiores accusamus dicta? Repudiandae beatae unde, explicabo iure doloribus quo numquam dolorum placeat sequi id non qui rem perferendis, dolore nisi tenetur alias illum, earum consequuntur omnis animi necessitatibus totam quod. Corporis doloremque tempore minima ullam, rerum inventore vero possimus laudantium corrupti exercitationem nulla natus iusto ratione ea tenetur laboriosam.' },
        { label: 'Formats', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at vitae officiis molestiae rem maiores accusamus dicta? Repudiandae beatae unde, explicabo iure doloribus quo numquam dolorum placeat sequi id non qui rem perferendis, dolore nisi tenetur alias illum, earum consequuntur omnis animi necessitatibus totam quod. Corporis doloremque tempore minima ullam, rerum inventore vero possimus laudantium corrupti exercitationem nulla natus iusto ratione ea tenetur laboriosam.' },
        { label: 'AEC Formats', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at vitae officiis molestiae rem maiores accusamus dicta? Repudiandae beatae unde, explicabo iure doloribus quo numquam dolorum placeat sequi id non qui rem perferendis, dolore nisi tenetur alias illum, earum consequuntur omnis animi necessitatibus totam quod. Corporis doloremque tempore minima ullam, rerum inventore vero possimus laudantium corrupti exercitationem nulla natus iusto ratione ea tenetur laboriosam.' },
    ];
    return (
        <div className="w-full overflow-hidden">
            {/* Tab Buttons */}
            <div className="lg:w-[800px] min-w-[300px] min:md:w-[500px] flex p-2 justify-start items-center bg-gray-200 min-h-12 rounded-md flex-wrap">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`h-full ${roboto.className} flex-1 py-2 px-4 justify-center items-center flex cursor-pointer hover:bg-blue-600 hover:text-white rounded-md ${ActiveTab === index
                            ? 'bg-blue-600 text-white'
                            : ''
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-4 bg-white border border-t-0 border-gray-200">
                {tabs[ActiveTab].content}
            </div>
        </div>
    )
}
