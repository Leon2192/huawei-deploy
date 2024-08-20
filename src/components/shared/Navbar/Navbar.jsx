"use client";
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import branches from '@/constants/sucursales.json'; 
import navLinks from '@/constants/navlinks.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowDownIcon, Bars3Icon, XMarkIcon } from "@/utilities/icons/heroIcons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const pathname = usePathname();

    const isHome = pathname === '/';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
        }
    };

    const toggleDropdown = () => {
        if (!isOpen) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    const renderBranches = (group) => {
        return Object.entries(group).map(([letter, countries]) => (
            <div key={letter} className="p-4 min-w-[150px]">
                <h2 className="text-lg text-red-500 font-bold">{letter}</h2>
                <div className="flex justify-center my-4">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <ul>
                    {countries.map((country, index) => (
                        <li key={index} className="hover:text-red-500 cursor-pointer">
                            <a
                                href={country.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                {country.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <nav
                className={`container fixed top-0 left-0 right-0 px-4 py-5 z-50 transition-all mb-2 duration-300 ${isHome ? 'bg-transparent' : 'bg-white'} ${isHome ? 'absolute' : 'relative'}`}
                style={{ height: '60px' }}
            >
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/brand/logo-solution.png"
                            alt="Logo"
                            width={150}
                            height={(150 / 348) * 102}
                            className="object-contain"
                        />
                    </Link>
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            <div key={link.path} className="relative inline-block">
                                <Link
                                    href={link.path}
                                    className={`text-lg ${pathname === link.path ? 'text-red-500' : 'text-gray-800'}`}
                                >
                                    {link.name}
                                </Link>
                                {pathname === link.path && (
                                    <div className="absolute bottom-0 left-0 w-full border-b-2 border-red-500"></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative" ref={dropdownRef}>
                            <button aria-label="Toggle Dropdown" className="text-lg flex items-center" onClick={toggleDropdown}>
                                Global <ArrowDownIcon />
                            </button>
                            {isDropdownOpen && (
                                <div className={`absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-4 z-50 ${isOpen ? 'w-screen' : 'md:w-[600px]'} md:flex md:flex-wrap md:gap-4`}>
                                    {renderBranches(branches)}
                                </div>
                            )}
                        </div>
                        <button
                            aria-label="Toggle Menu"
                            className="md:hidden flex items-center justify-center"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-gray-100 text-gray-800 absolute top-16 right-0 left-0 p-4 z-40 rounded-xl shadow-lg">
                    {navLinks.map((link) => (
                        <div key={link.path} className="py-2">
                            <Link href={link.path} className="block text-lg" onClick={toggleMenu}>
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
