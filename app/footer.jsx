import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-wallpaper text-royal-yellow py-8 px-4 text-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
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
            className="rotate-90 -scale-y-100"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-black rounded-md h-32 flex justify-center">
            <Image
              src="/sponsor/linkoping.png"
              alt="Linköpings Kommun"
              width={460}
              height={200}
            />
          </div>
          <div className="bg-black rounded-md h-32 flex justify-center">
            <Image
              src="/sponsor/studieframjandet.png"
              alt="Studieförbundet"
              width={200}
              height={200}
            />
          </div>
        </div>

        <p className="text-center -mt-4">
          Studentorkesterfestivalen 2023 (SOF23) arrangeras av{" "}
          <Link href="https://rikssmask.se" target="blank">
            Riks-SMASK
          </Link>
          .<br />
          <Link href="/integritetspolicy">Integritetspolicy</Link> -{" "}
          <Link href="/kontakta-oss">Kontakta oss</Link>.
        </p>
      </div>
    </footer>
  );
}
