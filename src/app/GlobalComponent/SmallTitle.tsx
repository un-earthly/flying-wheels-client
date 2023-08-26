import React from 'react'

export default function SmallTitle({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full"></div>
            <p className="text-md font-bold uppercase">
                {title}
            </p>
        </div>
    )
}
