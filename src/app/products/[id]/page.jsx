"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import products from '@/constants/products.json';

const ProductDetail = ({ params }) => {
    const { id } = params;
    const product = findProductById(id);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedSection, setSelectedSection] = useState('Specifications');

    useEffect(() => {
        if (product && product.models && product.models.length > 0) {
            setSelectedModel(product.models[0]); // Selecciona el primer modelo por defecto (json)
        }
    }, [product]);

    if (!product) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div className="text-center">
                    <Image
                        src="/brand/logo-huawei.png"
                        alt="Product not found"
                        width={500}
                        height={300}
                        className="object-contain" // Cambio la imagen a contenida en lugar de cover
                    />
                    <br />
                    <h1 className="text-3xl font-bold">Product not found</h1>
                    <br />
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 container mx-auto">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="relative w-full h-96 max-w-xl mx-auto">
                        <Image
                            src={product.src}
                            alt={product.title}
                            layout="fill" 
                            objectFit="contain"
                            className="p-4"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-4">
                        {selectedModel ? selectedModel.name : product.title}
                    </h1>
                    <p className="text-lg mb-4 text-gray-500 font-bold">{product.description}</p>

                    <div className="my-6 flex justify-center">
                        <hr className="w-9/12 border-t-2 border-gray-300" />
                    </div>

                    <div className="flex flex-col items-center lg:items-start space-y-4">
                        <h1 className="text-xl font-bold text-gray-800">Select model</h1>
                        {product.models && product.models.map((model, index) => (
                            <button
                                key={index}
                                className={`py-6 px-4 border border-gray-500 rounded-xl w-full transition-colors duration-300 ${selectedModel === model ? 'border-slate-900 border-2' : 'bg-transparent text-black'}`}
                                onClick={() => setSelectedModel(model)}
                            >
                                {model.name}
                            </button>
                        ))}

                        <button
                            className="bg-red-600 text-xl w-full border border-white text-white px-8 py-4 rounded-full mt-2 mb-2 transition duration-300 ease-in-out hover:bg-rose-600"
                        >
                            Consult a Nearby Distribution Partner
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <hr className="w-full border-t-2 border-gray-300 mb-4" />

                <div className="flex justify-around text-center">
                    {['Specifications'].map(section => (
                        <div
                            key={section}
                            className={`cursor-pointer text-lg font-bold transition-all duration-300 ${selectedSection === section ? 'text-red-600 underline decoration-red-600' : 'text-gray-600'}`}
                            onClick={() => setSelectedSection(section)}
                        >
                            {section}
                        </div>
                    ))}
                </div>

                <hr className="w-full border-t-2 border-gray-300 mt-4" />

                <div className="mt-6">
                    {selectedSection === 'Specifications' && (
                        <div className="bg-gray-100 p-6">
                            <h2 className="text-2xl font-bold">Product Specifications</h2>
                            <div className="p-4">
                                {product.specifications ? (
                                    <embed
                                        src={product.specifications}
                                        type="application/pdf"
                                        width="100%"
                                        height="600px"
                                        className="border-2 border-gray-300"
                                        title="Product Specifications"
                                    />
                                ) : (
                                    <h1 className="text-lg text-gray-500 font-bold">No specifications for this product are available at the moment.</h1>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const findProductById = (id) => {
    for (const [brand, productList] of Object.entries(products)) {
        const product = productList.find(p => p.alias === id);
        if (product) return product;
    }
    return null;
};

export default ProductDetail;
