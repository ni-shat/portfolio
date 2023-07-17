import { Events, Link, scrollSpy } from 'react-scroll';
import logo from '../../assets/logo.png';
import ham from '../../assets/hamm.png';
import { FaBars, FaHome, FaMailBulk, FaRegFileCode, FaRegListAlt, FaRegUser } from 'react-icons/fa';
import './Navbar.css';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

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

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                scrollSpy.update();
            }, 500); // Adjust the delay as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(scrollTimeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };



    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);



    return (
        <>
            {/* hi */}
            <div className="lg:hidden">

                <ul tabIndex={0} className={`  fixed top-[65px] left-0 right-0  flex-row transition-all duration-500 w-[97%] mx-auto flex justify-around z-[1]  py-3 bg-[#121212]  border-[0.5px]  text-black rounded-box   
`}>
                    {
                        navItems.map(item => <li key={item.id} className='nav_item'>
                            <Link
                                activeClass="active"
                                className={`nav_link  hover:cursor-pointer `}
                                to={item.title}
                                smooth={true}
                                offset={0}
                                duration={500}
                                delay={500}>
                                <span className='text-white text-xl'>{item.icon}</span>

                            </Link>
                        </li>)
                    }
                </ul>
            </div>
            {/* hi */}
            <div className='absolute h-fit top-0  '>
                <div className='md:fixed relative flex justify-around w-full top-0 left-0 z-10 md:px-1.5 pr-1 pl-0.5 py-1.5'>
                    <div className='flex-grow'>
                        <img className='md:w-[20%] w-[40%]' src={logo} alt="" />
                    </div>
                    <div

                        className={`hidden lg:flex lg:flex-row text-xs uppercase  mr-10 font-extrabold`}>

                        {/* large device */}
                        <ul className={` bg-[#121212] bg-opacity-0  border-emerald-300 px-5 py-7 text-white flex flex-row gap-10  nav_list`}>
                            {
                                navItems.map(item =>
                                    <li key={item.id} className='nav-item'>
                                        <Link
                                            className={`nav_link flex items-center gap-1.5 hover:cursor-pointer`}
                                            activeClass="active"
                                            to={item.title}
                                            smooth={true} spy={true}
                                            // {item.title === 'Projects' ? offset={0} : offset={0}}
                                            offset={0}
                                            duration={500}
                                            delay={500}
                                        // onClick={() => handleItemClick(item.title)}
                                        >
                                            <p>{item.icon}</p>
                                            <p>{item.title}</p>
                                            {/* {item.title === activeItem && <span className="dot">h</span>} */}
                                        </Link>
                                    </li>)
                            }
                        </ul>
                    </div>

                    <div className="navbar w-fit  bg-transparent text-black font-bold ">

                        <div className="navbar-start">
                            
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






                        <div className="navbar-end text-black relative -top-3 -right-1.5 md:right-0 md:top-0">
                            <Link
                                className='md:border-2 bg-[#B8FDE6] uppercase font-bold text-xs md:font-extrabold rounded-ull border-[0.5px] border-emerald-500 md:px-7
                            px-3 md:py-2.5 py-0.5 whitespace-nowrap hover:cursor-pointer hover:bg-[#a8a9ab] transition-all duration-200'

                                activeClass="active" to='Contact' smooth={true} offset={0} duration={500} delay={500}>
                                Hire me
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;