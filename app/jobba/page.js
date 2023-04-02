import { Lora } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Jobba() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Jobba på SOF
        </h2>
        <div className="px-4 py-2">
          <Image
            src="/history/2.jpg"
            width={300}
            height={300}
            alt="Bild från tidigare SOF"
            className="hidden md:block rounded-sm float-right pl-4 pb-4"
          />

          <p>
            Studentorkesterfestivalen (SOF), en tredagarsfestival fylld med
            musik, dans och skoj väntar runt hörnet. 18-21 maj är det äntligen
            dags!
          </p>

          <p>
            Men utan jobbare så blir det inget SOF. Från den 17:e april kommer
            anmälan att vara öppen. Anmälan kommer att publiceras både här på
            hemsidan men också i våra sociala medier.
          </p>

          <p>
            Som jobbare får du finfina förmåner, bland annat en storslagen
            tackfest, rabatterade priser på biljett(er) men också en fantastisk
            upplevelse! Mer information kommer, men har du frågor kan du
            maila <a href="mailto:personal@sof23.se">personal@sof23.se</a>
          </p>

          <p>Sök jobbare, så ses vi på SOF!</p>

          <br className="clear-both" />

          <Link
            className="btn btn-purple mr-2 mb-2 md:mb-0"
            href="https://www.facebook.com/Studentorkesterfestivalen"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline mr-1 relative -top-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            Följ oss på Facebook
          </Link>
          <Link
            className="btn btn-purple"
            href="https://www.instagram.com/studentorkesterfestivalen/"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline mr-1 relative -top-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            Följ oss på Instagram
          </Link>

          <p className="italic">Senast uppdaterad 2 april.</p>

          <br className="clear-both" />
        </div>
      </div>
    </div>
  );
}
