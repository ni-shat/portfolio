import React from 'react';
import me from '../../assets/me-.jpg';
import icon from '../../assets/icon2.png';
import { Link } from 'react-scroll';
import { FaChevronDown, FaDownload } from 'react-icons/fa';
import ReactCurvedText from "react-curved-text";
import Education from '../education/Education';

const About = () => {
    return (
        <div data-scroll id='About' className='h-auto md:pb-20 pb-6  w-full text-[#9ea2a3] font-normal text-sm leading-6 bg-[#121212] md:pt-14 pt-[550px] md:border'>
            {/* #787C7D */}
            <div className='bg-[#121212] relative md:py-10 py-3 md:px-12 px-2.5 md:justify-center items-center gap-4 flex'>

                <div className='flex-grow flex flex-col md:flex-row justify-center md:justify-center md:gap-3.5'>
                    <h3 className='md:text-5xl text-2xl font-extrabold pop md:text-center text-white w-fit uppercase md:mr-0 mr-2'>About Me</h3>
                    <img className='mt-1 border-t-0 border-zinc-400 md:block hidden' src={icon} alt="" />
                    <img className='-mt-1 ml-3 border-t-0 border-zinc-400 block w-5 -rotate-90 md:hidden flex-grow' src={icon} alt="" />
                </div>

                

                <div className=' items-center md:hidden flex  '>
                    <img className='w-[70px] h-[70px] object-cover rounded-full -mt-4 md:mt-0 mr-1 shadow-sm shadow-[#B8FDE6] border' src={me} alt="" />
                </div>
            </div>
            <div className='flex md:flex-row '>
                <div className='w-[100%] md:pl-20 md:px-0 px-2.5 text-start py-3'>
                    <p>
                        <span className='text-emerald-400 font-bold text-xl'>Hello! I'm Nishat Tabassum Masuma</span> and I am excited to introduce myself as a dedicated <span className='text-emerald-400 font-bold'>Full Stack Developer</span> with a specialization in the MERN stack - MongoDB, Express.js, React.js, and Node.js. with a strong knowledge of programming languages with hands-on skills. With a strong foundation in web development and keen interest in creating scalable applications, I strive to deliver quality solutions that meet client requirements.
                        I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
                        {/* Currently studying at the CSE department of Leading University, I possess a strong knowledge of programming languages with hands-on skills.  */}
                    </p>
                    <div className='mt-10'>
                        <div className='flex md:flex-row flex-col md:gap-32 whitespace-nowrap'>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Age:</p> <p className='w-20 '>24</p></p>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Residence:</p> <p className='w-20 '>Sylhet, Bangladesh</p></p>
                        </div>
                        <div className='flex md:flex-row flex-col md:gap-32 whitespace-nowrap'>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Phone:</p> <p className='w-20 '>+8801635617278</p></p>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Email:</p> <p className='w-20 '>nishat.tabassum301@gmail.com</p></p>
                        </div>
                        <div className='flex md:flex-row flex-col md:gap-32 whitespace-nowrap'>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Github:</p> <p className='w-20 '>https://github.com/ni-shat</p></p>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Linkedin:</p> <p className='w-20 '>https://www.linkedin.com/in/nishat1/</p></p>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 items-center md:flex justify-end md:mr-20 relative hidden'>
                    <img className='w-64 h-64 object-cover rounded- shadow-xl shadow-[#B8FDE6] border' src={me} alt="" />
                </div>
            </div>
            <Education></Education>
            <div className='flex gap-4 items-center justify-start md:mx-20 mx-3 mt-4'>
                <div className='w-fit h-fit shadow-[#B8FDE6] flex items-center md:px-5 px-2 bg-[#B8FDE6] border border-[#B8FDE6]  hover:cursor-pointer hover:bg-[#a8a9ab] transition-all duration-200'>
                    <FaDownload className='text-black md:text-sm -mt-1' />
                    <button className=' uppercase md:text-sm text-xs font-semibold md:font-extrabold rounded-ull md:py-2 py-1 md:ml-3 ml-2 text-black whitespace-nowrap'><a href="/resume.png" download='resume'><span className='md:inline-block hidden'>Download</span> Resume</a></button>
                </div>
                {/* <div className='w-32 h-32 border -z-10 bg-slate-100 rounded-full flex items-center justify-center'> */}
                {/* <ReactCurvedText
                        width={370}
                        height={300}
                        cx={190}
                        cy={120}
                        rx={100}
                        ry={100}
                        startOffset={100}
                        text="curved text"
                        color="white"
                        className="z-10 border"
                    /> */}

                {/* <div className='flex justify-center items-center'>
                        <FaChevronDown className='text-xl ' />
                    </div> */}

                {/* </div> */}
            </div>

        </div>
    );
};

export default About;