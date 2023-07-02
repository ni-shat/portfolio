import React from 'react';
import me1 from '../../assets/me1.jpg';
import me from '../../assets/me.png';
import logo from '../../assets/logo.png';

import { useCallback } from "react";
import Particles from "react-particles";
import SocialContact from '../social-contact/SocialContact';
import { FaChevronDown, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {

    // const particlesInit = useCallback(async engine => {
    //     console.log(engine);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(engine);
    // }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div data-scroll id='Home' className='relative '>
            <div className='w-full flex h-screen'>
                <div className='w-1/3 bg-[#a8a9ab]'>

                </div>
                <div className='bg-[#121212] w-3/4'>

                </div>
            </div>
            <div className='py-0'>
                <div className=' '>
                    <img className='w-[440px] h-[500px] object-cover absolute top-[50.38%] left-1/3 transform -translate-x-1/2 -translate-y-1/2' src={me1} alt="" />
                </div>
                <div className='absolute top-[20%] left-1/2 text-white'>
                    {/* <p className='leading-10 text-3xl font-medium'>Hello, I'm</p> */}
                    <div className='bg-[#121212] relative -left-24 py-14 px-12 rounded-full'>
                        <h3 className='text-4xl   font-extrabold space-y-'><p>Nishat</p><p>Tabassum</p></h3>
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-emerald-500 font-bold text-3xl mt-3'><span className='text-white'>I'm a</span> Mern Stack Developer</h2>
                        <p className='mt-6 mr-40'>Hello!
                            I am a full stack developer from Bangladesh specializing in the MERN stack. I provide clean code and have rich experience in building dynamic and responsive web applications.</p>
                    </div>
                    <div className='w-[100%] mt-10 flex gap-3 justify-start px-3'>
                        <div className='hidden shadow-lg shadow-[#B8FDE6] flex items-center px-5 bg-transparent border border-[#B8FDE6]'>
                            <FaDownload />
                            <button className='  uppercase text-sm font-extrabold rounded-ull py-1 ml-3 text-white whitespace-nowrap'><Link>Download Resume</Link></button>
                        </div>

                        <div className='w-fit  mr-[182px] ml-3 border p-4  rounded-full'>
                            <FaChevronDown className='text-xl animate-bounce ' />
                        </div>
                    </div>
                </div>
            </div>
            <SocialContact></SocialContact>
        </div>
    );
};

export default Home;

// [#191921]