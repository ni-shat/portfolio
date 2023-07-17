import React, { useEffect } from 'react';
import me1 from '../../assets/me1.jpg';
import me from '../../assets/me.png';
import logo from '../../assets/logo.png';

import { useCallback } from "react";
import Particles from "react-particles";
import SocialContact from '../social-contact/SocialContact';
import { FaChevronDown, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import FollowMe from '../follow-me/FollowMe';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import '../../index.css';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {

    const [text] = useTypewriter({
        words: ['Front-End Developer', 'Back-End Developer', 'Mern-Stack Developer'],
        loop: {},
        typeSpeed: 20,
        // deleteSpeed: 80,
    })

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div data-scroll id='Home' className='relative '>
            <div className='w-full flex h-screen'>
                <div data-aos="fade-right" className='w-1/3 bg-[#a8a9ab] md:block md:h-screen h-60'>

                </div>
                <div className='bg-[#121212] w-3/4'>

                </div>
            </div>
            <div className='py-0 flex'>
                {/* image */}
                <div className='object-cover absolute 
                    md:w-[440px] md:h-[500px] md:top-[50.38%] md:left-1/3

                    min-[320px]:top-[17%] min-[320px]:left-[30%] min-[320px]:w-[250px] min-[320px]:h-[280px] 

                    
                    transform -translate-x-1/2 md:-translate-y-1/2'>
                    <img className=''
                        src={me1} alt="" />
                </div>

                <div className='absolute top-[20%] left-1/2 text-white'>

                    <div className='bg-[#121212] relative md:-left-24 left-3 md:top-0 top-5 md:py-14 py-5 md:px-12 pl-6 w-fit rounded-full'>
                        <h3 data-aos="fade-up" className='md:text-5xl text-2xl font-extrabold pop '><p>Nishat</p><p>Tabassum</p></h3>
                    </div>

                    <div className='md:ml-0 md:pl-3 md:mt-0 mt-44 relative 
                                    -left-[60%] 
                                    min-[320px]:-left-[57%]
                                    min-[380px]:-left-[60%]
                                    min-[350px]:-left-[60%]
                                    min-[400px]:-left-[55%]  min-[400px]:w-[350px]
                                    md:left-0 
                                    w-[300px] 
                                    md:w-full'>
                        <h2 className='text-emerald-500 font-bold text-xl uppercase mt-3 pop whitespace-nowrap'>
                            {/* Mern Stack Developer */}
                            {text}
                            <Cursor />
                        </h2>

                        <p className='mt-6 md:mr-40 pop text-sm leading-6'>Hello!
                            I am a full stack developer from Bangladesh specializing in the MERN stack. I provide clean code and have rich experience in building dynamic and responsive web applications.</p>
                        <div className='md:hidden block'>
                            <SocialContact></SocialContact>
                        </div>
                    </div>
                    
                    <div className='w-[100%] mt-10 flex gap-3 justify-end px-3'>
                        <div className='hidden shadow-lg shadow-[#B8FDE6] flex items-center px-5 bg-transparent border border-[#B8FDE6]'>
                            <FaDownload />
                            <button className='  uppercase text-sm font-extrabold rounded-ull py-1 ml-3 text-white whitespace-nowrap'><Link>Download Resume</Link></button>
                        </div>

                        <Link to='About' smooth={true} offset={0} duration={500} delay={500} className='w-fit hover:cursor-pointer hover:bg-transparent hover:text-[#B8FDE6] transition-all duration-200 shadow-md shadow-[#B8FDE6] mr-[182px] ml-3 border p-4  rounded-full'>
                            <FaChevronDown className='text-xl animate-bounce ' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='md:block hidden'>
                <SocialContact></SocialContact>
            </div>

            <FollowMe></FollowMe>
        </div>
    );
};

export default Home;

// [#191921]