import React from 'react'

export default function Heading({content}) {
  return (
    <div className='text-2xl w-full bg-cover bg-center bg-opacity-40 bg-[url("/header-bg.jpg")] h-16 flex capitalize tracking-wide font-bold text-blue-900 rounded-sm px-2 justify-start items-center'>
      <h2 className='text-shadow-lg'>
      {content}
    </h2>
    </div>
  )
}
