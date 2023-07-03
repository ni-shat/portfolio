import React from 'react';
import c from '../../assets/card1.png';
import arrow from '../../assets/icon-arrow.svg';
import { Link } from 'react-router-dom';

const Card = ({project}) => {

    const {project_title , description, live_site, client_site , server_site, type, image} = project;

    return (
        <div className='w-[280px]  bg-gray-500 bg-opacity-10 text-start border-0 '>
            <div className=''>
                <img className='w-full h-[260px] object-top object-cover hover:object-bottom transition-all duration-[1500ms]' src={image} alt="" />
            </div>
            <div className='pt-5 px-2 relative h-[170px] pb-14 flex flex-col'>
                <div className='mb-1'>
                    <h2>{project_title}</h2>
                </div>
                <div className='text-xs text-[#9ea2a3] flex-grow'>
                    {description}
                </div>
                <button className='absolute mt-3 left-1 bottom-2 flex items-center text-[11px] gap-3 text-emerald-400'>
                    <img className='w-8 h-8' src={arrow} alt="" />
                    <Link to={live_site} target='_blank'>Live Site</Link>
                    <Link to={client_site} target='_blank'>Github-Client</Link>
                    <Link to={server_site} target='_blank'>Github-Server</Link>
                </button>
            </div>

        </div>
    );
};

export default Card;