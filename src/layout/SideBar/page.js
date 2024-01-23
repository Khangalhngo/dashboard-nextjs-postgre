
import React from 'react';
import { UilDashboard, UilFileGraph, UilUsersAlt } from '@iconscout/react-unicons'
const SidebarLink = ({ href, icon, text, target, additionalClasses, badge }) => (
  <li>
    <a href={href} className={`text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${additionalClasses}`}>
      {icon}
      <span className="ml-3 flex-1 whitespace-nowrap">{text}</span>
      {badge && (
        <span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">{badge}</span>
      )}
    </a>
  </li>
);

const Sidebar = ({ isOpen }) => {

  return (
    <aside
      id="sidebar"
      className={`fixed z-20 h-full top-0 left-0 pt-16 flex flex-col w-64 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              {/* Sidebar links can be added here */}
              <SidebarLink href="/dashboard" icon={<UilDashboard />} text="Dashboard" />
              <SidebarLink href="/report" icon={<UilFileGraph />} text="Тайлан" badge="Pro" />
              <SidebarLink href="/users" icon={<UilUsersAlt />} text="Хэрэглэгч" />
              {/* Add more links as needed */}
            </ul>
            {/* Additional sidebar content */}
          </div>
        </div>
      </div>
    </aside>
  );
};

const Page = (props) => {
  return (
    <div>
      <Sidebar isOpen={props.isSidebarOpen} />
    </div>
  );
};

export default Page;
