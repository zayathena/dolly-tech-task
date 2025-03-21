"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // TODO: Candidates should implement this component
  // This is just a basic structure to get started
  return (
    <nav className="bg-white shadow dark:bg-gray-800 dark:text-white">
      <div className="container px-6 py-1">
        <div className="flex justify-between items-center w-full">
          <div>
            <Link href="/">
            <img src="/logo.lm.png" alt="logo light mode" className="w-45 h-45 dark:hidden"/>
            <img src="/logo.dm.png"alt="logo dark mode" className="w-45 h-45 hidden dark:block"/>
            </Link>
          </div>

          <div className="hidden lg:flex space-x-10 items-center justify-end fixed top-0 left-0 w-full z-50 dark:text-white">
            <Link href="/" className="hover:text-blue-500 border-2 rounded-md px-3 py-2 dark:text-white dark:hover:text-gray-500">
            Home
            </Link>
            <Link
              href="/notes"
              className={`${
                pathname === "/notes" ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-500 border-2 rounded-md px-3 py-2 dark:text-white dark:hover:text-gray-500`}
            >
              All Notes
            </Link>
            <Link
              href="/notes/new"
              className={`${
                pathname === "/notes/new" ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-500 border-2 rounded-md px-3 py-2 dark:text-white dark:hover:text-gray-500`}
            >
              New Note
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-500 border-2 rounded-md px-3 py-2 dark:text-white dark:hover:text-gray-500`}
            >
              About
            </Link>
            <Link
              href="/login"
              className={`${
                pathname === "/login" ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-500 border-2 rounded-md px-3 py-2 dark:text-white dark:hover:text-gray-500`}
            >
              Login
            </Link>
            <ThemeSwitch/>
          </div>
          
          <div className="lg:hidden mt-4">
            <button onClick={toggleMenu} className="text-gray-800 dark:text-white dark:hover:text-gray-500">
              ☰
            </button>
          </div>
          </div>
          {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/notes"
                className={`${
                  pathname === "/notes" ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-500 dark:text-white dark:hover:text-gray-500`}
              >
                All Notes
              </Link>
              <Link
                href="/notes/new"
                className={`${
                  pathname === "/notes/new" ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-500 dark:text-white dark:hover:text-gray-500`}
              >
                New Note
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-500 dark:text-white dark:hover:text-gray-500`}
              >
                About
              </Link>
              <Link
                href="/login"
                className={`${
                  pathname === "/login" ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-500 dark:text-white dark:hover:text-gray-500`}
              >
                Login
              </Link>
              <ThemeSwitch />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

