
import React from 'react';
import Image from 'next/image';

const BannerPartners = ({
    imageUrl,
    leftTitle,
    leftSubtitle,
    leftButtonText,
    leftButtonText2,
    rightTitle,
    rightSubtitle,
}) => {
    return (
        <div className="container relative w-full h-72 md:h-72 lg:h-72 overflow-hidden rounded-xl shadow-xl mt-6 mb-6">
            <Image
                src={imageUrl}
                alt="Banner Partners"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:flex-row md:items-center md:justify-between md:text-left p-4 md:p-6 bg-black bg-opacity-40 rounded-xl">
                <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mb-4 md:mb-0">
                    <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-bold">{leftTitle}</h1>
                    <h3 className="text-white text-xs md:text-md lg:text-lg mt-2 font-semibold">{leftSubtitle}</h3>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-6">
                        <button
                            className="text-xs md:text-md px-4 md:px-6 py-2 rounded-full transition duration-300 hover:bg-gray-700 ease-in-out bg-black text-white cursor-pointer"
                        >
                            {leftButtonText}
                        </button>
                        <button
                            className="border-2 border-gray-800 text-xs md:text-md py-2 px-4 md:px-6 rounded-full transition duration-300 ease-in-out text-white cursor-pointer"
                        >
                            {leftButtonText2}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
                    <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-bold">{rightTitle}</h1>
                    <h3 className="text-white text-xs md:text-md lg:text-lg mt-2 font-semibold">{rightSubtitle}</h3>
                </div>
            </div>
        </div>
    );
};

export default BannerPartners;