import { Lora } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function FragorSvar() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Frågor & Svar
        </h2>
        <div className="px-4 py-2">
          <Image
            src="/history/1.jpg"
            width={300}
            height={300}
            alt="Bild från tidigare SOF"
            className="hidden md:block rounded-sm float-right pl-4 pb-4"
          />
          <h3 className={`${lora.className} text-xl font-semibold`}>
            Vilka datum är SOF?
          </h3>
          <p>
            Studentorkesterfestivalen 2023 äger rum mellan 18:e maj till den
            21:a maj.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Vart är SOF i år?
          </h3>
          <p>
            I år kommer studentorkesterfestivalen att äga rum på kårhuset
            Kårallen i Linköping. Det kommer att mestadelen vara inomhus men med
            ett tilltaget uteområde i anslutning till kårhuset.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            När kan man köpa biljetter?
          </h3>

          <p>
            Biljetterna finnas att köpa digitalt
            via{" "}
            <a
              href="https://billio.app/event/sof"
              target="_blank"
              rel="noreferrer"
            >
              Billio
            </a>.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Hur mycket kostar det att gå på SOF?
          </h3>
          <p>
            I år kommer det att kosta 500 kr för hela helgen. För bara Fredag
            till Lördag kostar det 450 kr. En dagsbiljett kommer att kosta 200
            kr, förutom för torsdagen då en dagsbiljett kostar 150 kr och på lördagen då den kostar 250 kr.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            När kommer schema för SOF?
          </h3>
          <p>
            Spelschemat är nu publicerat på hemsidan under fliken <a href="/festivalen/schema">Festivalen -{'>'} Spelschema</a>.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Vad är öppettiderna?
          </h3>
          <p>
            På torsdagen öppnar området 21:00. På fredagen och lördagen öppnar området 18:00. Området stänger 03:00 varje dag.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Vilka är välkommna?
          </h3>
          <p>
            Alla är välkommna att komma på SOF och ha kul med oss. Biljetter köper du på <a href="https://billio.app/event/sof" target="_blank" rel="noreferrer">Billio</a>.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Vad är klädkoden?
          </h3>
          <p>
            Kom som du är! Om du är en balkesterdeltagare så passar balkesteruniform utmärkt, eller overall om du har det. Annars är det fritt fram att klä sig som du vill.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Blir det någon familjespelning?
          </h3>
          <p>
            Ja, det kommer bli en familjespelning i Trädgårdsföreningen på söndagen mellan 11:00 och 15:00. Spelschema hittar du under fliken <a href="/festivalen/schema">Schema</a>.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Blir det någon kårtege?
          </h3>
          <p>
            Det blir en Kårtege! Mer information hittar du under fliken  <a href="/kartegen">Kårtege</a>.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Kommer det bli stadsspelningar?
          </h3>
          <p>
            Yes! Det kommer att bli stadsspelningar på lördagen. Spelschema hittar du under fliken <a href="/festivalen/schema">Schema</a>.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Vad är det för skillnad på SOF i år?
          </h3>
          <p>
            I år arrangeras Studentorkesterfestivalen av Riks-SMASK istället för
            LinTek som det varit tidigare år. Därför är det i en lite mindre
            variant än tidigare år och med mer fokus på studentorkestermusik.
            Men annars kommer det vara samma gamla SOF som du känner till!{" "}
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Kommer det finnas möjlighet till boende?
          </h3>
          <p>
            Det kommer att finnas en sovsal som Balkesterdeltagare kan sova i.
            En plats i denna kostar 50 kr för hela festivalen (torsdag till
            söndag).
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Kommer det finnas frukost på boendet?
          </h3>
          <p>Ja, det ingår i boendepriset.</p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Jag vill jobba på SOF!
          </h3>
          <p>
            Superkul! Vi söker alla typer av jobbare till SOF. Kika in på{" "}
            <Link href="/jobba">Jobba</Link>-sidan så står det lite mer om hur
            man ansöker.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            När ska min balkester dyka upp på torsdagen?
          </h3>
          <p>
            Vi rekommenderar att ni dyker upp under eftermiddagen mellan 14-17
            för att hinna i tid till middagssittningen. Puben är öppen från kl
            15!
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Var kan vi parkera bussen?
          </h3>
          <p>
            För av- och pålastning av instrument och packning finns temporär
            parkering i anslutning till både till festivalområdet och sovsalen.
            Vi jobbar på att hitta bussparkering för bussar som stannar över
            helgen. Vet ni att ni vill parkera er buss hos oss över helgen, säg
            gärna till sovansvarig på sov@sof23.se så att vi vet hur många
            bussar det blir!
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            Jag har fler frågor!
          </h3>
          <p>
            Då går det bra att kontakta någon i SOF-kommittén. Kontaktuppgifter
            till oss hittar du på <Link href="/kontakta-oss">Kontakta oss</Link>
            -sidan.
          </p>

          <p className="italic">Senast uppdaterad 16 maj.</p>
        </div>
      </div>
    </div>
  );
}
