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
    weight: ["100", "300", "400", "500", "700", "900"]
})
export default function KeyPeoplesSection() {
    return (
        <div className='w-full flex flex-col md:flex-row lg:flex-row'>
            <div className='my-6 flex-2 '>
                <h2 className={`${poppins.className} my-5 text-3xl tracking-wide font-bold`}>Key Peoples:</h2>
                <div className='p-4 flex space-x-5 my-4 w-full border border-gray-400 shadow-md md:w-[90%] lg:w-[90%] rounded-md'>
                    <Image className='rounded-md' src={"/key1.jpeg"} width={100} height={100} />
                    <div className={`flex flex-col space-y-3`}>
                        <p className={`${roboto.className} md:text-xl lg:text-xl text-lg font-bold`}>Shri. V. C. Rastogi</p>
                        <p className={`${poppins.className} text-md text-slate-800`}>Hon. Principal Secretary, Higher & Technical Education, Maharashtra</p>
                    </div>
                </div>
                <div className='p-4 flex space-x-5 my-4 w-full border border-gray-400 shadow-md md:w-[90%] lg:w-[90%] rounded-md'>
                    <Image className='rounded-md' src={"/key2.png"} width={100} height={100} />
                    <div className={`flex flex-col space-y-3`}>
                        <p className={`${roboto.className} md:text-xl lg:text-xl text-lg font-bold`}>Dr. Vinod Mohitkari</p>
                        <p className={`${poppins.className} text-md text-slate-800`}>Hon. Director, Directorate of Technical Education,</p>
                    </div>
                </div>
                <div className='p-4 flex space-x-5 my-4 w-full border border-gray-400 shadow-md md:w-[90%] lg:w-[90%] rounded-md'>
                    <Image className='rounded-md' src={"/key3.jpeg"} width={100} height={100} />
                    <div className={`flex flex-col space-y-3`}>
                        <p className={`${roboto.className} md:text-xl lg:text-xl text-lg font-bold`}>Dr. Suhas S. Gajre</p>
                        <p className={`${poppins.className} text-md text-slate-800`}>Hon. Principal, GCoE, Jalgaon</p>
                    </div>
                </div>
            </div>
            <div className=' flex-1'>
                <h2 className={`${poppins.className} my-5 text-3xl tracking-wide font-bold`}>Quick Links:</h2>
            </div>
        </div>
    )
}
