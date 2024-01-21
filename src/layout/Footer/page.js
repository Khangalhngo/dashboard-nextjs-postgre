import React from 'react';

const Page = () => {
  return (
    <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
      <ul className="flex items-center flex-wrap mb-6 md:mb-0">
        <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li>
        <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
        <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a></li>
        <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie Policy</a></li>
        <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
      </ul>
      <div className="flex sm:justify-center space-x-6">
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>

      </div>
      <div>
        <p className="text-center text-sm text-gray-500 my-10">
          &copy; 2019-2021{" "}
          <a href="#" className="hover:underline" target="_blank">
            Themesberg
          </a>
          . All rights reserved.
        </p>
      </div>

    </footer>

  );
}

export default Page;