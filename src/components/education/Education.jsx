import React from 'react';

const Education = () => {
    return (
        <div className='py-10 px-20'>
            <div className='bg-[#121212] relative space-y-2'>
                <h3 className='text-4xl font-extrabold pop text-white uppercase'>Education</h3>
                <p className='text-emerald-400'>Studied at</p>
            </div>
            <div className='flex mt-5 pt-10 relative '>
                <p className='text-emerald-400 -rotate-90 relative -top-4 -left-2.5'>2019-present</p>
                <div className='text-2xl relative -left-14 -top-4  text-white '>
                    <p className='flex flex-col'>
                        <p>BSc in CSE</p>
                        <p>Leading university, Sylhet, Bangladesh</p>
                        <p className='text-xs text-[#9ea2a3] mt-2'>I'm currently studying at CSE department in Leading University located in Sylhet, Bangladesh</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;