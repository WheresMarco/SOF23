import { Lora } from "@next/font/google";
import { Person } from "../components/person";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function KontaktaOss() {
  return (
    <>
      <div className="container mx-auto shadow-md bg-white rounded-sm mt-8">
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

      <div className="grid grid-cols-4 gap-4 mt-4 mb-8 container mx-auto">
        <Person />
        <Person />
        <Person />
        <Person />

        <Person />
        <Person />
        <Person />
        <Person />

        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    </>
  );
}
