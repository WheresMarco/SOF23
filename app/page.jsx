import { Lora } from "@next/font/google";
import Image from "next/image";

import Feed from "./feed/page";

import Link from "next/link";
import { Suspense } from "react";

import Loading from "./feed/loading";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Home() {
  return (
    <>
      <section className="bg-wallpaper text-royal-yellow shadow-md pb-12">
        <div className="flex container mx-auto justify-center align-middle">
          <Image
            src="/ornament_gul.png"
            alt="Ornament"
            width={300}
            height={300}
          />
          <div className="text-center w-1/2 pt-24 pb-32">
            <h1 className={`${lora.className} text-9xl mb-8 font-semibold`}>
              Tagga SOF!
            </h1>
            <p className=" w-2/3 m-auto mb-2">
              <strong>18 till 21 maj</strong> är det dags för nästa upplaga av
              Sveriges största Studentorkesterfestival (SOF) - som dessutom
              firar 50 år
              <br /> 20 januari öppnar vi Balkesteranmälan, och den 1 maj släpps
              biljetterna.
            </p>

            <p>
              <Link className="btn btn-yellow mr-2" href="/balkester">
                Balkesteranmälan
              </Link>

              <Link className="btn btn-yellow" href="/kontakta-oss">
                Kontakta oss
              </Link>
            </p>
          </div>
          <Image
            src="/ornament_gul_rev.png"
            alt="Ornament"
            width={300}
            height={300}
          />
        </div>
      </section>

      <section className="container mx-auto grid grid-cols-2 space-x-8 py-12">
        <div>
          <div className="shadow-md bg-white rounded-sm mb-4">
            <h2
              className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold`}
            >
              Senaste nytt
            </h2>

            <Suspense fallback={<Loading />} className="px-2 py-2">
              <Feed />
            </Suspense>
          </div>

          <div className="shadow-md bg-white rounded-sm">
            <h2
              className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold`}
            >
              Sociala Medier
            </h2>
            <div className="px-2 py-2">
              <Link
                className="btn btn-purple mr-2"
                href="https://www.facebook.com/Studentorkesterfestivalen"
                target="blank"
              >
                Följ oss på Facebook
              </Link>
              <Link
                className="btn btn-purple"
                href="https://www.instagram.com/studentorkesterfestivalen/"
                target="blank"
              >
                Följ oss på Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="shadow-md bg-white rounded-sm">
          <h2
            className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold`}
          >
            Vad är SOF?
          </h2>
          <div className="px-4 py-2">
            <p>
              Både SOF och STORK står för “Studentorkesterfestivalen” och är det
              som äger rum i maj varje år och som alla studentorkestrar- och
              baletter längtar efter. Ojämna år hålls den i Linköping under
              namnet SOF, och jämna år i Uppsala men kallas då STORK. Under
              dagarna tre (eller möjligen fyra) spelar, dansar, festar, kårtegar
              och hänger vi med varandra.
            </p>
            <p>
              I år kommer festivalen att pågå mellan torsdagen den 18:e maj till
              och med söndagen 21:a maj. Vi kommer att vara på plats i Kårallen
              i Linköping, med lite utstick på stan för stadspelningar.
            </p>

            <p>
              <Link className="btn btn-purple" href="/fragor-svar">
                Några frågor?
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-8 shadow-md bg-white rounded-sm">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-4`}
        >
          Tidigare SOF
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <Image
            src="/history/1.jpg"
            width={640}
            height={640}
            alt="Bild från tidigare SOF"
            className="w-full rounded-sm"
          />
          <Image
            src="/history/2.jpg"
            width={640}
            height={640}
            alt="Bild från tidigare SOF"
            className="w-full rounded-sm"
          />
          <Image
            src="/history/3.jpg"
            width={640}
            height={640}
            alt="Bild från tidigare SOF"
            className="w-full rounded-sm"
          />
          <Image
            src="/history/4.jpg"
            width={640}
            height={640}
            alt="Bild från tidigare SOF"
            className="w-full rounded-sm"
          />
        </div>
        <p className="text-sm text-gray-600 px-4 py-2">
          Fotograf: Fredrik Söderquist
        </p>
      </section>
    </>
  );
}
