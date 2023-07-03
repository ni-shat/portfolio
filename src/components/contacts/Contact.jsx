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
        <div data-scroll id='Contact' className='h-screen w-full relative bg-[#121212] z-0 text-white text-start pt-20'>
             <div className='bg-[#121212] relative py-10 px-12 justify-center gap-4 flex'>
                <h3 className='text-5xl font-extrabold pop text-white uppercase'>Contact Me</h3>
                <img className='mt-1 border-t-0 border-zinc-400 relative -top-4 left-4 -rotate-90' src={icon} alt="" />
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col w-fit mx-auto'>
                    <label>Name</label>
                    <input className='border border-[#B8FDE6] -md px-4 py-[7px] text-black  mb-6 w-[500px] mt-1' type="text" name="user_name" />
                    <label>Email</label>
                    <input className='border border-[#B8FDE6] -md px-4 py-[7px] text-black  mb-6 w-[500px] mt-1' type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className='border border-[#B8FDE6] -md px-4 py-[7px] text-black  mb-6 w-[500px] mt-1' name="message" />
                    <input className='border border-[#B8FDE6] -md px-4 py-[7px] hover:bg-opacity-5 transition-all duration-300 border hover:border-gray-300 border-[#B8FDE6] hover:text-white  mb-6 hover:cursor-pointer w-[500px] mt-1 bg-[#B8FDE6] font-extrabold text-black uppercase' type="submit" value="Send" />
                </form>
            </div>
            <div className='absolute bg-gradient-to-r from-purple-500 to-transparent top-0 h-screen z-10'>

            </div>
        </div>
    );
};

export default Contact;