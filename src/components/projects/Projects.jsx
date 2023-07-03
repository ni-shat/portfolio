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
        <div data-scroll id='Projects' className='h-auto text-white w-full bg-[#121212] text-center pt-20 pb-20 border'>
            <div className=' relative py-10 px-12 justify-center gap-4 flex'>
                <h3 className='text-5xl font-extrabold pop text-white uppercase'>Projects</h3>
                <img className='mt-1 border-t-0 border-zinc-400' src={icon} alt="" />
            </div>
            <div className='grid grid-cols-3 w-fit gap-6 mb-6 mx-auto justify-center py-3 '>

                {
                    projects?.map(p => <Card key={p.id} project={p}></Card>)
                }
            </div>
        </div>
    );
};

export default Projects;