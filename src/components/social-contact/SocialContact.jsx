import { Link } from 'react-router-dom';
import messenger from '../../assets/facebook-messenger.svg'
import wp from '../../assets/whatsapp.svg'
import mail from '../../assets/envelope-edit.svg'
import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';

const SocialContact = () => {
    return (
        <div className='md:absolute md:bottom-4 md:top-auto md:left-3
        '>
            <div className='flex gap-3 items-center mb-8'>
                <div className='h-fit md:mt-16 mt-5 md:bg-opacity-1 bg-opacity-10 md:bg-transparent bg-white md:text-black text-white text-sm uppercase w-fit font-extrabold  md:border-2 border border-black px-2 py-2.5 rounded-ull flex gap-2 items-center shadow-lg shadow-[#B8FDE6]'>
                    <FaDownload />
                    <a href="/resume-nishat.pdf" target='_blank' download='resume'>Download Resume</a>
                </div>
                {/* <div className='  bg-black w-[1px]  h-[200px] mb-0'></div> */}
            </div>

            <div className='md:flex items-center hidden '>
                <div className='md:mt-0 mt-3'>
                    <div className='flex gap-2 items-center'>
                        <div className="divider md:bg-black bg-white w-10 md:w-20 h-[1px] md:block hidden"></div>
                        <p className='text-sm'>Connect with</p>
                        <div className="divider md:bg-black bg-white w-10 md:w-20 h-[1px]"></div>
                    </div>
                    <div className='flex md:gap-6 gap-5 items-center uppercase  md:text-black '>
                        <div className='flex items-center gap-1'>
                            <img className='md:w-6 md:h-6 w-9 h-9 rounded-full shadow-md shadow-[#B8FDE6] bg-white' src={messenger} alt="" />
                            <div className='font-extrabold text-sm md:block hidden'>
                                <Link to='https://m.me/100010105270770' target="_blank">Messenger</Link>
                                {/* <p className='text-xs font-medium'>m.me</p> */}
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='md:w-6 md:h-6 w-9 h-9 rounded-full shadow-md shadow-[#B8FDE6] bg-white' src={wp} alt="" />
                            <div className='font-extrabold text-sm md:block hidden'>
                                <Link to='https://m.me/100010105270770' target="_blank">What's app</Link>
                                {/* <p className='text-xs font-medium'>+8801635617278</p> */}
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='md:w-6 md:h-6 w-9 h-9 rounded-full shadow-md shadow-[#B8FDE6] bg-white' src={mail} alt="" />
                            <div className='font-extrabold text-sm md:block hidden'>
                                <Link to='https://m.me/100010105270770' target="_blank">Email</Link>
                                {/* <p className='text-xs font-medium'>nishat.tabassum301@gmail.com</p> */}
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default SocialContact;