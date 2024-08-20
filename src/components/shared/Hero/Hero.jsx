"use client"
import React, { useEffect, useState } from 'react';
import slides from '@/constants/slider.json';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const { imageUrl } = slides[currentSlide];

    return (
        <>
            <div
                className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 h-[250px] md:h-[750px] text-white relative bg-cover bg-center"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
               
            </div>
            <div className="container mx-auto px-4 md:px-14 h-[100px] bg-white flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-lg md:text-2xl font-bold">News</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 font-bold ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                </div>

                <div className="h-12 border-l border-gray-300 mx-4"></div>

                <p className="hidden md:block text-center text-lg font-bold">
                    2024.07.27
                    Launch Reduction for Specific Amount & Procurement Consulting (New Features in July, 2024)
                </p>

                <div className="flex items-center">
                    <h1 className="text-lg md:text-2xl font-bold">More</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500 font-bold ml-2 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Hero;
