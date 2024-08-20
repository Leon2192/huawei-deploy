import React from 'react';
import Image from 'next/image';

const BannerStore = ({
    imageUrl,
    leftTitle,
    leftSubtitle,
    leftButtonText,
    rightTitle,
    rightSubtitle,
}) => {
    return (
        <div className="relative w-full h-96 md:h-96 lg:h-[600px] overflow-hidden shadow-xl">
            <Image
                src={imageUrl}
                alt="Banner Partners"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
            />
            <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-between p-6 md:p-8 bg-black bg-opacity-40">
                <div className="flex flex-col items-start text-left w-full md:w-1/2 mb-6 md:mb-0">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">{leftTitle}</h1>
                    <h3 className="text-white text-md md:text-lg lg:text-xl mt-2 font-semibold">{leftSubtitle}</h3>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-6 md:mt-8">
                        {leftButtonText && (
                            <button
                                className="text-md md:text-lg px-6 md:px-8 py-3 rounded-full transition duration-300 ease-in-out bg-transparent border b-2 text-white cursor-pointer"
                            >
                                {leftButtonText}
                            </button>
                        )}
                    </div>
                </div>
                <div className="flex flex-col items-start text-left w-full md:w-1/2">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">{rightTitle}</h1>
                    <h3 className="text-white text-md md:text-lg lg:text-xl mt-2 font-semibold">{rightSubtitle}</h3>
                </div>
            </div>
        </div>
    );
};

export default BannerStore;
