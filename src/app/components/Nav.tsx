"use client";
import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { header } from "../constansts/Header";
import Link from "next/link";
function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 gap-16 my-12">
            {/* Primary menu and logo */}
            {/* logo */}
            <div>
              <a
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>Paper.io</span>
              </a>
            </div>
            {/* primary */}

            <div className="hidden lg:flex gap-8 ">
              {header.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="hover:text-secondary"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex gap-6">
              <div className="xs:flex items-center gap-10">
                <button className="hidden lg:flex rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-secondary hover:text-gray-100">
                  Free Trial
                </button>
              </div>

              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider text-center">
                {header.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="hover:text-secondary"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
