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
import SocialMobie from '../socialMobile/SocialMobie';


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
        <div data-scroll id='Home' className='relative -mt-28 md:-mt-0 '>
            <div className='w-full h-auto'>
                <div data-aos="fade-right" className='w-[30.8%] bg-[#a8a9ab] border-0 md:block md:h-screen h-60 '>
            
                </div>
                {/* <div className='bg-[#121212] w-3/4'>

                </div> */}
            </div>
            <div className='py-0 w-full mx-auto'>
            
                {/* image  */}
                <div className='absolute md:w-[75%] 
                    md:top-[50.8%] md:left-[55.1%]
                    
                    min-[320px]:top-[50%] min-[320px]:left-0 min-[320px]:w-full 

                   transform md:-translate-x-1/2 md:-translate-y-1/2'>

                    {/* container div */}
                    <div className='flex w-full md:flex-row flex-col bg-[#121212] justify-between md:gap-5 gap-5'>

                        <img className='object-cover 
                                        md:w-[440px] md:h-[505px] 
                                        min-[320px]:w-[250px] min-[320px]:h-[280px]
                        '
                            src={me1} alt="" />
                        {/* 1st part done */}
                        <SocialMobie></SocialMobie>

                        {/* 2nd part */}
                        {/* NEW start side text section */}
                        <div className='w-full flex items-end'>
                            {/* OLD started OF MERN PARA SECTION     OLD: min-[400px]:w-[350px]*/}
                            <div>
                                <div className='md:ml-0 md:pl-[5px] min-[320px]:px-2.5 md:mt-0 mt-0 relative 
                                    
                                    md:left-0 md:w-full
                                    w-[100%] 
                                    '>
                                        
                                    <h2 className='text-emerald-500 font-bold text-xl uppercase  pop whitespace-nowrap'>
                                        {/* Mern Stack Developer */}
                                        {text}
                                        <Cursor />
                                    </h2>

                                    <p className='mt-3.5 md:mr-12  pop md:text-sm text-base md:leading-6 text-white'>Hello!
                                        I am a full stack developer from Bangladesh specializing in the MERN stack. I provide clean code and have rich experience in building dynamic and responsive web applications.</p>
                                    <div className='md:hidden block'>
                                        <SocialContact></SocialContact>
                                    </div>
                                </div>

                                {/* down arrow */}
                                <div className='md:w-[100%] w-fit md:relative absolute top-44 left-64 md:top-0 md:left-0 md:mt-12 min-[320px]:mt-0 md:pb-4 flex md:justify-end min-[320px]:justify-start px-0'>
                                    <Link to='About' smooth={true} offset={0} duration={500} delay={500} className='w-fit hover:cursor-pointer hover:bg-transparent hover:text-[#B8FDE6] transition-all duration-200 shadow-md shadow-[#B8FDE6] md:mr-[70px] ml-3 border p-4  rounded-full'>
                                        <FaChevronDown className='text-xl animate-bounce text-white' />
                                    </Link>
                                </div>
                            </div>

                            {/* completed the side texts section */}
                        </div>
                        {/* NEW SIDE TEXT SECTION COMPLETED */}

                    </div>

                </div>


                {/* OLD NISHAT TABASSUM part */}
                <div className='absolute md:top-[20%] left-1/2 min-[320px]:top-[53%] text-white'>
                    <div className='bg-[#121212] relative md:-left-24 left-3 md:top-0 top-5 md:py-14 py-5 md:px-12 pl-6 w-fit rounded-full'>
                        <h3 data-aos="fade-up" className='md:text-5xl text-2xl font-extrabold pop '><p>Nishat</p><p>Tabassum</p></h3>
                    </div>
                    
                </div>
                {/* TODO END OF ABSOLUTE AND OLDER DOWBN ARROW SIDE TEXTS END */}


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