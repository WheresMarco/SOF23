import { Lora } from "@next/font/google";
import { Person } from "../components/person";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function KontaktaOss() {
  return (
    <div className="px-2 md:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm mt-4 md:mt-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Kontakta oss
        </h2>
        <div className="px-4 py-2">
          <p>
            Du är alltid välkommen att kontakta oss om du har några frågor
            angående festivalen.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-8 container mx-auto">
        <Person image="/kommitte/gustav.jpg" name="Gustav Wenemark" title="SOF-General" email="general@sof23.se" />
        <Person image="/kommitte/antonio.jpg" name="Antonio Fernandez" title="Ekonomi" email="ekonomi@sof23.se" />
        <Person image="/kommitte/marco.jpg" name="Marco Hyyryläinen" title="PR-Biljett" email="pr-biljett@sof23.se" />
        <Person image="/kommitte/august.jpg" name="August Goldhahn" title="Sponsorer" email="spons@sof23.se" />
        <Person image="/kommitte/no.jpg" name="Molly Hilding Södergren" title="Personal" email="personal@sof23.se" />
        <Person image="/kommitte/bjorn.jpg" name="Björn Lagerström" title="Personal" email="personal@sof23.se" />
        <Person image="/kommitte/martin.jpg" name="Martin Nilsson" title="Område" email="omrade@sof23.se" />
        <Person image="/kommitte/00.jpg" name="Hugo Asplund" title="Scen" email="scen@sof23.se" />
        <Person image="/kommitte/anton.jpg" name="Anton Eldeborg Lundin" title="Mat" email="mat@sof23.se" />
        <Person image="/kommitte/hugo.jpg" name="Hugo Winbladh" title="Servering" email="servering@sof23.se" />
        <Person image="/kommitte/kasper.jpg" name="Kasper Johasson " title="Städ" email="stad@sof23.se" />
        <Person image="/kommitte/no.jpg" name="Linnea " title="Balkester" email="balkester@sof23.se" />
        <Person image="/kommitte/no.jpg" name="Hanna Begander" title="Balkester" email="balkester@sof23.se" />
        <Person image="/kommitte/oscar.jpg" name="Oscar" title="Sociala Medier" email="webmaster@sof23.se" />
        <Person image="/kommitte/ulrika.jpg" name="Ulrika Jadå" title="Merchandise" email="merch@sof23.se" />
        <Person image="/kommitte/christina.jpg" name="Christina Erlander Klein" title="Merchandise & Design" email="design@sof23.se" />
      </div>
    </div>
  );
}
