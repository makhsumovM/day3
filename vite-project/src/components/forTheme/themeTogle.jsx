import React from 'react';
import useTheme from '../../hooks/useTheme';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeTogle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <button
                onClick={toggleTheme}
                className="py-2 px-4 rounded  text-white flex items-center justify-center"
            >
                {theme === 'light' ? (
                    <MoonIcon className={`h-[40px] w-[40px] ${theme === 'light' ? 'fade-in rotate-in' : 'fade-out rotate-out'} text-gray-500`} />
                ) : (
                    <SunIcon className={`h-[40px] w-[40px] ${theme === 'light' ? 'fade-out rotate-out' : 'fade-in rotate-in'} text-yellow-500` } />
                )}
            </button>
        </>
    );
}

export default ThemeTogle;
