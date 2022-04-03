import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-6 py-2 bg-amber-400">
                <div className="container px-6 mx-auto flex flex-wrap items-center justify-between">
                    {/* logo and bars */}
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink to='/'>
                            <span className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 text-gray-600 "> CameraTek</span>

                        </NavLink>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    {/* logo and bars */}
                    <div className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    } id="example-navbar-danger">


                        <ul className="flex gap-4 flex-col lg:flex-row list-none lg:ml-auto">

                            <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                                <span className=" text-1xl font-bold ">Home</span>
                            </NavLink>
                            <NavLink to='/review' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                                <span className=" text-1xl font-bold ">Review</span>
                            </NavLink>
                            <NavLink to='/dashbord' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                                <span className=" text-1xl font-bold ">Dashbord</span>
                            </NavLink>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                                <span className=" text-1xl font-bold ">Blog</span>
                            </NavLink>
                            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                                <span className=" text-1xl font-bold ">About</span>
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}