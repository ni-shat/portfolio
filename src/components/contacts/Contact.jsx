import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import icon from '../../assets/icon2.png';
import Swal from 'sweetalert2';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8jc0m47', 'template_55juox9', form.current, 'SmZriU9JvFFRGcplG')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your message is sent!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div data-scroll id='Contact' className='md:h-auto h-auto w-full md:px-0 px-3.5 relative bg-[#121212] z-0 text-white text-start md:pt-20 pt-10 pb-12 md:pb-[75px] md:border border-b '>
             <div className='bg-[#121212] relative pb-7 pt-5 px-12 justify-center gap-9 flex items-center '>
                <h3 className='md:text-5xl text-2xl font-extrabold pop text-white uppercase'>Contact Me</h3>
                <img className=' block border-t-0 border-zinc-400  -rotate-90 md:w-auto w-[7%]' src={icon} alt="" />
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col md:w-fit mx-auto'>
                    <label>Name</label>
                    <input className='border border-[#B8FDE6] px-4 py-[7px] text-black mb-3.5 md:mb-6 w-full md:w-[500px] mt-1' type="text" name="user_name" />
                    <label>Email</label>
                    <input className='border border-[#B8FDE6] px-4 py-[7px] text-black mb-3.5 md:mb-6 w-full md:w-[500px] mt-1' type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className='border border-[#B8FDE6] px-4 py-[7px] text-black mb-3.5 md:mb-6 w-full md:w-[500px] mt-1' name="message" />
                    <input className='border border-[#B8FDE6] px-4 py-[7px] hover:bg-opacity-5 transition-all duration-300 hover:border-gray-300  hover:text-white mb-3.5 md:mb-6 hover:cursor-pointer w-full md:w-[500px] md:mt-1 mt-2 bg-[#B8FDE6] font-extrabold text-black uppercase' type="submit" value="Send" />
                </form>
            </div>
            <div className='absolute bg-gradient-to-r from-purple-500 to-transparent top-0 h-screen z-10'>

            </div>
        </div>
    );
};

export default Contact;