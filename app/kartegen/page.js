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
            material kan man behöva införskaffa på egen hand.
          </p>

          <p className="italic">Senast uppdaterad 16 maj.</p>
          <br /><br />
        </div>
      </div>
    </div>
  );
}
