import { Lora } from "@next/font/google";
import { Person } from "../components/person";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function KontaktaOss() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm mt-4 md:mt-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Kontakta oss
        </h2>
        <div className="px-4 py-2">
          <p>
            Du är alltid välkommen att kontakta oss i kommitéen om du har några
            frågor angående studentorkesterfestivalen. För generella frågor går
            det bra att kontakta SOF-Generalen. Har din balkester frågor inför
            festivalen, ta i första hand kontakt med våra balkesteransvariga på
            balkester@sof23.se.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-8 container mx-auto">
        <Person
          image="/kommitte/gustav.webp"
          name="Gustav Wenemark"
          title="SOF-General"
          email="general@sof23.se"
        />
        <Person
          image="/kommitte/antonio.webp"
          name="Antonio Fernandez"
          title="Ekonomi"
          email="ekonomi@sof23.se"
        />
        <Person
          image="/kommitte/marco.webp"
          name="Marco Hyyryläinen"
          title="PR-Biljett"
          email="pr-biljett@sof23.se"
        />
        <Person
          image="/kommitte/august.webp"
          name="August Goldhahn"
          title="Sponsorer"
          email="spons@sof23.se"
        />
        <Person
          image="/kommitte/no.jpg"
          name="John Sköldestig"
          title="Kortegeansvarig"
          email="kortege@sof23.se"
        />
        <Person
          image="/kommitte/no.jpg"
          name="Molly Hilding Södergren"
          title="Personal"
          email="personal@sof23.se"
        />
        <Person
          image="/kommitte/bjorn.webp"
          name="Björn Lagerström"
          title="Personal"
          email="personal@sof23.se"
        />
        <Person
          image="/kommitte/martin.webp"
          name="Martin Nilsson"
          title="Område"
          email="omrade@sof23.se"
        />
        <Person
          image="/kommitte/00.jpg"
          name="Hugo Asplund"
          title="Scen"
          email="scen@sof23.se"
        />
        <Person
          image="/kommitte/anton.webp"
          name="Anton Eldeborg Lundin"
          title="Mat"
          email="mat@sof23.se"
        />
        <Person
          image="/kommitte/hugo.webp"
          name="Hugo Winbladh"
          title="Servering"
          email="servering@sof23.se"
        />
        <Person
          image="/kommitte/no.jpg"
          name="Rasmus Wildt-Persson"
          title="Sov"
          email="sov@sof23.se"
        />
        <Person
          image="/kommitte/kasper.webp"
          name="Kasper Johasson "
          title="Städ"
          email="stad@sof23.se"
        />
        <Person
          image="/kommitte/no.jpg"
          name="Linnea Östberg"
          title="Balkester"
          email="balkester@sof23.se"
        />
        <Person
          image="/kommitte/no.jpg"
          name="Hanna Begander"
          title="Balkester"
          email="balkester@sof23.se"
        />
        <Person
          image="/kommitte/oscar.webp"
          name="Oscar Dwyer"
          title="Sociala Medier"
          email="webmaster@sof23.se"
        />
        <Person
          image="/kommitte/ulrika.webp"
          name="Ulrika Jadå"
          title="Merchandise"
          email="merch@sof23.se"
        />
        <Person
          image="/kommitte/christina.webp"
          name="Christina Erlander Klein"
          title="Merchandise & Design"
          email="design@sof23.se"
        />
      </div>
    </div>
  );
}
