import React from "react";
import { SUB_HEADING } from "../../utils/font";
import { GLOBAL_COLOR } from "@/constants/colors";

const FooterComponent = () => {
  return (
    <footer className={`bg-[${GLOBAL_COLOR.primary}] text-white shadow`}>
      <div className="w-full max-w-screen-xl max-lg:px-8 max-md:px-4 lg:mx-auto py-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Jules
            </span>
          </a>
          <ul className={`${SUB_HEADING.className} flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 `}>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-7" />
        <span className="block text-sm sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="text-[] hover:underline">
            Jules™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
