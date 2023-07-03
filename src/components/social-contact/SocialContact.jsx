import { Link } from 'react-router-dom';
import messenger from '../../assets/facebook-messenger.svg'
import wp from '../../assets/whatsapp.svg'
import mail from '../../assets/envelope-edit.svg'
import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';

const SocialContact = () => {
    return (
        <div className='absolute bottom-4 left-3'>
            <div className='flex gap-3 items-center mb-8'>
                <div className='h-fit mt-16 text-black text-sm uppercase w-fit font-extrabold  border-2 border-black px-2 py-2.5 rounded-ull flex gap-2 items-center shadow-lg shadow-[#B8FDE6]'>
                    <FaDownload />
                    <a href="/resume.png" download='resume'>Download Resume</a>
                </div>
                {/* <div className='  bg-black w-[1px]  h-[200px] mb-0'></div> */}
            </div>

            <div className='flex items-center'>
                <div className=''>
                    <div className='flex gap-2 items-center'>
                        <div className="divider bg-black w-20 h-[1px]"></div>
                        <p className='text-sm'>Connect with</p>
                        <div className="divider bg-black w-20 h-[1px]"></div>
                    </div>
                    <div className='flex gap-6 items-center uppercase  text-black '>
                        <div className='flex items-center gap-1'>
                            <img className='w-6 h-6 rounded-full shadow-md shadow-[#B8FDE6]' src={messenger} alt="" />
                            <div className='font-extrabold text-sm'>
                                <Link to='https://m.me/100010105270770' target="_blank">Messenger</Link>
                                {/* <p className='text-xs font-medium'>m.me</p> */}
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='w-6 h-6 rounded-full shadow-md shadow-[#B8FDE6]' src={wp} alt="" />
                            <div className='font-extrabold text-sm'>
                                <Link to='https://m.me/100010105270770' target="_blank">What's app</Link>
                                {/* <p className='text-xs font-medium'>+8801635617278</p> */}
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='w-6 h-6 rounded-full shadow-md shadow-[#B8FDE6]' src={mail} alt="" />
                            <div className='font-extrabold text-sm'>
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