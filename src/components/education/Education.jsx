import React from 'react';

const Education = () => {
    return (
        <div className='md:py-10 pt-8 pb-1 md:px-20 px-3'>

            <div className='bg-[#121212] relative md:space-y-2 '>
                <h3 className='md:text-4xl text-xl font-extrabold pop text-white uppercase'>Education</h3>
                <p className='text-emerald-400 md:-mt-0 -mt-1'>Studied at</p>
            </div>

            <div className='flex mt-5 md:pt-10 pt-4 relative md:left-0  '>
                <p className='text-emerald-400 md:-rotate-90 relative -top-4 md:-left-3.5 md:text-sm text-xs md:block hidden'>2019-present</p>
                <div className='md:text-2xl text-base relative md:-left-14 -top-4  text-white '>
                    <p className='flex flex-col'>
                        <p className='flex gap-7 items-center md:-mt-4 -mt-1'>
                            <p>BSc in CSE</p>
                            <p className='text-emerald-400 text-xs  md:hidden block'>2019-present</p>
                        </p>

                        <p>Leading university, Sylhet, Bangladesh</p>
                        <p className='text-xs text-[#9ea2a3] mt-2'>I'm currently studying at CSE department in Leading University located in Sylhet, Bangladesh</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;