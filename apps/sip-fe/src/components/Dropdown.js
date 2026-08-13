"use client";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('Oldest');
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div className="flex justify-center items-center">
                <button
                    type="button"
                    className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-xs sm:text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    {selectedOption}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute right-0 z-10 mt-2 w-28 sm:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            onClick={() => handleOptionClick('Oldest')}
                            className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                        >
                            Oldest
                        </a>
                        <a
                            href="#"
                            onClick={() => handleOptionClick('Newest')}
                            className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                        >
                            Newest
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;