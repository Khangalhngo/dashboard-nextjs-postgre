"use client"
import React, { useState } from "react";
import { UilSetting, UilSignOutAlt, UilUser } from '@iconscout/react-unicons';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtonGroup = () => {
    setIsOpen(!isOpen);
  };

  const buttonsConfig = [
    {
      icon: <UilSignOutAlt />, // Replace with actual icon component
      onClick: () => console.log("Icon1 clicked"),
    },
    {
      icon: <UilUser />, // Replace with actual icon component
      onClick: () => console.log("Icon2 clicked"),
    },
    // Add more buttons as needed
  ];

  return (
    <div className="fixed bottom-10 right-8">
      <div className="group">
        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center transition-opacity duration-300 ease-in-out">
          {buttonsConfig.map((button, index) => (
            <button
              key={index}
              className="mb-2 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-500 focus:outline-none"
              title={button.tooltip}
              onClick={button.onClick}
            >
              {button.icon}
            </button>
          ))}
        </div>
        <button
          className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-500 focus:outline-none transition duration-300 ease-in-out"
        >
          <UilSetting />
        </button>
      </div>
    </div>
  );
};

export default Page;
