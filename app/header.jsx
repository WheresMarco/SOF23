import Link from "next/link";
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-royal-purple border-b-4 border-black">
      <nav className="container mx-auto">
        <ul className="list-none">
          <li>
            <Link href="/" className="text-royal-yellow">
              Hem
            </Link>
          </li>
          <li>
            <Link href="/" className="text-royal-yellow">
              Festivalen
            </Link>
          </li>
          <li>
            <Link href="/" className="text-royal-yellow">
              Balkester
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </Link>
          </li>
          <li>
            <Link href="/" className="text-royal-yellow">
              Frågor & Svar
            </Link>
          </li>
          <li>
            <Link href="/" className="text-royal-yellow">
              Jobba
            </Link>
          </li>
          <li>
            <Link href="/" className="text-royal-yellow">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
