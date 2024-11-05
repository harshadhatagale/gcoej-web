import React from 'react'

export default function Tabs() {
  return (
    <div className='w-full overflow-hidden'>
        <div className='lg:w-[800px] min-w-[300px] min:md:w-[500px] flex p-2 justify-start items-center bg-gray-200 min-h-12 rounded-md flex-wrap'>
            <div className='h-full flex-1 py-2 px-4 justify-center items-center flex cursor-pointer hover:bg-blue-600 hover:text-white rounded-md'>News</div>
            <div className='h-full flex-1 py-2 px-4 justify-center items-center flex cursor-pointer hover:bg-blue-600 hover:text-white rounded-md'>Notices</div>
            <div className='h-full flex-1 py-2 px-4 justify-center items-center flex cursor-pointer hover:bg-blue-600 hover:text-white rounded-md'>Tenders</div>
            <div className='h-full flex-1 py-2 px-4 justify-center items-center flex cursor-pointer hover:bg-blue-600 hover:text-white rounded-md'>Formats</div>
            <div className='h-full flex-1 py-2 px-4 justify-center items-center flex cursor-pointer hover:bg-blue-600 hover:text-white rounded-md'>Downloads</div>
            <div className='h-full flex-1 py-2 px-4 justify-center items-center flex cursor-pointer hover:bg-blue-600 hover:text-white rounded-md'>AEC Formats</div>
        </div>
    </div>
  )
}
