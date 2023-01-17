"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

export default function Header() {
  let [menu, toggleMenu] = useState(false);
  let path = usePathname();

  return (
    <header className="bg-wallpaper py-4">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center md:hidden">
          <Link href="/" className="ml-4" onClick={() => toggleMenu(false)}>
            <Image src="/logo.svg" alt="Logo" width={75} height={75} />
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="border h-6 mr-4 inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:bg-[#815585]"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => toggleMenu(!menu)}
          >
            <span className="sr-only">Open main menu</span>
            Meny
            <svg
              className="w-6 h-6 ml-2"
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

        <ul
          className={
            menu
              ? "-mb-4 md:mb-0 md:flex flex-col mt-4 border-t border-royal-yellow bg-[#815585] md:bg-transparent md:border-none md:mt-0 md:flex-row md:justify-center md:space-x-8 md:items-center font-extrabold"
              : "hidden md:flex flex-col mt-4 border-y border-royal-yellow bg-[#815585] md:bg-transparent md:border-none md:mt-0 md:flex-row md:justify-center md:space-x-8 md:items-center font-extrabold"
          }
        >
          <li className="border-b border-royal-yellow md:p-0 md:border-none">
            <Link href="/" className="text-royal-yellow block p-4" onClick={() => toggleMenu(false)}>
              Hem
            </Link>
          </li>
          <li
            className={
              path == "/festivalen"
                ? "bg-royal-yellow md:p-0 md:bg-transparent md:border-none"
                : "border-b border-royal-yellow md:p-0 md:border-none"
            }
          >
            <Link
              href="/festivalen"
              className={
                path == "/festivalen"
                  ? "block p-4 text-royal-red md:text-royal-yellow md:underline md:underline-offset-4"
                  : "block p-4 text-royal-yellow"
              }
              onClick={() => toggleMenu(false)}
            >
              Om Festivalen
            </Link>
          </li>
          <li
            className={
              path == "/balkester"
                ? "bg-royal-yellow md:p-0 md:bg-transparent md:border-none"
                : "border-b border-royal-yellow md:p-0 md:border-none"
            }
          >
            <Link
              href="/balkester"
              className={
                path == "/balkester"
                  ? "block p-4 text-royal-red md:text-royal-yellow md:underline md:underline-offset-4"
                  : "block p-4 text-royal-yellow"
              }
              onClick={() => toggleMenu(false)}
            >
              Balkester
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </Link>
          </li>
          <li
            className={
              path == "/fragor-svar"
                ? "bg-royal-yellow md:p-0 md:bg-transparent md:border-none"
                : "border-b border-royal-yellow md:p-0 md:border-none"
            }
          >
            <Link
              href="/fragor-svar"
              className={
                path == "/fragor-svar"
                  ? "block p-4 text-royal-red md:text-royal-yellow md:underline md:underline-offset-4"
                  : "block p-4 text-royal-yellow"
              }
              onClick={() => toggleMenu(false)}
            >
              Frågor & Svar
            </Link>
          </li>
          <li
            className={
              path == "/jobba"
                ? "bg-royal-yellow md:p-0 md:bg-transparent md:border-none"
                : "border-b border-royal-yellow md:p-0 md:border-none"
            }
          >
            <Link
              href="/jobba"
              className={
                path == "/jobba"
                  ? "block p-4 text-royal-red md:text-royal-yellow md:underline md:underline-offset-4"
                  : "block p-4 text-royal-yellow"
              }
              onClick={() => toggleMenu(false)}
            >
              Jobba
            </Link>
          </li>
          <li
            className={
              path == "/kontakta-oss"
                ? "bg-royal-yellow md:p-0 md:bg-transparent md:border-none"
                : "border-b border-royal-yellow md:p-0 md:border-none"
            }
          >
            <Link
              href="/kontakta-oss"
              className={
                path == "/kontakta-oss"
                  ? "block p-4 text-royal-red md:text-royal-yellow md:underline md:underline-offset-4"
                  : "block p-4 text-royal-yellow"
              }
              onClick={() => toggleMenu(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
