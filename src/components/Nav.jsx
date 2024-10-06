// src/components/Nav.jsx

// import React from 'react';
import Button from '../components/common/Button';
import NavLogo from "./common/svg/NavLogo";

const NavItems = [
    {
        title: 'Home',
        toLinked: '#home',
    },
    {
        title: 'Pricing',
        toLinked: '#contact',
    },
    {
        title: 'About',
        toLinked: '#about',
    },
    {
        title: 'Blog',
        toLinked: '#blog',
    }
];

export default function Nav() {
    return (
        <div className="ud-header  absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="flex w-full items-center justify-between px-4 py-3">
                        <div className="navbar-logo block w-60 max-w-full px-4">
                            <NavLogo />
                        </div>
                        {/* nav links */}
                        <ul className="hidden lg:flex ">
                            {NavItems?.map((nav, index) => (
                                <li
                                    className="group relative"
                                    key={index}>
                                    <a
                                        href={nav.toLinked}
                                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                                    >
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/* nav buttons */}
                        <div className="sm:flex">
                            <Button
                                className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                                text='Sign In'
                            />
                            <Button
                                className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                text='Sign Up'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
