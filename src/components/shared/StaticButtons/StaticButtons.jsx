"use client"
import React from 'react'
import './StaticButtons.css'
import { ImBook } from "react-icons/im";
import { LuArrowUpToLine } from "react-icons/lu";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const StaticButtons = () => {

    const router = useRouter();

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Hace que el scroll sea fluido
        });
    };

    const handleQuickGuideClick = (e) => {
        e.preventDefault(); // Previene la redirección automática por el Link
        router.push('/quick-guide');
    };

    return (
        <div className="staticButtons">
            <button onClick={handleQuickGuideClick} className='headsets'>
                <ImBook size={25} className='text-gray-500' />
                <p className="text-gray-500 textButtonsStatic">Quick Guide</p>
            </button>
            <button onClick={handleScrollToTop} className='top'>
                <LuArrowUpToLine size={25} className='text-gray-500' />
                <p className="text-gray-500 textButtonsStatic">Top</p>
            </button>
        </div>
    )
}

export default StaticButtons