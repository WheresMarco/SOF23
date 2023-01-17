import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Integritetspolicy() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Integritetspolicy
        </h2>
        <div className="px-4 py-2">
          <h3 className={`${lora.className} text-xl font-semibold`}>
            1. Insamling av information
          </h3>
          <p>
            Vi samlar in och sparar information från din dator och webbläsare,
            inklusive din IP-adress, uppgifter om programvara och hårdvara och
            den begärda sidan.
          </p>

          <p>
            På webbplats hanteras följande personuppgifter: Namn och
            e-postadress
          </p>

          <p>
            Om du kontaktar oss behöver du ange kontaktuppgifter för att kunna
            få svar tillbaka. Dessa används inte på något annat sätt än för
            detta ändamål IP-adress, uppgifter om programvara och hårdvara och
            den begärda sidan.
          </p>

          <p>
            För att kunna förbättra vår webbplats samlas webbläsarinformation in
            tillsammans med verktyget Vercel Analytics. Dessa uppgifter
            anonymiseras till den grad det går och används inte till några andra
            syften.
          </p>

          <p>
            IP-adressen sparas även i serverloggar för felsökningssyften. Det
            kopplas inte ihop med några andra uppgifter som kan identifiera dig.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            2. Användning av information
          </h3>
          <p>
            Den information vi samlar in från dig kan användas för att:
            Förbättra vår webbplats. Kontaktformulär.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            3. Utlämnande till tredje part
          </h3>
          <p>
            Uppgifterna kommer inte att överföras till tredje part annat än i
            syfte att understödja föreningens kärnverksamhet. Innan uppgifter
            överförs till tredje part kommer du som kund behöva samtycka till
            detta, och uppgifterna delas aldrig utanför EU. Dina personuppgifter
            kommer heller inte att utsättas för automatiserat beslutsfattande.
          </p>

          <p>
            Om föreningen vid något enstaka tillfälle absolut måste dela dina
            personuppgifter med tredje part utan ditt explicita samtycke kommer
            du att informeras särskilt om detta. Google Analytics
          </p>

          <p>
            För att kunna förbättra vår webbplats samlas webbläsarinformation in
            tillsammans med verktyget Google Analytics. Dessa uppgifter
            anonymiseras till den grad det går och används inte till några andra
            syften. Använder vi oss av cookies?
          </p>

          <p>
            Ja, för att webbplatsen ska fungera krävs det att kakor lagras i
            webbläsaren.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            4. Rätt att begära och radera information
          </h3>
          <p>
            Vill du veta om hur vi behandlar personuppgifter om dig alternativt
            radera/exportera data kan du kontakta oss via kontaktformuläret på
            sidan ”Kontakt”. Du har rätt att begära information om
            personuppgifter som behandlas om dig hos oss och att få uppgifter
            rättade.
          </p>

          <h3 className={`${lora.className} text-xl font-semibold`}>
            5. Samtycke
          </h3>
          <p>
            Genom att använda vår webbplats godkänner du vår integritetspolicy.
          </p>
        </div>
      </div>
    </div>
  );
}
