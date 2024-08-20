import React from 'react';
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import products from '@/constants/products.json';
import Link from 'next/link';

const ProductList = () => {
    // Desestructuro los productos y las marcas del JSON
    const { "SME NETWORK": smeNetwork, "Data Storage": dataStorage, "IdeaHub": ideaHub } = products;

    const renderProductsPorMarca = (brandName, productList) => (
        <div className="my-8 container">
            <div className="flex items-start mb-4">
                <h1 className="text-2xl font-bold text-left flex-1">{brandName}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {productList.slice(0, 5).map((product) => (
                    <ProductCard
                        key={product.alias}
                        src={product.src}
                        title={product.title}
                        description={product.description}
                        alias={product.alias}
                    />
                ))}

                <div className="flex items-center justify-center">
                    <Link href="/globalstore">
                        <button
                            className="mt-2 px-4 py-2 text-red-600 border border-red-600 bg-transparent rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors"
                        >
                            See All
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className="mx-auto p-6">
            {renderProductsPorMarca("SME NETWORK", smeNetwork)}
            {renderProductsPorMarca("Data Storage", dataStorage)}
            {renderProductsPorMarca("IdeaHub", ideaHub)}
        </div>
    );
};

export default ProductList;
