import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Roboto } from 'next/font/google'
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
const roboto = Roboto({
    subsets: ["latin"],
    weight:["100", "300", "400", "500","700","900"]
})
export default function KeyPeoplesSection() {
    return (
        <div className='my-6'>
            <h2 className={`${poppins.className} my-5 text-3xl tracking-wide font-bold`}>Key Peoples:</h2>
            <div className='p-4 flex space-x-5 my-4 w-full border border-gray-400 shadow-md md:w-[500px] lg:w-[600px] rounded-md'>
                <Image className='rounded-md' src={"/key1.jpeg"} width={100} height={100} />
                <div className={`flex flex-col space-y-3`}>
                    <p className='text-lg font-bold'>Shri. V. C. Rastogi</p>
                    <p>Hon. Principal Secretary, Higher & Technical Education, Maharashtra</p>
                </div>
            </div>
            <div className='p-4 flex space-x-5 my-4 w-full border border-gray-400 shadow-md md:w-[500px] lg:w-[600px] rounded-md'>
                <Image className='rounded-md' src={"/key1.jpeg"} width={100} height={100} />
                <div className={`flex flex-col space-y-3`}>
                    <p className='text-lg font-bold'>Dr. Vinod Mohitkari</p>
                    <p>Hon. Director, Directorate of Technical Education,</p>
                </div>
            </div>
            <div className='p-4 flex space-x-5 my-4 w-full border border-gray-400 shadow-md md:w-[500px] lg:w-[600px] rounded-md'>
                <Image className='rounded-md' src={"/key3.jpeg"} width={100} height={100} />
                <div className={`flex flex-col space-y-3`}>
                    <p className='text-lg font-bold'>Dr. Suhas S. Gajre</p>
                    <p>Hon. Principal, GCoE, Jalgaon</p>
                </div>
            </div>
        </div>
    )
}
