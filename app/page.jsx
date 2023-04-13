import { Lora } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Home() {
  return (
    <>
      <section className="bg-wallpaper text-royal-yellow shadow-md md:pb-12">
        <div className="flex container mx-auto justify-center align-middle">
          <Image
            src="/ornament_gul.png"
            alt="Ornament"
            width={300}
            height={300}
            className="hidden 2xl:block"
          />
          <div className="text-center 2xl:w-1/2 pb-8 pt-4 md:py-24 2xl:pb-32">
            <h1
              className={`${lora.className} text-6xl 2xl:text-9xl mb-4 md:mb-8 font-semibold`}
            >
              Tagga SOF!
            </h1>
            <p className="px-4 md:w-2/3 m-auto mb-2">
              <strong>18 till 21 maj</strong> är det dags för nästa upplaga av
              Sveriges största Studentorkesterfestival (SOF) - som dessutom
              firar 50 år! 20:e januari öppnar vi Balkesteranmälan, och den 1:a
              maj släpps biljetterna till allmänheten.
            </p>

            <p>
              <Link className="btn btn-yellow mr-2" href="/balkester">
                Balkesterinfo
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
            className="hidden 2xl:block"
          />
        </div>
      </section>

      <div className="px-2 md:px-0">
        <section className="md:container md:mx-auto md:grid md:grid-cols-2 md:space-x-8 py-4 md:py-12">
          <div>
            <div className="shadow-md bg-white rounded-sm mb-4">
              <h2
                className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold flex justify-between items-center`}
              >
                <span>Senaste nytt</span>
                <small className="text-xl opacity-80">27 mars kl. 23:09</small>
              </h2>

              <div className="p-4">
                <Image
                  src="/fb.jpeg"
                  width={45}
                  height={45}
                  alt="Kungputten"
                  className="rounded-full float-right"
                />
                <p>
                  Nu kan vi stolt presentera - intresseanmälan till Kårtegen! 🥳
                  Varmt välkommen att anmäla ditt bidrag! För att delta behöver
                  man köpa en helhelgsbiljett för torsdag till söndag (500:-),
                  men ni får såklart förköp 🙏 Vi är superpeppa att få höra om
                  era bidrag! Deadline för anmälan är 5/4 👏 Vi hörs!!
                </p>
                <p>
                  OBS! Denna anmälan är ej relevant för studentbalkesterar 😊
                </p>
                <p>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfWakiXstuwX0eQZGHKTWo4crOe85wP1tbzDmvZ9nWkU0IOfw/viewform"
                    target="blank"
                  >
                    Länk till anmälan
                  </Link>
                </p>
                <p>---</p>
                <p>
                  Now we can proudly present - the interest form for the
                  Cortège! 🥳 You're more than welcome to register your
                  contribution! In order to participate, one needs to purchase a
                  full-weekend ticket for Thursday to Sunday (500 SEK), but you
                  will of course get to buy the tickets before public release 🙏
                  We are so hyped to get to hear about your contributions!
                  Deadline for the registration is the 5th of April 👏 Take
                  care!!
                </p>
                <p>
                  NB! This registration is not relevant for student balchestras{" "}
                </p>
                <p>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfWakiXstuwX0eQZGHKTWo4crOe85wP1tbzDmvZ9nWkU0IOfw/viewform"
                    target="blank"
                  >
                    Registration
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://www.facebook.com/events/539499114779663?post_id=578209844241923&view=permalink"
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
                    Se inlägget på Facebook
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="shadow-md bg-white rounded-sm">
              <h2
                className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold`}
              >
                Vad är SOF?
              </h2>
              <div className="px-4 py-2">
                <p>
                  Både SOF och STORK står för “Studentorkesterfestivalen” och är
                  det som äger rum i maj varje år och som alla studentorkestrar-
                  och baletter längtar efter. Ojämna år hålls den i Linköping
                  under namnet SOF, och jämna år i Uppsala men kallas då STORK.
                  Under dagarna tre (eller möjligen fyra) spelar, dansar,
                  festar, kårtegar och hänger vi med varandra.
                </p>
                <p>
                  I år kommer festivalen att pågå mellan torsdagen den 18:e maj
                  till och med söndagen 21:a maj. Vi kommer att vara på plats i
                  Kårallen i Linköping, med lite utstick på stan för
                  stadspelningar.
                </p>

                <p>
                  <Link className="btn btn-purple" href="/fragor-svar">
                    Några frågor?
                  </Link>
                </p>
              </div>
            </div>

            <div className="shadow-md bg-white rounded-sm mt-4">
              <h2
                className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold`}
              >
                Sociala Medier
              </h2>
              <div className="px-2 py-2">
                <Link
                  className="btn btn-purple mr-2 mb-2 md:mb-0"
                  href="https://www.facebook.com/Studentorkesterfestivalen"
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
                  Följ oss på Facebook
                </Link>
                <Link
                  className="btn btn-purple"
                  href="https://www.instagram.com/studentorkesterfestivalen/"
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
                  Följ oss på Instagram
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="md:container mb-8 shadow-md bg-white rounded-sm md:mx-auto">
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
      </div>
    </>
  );
}
