// components/CategoryCard.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getRandomColor = () => {
    const colors = ['bg-green-300/20', 'bg-green-400/60', 'bg-lime-500/60', 'bg-green-600/60'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};
type CategoryCardProps = {
    title: string;
    icon: string; // Icon name or URL
};
const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon }) => {
    // const colorClass = getRandomColor();

    return (
        <Link href={`catergory/${title.split(" ").join("_").toLowerCase()}`}>
            <div className={`flex-col shadow-md px-10 py-6 flex items-center justify-center rounded-md bg-green-500/60`}>
                <div className="text-4xl mb-4">
                    <Image alt={title}  src={icon} height={100} width={100}/>
                </div>
                <h2 className="font-semibold">{title}</h2>
            </div>
        </Link>
    );
};

export default CategoryCard;