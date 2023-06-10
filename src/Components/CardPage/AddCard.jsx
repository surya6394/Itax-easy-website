import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
// import {useHistory} from "react-router-dom"
export default function AddCard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage token
    localStorage.removeItem('token');
    // localStorage.setItem("isAuthenticated",false)
    // Redirect to login page
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="-bg--clr-accent-400">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-white font-semibold text-lg">
                  Logo
                </Link>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white font-semibold rounded-lg bg-red-500 hover:bg-red-600 mt-4 md:mt-0"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">GST Registration</h2>
              <a href="#" className="flex w-full justify-center rounded-md -bg--clr-accent-400 px-3 py-1.5 text-sm font-semibold leading-6 -text--clr-neutral-100 shadow-sm hover:-bg--clr-accent-350 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download PDF</a>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">GST Registration</h2>
              <a href="#" className="flex w-full justify-center rounded-md -bg--clr-accent-400 px-3 py-1.5 text-sm font-semibold leading-6 -text--clr-neutral-100 shadow-sm hover:-bg--clr-accent-350 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download PDF</a>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">GST Registration</h2>
              <a href="#" className="flex w-full justify-center rounded-md -bg--clr-accent-400 px-3 py-1.5 text-sm font-semibold leading-6 -text--clr-neutral-100 shadow-sm hover:-bg--clr-accent-350 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download PDF</a>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">GST Registration</h2>
              <a href="#" className="flex w-full justify-center rounded-md -bg--clr-accent-400 px-3 py-1.5 text-sm font-semibold leading-6 -text--clr-neutral-100 shadow-sm hover:-bg--clr-accent-350 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download PDF</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
