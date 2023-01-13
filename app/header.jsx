"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

export default function Header() {
  let path = usePathname();

  return (
    <header className="bg-wallpaper py-4">
      <nav className="container mx-auto">
        <div className="flex justify-center md:hidden mb-4">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </Link>
        </div>

        <ul className="flex justify-center space-x-8 items-center font-extrabold">
          <li>
            <Link href="/" className="text-royal-yellow">
              Hem
            </Link>
          </li>
          <li>
            <Link
              href="/festivalen"
              className={
                path == "/festivalen"
                  ? "text-royal-yellow underline underline-offset-4"
                  : "text-royal-yellow"
              }
            >
              Om Festivalen
            </Link>
          </li>
          <li>
            <Link
              href="/balkester"
              className={
                path == "/balkester"
                  ? "text-royal-yellow underline underline-offset-4"
                  : "text-royal-yellow"
              }
            >
              Balkester
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </Link>
          </li>
          <li>
            <Link
              href="/fragor-svar"
              className={
                path == "/fragor-svar"
                  ? "text-royal-yellow underline underline-offset-4"
                  : "text-royal-yellow"
              }
            >
              Frågor & Svar
            </Link>
          </li>
          <li>
            <Link
              href="/jobba"
              className={
                path == "/jobba"
                  ? "text-royal-yellow underline underline-offset-4"
                  : "text-royal-yellow"
              }
            >
              Jobba
            </Link>
          </li>
          <li>
            <Link
              href="/kontakta-oss"
              className={
                path == "/kontakta-oss"
                  ? "text-royal-yellow underline underline-offset-4"
                  : "text-royal-yellow"
              }
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
