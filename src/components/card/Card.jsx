import React, { useEffect } from 'react';
import c from '../../assets/card1.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const Card = () => {

    useEffect(() => {
        AOS.init();
      }, []);


    return (
        <div  className='w-full bg-gray-900 h-screen py-10 mx-auto'>
            <div data-aos="fade-down" className='w-64 mx-auto mt-20 space-y-2 bg-slate-300 bg-opacity-10 drop-shadow-2xl shadow-sm shadow-gray-300'>
                <div className="border-4 ">
                    <img className='w-full h-64 object-top object-cover hover:object-bottom transition-all duration-[2100ms] hover:cursor-ns-resize' src={c} alt="" />
                </div>
                <div>
                    <h3 className='uppercase text-2xl px-2 py-2 text-white font-bold'>Toy marketplace full stack website</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;