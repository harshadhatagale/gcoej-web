// components/Footer.js
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-6 mt-10 px-2 w-full">
            <div className="container mx-auto flex flex-col items-center">

                {/* College Name */}
                <h2 className="lg:text-xl text-lg font-semibold mb-2 text-center">Government College of Engineering, Jalgaon</h2>
                <p className="text-gray-400 mb-4">GCOEJ - Excellence in Engineering Education</p>

                {/* Social Links */}
                <div className="flex space-x-4 mb-4">
                    <a href="https://facebook.com/gcoej" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com/gcoej" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com/src_gcoej?igsh=MWQzZWNwZmtzcWppdA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.linkedin.com/school/gcoejalgaon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <div>
                    <ul className='flex flex-col lg:flex-row md:flex-row justify-center items-center space-x-2'>
                        <li className='text-gray-300 hover:underline'>
                            <Link href={""}>Online Payment Terms & Conditions</Link>
                        </li>
                        <li className='text-gray-300 hover:underline'>
                            <Link href={""}>Hyperlinking Policy</Link>
                        </li>
                        <li className='text-gray-300 hover:underline'>
                            <Link href={""}>Terms & Conditions</Link>
                        </li>
                        <li className='text-gray-300 hover:underline'>
                            <Link href={""}>Privacy Policy</Link>
                        </li>
                        <li className='text-gray-300 hover:underline'>
                            <Link href={""}>Copyright Policy</Link>
                        </li>
                        <li className='text-gray-300 hover:underline'>
                            <Link href={""}>Accessibility Statement</Link>
                        </li>
                        <li className='text-gray-300 hover:underline'>
                            <Link href={""}>Help</Link>
                        </li>
                    </ul>
                </div>
                {/* Copyright */}
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Government College of Engineering, Jalgaon. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
