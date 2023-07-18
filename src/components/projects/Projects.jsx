import { useEffect, useState } from 'react';
import icon from '../../assets/icon2.png';


import Card from './Card';

const Projects = () => {

    const [projects, setprojects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setprojects(data))
    }, [])


    return (
        <div data-scroll id='Projects' className='h-fit text-white w-full bg-[#121212] text-center md:pt-20 pt-2.5 md:pb-20 pb-3 border'>
            <div className=' relative py-10 px-12 justify-center gap-4 flex'>

                <div className='flex-grow flex flex-row md:flex-row justify-center gap-7 items-center md:justify-center md:gap-3.5'>
                    <h3 className='md:text-5xl text-2xl font-extrabold pop text-white uppercase'>Projects</h3>
                    <img className='mt-1 border-t-0 border-zinc-400 md:block hidden' src={icon} alt="" />
                    <img className='mt-2  block rotate-0 w-[7%] md:hidden ' src={icon} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 w-fit gap-6 md:mb-6 mx-auto justify-center md:py-3 '>

                {
                    projects?.map(p => <Card key={p.id} project={p}></Card>)
                }
            </div>
        </div>
    );
};

export default Projects;