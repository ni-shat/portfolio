import icon from '../../assets/icon2.png';
import html5 from '../../assets/html5.svg';
import css3 from '../../assets/css3.svg';
import react1 from '../../assets/react1.png';
import figma from '../../assets/figma.png';
import js from '../../assets/js.png';
import firebase from '../../assets/firebase.png';
import tailwind from '../../assets/tailwind.png';
import rest_api from '../../assets/rest-api.svg';
import sql from '../../assets/sql-server.svg';
import bs from '../../assets/bs.svg';
import express from '../../assets/ex.png';
import php from '../../assets/php.svg';
import mongodb from '../../assets/mongodb.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const Skills = () => {

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   }, []);

    return (
        <div data-scroll id='Skills' className='h-fit transition-all duration-1000  border pb-20 w-full bg-[#121212] text-center text-emerald-400 font-semibold pt-14'>
            <div className='bg-[#121212] relative py-10 px-12 justify-center gap-4 flex'>
                <h3 className='text-5xl font-extrabold pop text-white uppercase'>Skills</h3>
                <img className='mt-1 border-t-0 border-zinc-400' src={icon} alt="" />
                {/* <p>My Technical Skills</p> */}
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className='flex gap-16 mb-6 mx-auto justify-center py-3 '>
                <div className=''>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={html5} alt="" />
                    </div>
                    <p>HTML5</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={css3} alt="" />
                    </div>
                    <p>CSS3</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={react1} alt="" />
                    </div>
                    <p>ReactJs</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={express} alt="" />
                    </div>
                    <p>Express</p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" className='flex gap-16 mb-6 mx-auto justify-center'>
                <div>
                    <div className='border rounded-full p-2 w-[75px] mb-0.5 h-[75px]  flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={mongodb} alt="" />
                    </div>
                    <p>Mongodb</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={figma} alt="" />
                    </div>
                    <p>Figma</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={firebase} alt="" />
                    </div>
                    <p>Firebase</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={js} alt="" />
                    </div>
                    <p>JavaScript</p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className='flex gap-16 mb-6 mx-auto justify-center'>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={tailwind} alt="" />
                    </div>
                    <p>Tailwind</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={rest_api} alt="" />
                    </div>
                    <p>Rest APIs</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={sql} alt="" />
                    </div>
                    <p>SQL</p>
                </div>
                <div>
                    <div className='border rounded-full p-2  w-[75px] mb-0.5 h-[75px] flex justify-center items-center'>
                        <img className='w-14 h-14 rounded-full' src={bs} alt="" />
                    </div>
                    <p>BootStrap</p>
                </div>
            </div>


            <div data-aos="fade-left" data-aos-duration="1500" className='w-fit mx-auto'>
                <div className=' border rounded-full p-2 w-[75px] mb-0.5 h-[75px]  flex justify-center items-center'>
                    <img className='w-14 h-14 rounded-full' src={php} alt="" />
                </div>
                <p>PHP</p>
            </div>

        </div>
    );
};

export default Skills;