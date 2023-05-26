"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUB_HEADING } from "../../utils/font";
import { GLOBAL_COLOR } from "../../constants/colors";
import Image from "next/image";

const NavbarComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className={`bg-[#3D2698] text-white fixed w-full z-20 top-0 left-0`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between max-lg:py-3 max-lg:px-4 xl:mx-auto lg:px-7 lg:py-[1.3rem]">
          <a href="#" className="flex items-center">
            <span className="tracking-wider hover:text-[#E73B7B] self-center text-2xl font-semibold whitespace-nowrap">
              Jules
            </span>
          </a>
          <div className="flex md:order-2">
            <ul
              className={`flex ${
                SUB_HEADING.className
              } max-lg:hidden lg:flex font-light text-white  flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row md:space-x-8 lg:mt-0 lg:border-0 ${
                isMobileMenuOpen ? "flex" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/"
                  className={`block py-2 hover:text-[#E73B7B] pr-10 rounded  `}
                  aria-current="page"
                >
                  Help
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className={`${SUB_HEADING.className} max-lg:hidden lg:flex bg-[#E73B7B] hover:bg-[#BC2D62] focus:ring-4 focus:outline-none font-light md:rounded-3xl md:px-5 md:py-2 py-1 px-4 text-center `}
            >
              Sign in
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden focus:outline-none "
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul
              className={`flex ${SUB_HEADING.className} font-light text-white flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0`}
            >
              <li>
                <Link
                  href="/"
                  className={`block hover:text-[#E73B7B] py-2 pl-3 pr-4 rounded `}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/about"
                  className="block hover:text-[#E73B7B] py-2 pl-3 pr-4 rounded  md:hover:bg-transparent "
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="block hover:text-[#E73B7B] py-2 pl-3 pr-4 md:hover:bg-transparent"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/add-product"
                  className="block hover:text-[#E73B7B] py-2 pl-3 pr-4 rounded md:hover:bg-transparent"
                >
                  Add product
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="lg:hidden hover:text-[#E73B7B] block py-2 pl-3 pr-4 rounded md:hover:bg-transparent"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-in"
                  className={` lg:hidden hover:text-[#E73B7B] block py-2 pl-3 pr-4 rounded md:hover:bg-transparent`}
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;
