import React from 'react'
import Heading from '@/components/UI/Heading1'
export default function page() {
  return (
    <>
      <Heading content={"Vision & Mission"} />
      <p className='font-bold text-lg mt-5 text-md tracking-wide'>Vision Statement 👀:</p>
      <p className='text-md tracking-wide'>
        Globally Accepted Engineers with Human Skills
      </p>
      <p className='font-bold text-lg mt-5 text-md tracking-wide'>Mission Statement 🚀:</p>
      <ul className='list-disc px-4'>
        <li>To promote overall development of students by creating an excellent learning environment.</li>
        <li>To develop undergraduate and postgraduate programmes through effective linkages with industry, academia, and alumni.</li>
        <li>To promote services to community and revenue generation for sustainable development.</li>
      </ul>
      <p className='font-bold text-lg mt-5 text-md tracking-wide'>Objectives 🎯:</p>
      <ul className='list-disc px-4'>
        <li>To determine and prescribe its own courses of study and syllabi.</li>
        <li>To establish and implement the method of examination and evaluation.</li>
        <li>To accommodate administrative and financial reforms with respect to autonomy.</li>
        <li>To develop research center in various engineering disciplines.</li>
      </ul>
      <p className='font-bold text-lg mt-5 text-md tracking-wide'>Quality Policy:</p>
      <p>Offering value based technical education of best possible standards.</p>
    </>
  )
}
