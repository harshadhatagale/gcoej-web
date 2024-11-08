import Heading from '@/components/UI/Heading1'
import React from 'react'

export default function page() {
    return (
        <>
            <Heading content={"About Institute"} />
            <p className='mt-5 text-md tracking-wide'>
                The Government College of Engineering was established in 1996. The institute is affiliated to the Kavyitri Bahinabai North Maharashtra University, Jalgaon. Our institution has been NAAC accredited with a CGPA of 2.85 on a 4-point scale at B++ Grade valid for 5 years from 21-09-2024.  The institute has been granted academic autonomy by the affiliating university and Government of Maharashtra since June 2014. The institute offers undergraduate, post-graduation, and Ph.D. programs in Engineering. The details of these programs are as under:
            </p>
            <h3 className='text-xl font-bold'>Undergraduate Programmes</h3>
            <div className="w-full overflow-x-scroll">
            <table className='my-3 min-w-full border-collapse border border-gray-300 rounded-lg shadow-lg'>
                <thead>
                    <tr className='bg-blue-600 text-white'>
                        <th className='border-r border-blue-700 py-4 text-left font-bold'>Sl. No.</th>
                        <th className='border-r border-blue-700 py-4 text-left font-bold'>Branch</th>
                        <th className='border-r border-blue-700 py-4 text-left font-bold'>Intake</th>
                        <th className='border-r border-blue-700 py-4 text-left font-bold'>Year of Establishment</th>
                        <th className='border-r border-blue-700 py-4 text-left font-bold'>Accreditation Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white hover:bg-blue-50">
                        <td className='border-r border-gray-300'>1</td>
                        <td className='border-r border-gray-300'>Mechanical Engineering</td>
                        <td className='border-r border-gray-300'>60</td>
                        <td className='border-r border-gray-300'>1996</td>
                        <td className='border-r border-gray-300'>Accredited (2018-2021)</td>
                    </tr>
                    <tr class="bg-white hover:bg-blue-50">
                        <td className='border-r border-gray-300'>2</td>
                        <td className='border-r border-gray-300'>Instrumentation Engineering</td>
                        <td className='border-r border-gray-300'>60</td>
                        <td className='border-r border-gray-300'>1996</td>
                        <td className='border-r border-gray-300'>Accredited (2018-2021)</td>
                    </tr>
                    <tr class="bg-white hover:bg-blue-50">
                        <td className='border-r border-gray-300'>3</td>
                        <td className='border-r border-gray-300'>Electronics and Telecommunication Engineering</td>
                        <td className='border-r border-gray-300'>60</td>
                        <td className='border-r border-gray-300'>1996</td>
                        <td className='border-r border-gray-300'>Applied for Re-accreditation, SAR Uploaded</td>
                    </tr>
                    <tr class="bg-white hover:bg-blue-50">
                        <td className='border-r border-gray-300'>4</td>
                        <td className='border-r border-gray-300'>Computer Engineering</td>
                        <td className='border-r border-gray-300'>60</td>
                        <td className='border-r border-gray-300'>2007</td>
                        <td className='border-r border-gray-300'>NA</td>
                    </tr>
                    <tr class="bg-white hover:bg-blue-50">
                        <td className='border-r border-gray-300'>5</td>
                        <td className='border-r border-gray-300'>Electrical Engineering</td>
                        <td className='border-r border-gray-300'>60</td>
                        <td className='border-r border-gray-300'>2007</td>
                        <td className='border-r border-gray-300'>NA</td>
                    </tr>
                    <tr class="bg-white hover:bg-blue-50">
                        <td className='border-r border-gray-300'>6</td>
                        <td className='border-r border-gray-300'>Civil Engineering</td>
                        <td className='border-r border-gray-300'>60</td>
                        <td className='border-r border-gray-300'>2010</td>
                        <td className='border-r border-gray-300'>NA</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <p>Apart from educational activities, the institute continuously organizes extra-curricular activities like seminars, workshops, and lectures by dignitaries in the respective fields. With the changing technological front, the institute keeps regularly updating laboratories, infrastructure, computers, and machinery. Development of the institute since its establishment is as follows:
            </p>
            <ul>
                    <li>1996 - Established and Affiliated to KBCNMU, Jalgaon (3 UG programs)</li>
                    <li>2007 - Occupied present building- 19.35 Acres and 2 new UG courses</li>
                    <li>2009 - Accreditation of 3 UG programs (E &Tc, Mechanical & Instrumentation)</li>
                    <li>2010 - Commencement of UG program in Civil and PG Program in E&Tc</li>
                    <li>2012-16 - Inclusion in TEQIP II (Rs. 15 Crore)</li>
                    <li>2014 - Autonomy granted by UGC & KBCNMU, Jalgaon</li>
                    <li>2018 – Reaccreditation by NBA (Mechanical & Instrumentation) - SAR uploaded for accreditation of E&Tc in 2020</li>
                    <li>Selected under TEQIP III (Rs. 7 Crore) - NAAC accreditation with B+ (2.67) •</li>
                    <li>2018 – Recognized research centers for Ph. D. (23 students)</li>
                    <li>2020- 2 PG Programs added (Mechanical and Instrumentation)</li>
                    <li>2021 – Extension of Autonomy</li>
                </ul>
        </>
    )
}
