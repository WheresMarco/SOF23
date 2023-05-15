import { Lora } from "@next/font/google";
import Link from "next/link";
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
          Festivalschema
        </h2>
        <div className="px-4 py-2">
          <p>
            Nedan hittar ni den senaste versionen av festivalens spelschema. Vi förväntar oss inga större ändringar även om det eventuellt kan ske mindre justeringar ända fram till festivalen.
          </p>

          <p>
            <Link
                className="btn btn-purple mr-2 mb-2 md:mb-0"
                href="/Spelschema_ver2.pdf"
                target="blank"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline mr-1 relative -top-0.5"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Spelschema för scenerna på Kårallen
            </Link>

            <Link
                className="btn btn-purple mr-2 mb-2 md:mb-0"
                href="/lordag.pdf"
                target="blank"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline mr-1 relative -top-0.5"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Spelschema för stadsspelningarna på Lördagen
            </Link>

            <Link
                className="btn btn-purple mr-2 mb-2 md:mb-0"
                href="/sondag.pdf"
                target="blank"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline mr-1 relative -top-0.5"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Spelschema för Familjespelningen på Söndagen
            </Link>
          </p>


          <p className="italic">Senast uppdaterad 15 maj.</p>
        </div>
      </div>
    </div>
  );
}
