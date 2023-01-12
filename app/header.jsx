import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-wallpaper py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-8 items-center font-bold">
          <li>
            <Link href="/" className="text-royal-yellow">
              Hem
            </Link>
          </li>
          <li>
            <Link href="/festivalen" className="text-royal-yellow">
              Om Festivalen
            </Link>
          </li>
          <li>
            <Link href="/balkester" className="text-royal-yellow">
              Balkester
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </Link>
          </li>
          <li>
            <Link href="/fragor-svar" className="text-royal-yellow">
              Frågor & Svar
            </Link>
          </li>
          <li>
            <Link href="/jobba" className="text-royal-yellow">
              Jobba
            </Link>
          </li>
          <li>
            <Link href="/kontakta-oss" className="text-royal-yellow">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
