import { Lora } from "@next/font/google";
import Link from "next/link";

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
          Festivalkarta
        </h2>
        <div className="px-4 py-2">
          <p>Karta över Kårallen och scenerna hittar ni nedan.</p>

          <Link
              className="btn btn-purple mr-2 mb-2 md:mb-0"
              href="/bottenplan.pdf?126"
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
            Karta för bottenplan
          </Link>

          <Link
              className="btn btn-purple mr-2 mb-2 md:mb-0"
              href="/markplan.pdf?161"
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
            Karta för markplan
          </Link>

          <Link
              className="btn btn-purple mr-2 mb-2 md:mb-0"
              href="/utomhus.pdf?16"
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
            Karta för utomhus
          </Link>

          <br /><br />

          <p>Nedan hittar ni övergripande karta för festivalen.</p>

          <iframe src="https://www.google.com/maps/d/embed?mid=1rgFJW5y0Y24_Ewzjf39crB6R6VMuwNE&ehbc=2E312F" width="100%" height="600"></iframe>

          <p className="italic">Senast uppdaterad 17 maj.</p>
        </div>
      </div>
    </div>
  );
}
