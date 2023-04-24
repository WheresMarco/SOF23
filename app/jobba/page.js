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
            Men utan jobbare så blir det inget SOF. Från och med nu så går det
            bra att anmäla sig för att jobba. Det är först till kvarn som gäller
            och följande förmåner gäller:
            <br />
            1 pass - Funkiströja (t-shirt för jobbare)
            <br />
            2 pass - Funkiströja och förköp
            <br />
            3 pass - Funkiströja, förköp och 100:- rabatt på helhelgsbiljett
            <br />4 pass - Funkiströja och en gratis helhelgsbiljett
          </p>

          <p>
            Alla pass är 4 timmar långa och alla pass mellan 00 och 08 räknas
            dubbelt. Detta gör att om du anmäler dig som festjobbare
            (20:00-04:00) så räknas det som 3 pass, och du behöver bara gör ett
            pass till för att få en gratis helhelgsbiljett.
          </p>

          <p>
            Formulär för att anmäla sig:
            <br />
            <a href="https://forms.gle/7JGCwTAjgw5fcDy68" target="_blank" rel="noreferrer">https://forms.gle/7JGCwTAjgw5fcDy68</a> (svenskt formulär)
            <br />
            <a href="https://forms.gle/DT3dwqZcN3wNJ7DE7" target="_blank" rel="noreferrer">https://forms.gle/DT3dwqZcN3wNJ7DE7</a> (engelskt formulär)
          </p>

          <p>Har du frågor kan du maila <a href="mailto:personal@sof23.se">personal@sof23.se</a></p>

          <p>Sök jobbare, så ses vi på SOF!</p>

          <p className="italic">Senast uppdaterad 24 april.</p>

          <br className="clear-both" />
        </div>
      </div>
    </div>
  );
}
