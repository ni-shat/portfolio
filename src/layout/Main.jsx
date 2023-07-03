import { Outlet } from "react-router-dom";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contacts/Contact";
import '../index.css';


const Main = () => {
    return (
        <div className="pop">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Main;