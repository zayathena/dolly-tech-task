"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

export default function Navigation() {
  const pathname = usePathname();

  // TODO: Candidates should implement this component
  // This is just a basic structure to get started
  return (
    <nav className="bg-white shadow dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Note App
            </Link>
          </div>

          <div className="space-x-4 dark:text-white">
            <Link
              href="/notes"
              className={`${
                pathname === "/notes" ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-500 dark:text-white`}
            >
              All Notes
            </Link>
            <Link
              href="/notes/new"
              className={`${
                pathname === "/notes/new" ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-500 dark:text-white`}
            >
              New Note
            </Link>
            <ThemeSwitch/>
          </div>
        </div>
      </div>
    </nav>
  );
}
