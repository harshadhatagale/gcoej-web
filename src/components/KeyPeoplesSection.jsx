import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
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
                <h2 className={`${poppins.className} my-5 text-green-700 text-3xl tracking-wide font-bold`}>Key Peoples:</h2>
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
            <div className='my-6 flex-1 border border-gray-400 px-3 py-3 rounded-md shadow-md h-fit bg-slate-300'>
                <h2 className={`${poppins.className} text-slate-900 mb-5 text-xl tracking-wide font-bold`}>Quick Links:</h2>
                <ul className='flex flex-col space-y-2  w-full list-disc justify-center px-4 items-start'>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/gallery/"}>Photo Gallery</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=MzA="}>Results</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=NjE="}>Mandatory Disclosure (RTI)</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=NjI="}>Mandatory Disclosure</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=NjM="}>Citizen Charter</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=MTE="}>Autonomy Rules</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=Mzk="}>Central Library</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=NDA="}>Central Computing</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=NzQ="}>IQAC</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=NzY="}>AEC Format</Link></li>
                    <li className='hover:text-blue-500 hover:underline'><Link href={"https://gcoej.ac.in/site/?page=NzU="}>NIRF</Link></li>
                </ul>
            </div>
        </div>
    )
}
