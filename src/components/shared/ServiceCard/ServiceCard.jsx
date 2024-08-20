import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ icon: IconComponent, title, subtitle, layout, imageUrl, imageAlt }) => {
    return (
        <div className={`bg-white shadow-lg rounded-xl p-6 ${layout === 'horizontal' ? 'flex flex-row justify-between items-center h-64 text-left' : 'flex flex-col justify-between h-64 text-center'}`}>
            {imageUrl ? (
                <div className="relative h-48 w-full">
                    <Image src={imageUrl} alt={imageAlt} layout="fill" objectFit="cover" />
                </div>
            ) : (
                <div className="mb-4 flex justify-center">
                    <IconComponent className="w-12 h-12 text-gray-700" />
                </div>
            )}
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <h4 className="text-lg text-gray-500">{subtitle}</h4>
            </div>
        </div>
    );
};

export default ServiceCard;
