import Link from 'next/link';
import React from 'react';

type ButtonProps = {
    styles?: string;
    text: string;
    onClick?: () => void;
    isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ styles, text, onClick,  isOutlined = false }) => {

    const classes = `py-1 px-12 font-semibold ${styles} rounded-tl-box duration-150 rounded-br-box hover:rounded-tl-none hover:rounded-tr-box hover:rounded-br-none`
    
    return (
        <button
            type="button"
            className={`${classes} ${isOutlined ? " border-deep-green hover:bg-deep-green hover:text-white text-black border-2" : "bg-black text-white hover:bg-deep-green"}`}
            onClick={onClick}
        >
            <div className="flex items-center justify-center">
                {text}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 ml-2 pt-1" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </div>
        </button>
    );
};

export default Button;
