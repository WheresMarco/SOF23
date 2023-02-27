import { Lora } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Balkester() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Balkester
        </h2>
        <div className="px-4 py-2">
          <Image
            src="/history/4.jpg"
            width={300}
            height={300}
            alt="Bild från tidigare SOF"
            className="hidden md:block rounded-sm float-right pl-4 pb-4"
          />
          <p>
            Så roligt att er Balkester vill gå på SOF23! I år kommer festivalen
            att pågå mellan torsdagen den 18:e maj till och med söndagen 21:a
            maj. Det kommer även finnas möjlighet till en familjespelning på
            söndagen om man vill dra sig lite från att lämna härliga Linköping.{" "}
          </p>

          <p>
            Vi kommer att vara på plats i Kårallen i Linköping, med lite utstick
            på stan för stadspelningar om er Balkester vill det. Eventuellt
            kommer det att bli en kårtege i år, anmäl gärna intresse så
            återkommer vi om det blir av.
          </p>

          <p>
            Den 20:e januari kommer två formulär att skickas ut till alla
            Balkesterledare som är med i Riks-SMASK. Ena formuläret är
            deltagaranmälan och denna ska skickas vidare till era medlemmar så
            dom kan anmäla sig för att gå på SOF. Det andra formuläret är för er
            Balkester och den ska fyllas i av Balkesterledaren.
          </p>

          <p>
            Sista datum för att anmäla sig för att ha en garanterad plats som
            Balkester och att kunna beställa merch är 20:e mars. Efter det kan
            man anmäla sig i mån av plats. Viss merch kommer att gå att köpa på
            plats, men vi kommer ha begränsat antal av dom. Dagens tips är att
            köpa många klistermärken!
          </p>

          <p>
            Övrig information kommer att komma ut från er Balkesterledare. Mer
            allmän information kommer att publiceras på den här sidan, Facebook,
            och Instagram.
          </p>

          <p>
            Glasklart? Perfekt! Men vid eventuella frågor hänvisar vi till
            respektive kommitéemedlem. Kontaktuppgifter till dom hittar ni under{" "}
            <Link href="/kontakta-oss">Kontakta oss</Link>.
          </p>

          <p className="italic">Senast uppdaterad 17 januari.</p>
        </div>
      </div>
    </div>
  );
}
