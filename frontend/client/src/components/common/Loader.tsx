import React from 'react';

export function Loader() {
    return (
        <>
            <div className="flex items-center justify-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
                <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
                <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
            </div>
        </>
    );
}
