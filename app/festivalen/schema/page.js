import { Lora } from "@next/font/google";

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
          Festivalschema
        </h2>
        <div className="px-4 py-2">
          <p>
            Schemat för SOF23 kommer att publiceras här så snart det är klart! Håll till godo!
          </p>

          <p className="italic">Senast uppdaterad 13 april.</p>
        </div>
      </div>
    </div>
  );
}
