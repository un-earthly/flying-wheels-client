import React from 'react';

interface SkeletonProps {
    width: string;
    height: string;
    styles?: boolean;
}

const Loading: React.FC<SkeletonProps> = ({ width, height, styles }) => {
    return (
        <div
            className={`bg-green-200 duration-150 animate-pulse ${styles}`}
            style={{ width, height }}
        ></div>
    );
};

export default Loading;
