import React from 'react';
import me from '../../assets/me-.jpg';
import icon from '../../assets/icon2.png';
import { Link } from 'react-scroll';
import { FaChevronDown, FaDownload } from 'react-icons/fa';
import ReactCurvedText from "react-curved-text";

const About = () => {
    return (
        <div data-scroll id='About' className='h-auto pb-20 w-full text-zinc-300 font-normal text-sm leading-6 bg-[#121212] pt-16 border'>
            <div className='bg-[#121212] relative py-10 px-12 justify-center gap-4 flex'>
                <h3 className='text-5xl font-extrabold pop text-white uppercase'>About Me</h3>
                <img className='mt-1 border-t-0 border-zinc-400' src={icon} alt="" />
            </div>
            <div className='flex'>
                <div className='w-[50%] pl-10 text-start py-3'>
                    <p>
                        <span className='text-emerald-400 font-bold text-xl'>Hello! I'm Nishat Tabassum Masuma</span> and I am excited to introduce myself as a dedicated <span className='text-emerald-400 font-bold'>Full Stack Developer</span> with a specialization in the MERN stack - MongoDB, Express.js, React.js, and Node.js.
                        {/* Currently studying at the CSE department of Leading University, I possess a strong knowledge of programming languages with hands-on skills.  */}
                        With a strong knowledge of programming languages with hands-on skills. With a strong foundation in web development and keen interest in creating scalable applications, I strive to deliver quality solutions that meet client requirements.
                        I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
                    </p>
                    <div className='mt-10'>
                        <div className='flex gap-32 whitespace-nowrap'>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Age:</p> <p className='w-20 '>24</p></p>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Residence:</p> <p className='w-20 '>Sylhet, Bangladesh</p></p>
                        </div>
                        <div className='flex gap-32 whitespace-nowrap'>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Phone:</p> <p className='w-20 '>+8801635617278</p></p>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Email:</p> <p className='w-20 '>nishat.tabassum301@gmail.com</p></p>
                        </div>
                        <div className='flex gap-32 whitespace-nowrap'>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Github:</p> <p className='w-20 '>github</p></p>
                            <p className='flex'><p className='w-[88px] text-emerald-400 font-bold'>Linkedin:</p> <p className='w-20 '>Slinkedin</p></p>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 items-center flex justify-center relative'>
                    <img className='w-60 h-60 object-cover rounded- shadow-xl shadow-[#B8FDE6] border' src={me} alt="" />
                </div>
            </div>
            <div className='flex gap-4 items-center justify-end mx-60 mt-4'>
                <div className='w-fit h-fit shadow-[#B8FDE6] flex items-center px-5 bg-[#B8FDE6] border border-[#B8FDE6]  hover:cursor-pointer hover:bg-[#a8a9ab] transition-all duration-200'>
                    <FaDownload className='text-black' />
                    <button className=' uppercase text-sm font-extrabold rounded-ull py-2 ml-3 text-black whitespace-nowrap'><Link to=''>Download Resume</Link></button>
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