import { Lora } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Festivalen() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container md:mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Om Kårtegen
        </h2>
        <div className="px-4 py-2">
          <Image
            src="/history/kartegen.jpeg"
            width={300}
            height={300}
            alt="Bild på Kårtegen"
            className="hidden md:block rounded-sm float-right pl-4 pb-4"
          />

          <p>
            Kårtegen är en av SOFs största händelser och består av studentbyggda
            fordon, studentbalkestrar, och andra fantastiska projekt. Den går
            genom Linköpings centrum och brukar alltid leda till stor
            uppslutning bland studenter och allmänheten.
          </p>

          <p>
            De byggda fordona brukar bestå av lastbilar, släp, eller egenbyggda
            fordon som byggs gemensamt på ett byggområde i Linköping. Varje år
            är det ett tema, och i år är temat "Kungligt".
          </p>

          <p>
            Även om man inte är med i en Balkester så kan man delta i Kårtegen.
          </p>

          <p>
            Byggnadsmatrial som kommer att finnas på plats, men mer specefikt
            material kan man behöva införskaffa på egen hand. Bestäm ett projekt
            tillsammans med ditt gäng, intresseanmäl, och så kommer mer info
            sedan.
          </p>

          <Link
            className="btn btn-purple mr-2 mb-2 md:mb-0"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWakiXstuwX0eQZGHKTWo4crOe85wP1tbzDmvZ9nWkU0IOfw/viewform"
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
            Lämna intresseanmälan
          </Link>

          <p className="italic">Senast uppdaterad 13 april.</p>
        </div>
      </div>
    </div>
  );
}
