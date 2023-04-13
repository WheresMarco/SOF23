import { Lora } from "@next/font/google";
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
          Om Festivalen
        </h2>
        <div className="px-4 py-2">
          <Image
            src="/history/3.jpg"
            width={300}
            height={300}
            alt="Bild från tidigare SOF"
            className="hidden md:block rounded-sm float-right pl-4 pb-4"
          />
          <p>
            Vi är stolta över att få presentera SOF23 - SOF 50 år! Detta råkar
            sammanfalla med hur länge Sveriges nuvarande kung har regerat, och
            vi har valt ett lite mer kungligt tema för att fira vår favvo-putte.
            Kung-Putten ser fram emot att träffa er alla!{" "}
          </p>

          <p>
            SOF23 kommer att äga rum på kårhuset Kårallen i Linköping, från den
            18:e maj till den 21:a maj. Under den tiden ser vi stort fram emot
            att få dansa, spela, sjunga och festa tillsammans med er! Vi siktar
            också på att hålla stadsspelningar ute i Linköping stad för att
            verkligen göra SOF till den folkfest som vi känner det som! Sovsalen
            planeras som vanligt att utgöras av Campushallen i närheten av
            Kårallen.{" "}
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Historik
          </h3>
          <p>
            Både SOF och STORK står för “Studentorkesterfestivalen” och är det
            som äger rum i maj varje år och som alla studentorkestrar- och
            baletter längtar efter. Ojämna år hålls den i Linköping under namnet
            SOF, och jämna år i Uppsala men kallas då STORK. Under dagarna tre
            (eller möjligen fyra) spelar, dansar, festar, kårtegar och hänger vi
            med varandra. Den som har varit med 10 gånger i rad, eller totalt 25
            gånger, får dessutom en fin utmärkelse! På vår sida festivalhistoria
            kan du läsa mer om forna festivaler.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            SOF vs STORK, vad är skillnaden?
          </h3>
          <p>
            STORK brukar hållas på en eller flera nationer i Uppsala, och är
            mest en inomhusfestival med inslag av torgspelningar. STORK har även
            en kårtege genom staden, där enbart balkestrarna deltar i.
            Festivalen är ganska intern, dvs 99 % av deltagarna är/har varit med
            i en studentorkester/-balett. STORK brukar anordnas av en
            projektgrupp beståendes av studentorkestermusiker/-balettor i
            varierat antal.
          </p>

          <p>
            SOF hålls utomhus i Linköping vid ett festivalområde på
            universitetet och innehåller förutom studentorkestrar/-baletter
            också band, annan underhållning och lite av varje. Till SOF så
            tillhör en kårtege där studenter vid Linköpings universitet tävlar i
            grupper om att bygga temaenliga bidrag att placera uppe på
            lastbilsflak. Kårtegen i Linköping blir en folkfest som oftast drar
            till sig runt 50.000 åskådare för att se på studentbidragen rulla
            fram och balkestrarna marscherar genom staden. Publikmässigt är SOF
            en större festival än STORK och är till för balkestrarna, studenter
            vid Linköping universitet såväl som allmänheten. SOF anordnas i år av {" "}
            <a href="https://rikssmask.se" target="_blank">Riks-SMASK</a> genom en egen projektgrupp på 18 personer.
          </p>

          <p className="italic">Senast uppdaterad 13 april.</p>
        </div>
      </div>
    </div>
  );
}
