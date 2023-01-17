import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-wallpaper text-royal-yellow py-8 text-sm">
      <div className="container mx-auto">
        {/* <div className="flex items-center justify-center">
          <Image
            src="/ornament_gul.png"
            alt="Ornament"
            width={75}
            height={75}
            className="rotate-90"
          />
          <h2 className="text-xl mx-8 font-bold">Sponsorer</h2>
          <Image
            src="/ornament_gul.png"
            alt="Ornament"
            width={75}
            height={75}
            className="rotate-90"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-400 h-32"></div>
          <div className="bg-gray-400 h-32"></div>
          <div className="bg-gray-400 h-32"></div>
          <div className="bg-gray-400 h-32"></div>
        </div> */}

        <p className="text-center">Studentorkesterfestivalen 2023 (SOF23) arrangeras av <Link href="https://rikssmask.se" target="blank">Riks-SMASK</Link>.<br /><Link href="/integritetspolicy">Integritetspolicy</Link> - <Link href="/kontakta-oss">Kontakta oss</Link>.</p>
      </div>
    </footer>
  );
}
