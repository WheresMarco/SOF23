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
          Mat på festivalen
        </h2>
        <div className="px-4 py-2">
          <p>Under festivalområdets öppettider kommer det vara möjligt att köpa mat i foodtrucks på området eller i Gasquen inne på Kårallen, där det kommer att serveras mat från SOF:s eget kök. Under torsdagskvällen äter de flesta på sittningen och det kommer då inte finnas några foodtrucks, men det serveras mat i Gasquen från det att området öppnar kl 20:00, tills det stänger.</p>

          <h3 className={`${lora.className} text-xl font-semibold`}>Sittning: Torsdag kväll</h3>
          <p>Sittningen startar kl 18. Det kommer serveras klarpotatissallad med fetaost och vårens grönsaker, zucciniplättar, serveras med ajvarcreme, samt veganskt och allergi-anpassat alternativ för de som anmält specialkost.</p>

          <p>För de som inte ska gå på sittningen kommer ett område nära festivalområdet att hålla öppet fram till dess att festivalområdet öppnar kl 20. Observera att där inte serveras någon mat. Den som är hungrig får hitta föda på egen hand, t.ex. på någon av platserna som beskrivs ovan.</p>

          <h3 className={`${lora.className} text-xl font-semibold`}>Matbiljetter</h3>
          <p>I år är det inga matbiljetter utan mat köps direkt i foodtrucks eller i baren. Betalning sker med kort i både baren och foodtrucks.</p>

          <h3 className={`${lora.className} text-xl font-semibold`}>Specialkost</h3>
          <p>Om information kring specialkost inte framgår tydligt i foodtrucks, fråga! I baren serveras vegansk mat som kan fås glutenfri och/eller sojafri om så önskas, om osäkerhet fråga även där!</p>

          <p className="italic">Senast uppdaterad 2 maj.</p>
        </div>
      </div>
    </div>
  );
}
