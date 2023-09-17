import React from 'react';

type Props = {
    imageSrc: string;
    productName: string;
    description: string;
    category: string;
    price: string;
    rating: number;
};

const ProductCard = ({
    imageSrc = '/wheel.png',
    productName = 'Default Product',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category = 'Default Category',
    price = '$0.00',
    rating = 0,
}: Partial<Props>) => {
    return (
        <div className="rounded w-full overflow-hidden shadow-md hover:border-2 hover:shadow-xl transition-shadow duration-300">
            <div className="relative group overflow-hidden">
                <img
                    className="w-full duration-300 transition-transform transform-gpu group-hover:scale-105"
                    src={imageSrc}
                    alt={productName}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{productName}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 flex items-center justify-center flex-wrap pb-2">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm m-2 font-semibold text-gray-700">
                    {category}
                </span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm m-2 font-semibold text-gray-700">
                    {price}
                </span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm m-2 font-semibold text-gray-700">
                    Rating: {rating}
                </span>
            </div>
        </div>
    );
};

export default ProductCard;
