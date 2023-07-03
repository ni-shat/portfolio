import { Events, Link, scrollSpy } from 'react-scroll';
import logo from '../../assets/logo.png';
import { FaHome, FaMailBulk, FaRegFileCode, FaRegListAlt, FaRegUser } from 'react-icons/fa';
import './Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const navItems = [
        {
            id: 1,
            icon: <FaHome />,
            title: "Home",
        },
        {
            id: 2,
            icon: <FaRegUser />,
            title: "About",
        },
        {
            id: 3,
            icon: <FaRegFileCode />,
            title: "Skills",
        },
        {
            id: 4,
            icon: <FaRegListAlt />,
            // FaColumns
            title: "Projects",
        },
        {
            id: 5,
            icon: <FaMailBulk />,
            // icon: <AiOutlineMail />,
            title: "Contact",
        },
    ]

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('[data-scroll]');
            let currentSectionId = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.pageYOffset;

                if (
                    scrollPosition >= sectionTop - 50 &&
                    scrollPosition < sectionTop + sectionHeight - 50
                ) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            setActiveLink(currentSectionId);
        };

        Events.scrollEvent.register('scroll', handleScroll);
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('scroll');
        };
    }, []);



    return (
        <div className='absolute h-fit top-0  '>
            <div className='fixed flex justify-around w-full top-0 left-0 z-10 px-1.5 py-1.5'>
                <div className='flex-grow'>
                    <img className='w-[20%]' src={logo} alt="" />
                </div>
                <div className=" hidden lg:flex lg:flex-row text-xs uppercase  mr-10 font-extrabold">
                    <ul className=" bg-[#121212] bg-opacity-0  border-emerald-300 px-5 py-7 text-white flex flex-row gap-10  nav_list">
                        {
                            navItems.map(item => <li key={item.id} className='nav_item'>
                                <Link
                                    className={`nav_link flex items-center gap-1.5 hover:cursor-pointer`} to={item.title}
                                    smooth={true} offset={0} duration={500} delay={500}
                                >
                                    <p>{item.icon}</p>
                                    <p>{item.title}</p>
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>

                <div className="navbar w-fit  bg-transparent text-black font-bold ">

                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navItems.map(item => <li key={item.id}>
                                        <Link activeClass="active" to={item.title} smooth={true} offset={0} duration={500} delay={500}>
                                            <span>{item.icon}</span>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                        {/* <a className="btn btn-ghost normal-case text-xl">k</a> */}
                    </div>

                    {/* <div className="mt-40 hidden lg:flex lg:flex-col ">
                        <ul className=" bg-[#121212] ml- rounded-fll  border-emerald-300 px-5 py-7 text-white absolute transform  -translate-y-1/2 left-0 top-1/2  flex flex-col gap-8  nav_list">
                            {
                                navItems.map(item => <li key={item.id} className='nav_item rotate-80'>
                                    <Link
                                        className={`nav_link flex items-center gap-1.5 hover:cursor-pointer`} to={item.title}
                                        smooth={true} offset={0} duration={500} delay={500}
                                    >
                                        <p>{item.icon}</p>
                                        <p>{item.title}</p>
                                    </Link>
                                </li>)
                            }
                        </ul>
                    </div> */}






                    <div className="navbar-end text-black">
                        <Link
                            className='border-2 bg-[#B8FDE6] text- uppercase text-xs font-extrabold rounded-ull border-emerald-500 px-7 py-2.5 whitespace-nowrap hover:cursor-pointer hover:bg-[#a8a9ab] transition-all duration-200'

                            activeClass="active" to='Contact' smooth={true} offset={0} duration={500} delay={500}>
                            Hire me
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;