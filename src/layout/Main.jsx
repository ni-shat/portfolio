import { Outlet } from "react-router-dom";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contacts/Contact";
import '../index.css';
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";


const Main = () => {
    return (
        <div className="pop bg-[#121212] ">
            <Navbar></Navbar>
            <Home></Home>
            {/* <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer> */}
        </div>
    );
};

export default Main;