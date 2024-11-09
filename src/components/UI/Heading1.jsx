import React from 'react'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});
export default function Heading({content}) {
  return (
    <div className='text-2xl w-[80%] mx-auto rounded-md bg-cover bg-center bg-opacity-40 bg-[url("/header-bg.jpg")] h-16 flex capitalize tracking-wide font-bold text-blue-900 shadow-md border border-gray-400 px-2 justify-start items-center'>
      <h2 className={`text-shadow-lg font-extrabold ${roboto.className}`}>
      {content}
    </h2>
    </div>
  )
}
